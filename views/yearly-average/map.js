function(doc) {
  if (doc.IDE_TOT_MJ > 0 && doc.ANNEE && doc.NOM_LONG) { 
    emit([doc.NOM_LONG, doc.ANNEE], doc.IDE_TOT_MJ);
  }
}
/*
    {_id: "1234", _rev: "1-1234", doc_type: "Batiment", GWP_TOT: 17.66479476, LONGITUDE: 1.234, NOM_LONG: "Jardins de Pr\u00e9laz", IDE_TOT_MJ: 412.7288496, GWP_CH: 0, EGID: 10000000, LATITUDE: 12.456, IDE_CH_MJ: 0, ANNEE: 2009, IDE_TOT_KWH: 114.6469027, IDE_CH_KWH: 0};
*/
