// understanding memory creation phase and code execution phase


var n=2;
function square (num){
    var ans = num*num;
    return ans;

}

console.log(square(1));
console.log(square(n))


// function invocation


var x = 2;
a();
b();
console.log(x);
function a() {
    var x= 10;
    console.log(x);
}
function b() {
    var x= 9;
    console.log(x);
}

// scope chain lexical environment
function a2(){
    console.log(b2);
}
var b2 = 110;
a2()


// cont let var
const a3 =10;
let b3 ;
b3 =1000;
var c3 = 9;
var c3 = 19;

// block scope and shadowing

var a4 = 12;
let b4 = 13;
{
    var a4 = 14;
    let b4 = 15;
}

console.log(a4)
console.log(b4)
// this means variable me shadowing hojati par let me ni hoti in the case of block scoping