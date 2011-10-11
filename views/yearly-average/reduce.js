function(keys, values) {
  var low = 250;
  var mid = 800;
  var ll = mm = hh = t = 0;
  for (var v in values) {
    t += values[v];
    if (values[v] < low) {
      ll++;
    } else if (values[v] < mid) {
      mm++;
    } else {
      hh++;
    }
  }
  // t == sum(values)
  return [ll, mm, hh, t/values.length];
}
