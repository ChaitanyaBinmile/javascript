// Map and Set

// creating map
let hel = new Map();

// storing values using set keyword
hel.set('1', 'first_value');
hel.set("2", "second_value");

// some methods with map but not with objects
// clear delete enteries get has set 
console.log(hel.get("1"));
console.log(hel.size);


// self note: dont add values in map ike adding in object, PROPERTIES OF MAP WONT WORK
// SET: unique values store karta

const newset = new Set();
newset.add(1);
newset.add(2);
newset.add(2);
newset.add("text");
const o = {a: 1, b: 2};
newset.add(o);
newset.has(1);
console.log(newset.size);
console.log(newset)


// alert, prompt, confirm

// prompt("Bye!");
// alert("Hello");


// math
console.log(Math.round(9.9))
console.log(Math.ceil(9.9))
console.log(Math.floor(9.9))	
console.log(Math.trunc(9.9))

// Comparisions
const vary =5;
console.log(vary == 5);
console.log(vary == '5');
console.log(vary  === "5");

// Conditional branching: if, ?
// shortcut wa to write if, else
let message = (vary < 5) ? "The number is smaller!":
(vary > 5)  ? "The number is greater!" :"You guessed!"
console.log( message );

console.log((vary<5)?"small":(vary>5)?"big":"equal");

// Nullish coalescing Operator
 const pulli = null ?? 'new';
 console.log(pulli);
// console.log(foo);

// while for
let text = "";
let i = 0;
while (i < 10) {
    text += "The number is " + i;
    i++;
    }
 console.log(text)
   

for (let i = 0; i < 10; i++) {
    console.log(i,'*')
}

// switch

let x = 0;

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)