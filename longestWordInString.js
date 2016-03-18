function findLongestWord(str) {
  var list = str.split(' ');
  var len=0;
  for (var i in list)
    {
      var l = list[i].split('').length;
      if(len<l)
        len = l;
    }
  return len;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
