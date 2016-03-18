function palindrome(str) {
 
  var exp=/[^a-z0-9]/gi;  //Match non alphanumeric characters
  var rem = str.replace(exp,'').toLowerCase(); 
  var rev = rem.split('').reverse().join('');
  if (rem==rev)
    return true;
  return false;
}



palindrome("eye");