// var age = prompt("what is your age?");
// console.log(age);

// if(age == 30){
//   document.write("hey you are the same age as me!");
// }else if(age > 30){
//   console.log("you are overrage")
// }else if(age < 30){
// // do dat! 
//   console.log("sorry, you're not my type...too young ")
// }else{ 
//   console.log("please enter a number")
// }

var day; 
day = prompt('What is the day today?')

switch (day){ 
  case 'Monday':
    document.write('Today is Monday'); 
  break; 
  case 'Tuesday':
    document.write('Today is Tuesday'); 
  break; 
  default: 
    document.write('Some other day'); 
  break; 
}