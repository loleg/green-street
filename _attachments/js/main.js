
var resultMap, yearData;

// clean text for use in regexp searches
function regesc(text) {
  if (! arguments.callee.sRE) {
    var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\' ];
    arguments.callee.sRE = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
  }
  return text.replace(arguments.callee.sRE, '\\$1');
};

// grab the next letter, useful for Couch queries
function nextLetter(s) {
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

function showChartData(years) {

  $('#eco-barchart').html('');

  var AVG_MAX = 900;

  // plot years
  for (var y in years) {

    var a = years[y].avg;
    if (a > AVG_MAX) a = AVG_MAX;
    a = Math.floor(a/2) + "px";
    
    $('#eco-barchart').append(
      '<div class="eco-year"><b>' + years[y].year + '</b>'
      + ' - <i>' + years[y].avg.toFixed(1) + ' MJ</i>'
      + '<span style="width:' + a + '"><div class="eco-bar">&nbsp;</div></span>' 
      + '</div>');
  }

}

function showHouseData(range3, year) {

  $('#eco-houses').html('');
  $('#eco-house-year').html(year);

  range3 = range3.slice(0, 3);

  // get total
  var t = 0;
  for (var r in range3) {
    t += range3[r];
  }

  // adjust values for too many houses
  var tMAX = 16;
  if (t > tMAX) {
    for (var r in range3) {
      range3[r] = Math.floor(tMAX * range3[r] / t);
    }
  }

  // show each range
  for (var r in range3) {
    var c = 
      (r == 2) ? "red" :
      (r == 0) ? "green" : "yellow";
    for (var i = 0; i < range3[r]; i++) {
      $('#eco-houses').append('<span class="eco-' + c + '">' + c + '</span>');
    }
  }

  // write a little text
  var s = (t == 1) ? '' : 's';
  $('#eco-house-text').html(
    '<p>Nous connaissons ' + t + ' maison' + s + ' sur cette rue. ' +
    '<i>We know about ' + t + ' house' + s + ' on this street.</i></p>');

}


/* trigger when page is ready */
$(document).ready(function () {

  var EXAMPLE_SEARCH = 'Avenue de ...';
  $('.panel').hide();

  // setup search input
  $('input[name=street]')
  .attr('value', EXAMPLE_SEARCH).css({color:'#AAA',fontStyle:'italic'})
  .focus(function() {
    if ($(this).attr('value') == EXAMPLE_SEARCH) {
      $(this).attr('value', '').css({color:'#333',fontStyle:'normal'});
    }
  })
  .keyup(function(event) {

    var query = regesc($(this).attr('value'));
    if (query.length < 3) return;

    // create couch query
    var url = "_view/streets?group=true";
    url += "&limit=5";
    url += "&startkey=%22" + query + "%22";
//    url += "&endkey=%22" + query + nextLetter(query) + "%22";

    $.getJSON(url, null, function(data) {
  
      // update street list
      $('#street-results').empty();
      for (var r in data.rows) {
        $('#street-results').append("<li>" + data.rows[r].key + "</li>");
      }

      // create selector for street results
      $('#street-results li').click(function() {

        var street = regesc($(this).text());
        $('input[name=street]').attr('value', street);

        // create couch query for years
        var url = "_view/street-years?";
        url += "&startkey=%22" + street + "%22";
        url += "&endkey=%22" + street + "%22";

        $.getJSON(url, null, function(data) {
  
          $('#street-results').empty();

          var years = [];
          for (var r in data.rows) {
            var y = data.rows[r].value;
            if (years.indexOf(y) == -1) {
              years.push(y);
            }
          }

          if (years.length > 0) {
            years = years.sort();
            
            var firstYear = years[0];
            var lastYear = years[years.length-1];
          
            // create couch query for results
            var url = "_view/yearly-average?group=true";
            url += "&startkey=" + "[%22" + street + "%22," + firstYear + "]";
            url += "&endkey=" + "[%22" + street + "%22," + lastYear + "]";

            $.getJSON(url, null, function(data) {

              var year_avg = []; 
              var top_year = {};
              for (var r in data.rows) {
                var k = data.rows[r].key;
                var v = data.rows[r].value;
                year_avg.push({ year:k[1], avg:v[3] });
                if (k[1] == lastYear) top_year = data.rows[r].value;
                //debug: $('#street-results').append('<li>' + k + ' - ' + v + '</li>');
              }

              // show the most current data
              showHouseData(top_year, lastYear);
              showChartData(year_avg);

              // create click event
              yearData = data;
              $('#eco-barchart .eco-year').click(function() {
                var targetYear = parseInt($('b', this).text());
                for (var r in yearData.rows) {
                  if (data.rows[r].key[1] == targetYear) {
                    showHouseData(data.rows[r].value, targetYear);
                  }
                }
              });
              
              // show all panels
              $('.panel').show();

            });

          }

        });
  
      });

    });

  });

});

$(window).load(function() {

  // evently for social functions
/*
  $.couch.app(function(app) {
    $("#account").evently("account", app);
    $("#profile").evently("profile", app);
    $.evently.connect("#account","#profile", ["loggedIn","loggedOut"]);
    $("#items").evently("items", app);
  });
*/
/*
  // display map
  var geo = new GeoAdmin.API();
  resultMap = geo.createMap({
     div: "resultMap",
     easting: 536625,
     northing: 152465,
     zoom: 8
  });	
*/

});

