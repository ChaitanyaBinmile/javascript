
var print = (a)=>{return console.log(a)};




// Destructring assignment

// Date and Time
const d = new Date();
print(d)


let user = {
    name: "John",
    age: 30,

toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
}
};

print(user);

// JSON methods, toJSON
let student = {
name: 'John',
age: 30,
isAdmin: false,
courses: ['html', 'css', 'js'],
spouse: null
};

let json = JSON.stringify(student);

print(typeof json); // we've got a string!

print(json);


function myFunction(v, w, x, y, z) {

    console.log(v,w,x,y,z);
    console.log(z);

}
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
print(lyrics)



// try catch
try{
    print('aalo')
    allala
}catch(error){
    print(`${error} error occured,`)
    
}