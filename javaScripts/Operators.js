//Arithmetical operators
/*  + addition, also concatination. + is called overloading operator.
 - substruct
 * multiplication
 / divition.
 % modulation
 = equals
*/
//modulation
let x=21;
let y=4;
let z= x%y;
//console.log(z);

//Relational/comparator  operators.
/*
== equals to
!= not equal to
< less than
<= less than equals to
> greater than 
>= greater thanequals to
*/
let a=11;
let b= 10;
  var c=a==b;
  //console.log(c)

  let a1=12;
  let b1= 11;
  let c1 =a1!=b1;
 // console.log(c1)

  let a2=9;
  let b2= 10;
  let c2 =a2>=b2;
 // console.log(c2)

  // Logical Operators
  /* &&  logiaca and
  ||  logical or
  == equals to

  */

  let math=50;
  let science= 60;

if((math>=60) &&(science>=60)){
    console.log("you are quilified for admision")
}else{console.log("sorry you did not meet the condition for direct admision")}


if((math>=60) ||(science>=60)){
    console.log("you are quilified  the admision test")
}else{"you did not have enough score"}