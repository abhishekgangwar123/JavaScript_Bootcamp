// // for loop-------------------------------------------------------------

// for (let i = 0; i < 6; i++) {
//     // console.log(i);
// }

// // PGM to add first n natural number

// sum = 0;
// const n = parseInt(prompt('enter the value of n'));
// for (let i = 0; i < n; i++) {
//     sum += (i + 1)
// }
// console.log("sum of first natural number is" + sum);

// for-in loop----------------------------------------------------------------

// let obj = {
//     abhishek: 20,
//     rishi: 34,
//     rohan: 12,
//     shiv: 45
// }

// for (let a in obj) {
//     console.log("marks of " + a + " are " + obj[a]);
// }

// for-of loop------------------------------------------------------------------

// //in this after of the content should be string
// for (let b of "abhishek")
// console.log(b );

// while loo---------------------------------------------------------------------

// let n = prompt('enter the value of n');
// n = Number.parseInt(n);
// let i = 0;
// while (i < n) {
//     console.log(i);
//     i++;
// }

// d0-while loop----------------------------------------------------------------

let n = prompt('enter the value of n');
n = Number.parseInt(n);
let i = 0;
do{
    console.log(i);
    i++;
}while (i < n)