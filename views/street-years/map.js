function(doc) {
  if (doc.IDE_TOT_MJ > 0 && doc.ANNEE && doc.NOM_LONG) { 
    emit(doc.NOM_LONG, doc.ANNEE);
  }
}
