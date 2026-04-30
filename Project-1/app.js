// const buttons=document.querySelectorAll('.button');
// const body=document.querySelector('body');

// buttons.forEach(function(button){
//     button.addEventListener('click',function(e){
//         if(e.target.id==='pink'){
//             body.style.backgroundColor='pink';
//         }
//         if(e.target.id==='green'){
//             body.style.backgroundColor='green';
//         }
//         if(e.target.id==='blue'){
//             body.style.backgroundColor='blue';
//         }
//         if(e.target.id==='yellow'){
//             body.style.backgroundColor='yellow';
//         }
//     });
// });


//-----------another way of coding-----------------

const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        body.style.backgroundColor=event.target.id
    })
})