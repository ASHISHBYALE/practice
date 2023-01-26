// console.log(Math.floor(12.5))  // to print nearest lowest value
// console.log(Math.floor(46.8))
// console.log(Math.ceil(15.7))// to print nearest highest value
// console.log(Math.ceil(27.4))
// console.log (Math.round(25.67))// to print round off value
// console.log (Math.round(17.37))
// console.log(Math.floor(-12.5))  // to print nearest lowest value
// console.log(Math.floor(-46.8))
// console.log(Math.ceil(-15.7))// to print nearest highest value
// console.log(Math.ceil(-27.4))
// console.log (Math.round(-25.18))// to print round off value
// console.log (Math.round(-17.17))
// console.log(Math.random())

// console.log(Math.random()*5)
// console.log(Math.floor(Math.random()*5)+1)

let randomnum=Math.floor(Math.random()*5+1)
console.log(randomnum)


// console.log(Math.floor(-15.25))
// console.log(Math.ceil(-18.85))
// console.log(Math.round(-15.25))
// console.log(Math.round(-15.95))
// console.log(Math.random())
// console.log(Math.random()) * 5

// let randomnum = Math.floor(Math.random() * 5) + 1
// console.log(randomnum)
// for (let i = 1; i <= 5; i++) {
//    let userInput = prompt("please enter the numer between 1-5")

//   if (userInput == randomnum) {
//        console.log('guess is correct')
//     }
//     else {
//         console.log('guess is not correct')

//     }
//  }


//  let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) //4

// //for (let i = 1; i <= 3; i++) {
//     let userInput = Number(prompt("Please enter the number between 1-5"))
//     if (userInput == randomNumber) {
//         console.log('Guess is correct')
//     }
//     else {
//         console.log('Guess is incorrect')
//     }

//     // console.log('good morning')
// //}





// let num = Math.floor(Math.random() * 5) + 1
// console.log(num)
//     let userInput = Number(prompt("please enter no between 1-5"))
//     if (userInput == num){
//         console.log('guess is correct')
//     }
//         else {
//             console.log('guess is not correct')
//         }
//     }


//for 5 chance -for loop
// let num = Math.floor(Math.random() * 5) + 1
// console.log(num)
// for (i = 1; i <= 5; i++) {
//     let userInput = Number(prompt('please enter num between 1-5'))
//     if (userInput == num) {
//         console.log('guess is correct')
//     }
//     else {
//         console.log('guess is not correct')
//     }
// }


//for 5 chance -ternory opertor
// let num = Math.floor(Math.random() * 5) + 1
// console.log(num)
// for(i=1 ; i<=5 ;i++){
//     let userInput = Number(prompt('please enter num between 1-5'))
//     userInput == num ? console.log('guess is correct'): console.log('guess is not correct')
// }


// for 5 chance -for loop with break      
// let num = Math.floor(Math.random() * 5) + 1
// console.log(num)
// for (i = 1; i <= 5; i++) {
// //     let userInput = Number(prompt('please enter num between 1-5'))
// //     if (userInput == num) {
// //         console.log('guess is correct')
// //         break
// //     }
// //     else {
// //         console.log('guess is not correct')
// //     }
// // }



// // let num=Math.floor(Math.random()*5+1)
// // console.log(num)
// // let userInput
// // while (userInput!=num)
// // userInput=Number(prompt('Enter no between 1-5'))
// //     if (userInput===num){
// //         console.log('guess is correct')
// //     }
// //     else{
// //         console.log('guess is not correct')
// //     }


// // do while
// let i=1
// do{
//     console.log(i)
//     i++
// }
// while(i<5)


// let randomnumber=Math.floor(Math.random()*5+1)
// console.log(randomnumber)
// let userInput
// while(userInput != randomnumber){
//     userInput = Number(prompt('guess the number'))
//     if(userInput==randomnumber){
//         console.log('guess is correct')
//     }
//     else {
//         console.log('guess is not correct')
//     }
//     }


let randomnumber = Math.floor(Math.random() * 5 + 1)
console.log(randomnumber)
let userInput
do {  
 userInput=Number(prompt('guess the number'))
    if (userInput === randomnumber) {  
        console.log('guess is correct')  
        break
    }  
    else {
        console.log('guess is not correct')
    }
}
while( userInput != randomnumber) 



// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) //4
// let userInput
// while (userInput != randomNumber) {
//     userInput = Number(prompt('Enter number between 1-5'))
//     if (userInput === randomNumber) {
//         console.log('guess is correct')
//         break;
//     }
//     else {
//         console.log('guess is incorrect')
//     }
// }