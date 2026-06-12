//const API_KEY = "5938fe4c5a0472de7053348a9e431903"
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// 


let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let msg = document.querySelector(".msg")

btn.addEventListener("click",()=>{
    city = input.value
    if(input.value==""){
        msg.innerHTML = "Enter The City Name";
        return;
    }showData(city)
})

const API_KEY = "5938fe4c5a0472de7053348a9e431903"
async function showData(city) {
    try{

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
let res = await fetch(url);
let data = await res.json()
console.log(data);
 if(data.cod!==200){
    msg.innerHTML = data.message;
    return
 }
let temp = data.main.temp;
let condition = data.weather[0].main;
let humidity = data.main.humidity;
let wind = data.wind.speed;
msg.innerHTML = `
<h2>${data.name}</h2>
<p>🌡️Temprature : ${temp}*C</p>
<p>🌤️Condition : ${condition}</p>
<p>💧Humidity : ${humidity}</p>
<p>🌬️Wind : ${wind} m/s</p>
`

    }
    catch(erroe){
       msg.innerHTML = "Something went wrong"
    }
}
