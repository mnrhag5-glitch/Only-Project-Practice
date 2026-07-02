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


// async function hello(){

//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/users");

//         let data = await res.json();

//         console.log(data);

//     }catch(error){

//         console.log("Error aagya");

//     }

// }

// hello();



// let promise = new Promise ((res,rej)=>{

//     let internet = true;
//     if(internet){
//         res("youtube dekh skte ho")
//     }else{
//         rej("nhi dekh skte ja hotspot le")
//     }

// })
// console.log(promise);

// promise.then((msg)=>{
//     console.log(msg)
// })
// .catch((error)=>{
//     console.log("error")
// })

// let p = new Promise((res, rej)=>{
//     rej("Error");
// });

// p.catch((a)=>{
//     console.log(a);
// });


// let promise = new Promise((res,rej)=>{
// let food = true;
// if(food){
//     res("food is ready")
// }else{
//     rej("it takes time")
// }
// })
// console.log(promise);



// let pro = new Promise((res,rej)=>{
//    let skills = true;
//    if(skills){
//     res("you got the job")
//    }else{
//     rej("first learn skills")
//    }

// })
// try{
//     console.log(pro)
// }

//     catch(error)
// {console.log("error aya hai");}



//==============PRECTICE QUESTION=====================
//====================================================
//=======================================================
//=================================================
//=================================================


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");      //OUTPUT IS => A C B



// let p = new Promise((res, rej)=>{

//     let internet = true;

//     if(internet){
//         res("Connected");
//     }else{
//         rej("Disconnected");
//     }

// });

// p.then((msg)=>{
//     console.log(msg);
// });

//=============OUTPUT =>  CONNECTED

// try{
//     console.log(age);
// }
// catch(error){
//     console.log("Error handle ho gaya");
// }

//=======OUTPUT => ERROR HENDLE HO GYA



// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();
//     console.log(data)

//    let result = data.filter((a)=>{
//     if(a.username.length>8){
//         console.log(a.username);
        
//     }
//    })
// }

// hello();


//===============one more way===============

// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();
//     console.log(data)

// let result = data.filter((a)=>{
//     return a.username.length>8;
// })
// console.log(result)
// }
// hello();


//===================one mmore way==============


// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let result = data
//         .filter(a => a.username.length > 8)
//         .map(a => a.username);

//     console.log(result);
// }

// hello();



// function count(){
//     let num = 0;
//     return function(){
//         num++;
//         console.log(num);
        
        
//     }
// }
// let number = count()
// number()
// number()
// number()
// number()
// number()
// number()
// number()


// let pro = new Promise((res,rej)=>{
//     let food =true;
//     if(food){
//         res("food is ready")
//     }else{
//         rej("food is Not ready")
//     }
// } )
// pro
// .then((a)=>{
   
//     console.log(a);
    
// }).catch((error)=>{
// console.log("here error")})



// let pro = new Promise((res, rej)=>{

//     let food = false;

//     if(food){
//         res("food is ready");
//     }else{
//         rej("food is NOT ready");
//     }

// });

// async function hello(){

//     try{

//         let data = await pro;

//         console.log(data);

//     }catch(error){

//         console.log(error);

//     }

// }

// hello();



// let promise = new Promise((res,rej)=>{
//       let battery = true;
//       if(battery){
//      res("phone on");
        
//       }else{
//         rej("charge kro")
//       }
// })
// promise
// .then((p)=>{
//     console.log(p)
// }).catch((error)=>{
// console.log("error")
// })



// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     // console.log(data);
    
//     data.forEach((a)=>{
//        if( a.username.includes("e"))
//         console.log(a.username)
//     })
// }
// hello()







/////===========7/5/26==============================
//================================================
//================================================
//================================================
//================================================
//===========FOR REVISION=====================


/* =========================
   SYNCHRONOUS
========================= */

// console.log("1");
// console.log("2");
// console.log("3");


/* =========================
   ASYNCHRONOUS
========================= */

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");


/* =========================
   PROMISE BASIC
========================= */

// let promise = new Promise((resolve, reject) => {

//     let internet = true;

//     if(internet){
//         resolve("Connected");
//     }else{
//         reject("Disconnected");
//     }

// });

// console.log(promise);


/* =========================
   THEN & CATCH
========================= */

// let pro = new Promise((res, rej) => {

//     let food = false;

//     if(food){
//         res("Food is ready");
//     }else{
//         rej("Food is NOT ready");
//     }

// });

// pro
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.log(error);
// });


/* =========================
   ASYNC / AWAIT
========================= */

// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     console.log(data);
// }

// hello();


/* =========================
   TRY CATCH
========================= */

// try{
//     console.log(age);
// }
// catch(error){
//     console.log("Error handled");
// }


/* =========================
   ASYNC + TRY CATCH
========================= */

// let foodPromise = new Promise((res, rej)=>{

//     let food = false;

//     if(food){
//         res("Food is ready");
//     }else{
//         rej("Food is NOT ready");
//     }

// });

// async function checkFood(){

//     try{

//         let data = await foodPromise;

//         console.log(data);

//     }catch(error){

//         console.log(error);

//     }

// }

// checkFood();


/* =========================
   FOREACH
========================= */

// let nums = [1,2,3,4];

// nums.forEach((a)=>{
//     console.log(a);
// });


/* =========================
   FILTER
========================= */

// let number = [1,2,3,4,5,6];

// let even = number.filter((a)=>{
//     return a % 2 === 0;
// });

// console.log(even);


/* =========================
   MAP
========================= */

// let arr = [1,2,3];

// let square = arr.map((a)=>{
//     return a * a;
// });

// console.log(square);


/* =========================
   STRING METHODS
========================= */

// let name = "Gautam";

// console.log(name.startsWith("G"));
// console.log(name.endsWith("m"));
// console.log(name.includes("ta"));


/* =========================
   API - PRINT USERNAMES
========================= */

// async function users(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{
//         console.log(a.username);
//     });

// }

// users();


/* =========================
   API - EMAILS USING MAP
========================= */

// async function emails(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let email = data.map((a)=>{
//         return a.email;
//     });

//     console.log(email);

// }

// emails();


/* =========================
   API - FILTER .biz EMAILS
========================= */

// async function bizEmails(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let result = data
//     .filter((a)=>{
//         return a.email.endsWith(".biz");
//     })
//     .map((a)=>{
//         return a.email;
//     });

//     console.log(result);

// }

// bizEmails();


/* =========================
   API - USERNAME LENGTH
========================= */

// async function longUsername(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{

//         if(a.username.length > 8){
//             console.log(a.username);
//         }

//     });

// }

// longUsername();


/* =========================
   API - USERNAME INCLUDES e
========================= */

// async function includesE(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{

//         if(a.username.includes("e")){
//             console.log(a.username);
//         }

//     });

// }

// includesE();


/* =========================
   CLOSURE
========================= */

// function outer(){

//     let name = "Gautam";

//     function inner(){
//         console.log(name);
//     }

//     return inner;
// }

// let result = outer();

// result();


/* =========================
   COUNTER CLOSURE
========================= */

// function counter(){

//     let count = 0;

//     return function(){

//         count++;

//         console.log(count);

//     }
// }

// let increase = counter();

// increase();
// increase();
// increase();

//=====OK HELLO AJ ME STUDY NHI KR PAUGA KYUKI MERE ANT KI DEATH HUI HAI IS 
//CHAKKAR ME MENE AJ CLASS BHI ATTEND NHI KI HAI

// console.log("today was bad and busy day so study start's from tomorrow");



// function person(naam , umar , jagah){
//      this.name = naam;
//      this.age = umar;
//      this.from = jagah;
// }
// let p1 =new  person("ram",21,"himachal")
// let p2 =new  person("sita",20,"himachal")
// console.log(p1);
// console.log(p2);



// class hello{
//    constructor(naam,umar,jagah){
//       this.name = naam;
//       this.age = umar;
//       this.from = jagah
//    }
// }
// let p1 =new hello("gautam",21,"delhi")
// let p2 = new hello("seju",21,"himachal")
// console.log(p1);
// console.log(p2);


// class hy{
//    constructor(){

//    }
//    yooo(){
//       console.log("hy this is a function name")
//    }
// }
// let hy1=new hy
// console.log(hy1)



// const cube = (n)=>n*n*n;
// console.log(cube(3));


// let id = setInterval(()=>{
//    console.log("Hi");
   
// },2000)

// setInterval(()=>{
//    clearInterval(id)
// },30000)



// async function hello(){}   //===>basic syntax 
//==async background me kaam krata hai or await kaam pura hone ka wait  krta hai.

//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await res.json();
//     console.log(result);
    
// }
// hello();



//------Question 1

// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let result = await res.json();

//      console.log(result.title);
    
// }
// hello();



//-------Question 2

// async function yoo(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await res.json();
  
//     console.log(data.completed)
// }
// yoo();



//------Question 3


// let h1 = document.createElement("h1");
// h1.innerText = ""
// document.body.appendChild(h1)


// async function hy(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     h1.innerText=(data[0].name)
// }
// hy();



//---------question 4

// let button = document.createElement("button");
// button.innerText = "Get Data"
// document.body.appendChild(button);


// button.addEventListener("click",()=>{
//     async function zoro(){
//         let res = await fetch("https://jsonplaceholder.typicode.com/comments");
//         let data = await res.json();
//         console.log(data);
//     }
//     zoro();
// })


//--------question 5


// let input = document.createElement("input");

// let button2 = document.createElement("button");
// button2.innerText = "click"
// document.body.appendChild(input)
// document.body.appendChild(button2);


// button2.addEventListener("click",()=>{
//     async function uii(){
//         let res = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`);
//         let data = await res.json();
//         console.log(data.name);

        
//     }
//     uii();
// })



////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================


// async function hello(){

// let res = await fetch("https://jsonplaceholder.typicode.com/users");
// let data = await res.json();
// console.log(data);

// data.forEach((user)=>{
// let div = document.createElement("div")
// let h2 = document.createElement("h2")
// let p = document.createElement("p")

// div.appendChild(h2)
// div.appendChild(p)

// document.body.appendChild(div)

// h2.innerText = user.name;
// p.innerText = user.email;  


// })



// }

// hello();







//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================


// console.log("start the test");



//--------question 1-------------------------------------

// let h1 = document.createElement("h1");
// h1.innerText = "Hello Gautam";
// document.body.appendChild(h1)


//-----------question 2-------------------------------------


// let btn = document.createElement("button");
// btn.innerText = "click";
// document.body.appendChild(btn)
// btn.addEventListener("click",()=>{
//    document.body.style.backgroundColor = "red"
// })


//----------------question 3----------------------------------


// let p = document.createElement("p");
// p.innerText = "this is paraghraph";
// let btn2 = document.createElement("button");
// btn2.innerText = "click";
// document.body.appendChild(p);
// document.body.appendChild(btn2)

// btn2.addEventListener("click",()=>{
//    p.remove();
// })


//-------------------question 4-------------------------

// let box = document.querySelector(".class");
// box.style.color = "blue"


//-----------------------question 5----------------------------------


