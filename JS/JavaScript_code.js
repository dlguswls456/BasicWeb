let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log("first num: ", num1);
console.log("second num: ", num2);
console.log("added num: ", sum);

let age;
age = 25;
console.log("age: ", age);

age = 30;
console.log("re age: ", age);

const pi = 3.14;
// pi = 3.15; // error
console.log("pi: ", pi);

let number = 1;
console.log("type of number: ", typeof number);

let name = "John";
console.log("type of name: ", typeof name);

let isTrue = true;
console.log("type of isTrue: ", typeof isTrue);

if (age >= 18) {
    console.log("You are adult");
} else if (age >= 16) {
    console.log("You will be adult soon");
} else {
    console.log("You are child");
}

for (let i = 0; i < 5; i++) {
    console.log("i: ", i);
}

let i = 0;
while (i < 5) {
    console.log("i: ", i);
    i++;
}

do {
    console.log("i: ", i);
    i--;
} while (i > 5);

const color = ["red", "green", "blue"];
for (let i = 0; i < color.length; i++) {
    console.log("color", i, ": ", color[i]);
}

function add(a, b) {
    return a + b;
}

function great(name) {
    console.log("Hello ", name);
}

console.log("add: ", add(5, 10));
great("John");

let greet2 = function (name) {
    console.log("Hello", name);
};
greet2("John2");

let nameandage = (name, age) => {
    console.log("Name", name, "Age", age);
};
nameandage("John", 25);

function calcArea(radius) {
    return 3.14 * radius ** 2;
}
console.log("Area: ", calcArea(5));

let filterShortWords = (words) => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 5) {
            result.push(words[i]);
        }
    }

    return result;
};

let words = ["apple", "banana", "orange", "kiwi"];
console.log("Short words: ", filterShortWords(words));

let lastElem = words.pop();
console.log("Pop: ", lastElem);

let numbers = [1, 2, 3, 4, 5];
let evenNums = numbers.filter((elem) => elem % 2 == 0);
console.log("Even numbers: ", evenNums);

const person = {
    name: "HJ",
    age: 25,
    job: "developer",
};

console.log("Name: ", person.name);

const student = {
    name: "HJ",
    age: 25,
    major: "Computer Science",
    grades: [85, 90, 70],
    calculate: function () {
        let sum = 0;
        sum = this.grades.reduce((total, grade) => total + grade, 0);

        return sum / this.grades.length;
    },
};

console.log("Average: ", student.calculate());
