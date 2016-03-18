function titleCase(str) {
  var list = str.split(' ');
  var x,l=[];
  for(var i=0;i<list.length;i++)
    {
      x = list[i].split('');
      x[0]=x[0].toUpperCase();
      for(var j=1;j<x.length;j++)
        x[j]=x[j].toLowerCase();
      l.push(x.join(''));
    }
  list = l.join(' ');
  return list;
}

titleCase("I'm a little tea pot");
