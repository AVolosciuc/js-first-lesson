// const name = 1;
// let name1 = "string";
// let name2 = true;
// let name3 = false;
// let name4 = null;
// let name5 = undefined;

// console.log(name1);
// var name2 = 3;

// name = "salut";
// name1 = "salut";


// console.log(name);
// console.log(name1);

// let score = null;

// let ion = "2";
// let vasea = 4;

// score = ion + vasea
// console.log(score);

// console.log(typeof ion);

// const nume = "Volosciuc"
// const prenume = "Ana"

// console.log(nume + " " + prenume);


// let a = "ana";
// let b = 5;
// console.log(a + " " + b);

// alert ("hello")


// prompt ("what is your name")

// let number = 5;
// number += 10;
// console.log(number);


// const a = 2;
// const b = 3;
// if (a > b) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (a > 10) {
//     console.log("incorect");
// } else if (a === "2") {
//     console.log("sunt egale");
// } else {
//     console.log("Error"); 
// }

// const c = 10;
// const e = 20;


// if (c === 10 || e === "20") {
//     console.log("sunt egale");
// } else {
//     console.log(" nu sunt egale");
// }


// let fruit = "apple";
//     fruit =  "orange";
// switch (fruit) {
//     case "orange":
//             console.log("orange $0.59");
//         break;
//     case "apple":
//             console.log("apple $1.59");
//         break;
//     case "banana":
//             console.log("banana $2.59");
//         break;
//     default:
//         break;
// }


// let i = 1;

// while (i > 0) {
//     console.log(i);
//     i += 1;
// }

// let i = 1;

// do {
//     console.log(i);
//     i += 1;
// } while (i <= 5);


// for (let i = 0; i <= 5; i++) {
//    console.log(i);
    
// }

// let array = [
//     "patru",
//     "unu",
//     "doi",
//     "trei",
//     "patru",
//     "cinci"
// ];

// array.forEach(el => {
//     if (el.includes ("patru")) {
//         console.log(el);
//     }
// });


const first_number = prompt("First number");
const operator = prompt("mathematical operator");
const second_number = prompt("Second number");

if (operator === "+") {
    console.log(Number(first_number) + Number(second_number));
} else if (operator === "-"){
    console.log(Number(first_number) - Number(second_number));
}else if (operator === "*"){
    console.log(Number(first_number) * Number(second_number));
}else if (operator === "/"){
    console.log(Number(first_number) / Number(second_number));
}else if (operator === "**"){
    console.log(Number(first_number) ** Number(second_number));
}else {
    alert("eeeeerrrrrrrrrrooooooooooor")
}


