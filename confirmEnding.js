function confirmEnding(str, target) {
 
var sublen = target.length;
var sub = str.substr(-sublen);
if (sub==target)
  return true;
return false;
}

confirmEnding("Connor name", "name");
