function mutation(arr) {
  var str1 = arr[0].toLowerCase().split('');
  var str2 = arr[1].toLowerCase().split('');
  var res1=0,res2=0;
  var i;
  for(i=0;i<str1.length;i++)
    {
      if(str2.indexOf(str1[i])!==-1)
        {
          res1=1;
        }
      else
        {
          res1=0;
          break;
        }
    }
  for(i=0;i<str2.length;i++)
    {
      if(str1.indexOf(str2[i])!==-1)
        {
          res2=1;
        }
      else
        {
          res2=0;
          break;
        }
    }
  return (res1==1||res2==1);
}

mutation(["floor", "for"]);
