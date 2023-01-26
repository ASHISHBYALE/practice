// let firstName = 'ashish'
// console.log(firstName)
// console.log(typeof firstName)
// let x = 10
// console.log(typeof x)
// let canDrive = true
// console.log(typeof canDrive)

// let names = ["ashish", "ramesh", "akash", "mayur"] //array to pass one and more elements
// console.log(names)
// console.log(names.length)  // property
// console.log(names[1])   // to get particular element on that index  // indexof[]
// console.log(names[2])

// // for ( let i=0 ; i<=3 ;i++){    //for loop
// //     console.log(names[i])
// // }
// let i = 0
// while (i <= 3) {
//     console.log(names[i])        //while loop
//     i++
// }


//java script is object oriented language
// there are all are object
//and it has property ===>  
//and method()=====> action and gate retun


// let fruits = ["apple", "banana", "grapes", "mango"]
// let q1 = fruits.length
// console.log(q1)


//method
//Push() 
//action===> add the element at last
//return===> new length of array

// let q2 = fruits.push("cherry")
// console.log(fruits)
// console.log(q2)


//pop()
//action===> remove  the element at last
//return===> same as removed element
// let q3 = fruits.pop()
// console.log(fruits)
// console.log(q3)


//unshift()
//action===> add the element at start
//return===> new length of array
// let q5 = fruits.unshift('papaya')
// console.log(fruits)
// console.log(q5)

//shift()
//action===> remove  the element at first
//return===> same as removed element
// let q6 = fruits.shift()
// console.log(fruits)
// console.log(q6)


// let cities = ['pune', 'solapur', 'satara', 'nashik']
// for (i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }
// //reverse
// let w = cities.reverse()
// console.log(w)


// // includes() to find out element in the array
// let E = cities.includes('pune')
// console.log(E)

// //indexOf    to find out index no
// let q = cities.indexOf('solapur')
// console.log(q)

// //join
// let a = ['ashish', 'byale', 9049906241]
// let b = a.join(' ')
// console.log(b)


//let aa = 'ashish amit snehal'


//let uu = aa.split(' ')// converts string into array
//console.log(uu)



//program-1    age 

// let birthday = [1990, 1991, 1992, 1993]
// let ages = []
// for (let i = 0; i < birthday.length; i++) {
//     let age = 2023 - birthday[i]
//     ages.push(age)
// }
// console.log(ages)     


//program-2

// let age = [11, 22, 33, 44, 45, 47, 48, 50, 56]
// let above40 = []
// let below40 = []
// for (let i = 0; i < age.length; i++) {
//     if (age[i] > 40) {
//         above40.push(age[i])
//     }
//     else {
//         (age[i] < 40)
//         below40.push(age[i])
//     }
// }
// console.log(above40)
// console.log(below40)


// //program-3

// let addition=[11,22,33]
// let total=0
// for(let i=0; i<addition.length ; i++){
//     total =total+ addition[i]
// }
// console.log(total)

// //program-4

// let namesA=['ashish','akash','nutan','vikas']
// for(let i=0;i<namesA.length;i++){
//     console.log('welcom  '+ namesA[i])
// }

// let birtYear=[1990,1991,1992,1993]
// let q1=birtYear.map(function(el,index,arr){
//     return 2023-el
// })
// console.log(q1)


let marks = [40, 45, 48, 46, 20, 25, 24, 23]
let q2 = marks.filter(function (el, index, arr) {
    return (100- el)
}
)
console.log(q2)



// //flat method to convert all element into single array
// let number=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(number[1][2])
// console.log(number.flat())