// let li = document.querySelectorAll(".li");
// li.forEach((event)=>{
//    event.style.color = "green"
// })


//----------------------question 6-------------------------------


// let title = document.querySelector("#title");
// title.style.fontSize = "50px"


//----------------------------question 7-----------------------------

// let h2 = document.createElement("h2");
// h2.innerText = "This is h1 but i write it h2";
// document.body.appendChild(h2) 


//-------------------------question 8---------------------------------

// let h4 = document.createElement("h4");
// let p2 = document.createElement("p2");
// h4.innerText = "Hello";
// p2.innerText = "Gautam";
// document.body.appendChild(h4) 
// document.body.appendChild(p2) 


//-------------------------------question 9 -------------------------------

// let h5 = document.createElement("h5");
// h5.innerText = "h5 text change";
// document.body.appendChild(h5) 

// let btn3 = document.createElement("button");
// btn3.innerText = "text change"
// document.body.appendChild(btn3)

// btn3.addEventListener("click",()=>{
//    h5.innerText = "Welcome"
// })


//----------------------question 10-------------------------------

// let btn4 = document.createElement("button");
// btn4.innerText = "click here"
// document.body.appendChild(btn4)


// btn4.addEventListener("click",()=>{
//    console.log("Hello")
// })


//-------------------------question 11-------------------------------


// let input = document.createElement("input");
// let btn5 = document.createElement("button");
// btn5.innerText = "click in btn5"
// document.body.appendChild(input)
// document.body.appendChild(btn5)

// btn5.addEventListener("click",()=>{
//    console.log(input.value)
// })



//-------------------------------question 12---------------------


// let btn6 = document.createElement("button");
// btn6.innerText = "click in btn6"
// document.body.appendChild(btn6)

// btn6.addEventListener("mouseover",()=>{
//    document.body.style.backgroundColor = "yellow"
// })


//------------------------------------question 13-----------------------

// async function hello(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data = await res.json();
//    console.log(data)
// }
// hello()

//-------------------------------question 14--------------------------



// async function helloo(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data = await res.json();

//    data.forEach((user)=>{
      
//    console.log(user.username)
//    })
// }
// helloo()


//------------------------------question 15------------------------------


// let input = document.createElement("input");

// let button = document.createElement("button");

// button.innerText = "Get User";

// document.body.appendChild(input);

// document.body.appendChild(button);

// button.addEventListener("click", async ()=>{

//     let id = input.value;

//     let res = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     let data = await res.json();

//     let h1 = document.createElement("h1");

//     h1.innerText = data.name;

//     document.body.appendChild(h1);

// });






//------------------------------question 16------------------------------


// class Car {
//    constructor(brand,price){
//       this.brand = brand;
//       this.price = price
//    }

// }
// let car1 = new Car("BMW",5000000)
// let car2 = new Car("Royal-Roles",60000000);

// console.log(car1)


//-------------------------------question 17--------------------------


// let object1 = {
//    car :"BMW",
//    speed : 150,
//    price : 500000
// }

// let object2 = {
//    car : "TATA",
//    speed : 120,
//    price : 400000
// }
// console.log(object1)
// console.log(object2)


//-------------------------question 18-------------------------------


// class Carr {
//    constructor(brand,price){
//       this.brand = brand;
//       this.price = price
//    }

//    showPrice(){
//       console.log("car price is",this.price)
//    }

// }
// let car3 = new Carr("BMW",5000000)
// let car4 = new Carr("Royal-Roles",60000000);

// car3.showPrice()


//------------------------------question 20-------------------------

// function Animal(name,sound){
//    this.name = name;
//    this.sound = sound;
// }
// let dog = new Animal("dog","bark");

// console.log(dog)

//----------------------question 21--------------------------------


// class Animall
// { constructor(name,sound){
//    this.name = name;
//    this.sound = sound;
// }

// makeSound(){
//    console.log(this.name,"says",this.sound)
// }
// }
// let dogg = new Animall("dog","bark");



// dogg.makeSound()




//---------------question 22-------------------------------------

// class Animal{
//    constructor(name,sound){
//       this.name = name
//       this.sound = sound
//    }

//    method(){
//       console.log(this.name,"says",this.sound)
//    }
// }

// let ani = new Animal("dog","bakr")

// ani.method()


//---------------question 28-----------------------------

// let object = {
//    name:gautam,
//    age:22

 //hello:function(){
// console.log(this.name)
// }}
//  object.hello()
//-----------question 32-------------------

// a 
// c
// b

//-------------------question 33-------------------------

1
3
2


//------------------------question 34--------------------------

// setTimeout(()=>{
//    console.log("Hello")
// },2000)


//-------------------question 35----------------------------------

// let btn8 = document.createElement("button");
// btn8.innerText = "press";
// document.body.appendChild(btn8);

// btn8.addEventListener("click",()=>{
//    setTimeout(()=>{
//       console.log("Done")
//    },2000)
// })




//--------------callback ka q hai bro---------------------------


// function fetchData(){
//    setTimeout(()=>{
//       console.log("Data Loaded")
//    },3000)
// }

// fetchData()





// function step1(fn){{
//    console.log("please wait for image")
//    setTimeout(()=>{
//       console.log("image selected suyccessfully")
//       fn("selected image")
//    },4000)
// }}
// function step2(image,fn){
//    console.log("please wait filter to ${image}")
//       setTimeout(()=>{
//          console.log("filter applied")
//          fn("filter applied")
//       },2000)
// }
//   function step3(filter , fn){
//    console.log("please wait addinfg caption to ${filter}")
//    setTimeout(()=>{
//       console.log("caption added")
//       fn("caption image")
//    },5000)
//   }
//   function step4(){
//    console.log("filter uploading the %{caption}")
//    setTimeout(()=>{
//       console.log("image fimmally uploaded")
//    },3000)
//   }
//  step1(function (image){
//    step2(image, function(filter){
// step3(filter)
// {step4(captioned)}
//    })
//  })




//  let p1 = new Promise((resolve,reject)=>{
//    let data = "100 rupees"
//    let err = "this is error"
//    resolve(data)
//    reject(err)

//  })

//  p1
//  .then((data)=>{console.log(data)})
//  .catch((error)=>{
//    console.log(err)
//  }).finally(()=>{console.log("finally executed")})

// function task(time, message){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);
//     });
// }

// task(4000, "select image")
// .then(() => {
//     return task(2000, "apply filter");
// })
// .then(() => {
//     return task(5000, "add caption");
// })
// .then(() => {
//     return task(3000, "upload image");
// });



// let num = "25";
// let user = prompt("enter the number");
// while(user!==num){
//     user = prompt("try again")
// }
// console.log("very good")




// let api = "https://jsonplaceholder.typicode.com/todos"

// fetch(api)
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data)})


// let api = "https://api.tvmaze.com/search/shows?q=girls"
// fetch(api)

// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data[1].show.averageRuntime)})




// async function hello(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
//   let data = await res.json()
//   console.log(data)
// }
// hello()


// let api = "https://jsonplaceholder.typicode.com/todos"

// axios.get(api)
// .then((res)=>{console.log(res.data)})
// .catch((error)=>{console.log(error)})


// 
// const API="https://jsonplaceholder.typicode.com/todos"
// axios.get(API)
// async function todos() {
//   const resp = await axios.get(API);
//   console.log(resp.data);
// }

// todos()





// let api = "https://jsonplaceholder.typicode.com/todos"
// axios.get(api)

// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)
// }

// hello()





// let api = "https://jsonplaceholder.typicode.com/users"
 
// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)

//    for(let val of res.data){
//       console.log(val.name)
//    }
// }

// hello()
 




// let api = "https:jsonplaceholder.typicode.com/todos"
 
// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)

  
// }

// hello()
 

// let api = "https://jsonplaceholder.typicode.com/todos";

// async function hello(){

//     let res = await axios.get(api);

//     console.log("Total Todos:", res.data.length);

// }

// hello();


// console.log("today i was busy so no commit")





// let arr = [
//   "13063.png",
//   "204770.jpg",
//   "miles-morales-spider-man-artwork-digital-art-marvel-4000x5655-584.jpg"
// ];

// let index = 0;

// let img = document.querySelector(".images");

// img.src = arr[index];

// setInterval(() => {

//    index = (index + 1) % arr.length;

//    img.src = arr[index];

// },2000);


// let inp = document.querySelector('input')
// inp.addEventListener('keypress',(e)=>{
//    if(e.which === 13){
//       console.log(e.target.value);
      
//    }
// })


// let marks = {
//     math: 90,
//     english: 80,
//     science: 85
// };

// let max = Math.max(...Object.values(marks));

// console.log(max); // 90










//    let arr = [1,2,3,4,5,6]
//    let even = arr.filter((a)=>{
//       return a%2==0
//    })
// console.log(even);


// let arr =[1,2,3,4,5]
// let dbl = arr.map((a)=>{
//    return a*2
// }).filter((a)=>{
//    return a>5
// })

// console.log(dbl);





//----------------------------------prit Even numbers----------------------------

// let arr = [1,2,3,4,5];
// let even = arr.filter((s)=>{
//    return s%2==0
// })
// console.log(even);

//----------------------------------------------------------------------------------

//----------------------------------duoble number-------------------------------------



// let arr = [1,2,3,4,5];
// let dbl = arr.map((s)=>{
//    return s*2
// })
// console.log(dbl);

//-------------------------------------------------------------------------------------

//---------------------------------------sum of array-----------------------------

// let arr = [1,2,3,4,5];
// let sum = arr.reduce((a,b)=>{
//    return a+b
// })
// console.log(sum);


//-----------------------------------------------------------------------------

//----------------------------------------toUpperCase-----------------------------

// let names = ["ram","shyam","mohan"];
// let uppercase = names.map((a)=>{
//    return a.toUpperCase()
// })
// console.log(uppercase);

//---------------------------------------------------------------------------------

//---------------------------------largest number----------------------------------


// let nums = [12,5,8,20,1];
// let max = Math.max(...nums)

// console.log(max);


//-----------------------------------------------------------------------------

//-------------------------------------smallest number----------------------------------


// let nums = [12,5,8,20,1];
// let min = Math.min(...nums)

// console.log(min);


//-------------------------------------------------------------------------------

//---------------------------------------reverse string-----------------------------

// let str = "javascript";

// let rev = str.split("").reverse().join("");

// console.log(rev);



//-----------------------------------------------------------------------------------

//----------------------------------count fruit times------------------------------------

// let fruits = ["apple","banana","apple","orange","banana","apple"];
// let count = {};

// for(let fruit of fruits){
//     count[fruit] = (count[fruit] || 0) + 1;
// }

// console.log(count);
//-----------------------------------------------------------------------------------

//----------------------------------------even number ka sum-----------------------------

// let arr = [1,2,3,4,5];
// let even = arr.filter((a)=>{
//    return a%2==0
// }).reduce((a,b)=>{
//    return a+b
// })
// console.log(even);


//--------------------------------------------------------------------

//--------------------------------18 + users count kro----------------------------------


