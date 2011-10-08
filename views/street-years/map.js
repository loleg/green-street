function(doc) {
  if (doc.IDE_TOT_MJ && doc.ANNEE && doc.NOM_LONG) { 
    emit(doc.NOM_LONG, doc.ANNEE);
  }
}
