function largestOfFour(arr) {
  // You can do this!
  var list=[];
  for(var i=0;i<arr.length;i++)
  {
    var max=0;
    for(var j in arr[i])
      {
        if(max<arr[i][j])
          max=arr[i][j];
      }
    list.push(max);
  }
  return list;
}

largestOfFour([[4, 5, 1, 3, 80],[3, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
