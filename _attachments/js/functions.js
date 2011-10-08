// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

  $('button').click(function() {

    var query = $('input[name=street]').attr('value');

    // fetch couch dbView
    dbView = {"total_rows":24,"offset":0,"rows":[
{"id":"0547938076dfd59ede3ace99a265d34e","key":null,"value":{"_id":"0547938076dfd59ede3ace99a265d34e","_rev":"1-29bbe935065406003ebdbbddf549baa4","doc_type":"Batiment","GWP_TOT":17.66479476,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":412.7288496,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2009,"IDE_TOT_KWH":114.6469027,"IDE_CH_KWH":0}},
{"id":"0eed82905f97d1ecd7cc122a416598d6","key":null,"value":{"_id":"0eed82905f97d1ecd7cc122a416598d6","_rev":"1-e040b64e6bd6f2cace6451c2b7136375","doc_type":"Batiment","GWP_TOT":4.767672322,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":111.3942131,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2007,"IDE_TOT_KWH":30.94283698,"IDE_CH_KWH":0}},
{"id":"25f61e1775df5765a8326a55929bceac","key":null,"value":{"_id":"25f61e1775df5765a8326a55929bceac","_rev":"1-3b209c6519d521315ca285b16676f4a1","doc_type":"Batiment","GWP_TOT":5.132363894,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":119.9150442,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2007,"IDE_TOT_KWH":33.30973451,"IDE_CH_KWH":0}},
{"id":"2ba0ea116f3fb04cb09c011ac5e1e10d","key":null,"value":{"_id":"2ba0ea116f3fb04cb09c011ac5e1e10d","_rev":"1-f043325958bd0fd27c4c4fa232b6cb4c","doc_type":"Batiment","GWP_TOT":4.886440176,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":114.169163,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2005,"IDE_TOT_KWH":31.71365639,"IDE_CH_KWH":0}},
{"id":"3f6d5f24f2baf071860f3a3dd7671bbd","key":null,"value":{"_id":"3f6d5f24f2baf071860f3a3dd7671bbd","_rev":"1-c8e8a80ed963fa19e86cae21e62c9efa","doc_type":"Batiment","GWP_TOT":4.008648,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":93.66,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2005,"IDE_TOT_KWH":26.01666667,"IDE_CH_KWH":0}},
{"id":"4a33b6b12e5ffa71b27d708c303eab64","key":null,"value":{"_id":"4a33b6b12e5ffa71b27d708c303eab64","_rev":"1-3fa37517baff772ee69c904976bce8d7","doc_type":"Batiment","GWP_TOT":15.37755371,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":359.288638,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2009,"IDE_TOT_KWH":99.80239944,"IDE_CH_KWH":0}},
{"id":"4f11a228fda8121fe0eb51ce97b9507e","key":null,"value":{"_id":"4f11a228fda8121fe0eb51ce97b9507e","_rev":"1-e66481dbc235537b7d852d32f954cb5a","doc_type":"Batiment","GWP_TOT":3.349853606,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":78.26760762,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2005,"IDE_TOT_KWH":21.74100212,"IDE_CH_KWH":0}},
{"id":"6cb7fe68021bc5d50b20acf38ee604c7","key":null,"value":{"_id":"6cb7fe68021bc5d50b20acf38ee604c7","_rev":"1-7ec2c0b561e5cbe3911f1c2e76f1bdf3","doc_type":"Batiment","GWP_TOT":14.66967735,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":342.7494707,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2010,"IDE_TOT_KWH":95.20818631,"IDE_CH_KWH":0}},
{"id":"7899801190a3fe10d30d024a36ba286c","key":null,"value":{"_id":"7899801190a3fe10d30d024a36ba286c","_rev":"1-dbffd5eb457f199391fc874db4206c27","doc_type":"Batiment","GWP_TOT":3.411303929,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":79.70336283,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2005,"IDE_TOT_KWH":22.13982301,"IDE_CH_KWH":0}},
{"id":"79e5310d9a93485bf120fd771845acfe","key":null,"value":{"_id":"79e5310d9a93485bf120fd771845acfe","_rev":"1-ce479f27216e11ee77cd7b4d7efbdb25","doc_type":"Batiment","GWP_TOT":28.88386407,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":674.8566372,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2010,"IDE_TOT_KWH":187.460177,"IDE_CH_KWH":0}},
{"id":"926cff8c6b06907f7894a59b93a97d3c","key":null,"value":{"_id":"926cff8c6b06907f7894a59b93a97d3c","_rev":"1-a1bd1cee1beb18b60dc92b61aeb6c417","doc_type":"Batiment","GWP_TOT":7.090802326,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":165.6729515,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2007,"IDE_TOT_KWH":46.02026432,"IDE_CH_KWH":0}},
{"id":"98685cb0c285210dd4b7ce244f32744d","key":null,"value":{"_id":"98685cb0c285210dd4b7ce244f32744d","_rev":"1-7c116490a4d2e2ad276fc646b00dae45","doc_type":"Batiment","GWP_TOT":3.315583434,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":77.46690265,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2008,"IDE_TOT_KWH":21.51858407,"IDE_CH_KWH":0}},
{"id":"989fc585004fbcd8564e81e9be3caf59","key":null,"value":{"_id":"989fc585004fbcd8564e81e9be3caf59","_rev":"1-95c2f1b3f8dded05f9c0e6dbcd48c516","doc_type":"Batiment","GWP_TOT":3.482208,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":81.36,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2008,"IDE_TOT_KWH":22.6,"IDE_CH_KWH":0}},
{"id":"aa0983b079c68daea23eb19b927262aa","key":null,"value":{"_id":"aa0983b079c68daea23eb19b927262aa","_rev":"1-a320738ea568a9b00ff4e919a38c917b","doc_type":"Batiment","GWP_TOT":4.385255077,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":102.4592308,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2006,"IDE_TOT_KWH":28.46089744,"IDE_CH_KWH":0}},
{"id":"b59deea1b5bd5e33b3fd6f6b862ad3e1","key":null,"value":{"_id":"b59deea1b5bd5e33b3fd6f6b862ad3e1","_rev":"1-97acbfc7005656cbeb498c1665491d0a","doc_type":"Batiment","GWP_TOT":5.327414769,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":124.4723077,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2007,"IDE_TOT_KWH":34.57564103,"IDE_CH_KWH":0}},
{"id":"c0d1914343a6e983e6da071c321dacee","key":null,"value":{"_id":"c0d1914343a6e983e6da071c321dacee","_rev":"1-5a89f91b693cdce55b841de6699f7626","doc_type":"Batiment","GWP_TOT":22.17556892,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":518.1207692,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2010,"IDE_TOT_KWH":143.9224359,"IDE_CH_KWH":0}},
{"id":"ce8486e7433ca000c16cc28a3d86a41b","key":null,"value":{"_id":"ce8486e7433ca000c16cc28a3d86a41b","_rev":"1-7fe0137334f9d64b4549981d86cfe89f","doc_type":"Batiment","GWP_TOT":4.406552247,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":102.9568282,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2008,"IDE_TOT_KWH":28.59911894,"IDE_CH_KWH":0}},
{"id":"e4a9b0949f071c5043c8f7f1f6087f7f","key":null,"value":{"_id":"e4a9b0949f071c5043c8f7f1f6087f7f","_rev":"1-b3069b458b6bb01c4e6bb363725e8087","doc_type":"Batiment","GWP_TOT":5.28718393,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":123.5323348,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2006,"IDE_TOT_KWH":34.31453744,"IDE_CH_KWH":0}},
{"id":"e7f9af645d01d157542d97215a91d1b0","key":null,"value":{"_id":"e7f9af645d01d157542d97215a91d1b0","_rev":"1-08b62feef88eac145184ed01453e489a","doc_type":"Batiment","GWP_TOT":4.370008779,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":102.1030088,"GWP_CH":0,"EGID":190041453,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2006,"IDE_TOT_KWH":28.3619469,"IDE_CH_KWH":0}},
{"id":"e852bfbf8870f013c24e11e9d5c8dd33","key":null,"value":{"_id":"e852bfbf8870f013c24e11e9d5c8dd33","_rev":"1-c200aeac619de652bafd84503d675de5","doc_type":"Batiment","GWP_TOT":3.399981256,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":79.4388144,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2006,"IDE_TOT_KWH":22.06633733,"IDE_CH_KWH":0}},
{"id":"ed2ae6eb29b6082bcdfd2a37b53eb3d0","key":null,"value":{"_id":"ed2ae6eb29b6082bcdfd2a37b53eb3d0","_rev":"1-e8edbe6f9e023a95087e4ef104a7d677","doc_type":"Batiment","GWP_TOT":17.70260677,"LONGITUDE":6.611535644,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":413.6123077,"GWP_CH":0,"EGID":190041454,"LATITUDE":46.52690654,"IDE_CH_MJ":0,"ANNEE":2009,"IDE_TOT_KWH":114.8923077,"IDE_CH_KWH":0}},
{"id":"eebce5a64006b610701180641eeba6ba","key":null,"value":{"_id":"eebce5a64006b610701180641eeba6ba","_rev":"1-cd38e5d39faed21a1c03f5dbdfdedd25","doc_type":"Batiment","GWP_TOT":3.052567283,"LONGITUDE":6.611314093,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":71.32166549,"GWP_CH":0,"EGID":190041456,"LATITUDE":46.52690493,"IDE_CH_MJ":0,"ANNEE":2008,"IDE_TOT_KWH":19.81157375,"IDE_CH_KWH":0}},
{"id":"f3e1abcda44d89bc53d54a73d2028ac1","key":null,"value":{"_id":"f3e1abcda44d89bc53d54a73d2028ac1","_rev":"1-be2486ebf76bf20f6b72771d6bab0c93","doc_type":"Batiment","GWP_TOT":21.55409508,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":503.6003524,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2009,"IDE_TOT_KWH":139.8889868,"IDE_CH_KWH":0}},
{"id":"ffc83ca3bafaff1a7bfdbd99c5355443","key":null,"value":{"_id":"ffc83ca3bafaff1a7bfdbd99c5355443","_rev":"1-658ea9a80c6a094bf90e656512d96439","doc_type":"Batiment","GWP_TOT":20.09121748,"LONGITUDE":6.611710697,"NOM_LONG":"Jardins de Pr\u00e9laz","IDE_TOT_MJ":469.4209692,"GWP_CH":0,"EGID":190041452,"LATITUDE":46.52653897,"IDE_CH_MJ":0,"ANNEE":2010,"IDE_TOT_KWH":130.3947137,"IDE_CH_KWH":0}}
]};

        $('.eco-houses').html('');
        var i = 0; var avg = 0;
        for (var r in dbView.rows) {
console.log(dbView.rows[r]);
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
        
  });

});


$(window).load(function() {

  // display map
  var geo = new GeoAdmin.API();
  geo.createMap({
     div: "resultMap",
     easting: 536625,
     northing: 152465,
     zoom: 8
  });	

});

$(window).resize(function() {
	
});
