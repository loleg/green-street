function(newDoc, oldDoc, userCtx) {
  if (newDoc.author) {
    if(newDoc.author != userCtx.name) {
      throw({"forbidden": "You may only update documents with author " +
        userCtx.name});
    }
  }
}
