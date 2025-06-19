const person = {
    name:'Muskan',
    age:'20',
    isAdult:true,
}

const p1 = Object.create(person);
const p2=Object.create(p1);

console.log(p1);
console.log(p2);
console.log(p2.name);

// __proto__ :it comtain reference to the parent object
console.log(p2.__proto__);
console.log(p2.__proto__.__proto__);
console.log(p2.__proto__===p1);
console.log(person.__proto__);
console.log(person.__proto__ ===  Object.prototype);