// let users = [
//   {name:"Aman", age:21},
//   {name:"Rohit", age:18},
//   {name:"Ram", age:17}
// ];

// let youger = users.filter((a)=>{

// return a.age>18
// }).length
// console.log(youger);

//-------------------------------------------------------------------------------

//---------------------------------age ka total sum nikalo-------------------------

// let users = [
//   {name:"Aman", age:21},
//   {name:"Rohit", age:18},
//   {name:"Ram", age:17}
// ];
// let sum = users.filter((a)=>{
//    return a.age>=18
// }).reduce((a,b)=>{
//    return a+b.age

// },0)
// console.log(sum);



//-----------------------------------------------------------------------

//-------------------------------squre nikale sbhi ka--------------------------

// let nums = [1,2,3,4,5];
// let qube = nums.map((a)=>{
//    return a*a
// })
// console.log(qube);


//-------------------------------------------------------------------------

//-------------------------------------




// console.log([] == false);
// console.log(typeof null);

// let a = 11, b = 22;

// let c = a + b + a++ + b++ + ++a + ++b;

// console.log(a);
// console.log(b);
// console.log(c);  


// function hello(n){
//    if(n>0){
//       hello(n-1)
//       console.log(n);
      
//    }
// }hello(10)


//--------------------factorial---------------------------------------------

// function hello(n){
//    if(n==1){
//       return 1;
//    }return n*hello(n-1)
// }
// let res = hello(5)
// console.log(res);




//-----------------------sum recursion-------------------------------

// function hello(n){
//    if(n==1){
//       return;
//    } return n+(n-1)
// }
// const res = hello(5)
// console.log(res);


// console.log("seju" - 100);


// let arr = [1,2,3,4,5];
//   arr.splice(5,0,6);
// console.log(arr);


// console.log(typeof(!NaN));


// console.log({}+[]);


 ///let arr =[15,10,30,40,5,10,30]


//  arr.sort((a,b)=>{
//    return b-a
//  })
// let newone = new Set(arr)
// console.log(newone);


// console.log(NaN===NaN);
// console.log(NaN==NaN);

// let a = 28;
// let b = 20;
// let res = a>b ? true : false;

// console.log(res);



// let arr = [12,23,23,34,10,19,10]
// let set = [...new Set(arr)]
// console.log(set);



// let arr = [12,23,23,34,10,19,10]
// let set =[...new Set(arr)]
// set.unshift(99);
// console.log(set);



// let arr = [12,23,23,34,10,19,10]
// arr.splice(1,1,13,14)
// console.log(arr);



// let ans = confirm("Are you 18+ ?");

// if(ans){
//     console.log("Welcome");
// }else{
//     console.log("Access Denied");
// }

// let a ;
// console.log(a);

// console.log("10"+100+20);  //1010020
// console.log(10+100+"20");  //11020



// console.log("10"+"5");   ///  5
// console.log(4-"10");   //-6
// console.log(4*"10");   //40
// console.log(50+20+"10");   //7010
// console.log("50"+20+"10");   //502010



// let arr = [300,8,400,9,500]
// arr.sort((a,b)=>a-b)
// console.log(arr);

// console.log(typeof(NaN));


// console.log(a);
// let a = 10
// // var a = 10



// console.log(a); //undiclare
// let b;
// console.log(b);  //undifine



// let arr = ["ram","sita", "laxman"]
// let res = arr.map((a)=>{
//    return a.toUpperCase()
// })
// console.log(res);


// function createHelloWorld(){
//     console.log("Hello World")
// }
// createHelloWorld();


// function hello(message,time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(message)
//         },time)
//     })
// }
// hello("message",2000)
// .then((data)=>{
//     console.log(data)
//     return hello("Login",3000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Fetch Profile",4000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Shoe dashboard",5000)})

// .then((data) => {
//     console.log(data);
// });





// function hello(message,time){
//    return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//          resolve(message)
//        },time)
//    })
// }

// hello("message",2000)
// .then((data)=>{console.log(data);
//    return hello("how are you",3000)
// })
// .then((data)=>{console.log(data);
//    return hello("i am good",2000)
// }).then((data)=>{console.log(data);
//    return hello("what about you",4000)
// })
// .then((data)=>{
//    console.log(data);
   
// })



// for(let i = 1; i<=500;i++){
//    console.log("Hello World");
   
// }


// try{
//    console.log("all good");
   
// }catch(error){
//    console.log("sommthing is wrong");
   
// }

// let set = new Set()
// set.add(10)
// set.add(11)
// set.add(12)
// console.log(set.size);
// console.log(set.has(34));
// console.log(set.has(12));
// set.delete(10)
// console.log(set.size);
// set.clear()
// console.log(set.size);

// let arr = [1,2,3,4]
// let max = Math.max(...arr)
// console.log(max);

// let a = 10;
// let b = 20;
// let sum = a + c;

// console.log(sum);

// let arr = [1,2,3,4,5,3,4,5]
// let removee = [...new Set(arr)];
// console.log(removee);


// let a = "hello" , b = 12 , c = true;
// console.log(a,b,c);

// let sum = 0
// for(let i = 1; i<15;i++){
//      sum = sum+i
// }
// console.log(sum);


// var arr = [1,2,3,4,5]
// let rev = []
// for(let i = arr.length-1;i>0;i--){
// rev.push(arr[i])
// }
// arr = rev

// console.log(rev);
// console.log(arr);


// let arr = [2,4,5,7,3,5,9,4,8]
// let real = [...new Set(arr)]


// let arrange = real.sort((a,b)=>{
//    return a-b
// })
// console.log(arrange);


// function sum(arr){
//    let summ = 0;
//    sum.forEach((a)=>{
//       summ = summ+a;
//    })
//    return sum
// }
// console.log();


// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     let output = "";

//     users.forEach(user => {
//         output += `<p>${user.name}</p>`;
//     });

//     document.getElementById("data").innerHTML = output;
// }

// getData();



// let obj = {
//    name:"ram",
//    address = {city:"delhi"}
// }
// let shallowCopy = obj.address.city


// let arr = [1,2,3]
// function sum(a,b,c){
//   return a+b+c
// } 
// // let a = sum(...arr)
// // console.log(a);
// console.log(sum(1,2,3));

// let a = [1,2,3,4,5,6]
// let b = a.map((val)=>{
//    return val 
// })
// console.log(b);


// let arr = [1,2,3,4,5]
// let res = arr.reduce((a,b)=>{
//    return a+b
// },1)
// console.log(res);

// console.log(1==="1");


// try{
//    console.log("all good");
   
// }catch(error){
// console.log("something wromg");

// }





//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------





//----------->>>>>>>>>  swaping




// let a = 10;
// let b = 20;

// function swap(){
// [a,b] = [b,a]
// return [a,b]}

// console.log(swap(a,b));








//------------>>>>>.  largest and smallest 



//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = Math.max(...num)
//  let smallest = Math.min(...num)
// console.log(smallest);
// console.log(largest);
















//---------------->>>>>>  second big element >>   


//  let num = [12,2,5,54,23,43,4,64,65,44,65,64]
// let remove = [...new Set(num)]
// console.log(remove);

//  let secondBig = remove.sort((a,b)=>{
//    return b-a;
//  })

//  console.log(secondBig[0]);
//  console.log(secondBig[1]);
//  console.log(secondBig[2]);
 



//---------------- reverse array =>>>>>>>>>>>>>.

//  let arr = [12,3,4,5,6,7];

//  let rev = []
// for(let i=arr.length-1 ;i>=0; i--){
//    rev.push(arr[i])
// }

// console.log(rev);






//----------------------------   Move 0 one side and 1 one side>>>>>>>>.


//   let arr = [0,1,1,0,1,0,0,1,1,0];


//   let side = arr.sort((a,b)=>{
//    return a-b;
//   })
// console.log(side);



// let arr = ["apple" , "litchi","mango", "grapes"]
// let alpha = arr.sort()
// console.log(alpha);




//--------------------->>>>>>>>>>>>>>>>>>>>>>>>>


// let arr = [1,2,3,4,5];  //5,1,2,3,4

// arr.unshift(arr.pop())
// console.log(arr);


// let arr2 = [1,2,3,4,5]    // 2,3,4,5,1

// arr2.push(arr2.shift())
// console.log(arr2);



//----------------------------------  spread ---

// let arr = [1,2,3,4,5]

// console.log(...arr);


//------------------------------ rest>>>

// function sum(...add){
//    console.log(add);

// }

// sum(1,2,3,4)


//---------------------- counter 1 bdhao>>>>

// function add(){
//    let count = 10;
//    function sum(){
//       count++;
//       console.log(count);
      
//    }return sum
// }
// let hy = add()
// hy()
// hy()
// hy()




//-------------------------- obj distructring ->>>>>>>>>>>>>

// let obj = {
//    name : "ram",
//    age : 22,
// }

// let {name,age} = obj;

// console.log(name);
// console.log(age);




//------------------- remove duplicate with filter >>>>>>>>>>>>


// let arr = [1, 2, 2, 3, 4, 4];

// let remove = arr.filter((a,b)=>{
//   return arr.indexOf(a) === b
// })
// console.log(remove);


//------------------------ reverse string ->>>>

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("gautam"));



//---------------------------*******************************************************************
//---------------------------*******************************************************************
//---------------------------*******************************************************************
//---------------------------*******************************************************************



//--------------- reverse

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse("hello"));




//-------largest number in aarrr--


// let arr = [2,5,1,9,3]
// let lar = arr[0]
// for(let i=1;i<arr.length; i++){
//    if(arr[i]>lar){
//       lar = arr[i]
//    }
// }

// console.log(lar);



//------------------- check vowel kitne hai---------


// let str = "javascript";
// let count = 0;
// for(let i = 0; i<str.length ; i++){
//    if("aeiouAEIOU".includes(str[i])){
//       count++
//    }
// }
// console.log(count);



//------------------------ remove duplicat from array--


// let arr = [1,2,2,3,4,4,5]
// let remove = arr.filter((a,b)=>{
//    return (arr.indexOf(a) ===b)
// })
// console.log(remove);




//-------------------------- second largest -----------------


// let arr = [10,20,5,30,25]
// let largest = arr[0]
// let Slargest = arr[0]
// for(let i=0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest=arr[i]
//    }
//    if(arr[i]>Slargest && arr[i] !== largest){
//       Slargest=arr[i]
//    }
// }
// console.log(largest);
// console.log(Slargest);



//------------------------------ merged two arr --


// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// let arr3 = [...arr1 , ...arr2]


// let output = [...new Set(arr3)]
// console.log(output);



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\----- largest word

// let words = ["cat", "elephant", "dog", "javascript"]

// let largest = words.reduce((a,b)=>{
//    return a.length > b.length ? a:b;
// })
// console.log(largest);



//-------------------------------- count even or odd----------


// let arr = [1, 2, 3, 4, 5, 6 , 8];

// let countForOdd = 0
// let countForEven = 0
// for(let i = 0; i<arr.length; i++){
//    if(arr[i]%2===0){
//      countForEven++}
//     else{
//       countForOdd++
//     }
//    }
// console.log(countForEven)
// console.log(countForOdd)




