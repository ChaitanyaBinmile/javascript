// functions

var s = 5;
function valuechange(s){
    s=4
   
   
}
s=valuechange(s)
console.log(s)


function print(s){
    console.log(s)
}

print("dss")


// funciton expressions + arrow functions

const expression = (c) =>  c+2;

print(expression(9))
hola(9)

function hola  (a) {return a+1};

// note function expressions cannot be hoisted but normal functions can


// objects
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const x = person;
  x.age = 10;   

  print(x)