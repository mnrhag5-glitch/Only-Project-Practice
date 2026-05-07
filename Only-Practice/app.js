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


// const input = document.getElementById('name');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//   console.log(input.value);
// });



// let num = '';
// let user = prompt('checking even or odd');
// if(user%2==0){console.log('even');
// }else{console.log("odd")}






// const number = [1,2,3,4,5];
//  const result=number.reduce((a,b)=>{
//     return a+b
// },10)
// console.log(result);


// const num = [1,2,3,4,5,6,7];

// let result = num.filter((a) => {
//     return a % 2 === 0;
// });

// console.log(result);



// function res(odd){
// return odd % 2 !== 0;
// }

// console.log([1,2,34,5,6,7,8,9,].filter(res));



// let name = ["sam","mav","vohara"]
// let res = name.map(n => n.toUpperCase())

// console.log(res)

// function isEven(num){
//   return num % 2 === 0;
// }

// console.log([1,2,34,5,6,7,8,9].filter(isEven));



//===========================================================
//------------learning API------------------------
//============================================================



//--- to api ko example se smjhte hai ---
// man lo ki hm coustomer hai jo waiter ko order deta hai --
//or waitor kichan se khana leke ata hai---
//ese hi ham frontend developer api ko order dete hai ki --
//server se hmare liye data leke aooo------
//api json format me hota hai kuch kuch objact ki trh hota hai----
//api calll krne ke liyea fatch ki help li jati hai-----
//examples----cricket score pta krna---
//---weather ka pta krna-----


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))


//--------------then ka use hai ki jab kaam complete ho jaye tab ye karo-------------
//---fetch server se data mangta hai or time lgta hai to "then"---
//---wait krta hai jab tak data na aa jaye---
//---phir next kaam krta hai----
//--simple  word me then future me milne wale result ko handle krta hai---




//   async function getUsers(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }

// getUsers();

//-------async await .then ka easy version hai-------

// async function getUsers(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   data.forEach(user => {
//     console.log(user.address);
//   });
// }

// getUsers();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>Response.json())
// .then(data=>console.log(data));


// async function hello(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
// }
// hello();



// async function hello (){
//     let resonse = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await resonse.json()
//     console.log(data);
    
// }
// hello()



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>console.log(data))

// async function hello(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data)
// }
// hello();

// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//     data.forEach((a)=>{
//     console.log(a.e)
//     })
// }
// hello();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>

// data.forEach((a)=>{
// console.log(a.username)
// }))

// let userInfo="";
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//     {userInfo = data
//         console.log(userInfo);
        
//     })

// let userInfo="";
// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json()
//    userInfo = data;
// //    console.log(userInfo);
//    userInfo.forEach((a)=>{
//     console.log(a.username , a.email)
//    })
   

// }

// hello();


//-=============================================
//==============================================
//============REVESION CODE======================
//--===============================================
//================================================


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data)
// )



// let userInfo = "";
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//   {userInfo = data;
//   console.log(userInfo)
//   userInfo.forEach((a)=>{
//     console.log(a.username,a.email)
//   }) })




// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json();
//     console.log(data)
// }  
// hello();



// let user = "";
// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json();

//     user = data;
//     console.log(user)
//     user.forEach((a)=>{
//   console.log(a.address )
//     })
 
// }  
// hello();




/////==============TEST=====================
//===========================================
//=============================================


// API SE USER FETCH KRO OR SB USER KE NAAM PRINT KRO=========

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data =>console.log(data)


// )


//====jinke naam a se start hote unh eprint kro====(startsWith)
//====jinke naam e se end hote unhe print kro=====(endsWith)
//====jinke naame me koi words include hai use print kro===(includes)

// let user = ""
// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     user = data
//   user.forEach((a)=>{
// if(a.username.endsWith("e")){
//     console.log(a.username);   
// }
//   })   
// }   

// hello()



//===make a new arrey with only emails===========

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data =>

//    { let onlyEmail = data

// // console.log(onlyEmail);
// let emails = onlyEmail.map((a)=>{
// return a.email


// })
// console.log(emails);



//    }
// )




// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//    let email = data.map((a)=>a.email)  
//you can do it in console too
// console.log(data.map((a)=>a.email));

// let email = data;
// email.forEach((a)=>{
// if(a.email.endsWith("biz")){
//     console.log(a.email);
    
// }

// })


// }

// hello();


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();

//     let emails = data
//         .filter(a => a.email.endsWith(".biz"))
//         .map(a => a.email);

//     console.log(emails);
// }

// hello();


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data.length);   
// }
// hello();

//=========enough for today kal iska revision hoga or again test==============



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//     data.forEach((a)=>{
//         console.log(a.email);
        
//     })
// )



// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     // console.log(data);
     
// data.forEach((a)=>{
//    if(a.username.startsWith("K")){
//     console.log(a.username)
//    }
// })


// }
// hello()



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//   {let emails=data.map((a)=>{
//     return a.email
//   })
// console.log(emails);

// }
// )





//======to resvison ho gya==========
//======today topic is synchor asyncho promis try catch-====================
//======================================================
//=================================================
//=================================================
//=================================================
//=================================================



//===synchorous============>>>>>>>>>>

//SYNCHRNOUS ka matlb hai ki line by line kaam krna
//or ASYNCHRONOUS  ka matlb hai ki background me bhi kaam chlta rehga


// console.log("5");
// setTimeout(()=>{
//     console.log("8")
// },2000)

//====this is asynchrounous
// console.log("7899")
// console.log("7899")
// console.log("7899")


//=====Promise===============

//ye 3 state me hota hai====
// pending   resolved   rejected

// let promise = new Promise((resolve, reject) => {
//     let done = true;

//     if(done){
//         resolve("Kaam ho gaya");
//     }else{
//         reject("Error aagya");
//     }
// });

// console.log(promise);

// try{
//     console.log(a);
// }
// catch(error){
//     console.log("Error aagya");
// }



// try{
//     console.log(a); 
// }
// catch(error){
//     console.log("arror aaya")
// }


async function hello(){

    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await res.json();

        console.log(data);

    }catch(error){

        console.log("Error aagya");

    }

}

hello();