//------------------------------------ find only sum of even number


// let arr = [1, 2, 3, 4, 5, 6];

// let sumOfEven = 0
// for(let value of arr){
//    if(value%2===0){
//       sumOfEven+=value
//    }
// }
// console.log(sumOfEven);


// for(let i = 0;i<arr.length; i++){
//    if(arr[i]%2===0){
//       sumOfEven+=arr[i]
//    }
// }

// console.log(sumOfEven);



//---------------------------- count positive negative and zero---

// let arr = [2, -5, 0, 8, -1, 0, 10];

// let countpositive = 0
// let countNegative = 0
// let countZero = 0

// for(let i = 0; i<arr.length; i++){
//    if(arr[i]>0){
//       countpositive++
//    } else if(arr[i]<0){
//      countNegative++
//    }else if(arr[i]===0){
//       countZero++
//    }
      
// }
// console.log(countpositive);
// console.log(countNegative);
// console.log(countZero);


//--------------------------------- fincd mimimum number in array ---------

// let arr = [8, 3, 10, 5, 7];
// let minimum = arr[0]
// for(let value of arr){
//    if(value < minimum){
//       minimum = value
//    }
// }
// console.log(minimum);



//-------------------------- reverse the array -------------------------


// let arr = [1, 2, 3, 4, 5];
// let reverse = [];
// for(let i = arr.length-1;i>=0; i--){
//    reverse.push(arr[i])
// }
// console.log(reverse);


//-------------------------- find largest and smallesrt in single loop



// let arr = [8, 3, 10, -5, 7];
// let largest = arr[0]
// let smallest = arr[0]

// for(let i =0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest = arr[i]
//    }else if(arr[i]<smallest){
//       smallest = arr[i]
//    }

// }
// console.log(largest);
// console.log(smallest);


//------------------- fincd second largest nimber ------------

// let arr = [8, 3, 10, -5, 7];

// let largest = arr[0]
// let slargest = arr[0]

// for(let i = 0; i<arr.length;i++){
//    if(arr[i]<largest)
//    { slargest = largest
//       largest = arr[i]
//    }else if(arr[i]<slargest && arr[i]!==largest){
//       slargest = arr[i]
//    }
// }
// console.log(largest);

// console.log(slargest);




//--------------------- ---------------------


// let obj = {
//   name: "Ram",
//   address: {
//     city: "Delhi"
//   }
// };

// let deep = structuredClone(obj)
// deep.address.city = "Mumbai"
// console.log(obj);
// console.log(deep);



//------------------------- string or number ko alag alag kro 


//  let str = [1,2,3,"gautam","hy",4,5]
// let string = []
// let number = [];
// for(let value of str){
//    if(typeof value === "string"){
//       string.push(value)
//    }if( typeof value ==="number"){
//       number.push(value)
//    }
// }
// console.log(string);
// console.log(number);


//----------------------- closure ka exapmle------

// function add(){
//    let count = 0;
//    function hello(){
//       count++;
//       console.log(count);
      
//    }return hello
// }
// let sum = add()
// sum()
// sum()
// sum()

//---------------------------------------  call apply bind  ----

// let obj = {
//    name : "ram",
//    age : 22,
// }
//  hello= function (name,age){
//    console.log("hello" + " " + this.name);
//    console.log(name,age);
   
// }

// hello.apply(obj,["shayam",45])


///--------------------------------------- remove duplicate == 

// let arr = [1,2,3,4,4,5,4,5,6,7,8,4,4,4,4,5,6,7,5,8,9,5,1,10]

// let remove = arr.filter((a,b)=>{
//    return (arr.indexOf (a)=== b)


// })
// console.log(remove);



//---------------------- find longest in arr 


// let arr = [1,2,3,4,5,6,7,8]
// let longest = arr[0]
// for(let value of arr){
//    if(value>longest)
//       longest = value
// }
// console.log(longest);


// let long = Math.max(...arr)
// console.log(long);




//--------------------- how can two obj into arry



// /------------- fincd longest word in sentence ----

// let sentence = "hy my name is gautam ";
// let longest = sentence.split(" ").reduce((a,b)=>{
//    return a.length > b.length ? a:b
// })
// console.log(longest);

//----------------------------- how to merge string alternatvie---

// let str1 = "ram"
// let str2 = "sita"
// let both = ""
// for(let i=0; i<str1.length || i<str2.length; i++){
//    if(str1[i]) both +=str1[i]
//    if(str2[i]) both += str2[i]
// }
// console.log(both);




//---------------------------   classes ====

// class yoo {
//    constructor(name,age){
//       this.name = name;
//       this.age = age;
// console.log("hello" + this.name);

// }}

// let newObj = new yoo("ram" , 22)
// console.log(newObj);





//-------------------------------  Recursion test-----


// function print(n){
//    if(n===0) return 0;
//    console.log(n);
//    print(n-1)
   
// }
// print(5)

// function print(n){
// //    if(n===0) return 0;
// //    print(n-1)
// //    console.log(n);
   
// // }
// // print(5)


// let arr = [1,2,3,4,5]
// let sum = arr.reduce((a,b)=>{
//    return a+b;
// },10)
// console.log(sum);


// function sum(n){
//    if(n===0) return 0;
//    return n + sum(n-1)
// }
// console.log(sum(5));


// function fact(n){
//    if(n===0) return 1;
//    return n * fact (n-1)
// }
// console.log(fact(5));


// function fibonacci(n){
//    if(n<=1) return n;
//    return fibonacci (n-1) + fibonacci (n-2)
// }
// console.log(fibonacci(6));


// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"));




// function sumOFDigit(n){
//    if(n===0) return 0;
//    return (n%10) + sumOFDigit(Math.floor(n/10))
// }
// console.log(sumOFDigit(12345));



// function power(x,n){
//    if(n===0) return 1;
//    return x * power(x,n-1)
// }
// console.log(power(3,3));



// let arr = [1,[2,[3,4]],5]

// console.log(arr.flat(Infinity));




//----------------------------------------- Palindrome with built method---


// function palindro(str){
//    return str === str.split("").reverse().join("")
// }
// console.log(palindro("madam"));
// console.log(palindro("hello"));




//-------------- without build method ----



// function palindrone(str , left = 0 , right = str.length-1){
//   if(left >= right){
//    return true;
//   }  if(str[left] !== str[right]){
//    return false
//   }
//   return palindrone(str , left + 1 , right - 1)
// }
// console.log(palindrone("madam"));
// console.log(palindrone("hello"));






// function palindrone(str){
//    return str === str.split("").reverse().join("")
// }
// console.log(palindrone("naveen"));
// console.log(palindrone("naman"));



// function palindrone(str,left = 0, right = str.length-1){
// if(left >= right){
//    return true
// } if(str[left] !== str[right]){
//    return false
// }
//    return palindrone(str, left+1 , right - 1)
// }
// console.log(palindrone("madam"));
// console.log(palindrone("yoo"));


// ------------------------------------------- concat ------------------->>>



// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let concat = arr.concat(arr2)
// console.log(concat);





//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************

//----------------- 0----------------  AGAIN START FOR VIVA -**************************

//----------------------------- swap ***************


// let a = 10;
// let b = 20;;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);




// console.log(typeof []);     //object
// console.log(typeof null);    // object 
// console.log(typeof {});      //object 
// console.log(typeof "10");     //string



//----------------------------  largest in 3 numbers


// let a = 10;
// let b = 25;
// let c = 15;


// if(a>b && a>c){
//    console.log(a);
   
// }else if(b>a && b>a){
//    console.log(b);
   
// }else{
//    console.log(c);
   
// }



//-------------------------- check number is poitiv eor negative or zero

// let num = -15;
// if(num>0){
//    console.log("positive");
   
// }else if(num<0){
//    console.log("nagetive");
   
// }else{
//    console.log("zero");
   
// }



// --------------- 1-100 tak even ke sum nikalo
// let sum = 0
// for(let i = 1; i<=100; i++){
//    if(i%2===0){
// sum += i   
// }
// }
// console.log(sum);


//------------------- 123456 kitne digit hai 


// let num = 123456;

// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(count);



///////////////////-- even and there sum====


// let arr = [1,2,3,4,5,6]
//  let even=arr.filter((a)=>{
//    return a%2==0
// }).reduce((a,b)=>{
//    return a+b;
// })

// console.log(even);




//------------------ 80 se uper num print

// let obj = [{
//     name:"gautam",marks:89},
//     {name:"seju",marks:90},
//     {name:"luffy",marks:79},
//     {name:"zoro",marks:69}
// ]

//  newobj = obj.filter((a)=>{
//    return a.marks>80
// })
// console.log(newobj);


//----------------------------- largedt and smallest ---------

//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = num[0]
//  for(let nums of num){
//    if(nums > largest){
//       largest = nums;
//    }
//  }
//  console.log(largest);




//  let num = [12,2,5,54,23,43,4,64,65,44,65]
//  let smallest = Math.min(...num)
//  console.log(smallest);
 


//-------------------- second largest -----------------------------

//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = num[0]
//  let slargest = num[0]

//  for(let nums of num){
//    if(nums > largest){
//       slargest = largest
//       largest = nums;
//    }if(nums>slargest && nums !== largest){
//       slargest = nums
//    }
//  }
//  console.log(largest);
//  console.log(slargest);



// let num = [12,2,5,54,23,43,4,64,65,44,65]
// let newone = [...new Set(num)]
// let newnumber = newone.sort((a,b)=>{
//    return b-a
// })

// console.log(newnumber[1]);



//----------------------------  Reverse  arayyy  ----------------------------------------------

//  let arr = [12,3,4,5,6,7];

//  let rev = []
//  for(let i = arr.length-1; i>=0 ; i--){
//    rev.push(arr[i])
//  }

// console.log(rev);



//----------------------------------------  rigth element ko end or left or fist me

 
// let arr = [1,2,3,4,5];  // 5 1 2 3 4

// arr.unshift(arr.pop())
// console.log(arr);



 
// let arr2 = [1,2,3,4,5];   // 23451

// arr2.push(arr2.shift())
// console.log(arr2);



//---------------------------------------   spread and rest opreator ----------

// let arr = [1,2,3,4,5]
// console.log(...arr);    // spread



// function a(...arr){
//    console.log(arr);
   
// }

// a(1,2,3,4,5)         //  rest 






//---------------------------------  Closure ----------------------------------------------

// function a(){
//    let name = "ram";

//  return function b(){
//    console.log(name);
   
// }}
// let bb = a()
// bb()


function hello(){
   let count = 0;
     
      function hi(){
         count++;
         console.log(count);
         
      }return hi

}

let yoo = hello()
yoo()
yoo()
yoo()
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


// async function hello(){

//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/users");

//         let data = await res.json();

//         console.log(data);

//     }catch(error){

//         console.log("Error aagya");

//     }

// }

// hello();



// let promise = new Promise ((res,rej)=>{

//     let internet = true;
//     if(internet){
//         res("youtube dekh skte ho")
//     }else{
//         rej("nhi dekh skte ja hotspot le")
//     }

