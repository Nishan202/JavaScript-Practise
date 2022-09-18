
// Beginar level javaScript

/*
console.log(10 + "20");

console.log(9 - "5"); // => 4 (it's a bug)

console.log("Nishan" - "Sarkar"); // => NaN ( Not a Number)

console.log(true + true);  // java script represents (true = 1 & false = 0)

console.log(true + false);

console.log(false + true);

console.log(false - true);  // 0 -1 => -1
*/

/* ******************************************************************************************************************************* */
// // Expresstions and Operator

// console.log(2 + 2) // (2 & 3 are the operand and '+' is a operator and the hole 2 + 2 is called as expression)

// Types of Operator

    // Arithmatic Operator => An Assignment operator assigns the value to its left operand based on the value of it's right operand. The simple assignment operator is equal (=)
    // Example : a = 6; b = 6;
    // Comparison Operator => An Arithmatic operator takes numerical values (either literals or variable) as thier operands and returns a single numerical value.
    // Example : (3+3, 4-1, 6/2, 5*3, 81%8)
    // Logical Operator
    // Example: 
    // String Operator
    // Example: 
    // Conditional(Ternary) Operator
    // Example: 
    // Assignment Operator
    // Example: 


/* *************************************************************************************************************************** */
// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.

//**************************************************************************************************************************
// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

//****************************************************************************************************************************
// Call back function => Any function that is passed as an argument to another function we call it as call back function.

// Example =>
/*
const myName = () =>{
    return "hello ";
}

const greeting = (sayHi, name) =>{
    console.log(sayHi() + name);
}

greeting(myName, "Nishan");
*/

// Another type of Call back function => A call back function that is to be executed after another function has finished executing.

// Example => 

/*
const funcA = () =>{
    setTimeout(() =>{
        console.log(`function A`);
        //funcB();
    }, 3000)
}

const funcB = () =>{
    console.log(`function B`);
}

funcA();
funcB();
*/


/*
const perOne = (friend, callFreind) =>{
    console.log(`i will call you back ${friend} after some time.`);
    callFreind();
}

const perTwo = () =>{
    console.log(`Hey what's up!`);
}

perOne("Nishan" , perTwo);
*/

// Why call back function?
// => javaScript is a event driven function that means instead of waiting for a response before moving on, javaScript will keep executing while listening for others events.
// So Call back are a way to make sure certain code doesn't execute until other code has already finished execution.
/* *************************************************************************************************************************** */

// Returning function(Higher order function) => When a function returning a function that is called Higher order function

// Example=> 

/*
const interviewQuestions = (name) =>{
    if(name === "nishan"){
        return function (topic) {
            console.log(`Hi ${name}, What is ${topic}? please explain us.`);
        }
    }
    else if(name === "gourab"){
        return function (topic) {
            console.log(`Hi ${name}, What is ${topic}? please explain us.`);
        }
    }
    else if(name === "shubhankar"){
        return function (topic) {
            console.log(`Hi ${name}, What is ${topic}? please explain us.`);
        }
    }
    else{
        return function () {
            console.log(`welcome to interview.`);
        }
    }
}

interviewQuestions("nishan")("front end development");
interviewQuestions("gourab")("UI");
interviewQuestions("shubhankar")("PHP");

a()();  // either you can call the function using double parenthesis

const c = a();
c(); // Or you can store the function in a variable and call the variable name as a function.

*/


/* ******************************************************************************************************************************* */

// Call() method => With Call() , an object can use a method belonging to another object. Call() takes arguments separately.

// Example =>

/* const person1 = {
    name: "Nishan",
    age: 25,
    qualificaiton: "BCA",
    skills: function(skill1, skill2){
        console.log(`I am ${this.name}, I have done ${this.qualificaiton}. I have a knowledge on ${skill1} & ${skill2}.`);
    }
}

const person2 = {
    name: "Arpendra",
    age : 26,
    qualificaiton: "B.tech"
}

person1.skills("web development", "manual testing");
person1.skills.call(person2, "java", "manual testing");

*/



/* ****************************************************************************************************************************** */

// Function Apply() => With Apply() , an object can use a method belonging to another object.It is similar to call(). Apply() takes arguments as an array.

// Example:

/* const person1 = {
    name: "Nishan",
    age: 25,
    qualificaiton: "BCA",
    skills: function(skill1, skill2){
        console.log(`I am ${this.name}, I have done ${this.qualificaiton}. I have a knowledge on ${skill1} & ${skill2}.`);
    }
}

const person2 = {
    name: "Arpendra",
    age : 26,
    qualificaiton: "B.tech"
}

person1.skills.apply(person2, ["java", "manual testing"]);  
*/

/* ******************************************************************************************************************************** */

// bind() method => By this method, we can bind and object to a common function, so that the function gives different result when it's need.

// bind() method takes an object as an first argument and creates a new function.

//Example:-

/*
const youtuber = {
    name: "thapatechnical",
    content: "programming"
}

const youtuber1 = {
    name: "technical guruji",
    content: "electronic diveces review"
}

const youteber2 = {
    name: "bong guy",
    content: "roast videos"
}

function features(rating) {
    console.log(`My fav youtuber ${this.name}, he made videos on ${this.content} topics. I will love to give ${rating} star rating to this channel.`);
}

let youtuberName = features.bind(youtuber1);
youtuberName(5);
*/


/* ***************************************************************************************************************************** */

// Swap two number without using third variable..

/*
let a=5, b=10;

[a,b] = [b,a]; // here we use array destructuring.

console.log(`value of a is ${a} and value of b is ${b}`);
*/

/* ****************************************************************************************************************************** */


