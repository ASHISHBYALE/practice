// console.log('BYALE')
// let a=10
// a=30
// console.log(a)

// let c=40
// let d=50
// console.log(c+d)
// console.log(d-c)

// //arithmetic operator
// // +,-,*,/,%

// //function
// //function with parameter without return
// function sum(c,d){
//     console.log(c+d)
//     console.log(d-c)
// }
// sum(2,9)
// sum(5,8)


// //function without parameter without return

// function sum1(){
//     console.log(4*5)
// }
// sum1()
// sum1()

// //function without parameter with return type

// function sum2(){
//     return(2+3)
// }
// let q=sum2()
// console.log(q)
// console.log(q+9)
// console.log('************************************')

// //function with parameter with return type

// function sum3(c,d){
//     return(c*d)
// }
// let w=sum3(3,7)
// console.log(w)
// console.log(w+50)

//3 main types of function typing

//function declaration


// function  add(a,b){
//     console.log(a*b)
// }
// add(2,4)

// //function expression

// let add1=function(c,d){
//     console.log(c*d)
// }
// add1(6,3)

// // arrow function

// let add3=(e,f)=>{
//     console.log(e*f)
// }
// add3(15,20)




// let mother='PRABHAVATI'
// let father='malleshappa'
// console.log(father)     // TO PRINT             
// console.log(father.length)   // FIND TOTAL NO OF CHARACTERS
// console.log(father[father.length-1])  // TO FIND LAST CHARACTERS
// console.log(father[0])    // TO FIND FIRST CHARACTER
// console.log(father.startsWith('mall')) //STARTWTH
// console.log(father.endsWith('ppa'))  //ENDSWITH
// console.log(father.toUpperCase())   //TO MAKE CAPITAL
// console.log(mother.toLowerCase())   // TO MAKE SMALL LATTER
// console.log(mother.includes('BHA')) //INCLUDES
// console.log(mother.indexOf('T'))   /// TO FIND INDEX



//comparision operators   < ,> ,<= ,>= , != ,== ,!== ,===

// console.log(5>=9)
// console.log(7!==7)

//logical oprator   and ,  or , not  &&  , // , !

// console.log(true && true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)


// console.log(true || true)
// console.log(false || true)
// console.log(true || false)
// console.log(false || false)

// console.log(!false)

// let tk=6
// if(tk>5){
//     console.log('10% discount')
// }


// let student=2
// if(student<5){
//     console.log('class stop')
// }
// else {
//     console.log('calss start')
// }

// false ? console.log('hi'): console.log('bye')


// let score=209
// if(score>0 && score<=100) {
//     console.log('avg palyer')
// }
// else if(score>101 && score<=200){
//     console.log('good player')
// }
// else if(score>201 && score<=300){
//     console.log('excellent player')
// }   

// console.log('*************************')

// for(i=2 ; i<=20 ; i=i+2){  //0 2 4 6
//     console.log(i)  //0 2 4 6
// }

// console.log('*************************')

// for(i=3 ; i<=30 ; i=i+3){  
//     if(i==27){
//         continue
//     }
//     console.log(i) 
// }

// console.log('*************************')

// for(i=3 ; i<=30 ; i=i+3){  
//     if(i==15){
//         break
//     }
//     console.log(i) 
// }


// console.log('*************************')


// for (i=5 ; i<=50 ; i=i+5){
//     console.log(i)
//     if(i==20){
//         break}
// }

// console.log('*************************')

// // for (i=6 ; i<=60 ; i=i+6){
// //     console.log(i)
// //     if (i=36)
// //     continue
// // }

// for(i=3 ; i<=30 ; i=i+3){
//     console.log(i)
//     if(i==27)
//         continue
// }
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//     sum1 = sum + i
// }
// console.log(sum1)


// for (let i=6 ; i<=60 ; i=i+6){
//         console.log(i)
//         if (i==36)
//         continue
//     } 

//  for(let i=60; i>=6;i=i-6){
//     console.log(i)
//  }


// function sum(){
//    console.log(1+2)
// }
// sum()




// let birthyear = [1990, 1995, 1994, 2000, 1992, 2002, 2021]
// let age = []
// for (let i = 0; i < birthyear.length; i++) {
//    let q1 = 2023 - birthyear[i]
//    age.push(q1)
//    console.log(age[i])
// }
// console.log(age)


// let marks=[100,25,12,80,24,26,53,55,46,51,24,16,27,35,55,53,94]
// // console.log(typeof marks)
// let marksbelow50=[]
// let marksabove50=[]
// for (let i=0 ; i<marks.length ; i++){
//    if(marks[i]>=50){
//      marksabove50.push(marks[i])
//    }
//    else(marksbelow50.push(marks[i]))
// }
// console.log(marksabove50)
// console.log(marksbelow50)






//progrsm1

// let number=[25,26,28,15,10,13]
// let numb=number.map(function(el,index,arr){
//    return el+10
// })
// console.log(numb)


// let mark=[100,156,120,122,145,41,12,13,15,188,156,14,188]
// let marks=mark.filter(function(el,index,array){
//    return el>100
// })
// console.log(marks)

// let NUM=[11,22,33]
// let num1=NUM.reduce(function(accumulator,el,indwx,array){
// return accumulator+el
// },0)
// console.log(num1)



let marks=[45,10,55,14,76,95,97,45,43,55,58]
let above50=[]
for (let i=0; i<marks.length ; i++){
   if (marks[i]>50){
      above50.push(marks[i])
   }
}
console.log(above50)


let k=[12,15,25,14,10]
let sum=[]
for (let i=0 ; i<k.length ; i++){
   let sum1= 10+k[i]
   sum.push(sum1)
}
console.log(sum)

let total1=[11,22,33]
let total=0
for (let i=0; i<total1.length ; i++){
   total=total+ total1[i]
}
console.log(total)