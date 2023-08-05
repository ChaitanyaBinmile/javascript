/* question 1
console.log("10");

 question 2
console.log("Function");

question 3
console.log(57);

question 4
console.log("unshift()");

question 5
console.log("B) null represents an intentional absence of a value, while undefined represents an unintentional absence of a value.
");

question 6
console.log("10");

question 7
console.log("B) Enables stricter error handling and enforces better coding practices.");

question 8
console.log("D) const add = (a, b) => a + b;");

question 9
console.log("B) To store a collection of key-value pairs with no particular order.");

question 10
console.log("C) "101010"");

question 11
console.log("A) const");

question 12
console.log("C) []");

question 13
console.log(A) Transpilers convert JavaScript code to a lower version of the language.");

question 14
console.log("A) array.includes(value)");

question 15
console.log("B) To provide a default value when a variable is null or undefined.");

question 16
console.log("A) ["a", "b"]");

question 17
console.log("B) Number(string)");

question 18
console.log("C) It refers to the current object on which a method is being called.");

question 19
console.log("B) array.slice()");

question 20
console.log("A) Yes");


*/



var submit = document.getElementById("submit");



function bmi(h,w){
    return ((w*10000)/(h*h))
}

submit.addEventListener('click',function(event){
    const x = document.getElementById('height').value;
    const y = document.getElementById('weight').value;
    const result = document.getElementById("result");
    console.log(x,y);
    var z;
    z=bmi(x,y).toFixed(2);
    result.innerHTML=z
    event.preventDefault()
});
let [seconds, minutes, hours] = [0,0,0]
let TimeRanges = document.querySelector(".timer");
console.log(TimeRanges)
let int = null;

document.getElementById("start").addEventListener("click",function(){
    if (int !== null){
        clearInterval(int)
    }
    int = setInterval(displayTimer, 1000);
})

document.getElementById("pause").addEventListener("click",function(){

        clearInterval(int)

})

document.getElementById("reset").addEventListener("click",function(){
    
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0]
    TimeRanges.innerHTML = "00: 00: 00"


})

function displayTimer() {
        seconds++
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
  
   
    TimeRanges.innerHTML = `${h} : ${m} : ${s}`;}
