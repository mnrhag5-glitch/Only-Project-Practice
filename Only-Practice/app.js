//mere purani practice wala folder delete ho gya hai usme koi 1500+ lines thi.
//to ab shuru se shuru krte hai-----------------

//---------set time out method----------

// console.log('learning coding');

// setTimeout(()=>{
//     console.log('learning Asynchronous JavaScript');

// },2000)
// console.log('hello world');

//---------callback--------------------



// let arr=[1,2,3,4,5,6];

// arr.push(7,8,9);
// arr.pop('9');
// arr.unshift(-1,0);
// arr.shift();

// console.log(arr);



// function small(){
// console.log('small function');
// }

// function big(fn){
//     console.log('big function'); 
//     fn();
// }

// big(small);


//------------------------------

// function outer(){
//     console.log('outer function');

//     function inner(){
//         console.log('inner function');
//     }
//     return inner;
// }
// outer();



// let arr=['apple','banana','grapes','orange'];
// arr.forEach((item,index)=>{
//     console.log(item,index);
// })

// let arr=[1,2,3,4,5,6];
// arr.forEach((i,index)=>{
//     console.log(i ,'=>',index);
// })




// let arr =[1,2,3,4,5,6,7,8,9,10];
// let result=arr.map((item,index)=>{
// return item*2
// })
// console.log(result)

// let arr =[1,2,3,4,5];
//  arr.forEach((item,index)=>{
//     console.log(item,'=>',index)
// })


// let arr=[1,2,3,4,5];
// let result=arr.map((item,index)=>{
//     return item*item*item;
// });
// console.log(result);


// let arr = [10,22,30,33,40,55];
// let newarr=arr.filter(function(item,index){
//     if(item%10===0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(arr)
// console.log(newarr)


// let numbers=[2,4,5,7,8,2,1,9]
// let double=numbers.map((item,index)=>{
//     return item*2
// })
// let newval=double.filter((item,index)=>{
// if(item>10){
//     return true
// }else{
//     return false
// }
// })
// console.log(numbers)
// console.log(double)
// console.log(newval);


// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.map(function (item) {
//     return item * 2
// }).filter(function (item) {
//     return item > 10
// });

// console.log(result);



// function processArray(arr) {
//   return arr
//     .map(num => num * 2)      // double each value
//     .filter(num => num <= 10) // keep values ≤ 10
// }

// const processArray = arr => arr.map(n => n*2).filter(n => n<=10);
// console.log(processArray([1, 3, 6, 8]));


// let arr = [5,10,20,35,40,55,60];
// let out = arr.every(function(item,index){
// console.log("checking")
// return item%10===0})
// console.log(out)

// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(e){
//   e.preventDefault(); // page reload rokta hai
//   console.log("Form Submitted");
// });

// const input = document.getElementById('username');

// input.addEventListener('input', function(){
//   console.log("Typing:", input.value);
// });


const input = document.getElementById('name');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  console.log(input.value);
});