function repeat(str, num) {
 var list ="";  
  while(num>0)
     {
     list = list.concat(str);
     num--;
     }
  return list;
}

repeat("abc", 3);
