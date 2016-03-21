function truncate(str, num) {
  
 var strLength = str.length;
 if(num<=3)
   {
     return str.slice(0,num).concat("...");
   }
  else
    {
     var strConcat = str;
     if(strConcat.length>num)
       {
         strConcat = strConcat.slice(0,num-3).concat("...");
       }
      return strConcat;
    }
}

truncate("Peter Piper picked a peck of pickled peppers", 14);