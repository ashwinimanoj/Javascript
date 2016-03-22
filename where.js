function where(arr, num) {
  var list = arr.sort(function(a,b)
                   {
      return a-b;
  });
  for(var i=0;i<list.length;i++)
    {
      if(list[i]>=num)
        return i;
    }
  return i;
}
where([5, 3, 20, 3], 5);