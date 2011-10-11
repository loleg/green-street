function(keys, values) {
  var RANGE_LOW = 250;
  var RANGE_MID = 800;
  var ll = mm = hh = t = 0;
  for (var v in values) {
    t += values[v];
    if (values[v] < RANGE_LOW) {
      ll++;
    } else if (values[v] < RANGE_MID) {
      mm++;
    } else {
      hh++;
    }
  }
  // t == sum(values)
  return [ll, mm, hh, t/values.length];
}
