//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weather={
    key:"1cb5f13a62d8c1a8f73ef7726af0f3d9",
    url:"https://api.openweathermap.org/data/2.5/weather"
} 

const input=document.getElementById('city');
input.addEventListener('keypress',(event)=>{
    if(event.keyCode==13)  //13 is keycode of enter key
    {
         console.log(input.value);
         WeatherReport(input.value);
         document.querySelector('.div2').style.display="block";
    }
    
})

function WeatherReport(city){
    fetch(`${weather.url}?q=${city}&appid=${weather.key}&units=metric`)
    .then(result=>{
        return result.json();
    }).then(ShowWeather);
}

function ShowWeather(result){
    console.log(result);

    let location=document.getElementById('location');
    if(result.cod=='404') 
    {
        location.innerText=`City not found`;
        document.querySelector('.div2_2').style.display="none";
    }
    else
    {
        document.querySelector('.div2_2').style.display="block";
        location.innerText=`Humidity: ${result.main.humidity}`;

    let tempearture=document.getElementById('temp');
    tempearture.innerHTML=`${Math.round(result.main.temp)}&deg;C`;

    let date=document.getElementById('date');
    let finddate=new Date();
    let x=NewMonth(finddate);
    //console.log(x);
    date.innerHTML=`${finddate.getDate()} ${x} ${finddate.getFullYear()}`;

    let maxTemp=document.getElementById('maxmin');
    maxTemp.innerHTML=`${Math.ceil(result.main.temp_max)}&deg;C (max) and
                        ${Math.floor(result.main.temp_min)}&deg;C (min)`;
 
    let aboutWeather=document.getElementById('sky');
    aboutWeather.innerHTML=`${result.weather[0].main}`;

    if(aboutWeather.textContent=='Clear')
    document.body.style.backgroundImage="url(https://i2-prod.examinerlive.co.uk/incoming/article10372520.ece/ALTERNATES/s1227b/JS75768352.jpg)";
    else if(aboutWeather.textContent=='Haze')
    document.body.style.backgroundImage="url(https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze-960x640.jpg)";
    else if(aboutWeather.textContent=='Clouds')
    document.body.style.backgroundImage="url(https://www.gannett-cdn.com/-mm-/58d8154e72b5358b362900e011b264b45123b77d/c=0-62-3000-1757/local/-/media/2017/02/17/Camarillo/Camarillo/636229698615668583-AP17048602869388.jpg?width=3200&height=1680&fit=crop)";
    else if(aboutWeather.textContent=='Rain')
    document.body.style.backgroundImage="url(https://t4.ftcdn.net/jpg/01/76/80/43/360_F_176804344_cVgrFLEi0tB1SeP0xJ6YufQAaUhQ3TjW.jpg)";
    else if(aboutWeather.textContent=='Snow')
    document.body.style.backgroundImage="url(https://www.canr.msu.edu/contentAsset/image/6898d064-63c6-4ab5-9366-b9ce84cfd406/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80)";
    else if(aboutWeather.textContent=='Thunderstorm')
    document.body.style.backgroundImage="url(https://www.thoughtco.com/thmb/2xVGJ_YMMVnKWjU6fRgYqVhMK_o=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-673747736-5b1989c3fa6bcc003614911a.jpg)";
    else if(aboutWeather.textContent=='Mist')
    document.body.style.backgroundImage="url(https://cff2.earth.com/uploads/2018/11/13053559/what-is-mist.jpg)";

    }
    
}


function NewMonth(finddate)
{
    let month=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    return month[finddate.getMonth()];
    
}