// Asynchronous => An Asynchronous request doesn't block the client that means browser is responsive at that time user can perform another operations also.

// Example:-
/*
const task2 = () =>{
    setTimeout(()=>{
        console.log(`task 2 is starting`);
    }, 3000);
}

const task1 = ()=>{
    console.log(`task 1 is starting`);
    task2();
    console.log(`task 1 is end`);
}

task1();
*/

// Synchronous => A synchronous request blocks the client until operation completes that means browser is unresponsive.

// Example:-

/*
const task2 = ()=>{
    console.log(`task2 is starting`);
}

const task1 = ()=>{
    console.log(`task1 is starting`);
    task2();
    console.log(`task1 is end`);
}

task1();
*/


/* **************************************************************************************************************************** */


// Promises => It is a constructor and to access Promise we have to create a new object of Promise, when we use promise then we have to call a function and execute the function called as executor. The executor function has 2 parameter called as resolve and reject.

/*
1. pending => wait for the task either it will be successfull nither fail

2. resolve => the task is successfull.

3. reject => the task is failed.

When create an object of promise then it has 2 methods 

1. objName.then() => it basically uses for showing the output of resolve status. 

2. objName.catch() => it basically uses for showing the output of reject status.
*/

// Example =>

/*
// promise produce
const prob = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        let name = ['nishan', 'gourab', 'shubhankar', 'suman', 'raju'];
        resolve(name);
        //reject('there is an error');
    }, 2000);

});

const bioData = (bioIndex) =>{
    return new Promise((resolve, reject) =>{
        setTimeout((bioIndex) =>{
            let data = {
                age: 25,
                phoneNo: 7001198674
            };
            resolve(`my name is ${bioIndex}, age is ${data.age} & phone number is ${data.phoneNo}.`);
        }, 2000, bioIndex);
    });
}

// promise consume
prob.then((name)=>{
    console.log(name);
    return bioData(name[2]);
}).then((indexData) =>{
    console.log(indexData);
}).catch((error)=>{
    console.log(error);
})
*/



/* *********************************************************************************************************************** */

// Async/await => The word "async" before a function means one simple thing: a function always returns a promise.

// So the async keyword is added to functions to all tell them to return a promise rather than directly returning the value.

// we can use await then calling any function that returns a Promise, including web API functions.

// the keyword "await" makes JavaScript wait until that promise settles and returns it's result.

// Example =>

/*
const prob = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        let name = ['nishan', 'gourab', 'shubhankar', 'suman', 'raju'];
        resolve(name);
        //reject('there is an error');
    }, 2000);

});

const bioData = (bioIndex) =>{
    return new Promise((resolve, reject) =>{
        setTimeout((bioIndex) =>{
            let data = {
                age: 25,
                phoneNo: 7001198674
            };
            resolve(`my name is ${bioIndex}, age is ${data.age} & phone number is ${data.phoneNo}.`);
        }, 2000, bioIndex);
    });
}

async function getData() {
    const names = await prob;
    console.log(names);

    const bioDatas = await bioData(names[2]);
    console.log(bioDatas);
    
    //return bioDatas;
}

// const getDetails = getData().then((myName) =>{
//     console.log(myName);
// })
getData();
*/


/* *********************************************************************************************************************** */


// Error handling using try catch block

/*
const prob = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        let name = ['nishan', 'gourab', 'shubhankar', 'suman', 'raju'];
        resolve(name);
        //reject('there is an error');
    }, 2000);

});

const bioData = (bioIndex) =>{
    return new Promise((resolve, reject) =>{
        setTimeout((bioIndex) =>{
            let data = {
                age: 25,
                phoneNo: 7001198674
            };
            resolve(`my name is ${bioIndex}, age is ${data.age} & phone number is ${data.phoneNo}.`);
        }, 2000, bioIndex);
    });
}

async function getData() {

    try{
        const names = await prob;
        console.log(names);

        const bioDatas = await bioData(names[2]);
        console.log(bioDatas);
    } catch(error){
        console.log(`The erro: ${error}`);
    }
    
}

getData();
*/


/* ********************************************************************************************************************* */

// fetch() method 

/*
const covidData = async () =>{

    const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/36');
    //console.log(response);

    const getData = await response.json();

    console.log(getData.districts);
}

covidData();
*/



/* *********************************************************************************************************************** */


// Rest Parameters => It is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.
// The Rest parameter syntax allows us to represent and indefinite number of arguments as an array.

/*
function myFunc(...input) {
    console.log(...input);
    total = 0;
    for(let i of input){
        total += i;
    }
    console.log(total);
}

myFunc(1,5,6,3.7,8,6);
*/

/*
function func(a, b, ...c) {
    console.log(`${a}, ${b}`);;
    console.log(...c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('shubhankar'));
}

func('nishan', 'gourab', 'suman', 'raju', 'shubhankar');
*/


/* ************************************************************************************************************************** */


// For of loop => The JavaScript for/ of statement loops through the values of an iterable objects.

// iterable objects are Array and String

/*

// For Array
const arr = ['nishan', 'gourab', 'suman', 'raju', 'shubhankar'];

for(item of arr){
    console.log(item);
}
*/

// For String

/*
for(items of "Nishan"){
    console.log(items);
}
*/


/* *************************************************************************************************************************** */


// For in loop => It allows us enumeration the properties of an object.

// Enumerable means "countable" , It simply means that look out the properties of an Object.

/* 
const datas = {
    name: "Nishan",
    age: 25, 
    email: "nishansarkar100@gmail.com"
}

for(count in datas){
    console.log(count);
}
*/



/* ******************************************************************************************************************** */
