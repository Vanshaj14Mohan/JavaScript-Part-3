//to print numbers from 1-100
console.log("Using For Loop")
for (i = 1; i<=10; i++){
    console.log(i);
}

//Reverse print
console.log("Reverse print")
for(i = 5; i>=0; i--){
    console.log(i);
}

//Print odd numbers from 1-15
console.log("Odd numbers")
for(let i =1; i<=15; i =i+2){
    console.log(i);
}

//for reverse case
console.log("reverse odd case")
for(let i =15; i>=1; i = i-2){
    console.log(i);
}

//Print even numbers from 2-20
console.log("Even numbers")
for(let i =2; i<=20; i = i+2){
    console.log(i);
}

//for reverse case
console.log("Reverse even case")
for(let i = 20; i>=2; i = i-2){
    console.log(i);
}

//Print multiplication table
// console.log("Table of 5");
// for(let i =5; i<=50; i = i+5){
//     console.log(i);
// } or another way to write this
console.log("Table of any number")
let n = prompt("Enter a number");
n = parseInt(n);
for(let i =n; i<=n*10; i=i+n){
    console.log(i);
}

//Nested Loops;
console.log("Nested loop");
for(i = 1; i<=3; i++){
    console.log(`Outer Loop, ${i}`)
    for(j =1; j<=3; j++){
        console.log(j);
    }
}

//While Loop
