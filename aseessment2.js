function removeDuplicates(a){
    return [...new Set(a)]}



const input = [1, 2, 3, 2, 4, 3, 5];
const result = removeDuplicates(input);
console.log(result);

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function findPrimes(arr) {
    return arr.filter(number => isPrime(number));
  }
  
  const inpuat = [2, 5, 8, 11, 12, 17, 20, 23];
  const primes = findPrimes(inpuat);
  console.log(primes); 
  

function transformArray(inputArray) {
    return inputArray.map(number =>  number*number)
  }
  
  const inpt = [1, 2, 3, 4, 5];
  const transformedArray = transformArray(inpt);
  console.log(transformedArray);
   // Expected output: [1, 4, 9, 8, 25]

   function sortPeopleByAge(peopleArray) {
    peopleArray.sort((person1, person2) => person1.age - person2.age);
    return peopleArray
  }
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  const sortedPeople = sortPeopleByAge(people);
  
  
  console.log(sortedPeople);

  function filterStudents(studentsArray) {
    
    const aa = studentsArray.filter(student => student.score>60);
    return aa

  }
  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 75 }
  ];
  const highScoringStudents = filterStudents(students);
  console.log(highScoringStudents);
  // Expected output: [
  //   { name: "Alice", score: 85 },
  //   { name: "Charlie", score: 75 }
  // ]
  

  function addPrefixToNames(peopleArray) {
    const namesWithPrefix = peopleArray.map(person => ({ ...person, name: "Mr. " + person.name }));
    return namesWithPrefix
  }
  
  const peoeple = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  
  const peopleWithPrefix = addPrefixToNames(peoeple);
  console.log(peopleWithPrefix);
  
  // Expected output: [
  //   { name: "Mr. Alice", age: 30 },
  //   { name: "Mr. Bob", age: 25 },
  //   { name: "Mr. Charlie", age: 35 }
  // ]
  
  function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) { count++; }}
    return count; }
  
  console.log(countVowels("apple"));    // Expected output: 2
  console.log(countVowels("banana"));   // Expected output: 3
  

  function titleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
   }
   
   console.log(titleCase("hello world"));    // Expected output: "Hello World"
   console.log(titleCase("this is a test")); // Expected output: "This Is A Test"
   

   function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) { 
    reversed += str[i]; }
     return reversed; }
  console.log(reverseString("hello"));   // Expected output: "olleh"
  console.log(reverseString("world"));   // Expected output: "dlrow"
  