// })
// console.log(promise);

// promise.then((msg)=>{
//     console.log(msg)
// })
// .catch((error)=>{
//     console.log("error")
// })

// let p = new Promise((res, rej)=>{
//     rej("Error");
// });

// p.catch((a)=>{
//     console.log(a);
// });


// let promise = new Promise((res,rej)=>{
// let food = true;
// if(food){
//     res("food is ready")
// }else{
//     rej("it takes time")
// }
// })
// console.log(promise);



// let pro = new Promise((res,rej)=>{
//    let skills = true;
//    if(skills){
//     res("you got the job")
//    }else{
//     rej("first learn skills")
//    }

// })
// try{
//     console.log(pro)
// }

//     catch(error)
// {console.log("error aya hai");}



//==============PRECTICE QUESTION=====================
//====================================================
//=======================================================
//=================================================
//=================================================


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");      //OUTPUT IS => A C B



// let p = new Promise((res, rej)=>{

//     let internet = true;

//     if(internet){
//         res("Connected");
//     }else{
//         rej("Disconnected");
//     }

// });

// p.then((msg)=>{
//     console.log(msg);
// });

//=============OUTPUT =>  CONNECTED

// try{
//     console.log(age);
// }
// catch(error){
//     console.log("Error handle ho gaya");
// }

//=======OUTPUT => ERROR HENDLE HO GYA



// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();
//     console.log(data)

//    let result = data.filter((a)=>{
//     if(a.username.length>8){
//         console.log(a.username);
        
//     }
//    })
// }

// hello();


//===============one more way===============

// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();
//     console.log(data)

// let result = data.filter((a)=>{
//     return a.username.length>8;
// })
// console.log(result)
// }
// hello();


//===================one mmore way==============


// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let result = data
//         .filter(a => a.username.length > 8)
//         .map(a => a.username);

//     console.log(result);
// }

// hello();



// function count(){
//     let num = 0;
//     return function(){
//         num++;
//         console.log(num);
        
        
//     }
// }
// let number = count()
// number()
// number()
// number()
// number()
// number()
// number()
// number()


// let pro = new Promise((res,rej)=>{
//     let food =true;
//     if(food){
//         res("food is ready")
//     }else{
//         rej("food is Not ready")
//     }
// } )
// pro
// .then((a)=>{
   
//     console.log(a);
    
// }).catch((error)=>{
// console.log("here error")})



// let pro = new Promise((res, rej)=>{

//     let food = false;

//     if(food){
//         res("food is ready");
//     }else{
//         rej("food is NOT ready");
//     }

// });

// async function hello(){

//     try{

//         let data = await pro;

//         console.log(data);

//     }catch(error){

//         console.log(error);

//     }

// }

// hello();



// let promise = new Promise((res,rej)=>{
//       let battery = true;
//       if(battery){
//      res("phone on");
        
//       }else{
//         rej("charge kro")
//       }
// })
// promise
// .then((p)=>{
//     console.log(p)
// }).catch((error)=>{
// console.log("error")
// })



// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     // console.log(data);
    
//     data.forEach((a)=>{
//        if( a.username.includes("e"))
//         console.log(a.username)
//     })
// }
// hello()







/////===========7/5/26==============================
//================================================
//================================================
//================================================
//================================================
//===========FOR REVISION=====================


/* =========================
   SYNCHRONOUS
========================= */

// console.log("1");
// console.log("2");
// console.log("3");


/* =========================
   ASYNCHRONOUS
========================= */

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");


/* =========================
   PROMISE BASIC
========================= */

// let promise = new Promise((resolve, reject) => {

//     let internet = true;

//     if(internet){
//         resolve("Connected");
//     }else{
//         reject("Disconnected");
//     }

// });

// console.log(promise);


/* =========================
   THEN & CATCH
========================= */

// let pro = new Promise((res, rej) => {

//     let food = false;

//     if(food){
//         res("Food is ready");
//     }else{
//         rej("Food is NOT ready");
//     }

// });

// pro
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.log(error);
// });


/* =========================
   ASYNC / AWAIT
========================= */

// async function hello(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     console.log(data);
// }

// hello();


/* =========================
   TRY CATCH
========================= */

// try{
//     console.log(age);
// }
// catch(error){
//     console.log("Error handled");
// }


/* =========================
   ASYNC + TRY CATCH
========================= */

// let foodPromise = new Promise((res, rej)=>{

//     let food = false;

//     if(food){
//         res("Food is ready");
//     }else{
//         rej("Food is NOT ready");
//     }

// });

// async function checkFood(){

//     try{

//         let data = await foodPromise;

//         console.log(data);

//     }catch(error){

//         console.log(error);

//     }

// }

// checkFood();


/* =========================
   FOREACH
========================= */

// let nums = [1,2,3,4];

// nums.forEach((a)=>{
//     console.log(a);
// });


/* =========================
   FILTER
========================= */

// let number = [1,2,3,4,5,6];

// let even = number.filter((a)=>{
//     return a % 2 === 0;
// });

// console.log(even);


/* =========================
   MAP
========================= */

// let arr = [1,2,3];

// let square = arr.map((a)=>{
//     return a * a;
// });

// console.log(square);


/* =========================
   STRING METHODS
========================= */

// let name = "Gautam";

// console.log(name.startsWith("G"));
// console.log(name.endsWith("m"));
// console.log(name.includes("ta"));


/* =========================
   API - PRINT USERNAMES
========================= */

// async function users(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{
//         console.log(a.username);
//     });

// }

// users();


/* =========================
   API - EMAILS USING MAP
========================= */

// async function emails(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let email = data.map((a)=>{
//         return a.email;
//     });

//     console.log(email);

// }

// emails();


/* =========================
   API - FILTER .biz EMAILS
========================= */

// async function bizEmails(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     let result = data
//     .filter((a)=>{
//         return a.email.endsWith(".biz");
//     })
//     .map((a)=>{
//         return a.email;
//     });

//     console.log(result);

// }

// bizEmails();


/* =========================
   API - USERNAME LENGTH
========================= */

// async function longUsername(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{

//         if(a.username.length > 8){
//             console.log(a.username);
//         }

//     });

// }

// longUsername();


/* =========================
   API - USERNAME INCLUDES e
========================= */

// async function includesE(){

//     let res = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await res.json();

//     data.forEach((a)=>{

//         if(a.username.includes("e")){
//             console.log(a.username);
//         }

//     });

// }

// includesE();


/* =========================
   CLOSURE
========================= */

// function outer(){

//     let name = "Gautam";

//     function inner(){
//         console.log(name);
//     }

//     return inner;
// }

// let result = outer();

// result();


/* =========================
   COUNTER CLOSURE
========================= */

// function counter(){

//     let count = 0;

//     return function(){

//         count++;

//         console.log(count);

//     }
// }

// let increase = counter();

// increase();
// increase();
// increase();

//=====OK HELLO AJ ME STUDY NHI KR PAUGA KYUKI MERE ANT KI DEATH HUI HAI IS 
//CHAKKAR ME MENE AJ CLASS BHI ATTEND NHI KI HAI

// console.log("today was bad and busy day so study start's from tomorrow");



// function person(naam , umar , jagah){
//      this.name = naam;
//      this.age = umar;
//      this.from = jagah;
// }
// let p1 =new  person("ram",21,"himachal")
// let p2 =new  person("sita",20,"himachal")
// console.log(p1);
// console.log(p2);



// class hello{
//    constructor(naam,umar,jagah){
//       this.name = naam;
//       this.age = umar;
//       this.from = jagah
//    }
// }
// let p1 =new hello("gautam",21,"delhi")
// let p2 = new hello("seju",21,"himachal")
// console.log(p1);
// console.log(p2);


// class hy{
//    constructor(){

//    }
//    yooo(){
//       console.log("hy this is a function name")
//    }
// }
// let hy1=new hy
// console.log(hy1)



// const cube = (n)=>n*n*n;
// console.log(cube(3));


// let id = setInterval(()=>{
//    console.log("Hi");
   
// },2000)

// setInterval(()=>{
//    clearInterval(id)
// },30000)



// async function hello(){}   //===>basic syntax 
//==async background me kaam krata hai or await kaam pura hone ka wait  krta hai.

//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await res.json();
//     console.log(result);
    
// }
// hello();



//------Question 1

// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let result = await res.json();

//      console.log(result.title);
    
// }
// hello();



//-------Question 2

// async function yoo(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await res.json();
  
//     console.log(data.completed)
// }
// yoo();



//------Question 3


// let h1 = document.createElement("h1");
// h1.innerText = ""
// document.body.appendChild(h1)


// async function hy(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     h1.innerText=(data[0].name)
// }
// hy();



//---------question 4

// let button = document.createElement("button");
// button.innerText = "Get Data"
// document.body.appendChild(button);


// button.addEventListener("click",()=>{
//     async function zoro(){
//         let res = await fetch("https://jsonplaceholder.typicode.com/comments");
//         let data = await res.json();
//         console.log(data);
//     }
//     zoro();
// })


//--------question 5


// let input = document.createElement("input");

// let button2 = document.createElement("button");
// button2.innerText = "click"
// document.body.appendChild(input)
// document.body.appendChild(button2);


// button2.addEventListener("click",()=>{
//     async function uii(){
//         let res = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`);
//         let data = await res.json();
//         console.log(data.name);

        
//     }
//     uii();
// })



////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================


// async function hello(){

// let res = await fetch("https://jsonplaceholder.typicode.com/users");
// let data = await res.json();
// console.log(data);

// data.forEach((user)=>{
// let div = document.createElement("div")
// let h2 = document.createElement("h2")
// let p = document.createElement("p")

// div.appendChild(h2)
// div.appendChild(p)

// document.body.appendChild(div)

// h2.innerText = user.name;
// p.innerText = user.email;  


// })



// }

// hello();







//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================
//==================REVISION TEST===========================


// console.log("start the test");



//--------question 1-------------------------------------

// let h1 = document.createElement("h1");
// h1.innerText = "Hello Gautam";
// document.body.appendChild(h1)


//-----------question 2-------------------------------------


// let btn = document.createElement("button");
// btn.innerText = "click";
// document.body.appendChild(btn)
// btn.addEventListener("click",()=>{
//    document.body.style.backgroundColor = "red"
// })


//----------------question 3----------------------------------


// let p = document.createElement("p");
// p.innerText = "this is paraghraph";
// let btn2 = document.createElement("button");
// btn2.innerText = "click";
// document.body.appendChild(p);
// document.body.appendChild(btn2)

// btn2.addEventListener("click",()=>{
//    p.remove();
// })


//-------------------question 4-------------------------

// let box = document.querySelector(".class");
// box.style.color = "blue"


//-----------------------question 5----------------------------------


// let li = document.querySelectorAll(".li");
// li.forEach((event)=>{
//    event.style.color = "green"
// })


//----------------------question 6-------------------------------


// let title = document.querySelector("#title");
// title.style.fontSize = "50px"


//----------------------------question 7-----------------------------

// let h2 = document.createElement("h2");
// h2.innerText = "This is h1 but i write it h2";
// document.body.appendChild(h2) 


