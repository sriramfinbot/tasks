const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
// console.log(size);

fruitsString = fruits.toString();
// console.log(fruitsString);
// console.log(typeof(fruitsString));

fruitsJoin = fruits.join(" * ");
// console.log(fruitsJoin);
// console.log(typeof(fruitsJoin)); this is a string

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fruits1Pop = fruits1.pop();
// console.log(fruits1Pop); remove last element 

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.push("kiwi")
// console.log(fruits2); add to last element 

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.shift()
// console.log(fruits3); remove the first element

const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
fruit4.unshift("Lemon")
// console.log(fruit4);  add to first element 

const fruit5 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit5[0]);
// console.log(fruit5[1]);
// console.log(fruit5[2]);

fruit5[fruit5.length] = "Kiwi"
// console.log(fruit5);  add to last element

const fruit6 = ["Banana", "Orange", "Apple", "Mango"];
delete fruit6[0];
// console.log(fruit6);

const myGirls = ["Hello", "Hi"];
const myBoys = ["Hii", "Bye", "Good Morning"];
const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

const a = ["Apple", "Ant", "Asterisk"];
const b = ["Ball", "Boy", "Bun"];
const c = ["Cat", "Cobbler", "Car"];
const d = a.concat(b, c);
// console.log(d);

const e = a.concat("Hello");
// console.log(e); adds hello to last element 

// flattening an array
const f = [[1, 2], [3, 4], [5, 6]];
const fNew = f.flat();
// console.log(fNew);

// splicing
const fruit7 = ["Banana", "Orange", "Apple", "Mango"];
fruit7.splice(2, 0, "Lemon", "Kiwi");
// 2 is starting number
// 0 is the number of element to delete
// console.log(fruit7);

const fruit8 = ["Banana", "Orange", "Apple", "Mango"];
fruit8.splice(2, 2, "Lemon", "Kiwi");
// 2 is starting number
// 2 is the number of element to delete
// console.log(fruit8);

const fruit9 = ["Banana", "Orange", "Apple", "Mango"];
fruit9.splice(0, 1);
// console.log(fruit9);

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array

// slicing
const fruit10 = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruit10.slice(1);
// console.log(citrus);
// console.log(fruit10);

const citrus1 = fruit10.slice(1, 3)
// console.log(citrus1);
// The method then selects elements from the start argument, and up to (but not including) the end argument.

const citrus2 = fruit10.slice(2)
// console.log(citrus2);
// slicing out rest of the array

const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
const fruits11Str = fruits11.toString();
// console.log(fruits11Str);
// console.log(fruits11);

// console.log(fruits11.indexOf("Apple"))
// console.log(fruits11.indexOf(3)) return -1 not found

// console.log(fruits11.lastIndexOf("Orange"));

// filter is pending

// map 
const display = fruits11.map(item => {
    return '<li>' + item + '</li>';
})
const render = '<ul>' + display.join(" ") + '</ul>'
document.write(render);

// reduce()
const numbers = [30, 50, 45, 78, 2];
let sum = 0;
for (let n of numbers) {
    sum += n;
}
// console.log(sum);

const sum1 = numbers.reduce((accumulator, value) => accumulator + value);
// console.log(sum1);

const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
fruits12.forEach((item, index) => {
    // console.log(index, item);
})

const numbers2 = [30, -1, 45, 78, -57, 0, 1];
let allPositive = numbers2.every((value) => {
    return value >= 0;
})

// console.log(allPositive);

let atLeastOnePositive = numbers2.some((value) => {
    return value >= 0;
})
// console.log(atLeastOnePositive);

let users = ["paddy", "zaddy", "faddy", "baddy"];
// console.log(users.includes("baddy"));

const arr1 = numbers2.sort();
// console.log(arr1);

// copy within
const array1 = ["a", "b", "c", "d", "e"];
// copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));

// copy  to index 1 all the elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));

// every
const isBelowThreshold = (currentValue) => currentValue < 40;
const array2 = [1, 30, 39, 29, 10, 13]
// console.log(array2.every(isBelowThreshold));

// filter
const array3 = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const resultOfArray3 = array3.filter(word => word.length > 6)
// console.log(resultOfArray3);

const array4 = [1, 2, 1];
const resultOfArr4 = array4.flatMap((num) => (num === 2 ? [2, 2, 3] : 1));
// console.log(resultOfArr4);

const array5 = [[0, 1], [2, 3], [4, 5]];
const resultOfArray5 = array5.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(resultOfArray5);

const array6 = ["one", "two", "three", "four", "five"];
const array6Reverse = array6.reverse();
// console.log(array6Reverse);

const array7 = [1, 2, 3, 4, 5];
const evenForArray7 = (element) => element % 2 === 0;
// console.log(array7.some(evenForArray7));

const array8 = ["a", "b", "c"];
const iterator1 = array8.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

const array9 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
// console.log(array9.fill(0, 2, 4));

// Fill with 5 from position 1
// console.log(array9.fill(5, 1));

// fill with 8 on complete array
// console.log(array9.fill(8));

const array10 = [5, 12, 8, , 130, 44];
const foundInArray10 = array10.find(element => element > 10)
// console.log(foundInArray10);

// returns the first element
const array11 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// console.log(isLargeNumber);
// console.log(array11.findIndex(isLargeNumber));

const array12 = [5, 12, 8, 130, 44];
const foundInArray12 = array12.findLast((element) => element > 45);
// console.log(foundInArray12);

const array13 = [5, 12, 8, 130, 44];
const isLargeNumberArray13 = (element) => element > 45;
// console.log(array13.findLastIndex(isLargeNumberArray13));

const array14 = ["a", "b", "c"];
const iterator14 = array14.keys();

for(const key of iterator14) {
    // console.log(key);
}

const iterator14Values = array14.values();

for(const value of iterator14Values) {
    // console.log(value);
}

const array15 = [1, 2, 3];
const reverseArray15 = array15.toReversed();
// console.log(reverseArray15);

const array16 = ["mar", "jan", "feb", "dec"];
const sortedMonthsArray16 = array16.toSorted();
// console.log(sortedMonthsArray16);
// console.log(array16);

const array17 = [1, 10, 21, 2];
const sortedArray17 = array17.toSorted((a, b) => a - b);
// console.log(sortedArray17);
// console.log(array17);

// toSpliced(start, deleteCount, item1, item2, itemN)
const array18 = ["jan", "mar", "apr", "may"];
const spliceArray18 = array18.toSpliced(1, 0, "feb");
// console.log(spliceArray18);

const splice2Array18 = array18.toSpliced(2, 2);
// console.log(splice2Array18);

const splice3Array18 = array18.toSpliced(1, 1, "feb", "mar");
// console.log(splice3Array18);



