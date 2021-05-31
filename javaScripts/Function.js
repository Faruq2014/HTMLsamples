
// function is a block of code which describes a particular topic.

function greetings(){
    console.log("hello");
}

//greetings();
/*
must declare the function key word
// write function name= greetings
// () is = function parameter
// function signatue =greetings()
//{}= function body.
call back=greetings();

*/
// coditional statement
// controll flow

let time=35;
function greetingsWithTime(){

   if((time==0) || (time<=12)) {
       console.log("Good Morning")
   }
   
   
   else if((time==13) || (time<=24)){
console.log("Good Afternoon")
   }
   
   else{
       console.log("Good Night")
   }


}

//greetingsWithTime()
//if is the key word
//()= condition
//{}= body where you must write aruguements.


     // requirements
 // if a students marks less than 00= error
// if a students marks between 0 and 32= fail
// if a students marks between 33 and 45= third division
// if a students marks between 46 and 59= 2nd division
// if a students marks between 60 and 79= first division
// if a students marks between 80 and 100= star division
// if a students marks more than 100= error



function studentsMarks( marks){

if(marks<0){
console.log("sorry you enter wrong marks(<0)")
} else if(marks<=32){
  console.log("you fail the exam")  
} else if(marks<=44 ){
console.log("you have third division")
} else if(marks<=59){
    console.log("you have second division")
}else if(marks<=79){
    console.log("you have first division")
}else if(marks<=100){
    console.log("you have star marks")
}else{
    console.log("sorry you enter wrong marks(>100) ")
}



}

studentsMarks(101);