// "object constructor" syntax
// let user = new Object();  

// "object literal" syntax
// let user = {};   

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year
}

const myCar = new car("Eagle", "Talon TSi", 1993)
// console.log(myCar);s

function user(name, age, mobile) {
    this.name = name;
    this.age = age;
    this.mobile = mobile;
}

var user1 = new user("Sriram", 25, 1252523652);
// console.log(user1);

const user2 = {
    name: "Sriram",
    age: 25,
    marks: {
        math: 20,
        eng: 30
    }
};

// console.log(user2["marks"]["math"]); 
// console.log(user2.marks.math);

const user3 = {
    age: 25,
    mobile: 2589631470,
    name: "Sriram"
}
// create array with keys
const user3Obj = Object.keys(user3);
// console.log(user3Obj);

// create array with values
const user3Obj2 = Object.values(user3);
// console.log(user3Obj2)

// create object with key values as array
const user3Obj3 = Object.entries(user3);
// console.log(user3Obj3);
// example
// ['age', 25]
// ['mobile', 2589631470]
// ['name', 'Sriram']

const user4 = {
    age: 25,
    mobile: 2589631470,
    name: "Sriram"
};
// combining objects
const user4New = {
    ...user4,
    location: "Hyderabad"
}

// console.log(user4New);

const user5 = {
    birthYear: 1998,
    name: "Sriram"
}

const user5Mod = {
    age: 25
}
// combining two objects
const user5Comb = Object.assign(user5, user5Mod)
// console.log(user5Comb);

// freezing an object
const user6 = {
    age: 25,
    mobile: 1478520369,
    name: "sriram"
}
Object.freeze(user6);
user6.name = "RRam";
// Not changing the name 
// console.log(user6);

// console.log( Object.isFrozen(user6))

// sealing an object
const user7 = {
    mobile: 1478520147,
    name: "Sriram"
}
Object.seal(user7);
user7.bld_group = "AB+";
// console.log(user7.bld_group);
user7.age = 37;
// console.log(user7.age);

// console.log(Object.isSealed(user7));

// localization
const date1 = new Date(Date.UTC(2019, 11, 20, 16, 15, 30, 250));
// console.log(date1.toLocaleString("bn"));
// console.log(date1.toLocaleString("ta"));


// object.create method

const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
        console.log(this.type);
    }
}
const animal1 = Object.create(Animal);
// animal1.displayType();  display invertebrates

const fish = Object.create(Animal);
fish.type = "Fishes";
// fish.displayType();  display fishes 

const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

// console.log(myObj);
// console.log(myObj.myString)

const myObj1 = {};
const str1 = "myString";
myObj1[str] = "This key is in variable str";

// console.log(myObj1.str1); // undefined

// console.log(myObj[str]); 
// console.log(myObj.myString); 

let propertyName = "make";
myCar[propertyName] = "Ford";

// access different properties by changing the contents of the variable
propertyName = "model";
myCar[propertyName] = "Mustang";

// console.log(myCar);

function car1(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year
}

const kensCar = new car1("Nissan", "300ZX", 1992);
const vpgsCar = new car1("Mazda", "Miata", 1990);

// console.log(kensCar);
// console.log(vpgsCar);

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const sri = new Person("D Sriram", 25, "M")
const ninja = new Person("Ninja Sriram", 26, "M");
// console.log(sri, ninja);

function car1(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
const car2 = new car1("Eagle", "Talon TSi", 1993, sri)
const car3 = new car1("Eagle", "Talon TSi", 1993, ninja)
// console.log(car2, car3);
// console.log(car2.owner.name);
car2.color = "black";
// console.log(car2);


function showProps(car2, car2Name) {
    let result = "";
    Object.keys(car2).forEach((i) => {
        result += `${car2Name}.${i} = ${car2[i]}\n`;
    });
    console.log(result);
}

// showProps(car2, "hello")

function listAllProperties(car2Obj) {
    let objectToInspect = car2Obj;
    let result = [];

    while (objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect);
    }
    return result;
}

var resultOfCar2 = listAllProperties(car2);
// console.log(resultOfCar2);

car1.prototype.displayCar = function() {
    const result = `A Beautiful ${this.year} ${this.make} ${this.model}`
    console.log(result);
}

// car2.displayCar();
// car3.displayCar();

const Manager = {
    name: "sriram",
    age: 27,
    job: "Software Engineer"
};
const Intern = {
    name: "Sri",
    age: 25,
    job: "Software Engineer Intern"
}

function sayHi() {
    console.log(`Hello My name is ${this.name}`);
}
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
// Manager.sayHi();
// Intern.sayHi();

const myObj2 = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
}

// console.log(myObj2.a);
// console.log(myObj2.b);
myObj2.c = 50;
// console.log(myObj2.a);

const myObj3 = { a:0 }
Object.defineProperties(myObj3, {
    b: {
        get() {
            return  this.a + 1
        },
    },
    c: {
        set(x) {
            this.a = x / 2;
        },
    },
});

myObj3.c = 10;
console.log(myObj3.b);

const fruit = { name: "apple" };
const fruitBear = { name: "apple" };

// console.log(fruit == fruitBear);
// console.log(fruit === fruitBear);

const fruitBear2 = fruit;
console.log(fruit == fruitBear2);

fruit.name = "grape";
console.log(fruitBear2);