//-------------------------question 8---------------------------------

// let h4 = document.createElement("h4");
// let p2 = document.createElement("p2");
// h4.innerText = "Hello";
// p2.innerText = "Gautam";
// document.body.appendChild(h4) 
// document.body.appendChild(p2) 


//-------------------------------question 9 -------------------------------

// let h5 = document.createElement("h5");
// h5.innerText = "h5 text change";
// document.body.appendChild(h5) 

// let btn3 = document.createElement("button");
// btn3.innerText = "text change"
// document.body.appendChild(btn3)

// btn3.addEventListener("click",()=>{
//    h5.innerText = "Welcome"
// })


//----------------------question 10-------------------------------

// let btn4 = document.createElement("button");
// btn4.innerText = "click here"
// document.body.appendChild(btn4)


// btn4.addEventListener("click",()=>{
//    console.log("Hello")
// })


//-------------------------question 11-------------------------------


// let input = document.createElement("input");
// let btn5 = document.createElement("button");
// btn5.innerText = "click in btn5"
// document.body.appendChild(input)
// document.body.appendChild(btn5)

// btn5.addEventListener("click",()=>{
//    console.log(input.value)
// })



//-------------------------------question 12---------------------


// let btn6 = document.createElement("button");
// btn6.innerText = "click in btn6"
// document.body.appendChild(btn6)

// btn6.addEventListener("mouseover",()=>{
//    document.body.style.backgroundColor = "yellow"
// })


//------------------------------------question 13-----------------------

// async function hello(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data = await res.json();
//    console.log(data)
// }
// hello()

//-------------------------------question 14--------------------------



// async function helloo(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data = await res.json();

//    data.forEach((user)=>{
      
//    console.log(user.username)
//    })
// }
// helloo()


//------------------------------question 15------------------------------


// let input = document.createElement("input");

// let button = document.createElement("button");

// button.innerText = "Get User";

// document.body.appendChild(input);

// document.body.appendChild(button);

// button.addEventListener("click", async ()=>{

//     let id = input.value;

//     let res = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     let data = await res.json();

//     let h1 = document.createElement("h1");

//     h1.innerText = data.name;

//     document.body.appendChild(h1);

// });






//------------------------------question 16------------------------------


// class Car {
//    constructor(brand,price){
//       this.brand = brand;
//       this.price = price
//    }

// }
// let car1 = new Car("BMW",5000000)
// let car2 = new Car("Royal-Roles",60000000);

// console.log(car1)


//-------------------------------question 17--------------------------


// let object1 = {
//    car :"BMW",
//    speed : 150,
//    price : 500000
// }

// let object2 = {
//    car : "TATA",
//    speed : 120,
//    price : 400000
// }
// console.log(object1)
// console.log(object2)


//-------------------------question 18-------------------------------


// class Carr {
//    constructor(brand,price){
//       this.brand = brand;
//       this.price = price
//    }

//    showPrice(){
//       console.log("car price is",this.price)
//    }

// }
// let car3 = new Carr("BMW",5000000)
// let car4 = new Carr("Royal-Roles",60000000);

// car3.showPrice()


//------------------------------question 20-------------------------

// function Animal(name,sound){
//    this.name = name;
//    this.sound = sound;
// }
// let dog = new Animal("dog","bark");

// console.log(dog)

//----------------------question 21--------------------------------


// class Animall
// { constructor(name,sound){
//    this.name = name;
//    this.sound = sound;
// }

// makeSound(){
//    console.log(this.name,"says",this.sound)
// }
// }
// let dogg = new Animall("dog","bark");



// dogg.makeSound()




//---------------question 22-------------------------------------

// class Animal{
//    constructor(name,sound){
//       this.name = name
//       this.sound = sound
//    }

//    method(){
//       console.log(this.name,"says",this.sound)
//    }
// }

// let ani = new Animal("dog","bakr")

// ani.method()


//---------------question 28-----------------------------

// let object = {
//    name:gautam,
//    age:22

 //hello:function(){
// console.log(this.name)
// }}
//  object.hello()
//-----------question 32-------------------

// a 
// c
// b

//-------------------question 33-------------------------

1
3
2


//------------------------question 34--------------------------

// setTimeout(()=>{
//    console.log("Hello")
// },2000)


//-------------------question 35----------------------------------

// let btn8 = document.createElement("button");
// btn8.innerText = "press";
// document.body.appendChild(btn8);

// btn8.addEventListener("click",()=>{
//    setTimeout(()=>{
//       console.log("Done")
//    },2000)
// })




//--------------callback ka q hai bro---------------------------


// function fetchData(){
//    setTimeout(()=>{
//       console.log("Data Loaded")
//    },3000)
// }

// fetchData()





// function step1(fn){{
//    console.log("please wait for image")
//    setTimeout(()=>{
//       console.log("image selected suyccessfully")
//       fn("selected image")
//    },4000)
// }}
// function step2(image,fn){
//    console.log("please wait filter to ${image}")
//       setTimeout(()=>{
//          console.log("filter applied")
//          fn("filter applied")
//       },2000)
// }
//   function step3(filter , fn){
//    console.log("please wait addinfg caption to ${filter}")
//    setTimeout(()=>{
//       console.log("caption added")
//       fn("caption image")
//    },5000)
//   }
//   function step4(){
//    console.log("filter uploading the %{caption}")
//    setTimeout(()=>{
//       console.log("image fimmally uploaded")
//    },3000)
//   }
//  step1(function (image){
//    step2(image, function(filter){
// step3(filter)
// {step4(captioned)}
//    })
//  })




//  let p1 = new Promise((resolve,reject)=>{
//    let data = "100 rupees"
//    let err = "this is error"
//    resolve(data)
//    reject(err)

//  })

//  p1
//  .then((data)=>{console.log(data)})
//  .catch((error)=>{
//    console.log(err)
//  }).finally(()=>{console.log("finally executed")})

// function task(time, message){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);
//     });
// }

// task(4000, "select image")
// .then(() => {
//     return task(2000, "apply filter");
// })
// .then(() => {
//     return task(5000, "add caption");
// })
// .then(() => {
//     return task(3000, "upload image");
// });



// let num = "25";
// let user = prompt("enter the number");
// while(user!==num){
//     user = prompt("try again")
// }
// console.log("very good")




// let api = "https://jsonplaceholder.typicode.com/todos"

// fetch(api)
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data)})


// let api = "https://api.tvmaze.com/search/shows?q=girls"
// fetch(api)

// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data[1].show.averageRuntime)})




// async function hello(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
//   let data = await res.json()
//   console.log(data)
// }
// hello()


// let api = "https://jsonplaceholder.typicode.com/todos"

// axios.get(api)
// .then((res)=>{console.log(res.data)})
// .catch((error)=>{console.log(error)})


// 
// const API="https://jsonplaceholder.typicode.com/todos"
// axios.get(API)
// async function todos() {
//   const resp = await axios.get(API);
//   console.log(resp.data);
// }

// todos()





// let api = "https://jsonplaceholder.typicode.com/todos"
// axios.get(api)

// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)
// }

// hello()





// let api = "https://jsonplaceholder.typicode.com/users"
 
// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)

//    for(let val of res.data){
//       console.log(val.name)
//    }
// }

// hello()
 




// let api = "https:jsonplaceholder.typicode.com/todos"
 
// async function hello(){
//    let res = await axios.get(api)
//    console.log(res.data)

  
// }

// hello()
 

// let api = "https://jsonplaceholder.typicode.com/todos";

// async function hello(){

//     let res = await axios.get(api);

//     console.log("Total Todos:", res.data.length);

// }

// hello();


// console.log("today i was busy so no commit")





// let arr = [
//   "13063.png",
//   "204770.jpg",
//   "miles-morales-spider-man-artwork-digital-art-marvel-4000x5655-584.jpg"
// ];

// let index = 0;

// let img = document.querySelector(".images");

// img.src = arr[index];

// setInterval(() => {

//    index = (index + 1) % arr.length;

//    img.src = arr[index];

// },2000);


// let inp = document.querySelector('input')
// inp.addEventListener('keypress',(e)=>{
//    if(e.which === 13){
//       console.log(e.target.value);
      
//    }
// })


// let marks = {
//     math: 90,
//     english: 80,
//     science: 85
// };

// let max = Math.max(...Object.values(marks));

// console.log(max); // 90










//    let arr = [1,2,3,4,5,6]
//    let even = arr.filter((a)=>{
//       return a%2==0
//    })
// console.log(even);


// let arr =[1,2,3,4,5]
// let dbl = arr.map((a)=>{
//    return a*2
// }).filter((a)=>{
//    return a>5
// })

// console.log(dbl);





//----------------------------------prit Even numbers----------------------------

// let arr = [1,2,3,4,5];
// let even = arr.filter((s)=>{
//    return s%2==0
// })
// console.log(even);

//----------------------------------------------------------------------------------

//----------------------------------duoble number-------------------------------------



// let arr = [1,2,3,4,5];
// let dbl = arr.map((s)=>{
//    return s*2
// })
// console.log(dbl);

//-------------------------------------------------------------------------------------

//---------------------------------------sum of array-----------------------------

// let arr = [1,2,3,4,5];
// let sum = arr.reduce((a,b)=>{
//    return a+b
// })
// console.log(sum);


//-----------------------------------------------------------------------------

//----------------------------------------toUpperCase-----------------------------

// let names = ["ram","shyam","mohan"];
// let uppercase = names.map((a)=>{
//    return a.toUpperCase()
// })
// console.log(uppercase);

//---------------------------------------------------------------------------------

//---------------------------------largest number----------------------------------


// let nums = [12,5,8,20,1];
// let max = Math.max(...nums)

// console.log(max);


//-----------------------------------------------------------------------------

//-------------------------------------smallest number----------------------------------


// let nums = [12,5,8,20,1];
// let min = Math.min(...nums)

// console.log(min);


//-------------------------------------------------------------------------------

//---------------------------------------reverse string-----------------------------

// let str = "javascript";

// let rev = str.split("").reverse().join("");

// console.log(rev);



//-----------------------------------------------------------------------------------

//----------------------------------count fruit times------------------------------------

// let fruits = ["apple","banana","apple","orange","banana","apple"];
// let count = {};

// for(let fruit of fruits){
//     count[fruit] = (count[fruit] || 0) + 1;
// }

// console.log(count);
//-----------------------------------------------------------------------------------

//----------------------------------------even number ka sum-----------------------------

// let arr = [1,2,3,4,5];
// let even = arr.filter((a)=>{
//    return a%2==0
// }).reduce((a,b)=>{
//    return a+b
// })
// console.log(even);


//--------------------------------------------------------------------

//--------------------------------18 + users count kro----------------------------------


// let users = [
//   {name:"Aman", age:21},
//   {name:"Rohit", age:18},
//   {name:"Ram", age:17}
// ];

// let youger = users.filter((a)=>{

// return a.age>18
// }).length
// console.log(youger);

//-------------------------------------------------------------------------------

//---------------------------------age ka total sum nikalo-------------------------

