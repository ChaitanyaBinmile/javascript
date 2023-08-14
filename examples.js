var print = (x) => console.log(x);

// array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
print(size)


let string = fruits.join(" * ");
print(string)


print(fruits.pop())


fruits.push("Kiwi");
print(fruits)


fruits.shift();

print(fruits)


fruits.unshift("Lemon");
print(fruits)


fruits[0] = "Kiwi";
print(fruits)


delete fruits[0];
print(fruits)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
print(myChildren)


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mah = arr1.concat(arr2, arr3);
print(mah)


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
print(newArr)

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
print(fruit)

fruit.splice(2, 2, "Lemon", "nitin");
print(fruit)


const citrus = fruits.slice(1);
print(citrus)


print(fruit.toString());


// String

const originalString = "Hello, World!";
const upperCaseString = originalString.toUpperCase();
const lowerCaseString = originalString.toLowerCase();

print(upperCaseString);
print(lowerCaseString);

const str = "JavaScript";
const char = str.charAt(4);

print(char);

const str1 = "Hello, ";
const str2 = "world!";
const combined = str1.concat(str2);

print(combined);

const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("fox");

print(containsWord);


const indexOfFox = sentence.indexOf("fox");
print(indexOfFox);

const stri = "   Hello, World!   ";
const trimmed = stri.trim();

print(trimmed);

const strin = "JavaScript is fun";
const sliced = strin.slice(4, 10);
const substringed = strin.substring(4, 10);

print(sliced); // "Script"
print(substringed); // "Script"


const words = sentence.split(" ");
print(words);