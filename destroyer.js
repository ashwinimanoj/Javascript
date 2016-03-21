function destroyer(arr) {
//Probably not the right way to do this
  var list = arguments[0]; 		//array of numbers here
  for(var i=1;i<arguments.length; i++) 		//for the values to be matched against
    {
     var  index = list.indexOf(arguments[i]); 		//find out index of matched value in list
     while(index!==-1) 		//repeat until all matches found
       {
       list.splice(index,1);		//remove matched value from list     
       index = list.indexOf(arguments[i]);  		//find next matched index
       }
    }
return list;
}
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) ;