// let users = [
//   {name:"Aman", age:21},
//   {name:"Rohit", age:18},
//   {name:"Ram", age:17}
// ];
// let sum = users.filter((a)=>{
//    return a.age>=18
// }).reduce((a,b)=>{
//    return a+b.age

// },0)
// console.log(sum);



//-----------------------------------------------------------------------

//-------------------------------squre nikale sbhi ka--------------------------

// let nums = [1,2,3,4,5];
// let qube = nums.map((a)=>{
//    return a*a
// })
// console.log(qube);


//-------------------------------------------------------------------------

//-------------------------------------




// console.log([] == false);
// console.log(typeof null);

// let a = 11, b = 22;

// let c = a + b + a++ + b++ + ++a + ++b;

// console.log(a);
// console.log(b);
// console.log(c);  


// function hello(n){
//    if(n>0){
//       hello(n-1)
//       console.log(n);
      
//    }
// }hello(10)


//--------------------factorial---------------------------------------------

// function hello(n){
//    if(n==1){
//       return 1;
//    }return n*hello(n-1)
// }
// let res = hello(5)
// console.log(res);




//-----------------------sum recursion-------------------------------

// function hello(n){
//    if(n==1){
//       return;
//    } return n+(n-1)
// }
// const res = hello(5)
// console.log(res);


// console.log("seju" - 100);


// let arr = [1,2,3,4,5];
//   arr.splice(5,0,6);
// console.log(arr);


// console.log(typeof(!NaN));


// console.log({}+[]);


 ///let arr =[15,10,30,40,5,10,30]


//  arr.sort((a,b)=>{
//    return b-a
//  })
// let newone = new Set(arr)
// console.log(newone);


// console.log(NaN===NaN);
// console.log(NaN==NaN);

// let a = 28;
// let b = 20;
// let res = a>b ? true : false;

// console.log(res);



// let arr = [12,23,23,34,10,19,10]
// let set = [...new Set(arr)]
// console.log(set);



// let arr = [12,23,23,34,10,19,10]
// let set =[...new Set(arr)]
// set.unshift(99);
// console.log(set);



// let arr = [12,23,23,34,10,19,10]
// arr.splice(1,1,13,14)
// console.log(arr);



// let ans = confirm("Are you 18+ ?");

// if(ans){
//     console.log("Welcome");
// }else{
//     console.log("Access Denied");
// }

// let a ;
// console.log(a);

// console.log("10"+100+20);  //1010020
// console.log(10+100+"20");  //11020



// console.log("10"+"5");   ///  5
// console.log(4-"10");   //-6
// console.log(4*"10");   //40
// console.log(50+20+"10");   //7010
// console.log("50"+20+"10");   //502010



// let arr = [300,8,400,9,500]
// arr.sort((a,b)=>a-b)
// console.log(arr);

// console.log(typeof(NaN));


// console.log(a);
// let a = 10
// // var a = 10



// console.log(a); //undiclare
// let b;
// console.log(b);  //undifine



// let arr = ["ram","sita", "laxman"]
// let res = arr.map((a)=>{
//    return a.toUpperCase()
// })
// console.log(res);


// function createHelloWorld(){
//     console.log("Hello World")
// }
// createHelloWorld();


// function hello(message,time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(message)
//         },time)
//     })
// }
// hello("message",2000)
// .then((data)=>{
//     console.log(data)
//     return hello("Login",3000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Fetch Profile",4000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Shoe dashboard",5000)})

// .then((data) => {
//     console.log(data);
// });





// function hello(message,time){
//    return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//          resolve(message)
//        },time)
//    })
// }

// hello("message",2000)
// .then((data)=>{console.log(data);
//    return hello("how are you",3000)
// })
// .then((data)=>{console.log(data);
//    return hello("i am good",2000)
// }).then((data)=>{console.log(data);
//    return hello("what about you",4000)
// })
// .then((data)=>{
//    console.log(data);
   
// })



// for(let i = 1; i<=500;i++){
//    console.log("Hello World");
   
// }


// try{
//    console.log("all good");
   
// }catch(error){
//    console.log("sommthing is wrong");
   
// }

// let set = new Set()
// set.add(10)
// set.add(11)
// set.add(12)
// console.log(set.size);
// console.log(set.has(34));
// console.log(set.has(12));
// set.delete(10)
// console.log(set.size);
// set.clear()
// console.log(set.size);

// let arr = [1,2,3,4]
// let max = Math.max(...arr)
// console.log(max);

// let a = 10;
// let b = 20;
// let sum = a + c;

// console.log(sum);

// let arr = [1,2,3,4,5,3,4,5]
// let removee = [...new Set(arr)];
// console.log(removee);


// let a = "hello" , b = 12 , c = true;
// console.log(a,b,c);

// let sum = 0
// for(let i = 1; i<15;i++){
//      sum = sum+i
// }
// console.log(sum);


// var arr = [1,2,3,4,5]
// let rev = []
// for(let i = arr.length-1;i>0;i--){
// rev.push(arr[i])
// }
// arr = rev

// console.log(rev);
// console.log(arr);


// let arr = [2,4,5,7,3,5,9,4,8]
// let real = [...new Set(arr)]


// let arrange = real.sort((a,b)=>{
//    return a-b
// })
// console.log(arrange);


// function sum(arr){
//    let summ = 0;
//    sum.forEach((a)=>{
//       summ = summ+a;
//    })
//    return sum
// }
// console.log();


// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     let output = "";

//     users.forEach(user => {
//         output += `<p>${user.name}</p>`;
//     });

//     document.getElementById("data").innerHTML = output;
// }

// getData();



// let obj = {
//    name:"ram",
//    address = {city:"delhi"}
// }
// let shallowCopy = obj.address.city


// let arr = [1,2,3]
// function sum(a,b,c){
//   return a+b+c
// } 
// // let a = sum(...arr)
// // console.log(a);
// console.log(sum(1,2,3));

// let a = [1,2,3,4,5,6]
// let b = a.map((val)=>{
//    return val 
// })
// console.log(b);


// let arr = [1,2,3,4,5]
// let res = arr.reduce((a,b)=>{
//    return a+b
// },1)
// console.log(res);

// console.log(1==="1");


// try{
//    console.log("all good");
   
// }catch(error){
// console.log("something wromg");

// }





//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------
//----------------------------------- Prectice for viva ----------------------------------------------





//----------->>>>>>>>>  swaping




// let a = 10;
// let b = 20;

// function swap(){
// [a,b] = [b,a]
// return [a,b]}

// console.log(swap(a,b));








//------------>>>>>.  largest and smallest 



//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = Math.max(...num)
//  let smallest = Math.min(...num)
// console.log(smallest);
// console.log(largest);
















//---------------->>>>>>  second big element >>   


//  let num = [12,2,5,54,23,43,4,64,65,44,65,64]
// let remove = [...new Set(num)]
// console.log(remove);

//  let secondBig = remove.sort((a,b)=>{
//    return b-a;
//  })

//  console.log(secondBig[0]);
//  console.log(secondBig[1]);
//  console.log(secondBig[2]);
 



//---------------- reverse array =>>>>>>>>>>>>>.

//  let arr = [12,3,4,5,6,7];

//  let rev = []
// for(let i=arr.length-1 ;i>=0; i--){
//    rev.push(arr[i])
// }

// console.log(rev);






//----------------------------   Move 0 one side and 1 one side>>>>>>>>.


//   let arr = [0,1,1,0,1,0,0,1,1,0];


//   let side = arr.sort((a,b)=>{
//    return a-b;
//   })
// console.log(side);



// let arr = ["apple" , "litchi","mango", "grapes"]
// let alpha = arr.sort()
// console.log(alpha);




//--------------------->>>>>>>>>>>>>>>>>>>>>>>>>


// let arr = [1,2,3,4,5];  //5,1,2,3,4

// arr.unshift(arr.pop())
// console.log(arr);


// let arr2 = [1,2,3,4,5]    // 2,3,4,5,1

// arr2.push(arr2.shift())
// console.log(arr2);



//----------------------------------  spread ---

// let arr = [1,2,3,4,5]

// console.log(...arr);


//------------------------------ rest>>>

// function sum(...add){
//    console.log(add);

// }

// sum(1,2,3,4)


//---------------------- counter 1 bdhao>>>>

// function add(){
//    let count = 10;
//    function sum(){
//       count++;
//       console.log(count);
      
//    }return sum
// }
// let hy = add()
// hy()
// hy()
// hy()




//-------------------------- obj distructring ->>>>>>>>>>>>>

// let obj = {
//    name : "ram",
//    age : 22,
// }

// let {name,age} = obj;

// console.log(name);
// console.log(age);




//------------------- remove duplicate with filter >>>>>>>>>>>>


// let arr = [1, 2, 2, 3, 4, 4];

// let remove = arr.filter((a,b)=>{
//   return arr.indexOf(a) === b
// })
// console.log(remove);


//------------------------ reverse string ->>>>

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("gautam"));



//---------------------------*******************************************************************
//---------------------------*******************************************************************
//---------------------------*******************************************************************
//---------------------------*******************************************************************



//--------------- reverse

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse("hello"));




//-------largest number in aarrr--


// let arr = [2,5,1,9,3]
// let lar = arr[0]
// for(let i=1;i<arr.length; i++){
//    if(arr[i]>lar){
//       lar = arr[i]
//    }
// }

// console.log(lar);



//------------------- check vowel kitne hai---------


// let str = "javascript";
// let count = 0;
// for(let i = 0; i<str.length ; i++){
//    if("aeiouAEIOU".includes(str[i])){
//       count++
//    }
// }
// console.log(count);



//------------------------ remove duplicat from array--


// let arr = [1,2,2,3,4,4,5]
// let remove = arr.filter((a,b)=>{
//    return (arr.indexOf(a) ===b)
// })
// console.log(remove);




//-------------------------- second largest -----------------


// let arr = [10,20,5,30,25]
// let largest = arr[0]
// let Slargest = arr[0]
// for(let i=0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest=arr[i]
//    }
//    if(arr[i]>Slargest && arr[i] !== largest){
//       Slargest=arr[i]
//    }
// }
// console.log(largest);
// console.log(Slargest);



//------------------------------ merged two arr --


// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// let arr3 = [...arr1 , ...arr2]


// let output = [...new Set(arr3)]
// console.log(output);



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\----- largest word

// let words = ["cat", "elephant", "dog", "javascript"]

// let largest = words.reduce((a,b)=>{
//    return a.length > b.length ? a:b;
// })
// console.log(largest);



//-------------------------------- count even or odd----------


// let arr = [1, 2, 3, 4, 5, 6 , 8];

// let countForOdd = 0
// let countForEven = 0
// for(let i = 0; i<arr.length; i++){
//    if(arr[i]%2===0){
//      countForEven++}
//     else{
//       countForOdd++
//     }
//    }
// console.log(countForEven)
// console.log(countForOdd)




//------------------------------------ find only sum of even number


// let arr = [1, 2, 3, 4, 5, 6];

