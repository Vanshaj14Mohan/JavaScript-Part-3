let fruits = ["mango", "apple", "banana", "litchi", "orange", "peach", "guava"];

for(i =0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

//for odd case ->
// for(i =1; i<fruits.length; i = i+2){
//     console.log(i, fruits[i]);
// }

//for even case ->
// for(i =0; i<fruits.length; i = i+2){
//     console.log(i, fruits[i]);
// }



//for reverse case
// for(i =fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

console.log("Nested arrays");
let numbs = [["ab", "cd", "ef"], ["gh", "ij", "kl"]];
for(let i =0; i<numbs.length; i++){
    console.log(numbs[i]);
    for(let j =0; j<numbs[i].length; j++){
        console.log(`j = ${j}, ${numbs[i][j]}`);
    }
}  

let students = [["Alex", 90], ["Matt", 92], ["George", 91]];
for(let i =0 ; i<students.length; i++){
    console.log(`Info of students: #${i}`);
    //for values
    for(let j = 0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}