function bouncer(arr) {

 var list=[];
  for(var i in arr)
    {
      list.push(arr[i]);
      var check = Boolean(arr[i]);      
      {if(check===false)
        list.pop();
      }
    }
  return list;
  
}
bouncer([7, "ate", "", false, 9]) ;