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


console.log("start the test");



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


function fetchData(){
   setTimeout(()=>{
      console.log("Data Loaded")
   },3000)
}

fetchData()