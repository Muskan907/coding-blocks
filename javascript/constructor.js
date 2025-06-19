function Person(name,age){
    this.name = name;
    this.age = age;
    // console.log(this);
    // this.sayName=function(){
    //     console.log(this.name);
    // }
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

const p1 = new Person('Kartik',23);
const p2 = new Person('Ajay',24);

console.log(p1);
console.log(p1.sayName);
console.log(p1.sayName());