// let sumOfEven = 0
// for(let value of arr){
//    if(value%2===0){
//       sumOfEven+=value
//    }
// }
// console.log(sumOfEven);


// for(let i = 0;i<arr.length; i++){
//    if(arr[i]%2===0){
//       sumOfEven+=arr[i]
//    }
// }

// console.log(sumOfEven);



//---------------------------- count positive negative and zero---

// let arr = [2, -5, 0, 8, -1, 0, 10];

// let countpositive = 0
// let countNegative = 0
// let countZero = 0

// for(let i = 0; i<arr.length; i++){
//    if(arr[i]>0){
//       countpositive++
//    } else if(arr[i]<0){
//      countNegative++
//    }else if(arr[i]===0){
//       countZero++
//    }
      
// }
// console.log(countpositive);
// console.log(countNegative);
// console.log(countZero);


//--------------------------------- fincd mimimum number in array ---------

// let arr = [8, 3, 10, 5, 7];
// let minimum = arr[0]
// for(let value of arr){
//    if(value < minimum){
//       minimum = value
//    }
// }
// console.log(minimum);



//-------------------------- reverse the array -------------------------


// let arr = [1, 2, 3, 4, 5];
// let reverse = [];
// for(let i = arr.length-1;i>=0; i--){
//    reverse.push(arr[i])
// }
// console.log(reverse);


//-------------------------- find largest and smallesrt in single loop



// let arr = [8, 3, 10, -5, 7];
// let largest = arr[0]
// let smallest = arr[0]

// for(let i =0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest = arr[i]
//    }else if(arr[i]<smallest){
//       smallest = arr[i]
//    }

// }
// console.log(largest);
// console.log(smallest);


//------------------- fincd second largest nimber ------------

// let arr = [8, 3, 10, -5, 7];

// let largest = arr[0]
// let slargest = arr[0]

// for(let i = 0; i<arr.length;i++){
//    if(arr[i]<largest)
//    { slargest = largest
//       largest = arr[i]
//    }else if(arr[i]<slargest && arr[i]!==largest){
//       slargest = arr[i]
//    }
// }
// console.log(largest);

// console.log(slargest);




//--------------------- ---------------------


// let obj = {
//   name: "Ram",
//   address: {
//     city: "Delhi"
//   }
// };

// let deep = structuredClone(obj)
// deep.address.city = "Mumbai"
// console.log(obj);
// console.log(deep);



//------------------------- string or number ko alag alag kro 


//  let str = [1,2,3,"gautam","hy",4,5]
// let string = []
// let number = [];
// for(let value of str){
//    if(typeof value === "string"){
//       string.push(value)
//    }if( typeof value ==="number"){
//       number.push(value)
//    }
// }
// console.log(string);
// console.log(number);


//----------------------- closure ka exapmle------

// function add(){
//    let count = 0;
//    function hello(){
//       count++;
//       console.log(count);
      
//    }return hello
// }
// let sum = add()
// sum()
// sum()
// sum()

//---------------------------------------  call apply bind  ----

// let obj = {
//    name : "ram",
//    age : 22,
// }
//  hello= function (name,age){
//    console.log("hello" + " " + this.name);
//    console.log(name,age);
   
// }

// hello.apply(obj,["shayam",45])


///--------------------------------------- remove duplicate == 

// let arr = [1,2,3,4,4,5,4,5,6,7,8,4,4,4,4,5,6,7,5,8,9,5,1,10]

// let remove = arr.filter((a,b)=>{
//    return (arr.indexOf (a)=== b)


// })
// console.log(remove);



//---------------------- find longest in arr 


// let arr = [1,2,3,4,5,6,7,8]
// let longest = arr[0]
// for(let value of arr){
//    if(value>longest)
//       longest = value
// }
// console.log(longest);


// let long = Math.max(...arr)
// console.log(long);




//--------------------- how can two obj into arry



// /------------- fincd longest word in sentence ----

// let sentence = "hy my name is gautam ";
// let longest = sentence.split(" ").reduce((a,b)=>{
//    return a.length > b.length ? a:b
// })
// console.log(longest);

//----------------------------- how to merge string alternatvie---

// let str1 = "ram"
// let str2 = "sita"
// let both = ""
// for(let i=0; i<str1.length || i<str2.length; i++){
//    if(str1[i]) both +=str1[i]
//    if(str2[i]) both += str2[i]
// }
// console.log(both);




//---------------------------   classes ====

// class yoo {
//    constructor(name,age){
//       this.name = name;
//       this.age = age;
// console.log("hello" + this.name);

// }}

// let newObj = new yoo("ram" , 22)
// console.log(newObj);





//-------------------------------  Recursion test-----


// function print(n){
//    if(n===0) return 0;
//    console.log(n);
//    print(n-1)
   
// }
// print(5)

// function print(n){
// //    if(n===0) return 0;
// //    print(n-1)
// //    console.log(n);
   
// // }
// // print(5)


// let arr = [1,2,3,4,5]
// let sum = arr.reduce((a,b)=>{
//    return a+b;
// },10)
// console.log(sum);


// function sum(n){
//    if(n===0) return 0;
//    return n + sum(n-1)
// }
// console.log(sum(5));


// function fact(n){
//    if(n===0) return 1;
//    return n * fact (n-1)
// }
// console.log(fact(5));


// function fibonacci(n){
//    if(n<=1) return n;
//    return fibonacci (n-1) + fibonacci (n-2)
// }
// console.log(fibonacci(6));


// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"));




// function sumOFDigit(n){
//    if(n===0) return 0;
//    return (n%10) + sumOFDigit(Math.floor(n/10))
// }
// console.log(sumOFDigit(12345));



// function power(x,n){
//    if(n===0) return 1;
//    return x * power(x,n-1)
// }
// console.log(power(3,3));



// let arr = [1,[2,[3,4]],5]

// console.log(arr.flat(Infinity));




//----------------------------------------- Palindrome with built method---


// function palindro(str){
//    return str === str.split("").reverse().join("")
// }
// console.log(palindro("madam"));
// console.log(palindro("hello"));




//-------------- without build method ----



// function palindrone(str , left = 0 , right = str.length-1){
//   if(left >= right){
//    return true;
//   }  if(str[left] !== str[right]){
//    return false
//   }
//   return palindrone(str , left + 1 , right - 1)
// }
// console.log(palindrone("madam"));
// console.log(palindrone("hello"));






// function palindrone(str){
//    return str === str.split("").reverse().join("")
// }
// console.log(palindrone("naveen"));
// console.log(palindrone("naman"));



// function palindrone(str,left = 0, right = str.length-1){
// if(left >= right){
//    return true
// } if(str[left] !== str[right]){
//    return false
// }
//    return palindrone(str, left+1 , right - 1)
// }
// console.log(palindrone("madam"));
// console.log(palindrone("yoo"));


// ------------------------------------------- concat ------------------->>>



// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let concat = arr.concat(arr2)
// console.log(concat);





//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************
//----------------- 0----------------  AGAIN START FOR VIVA -**************************

//----------------- 0----------------  AGAIN START FOR VIVA -**************************

//----------------------------- swap ***************


// let a = 10;
// let b = 20;;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);




// console.log(typeof []);     //object
// console.log(typeof null);    // object 
// console.log(typeof {});      //object 
// console.log(typeof "10");     //string



//----------------------------  largest in 3 numbers


// let a = 10;
// let b = 25;
// let c = 15;


// if(a>b && a>c){
//    console.log(a);
   
// }else if(b>a && b>a){
//    console.log(b);
   
// }else{
//    console.log(c);
   
// }



//-------------------------- check number is poitiv eor negative or zero

// let num = -15;
// if(num>0){
//    console.log("positive");
   
// }else if(num<0){
//    console.log("nagetive");
   
// }else{
//    console.log("zero");
   
// }



// --------------- 1-100 tak even ke sum nikalo
// let sum = 0
// for(let i = 1; i<=100; i++){
//    if(i%2===0){
// sum += i   
// }
// }
// console.log(sum);


//------------------- 123456 kitne digit hai 


// let num = 123456;

// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(count);



///////////////////-- even and there sum====


// let arr = [1,2,3,4,5,6]
//  let even=arr.filter((a)=>{
//    return a%2==0
// }).reduce((a,b)=>{
//    return a+b;
// })

// console.log(even);




//------------------ 80 se uper num print

// let obj = [{
//     name:"gautam",marks:89},
//     {name:"seju",marks:90},
//     {name:"luffy",marks:79},
//     {name:"zoro",marks:69}
// ]

//  newobj = obj.filter((a)=>{
//    return a.marks>80
// })
// console.log(newobj);


//----------------------------- largedt and smallest ---------

//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = num[0]
//  for(let nums of num){
//    if(nums > largest){
//       largest = nums;
//    }
//  }
//  console.log(largest);




//  let num = [12,2,5,54,23,43,4,64,65,44,65]
//  let smallest = Math.min(...num)
//  console.log(smallest);
 


//-------------------- second largest -----------------------------

//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = num[0]
//  let slargest = num[0]

//  for(let nums of num){
//    if(nums > largest){
//       slargest = largest
//       largest = nums;
//    }if(nums>slargest && nums !== largest){
//       slargest = nums
//    }
//  }
//  console.log(largest);
//  console.log(slargest);



// let num = [12,2,5,54,23,43,4,64,65,44,65]
// let newone = [...new Set(num)]
// let newnumber = newone.sort((a,b)=>{
//    return b-a
// })

// console.log(newnumber[1]);



//----------------------------  Reverse  arayyy  ----------------------------------------------

//  let arr = [12,3,4,5,6,7];

//  let rev = []
//  for(let i = arr.length-1; i>=0 ; i--){
//    rev.push(arr[i])
//  }

// console.log(rev);



//----------------------------------------  rigth element ko end or left or fist me

 
// let arr = [1,2,3,4,5];  // 5 1 2 3 4

// arr.unshift(arr.pop())
// console.log(arr);



 
// let arr2 = [1,2,3,4,5];   // 23451

// arr2.push(arr2.shift())
// console.log(arr2);



//---------------------------------------   spread and rest opreator ----------

// let arr = [1,2,3,4,5]
// console.log(...arr);    // spread



// function a(...arr){
//    console.log(arr);
   
// }

// a(1,2,3,4,5)         //  rest 






//---------------------------------  Closure ----------------------------------------------

// function a(){
//    let name = "ram";

//  return function b(){
//    console.log(name);
   
// }}
// let bb = a()
// bb()



// function outer(){
//    let count = 0;
//     return function inner(){
//       count++;
//       console.log(count);
      
//     }
// }
// let newLine = outer()
// newLine()
// newLine()
// newLine()
// newLine()



//-------------------------- remove duplicate in array ====

// let arr = [1, 2, 2, 3, 4, 4,5,6,7,7,7,8,9];

// let remove = arr.filter((val,ind)=>{
//    return (arr.indexOf (val)=== ind)

// })

// console.log(remove);


//--------------------------------- reverse the string --------------

 
function reverse(str){
   if(str.length === 0) return "";
   return reverse(str.slice(1)) + str[0]
}
console.log(reverse("full stack development"));
