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


// funciton expressions

const expression = (c) =>  c+2;

print(expression(9))
hola(9)

function hola  (a) {return a+1};

// note function expressions cannot be hoisted but normal functions can

//   Object references and copying
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

print(user.name); 

//  cloning obejcts
let user1 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user1, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
print(user1.name); // John
print(user1.canView); // true
print(user1.canEdit); // true