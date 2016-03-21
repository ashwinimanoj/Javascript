function chunk(arr, size) {
  var list=[];
  var arrLength = arr.length;
  var start=0
  while(start<arrLength)
    {
      list.push(arr.slice(start,start+size));
      start=start+size;
    }
  return list;
}
chunk(["a", "b", "c", "d"], 2);