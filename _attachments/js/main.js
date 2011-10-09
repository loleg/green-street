
var resultMap;

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

function showStreetData(dbView) {

  $('.eco-houses').html('');
  var i = 0; var avg = 0;
  for (var r in dbView.rows) {
    if (dbView.rows[r].value) {
      avg += dbView.rows[r].value.IDE_TOT_MJ;
      i++;
      var c = 
        (dbView.rows[r].value.IDE_TOT_MJ > 400) ? "red" :
        (dbView.rows[r].value.IDE_TOT_MJ < 100) ? "green" : "yellow";
      if ($('.eco-houses span').length < 10) {
        $('.eco-houses').append('<span id="' + dbView.rows[r].value.EGID + '" class="eco-house eco-' + c + '">' + c + '</span>');
      }
    }
  }
  $('.eco-slider').show();

  avg = avg / i;
  avg = 100 * (avg / 500);

  var letter =  (avg < 20) ? "A" : 
                (avg < 40) ? "B" :
                (avg < 60) ? "C" :
                (avg < 80) ? "D" :
                (avg < 90) ? "E" :
                "F";
  
  $('.eco-slider .arrow').css('margin-left', avg + '%').html(letter);
  
}


/* trigger when page is ready */
$(document).ready(function () {

// WHY????????
//  Uncaught TypeError: Object #<an Object> has no method 'getDbProperty'
//   in vendor/couchapp/jquery.couch.app.js:175

  /* Load street list 
  $.couch.app(function(app) {
    $("#street-results").evently("streets-years", app);
  });

  $.couch.app(function(app) {
    console.log("loading db");
    console.log(app);
    $("#street-results").evently({
      _init : {
        mustache : '<p>The db name is <strong>{{name}}</strong></p>',
        data : app.db
      }
    });
  });*/

  /*
  $("input#street-input").autocomplete({
      source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"]
  });
  */

  $('input[name=street]').keyup(function(event) {

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

        var val = regesc($(this).text());
        $('input[name=street]').attr('value', val);

        // create couch query for years
        var url = "_view/street-years?";
        url += "&startkey=%22" + val + "%22";
        url += "&endkey=%22" + val + "%22";

        $.getJSON(url, null, function(data) {
  
         // showStreetData(data);

          $('#street-results').empty();
          var years = [];
          for (var r in data.rows) {
            var y = data.rows[r].value;
            if (years.indexOf(y) == -1) {
              years.push(y);
            }
          }

          years.sort().forEach(function(y) {
            $('#street-results').append("<li>" + y + "</li>");
          });

          // create selector for year results
          $('#street-results li').click(function() {
        
            var year = regesc($(this).text());
            var street = $('input[name=street]').attr('value');
            $('input[name=street]').attr('value', street + " " + year);

            // create couch query for results
            var url = "_view/yearly-average?group=true";
            var key = "[%22" + street + "%22," + year + "]";
            url += "&startkey=" + key;
            url += "&endkey=" + key;

            $.getJSON(url, null, function(data) {
      
              showStreetData(data);

            });

          });

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

