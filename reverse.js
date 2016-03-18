function reverseString(str) {
  var revArr = str.split('').reverse().join('');
  return revArr;
}

reverseString("hello");