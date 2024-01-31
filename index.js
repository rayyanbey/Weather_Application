//onst url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';  WEATHER API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7fa7f58af4msh115fa0b1d53c756p14842bjsnc5a28207bda3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
 //const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';   AQI API
 const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61c436c1c8mshbfc00b686fd5d07p1f7521jsn205b4b2af356',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
//const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';     FORECAST API
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61c436c1c8mshbfc00b686fd5d07p1f7521jsn205b4b2af356',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let BG = document.getElementById("BD");
const images = [
  "og.jpg", //0
  "cloudy.jpg", //1
  "warm.jpg", //2
  "cold.jpg", //3
  "little.jpg", //4
];
function changeBackground(imageURL) {
  const img_url = `url(${imageURL})`;
  BG.style.backgroundImage = img_url;
  BG.style.backgroundSize = "cover";
  BG.style.backgroundRepeat = "no repeat";
}
function Update(temp_feel) {
  if (temp_feel >= 36) {
    changeBackground(images[2]);
  } else if (temp_feel >= 25) {
    changeBackground(images[0]);
  } else if (temp_feel >= 20) {
    changeBackground(images[1]);
  } else if (temp_feel >= 15) {
    changeBackground(images[4]);
  } else {
    changeBackground(images[3]);
  }
}


const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      //fetching feels like into variable
      let Feel = response.feels_like;
      feels_like.innerHTML = Feel;
      let Humidity = response.humidity;
      humidity.innerHTML = Humidity;
      let Humidity2 = response.humidity;
      humidity2.innerHTML = Humidity2
      let Min = response.min_temp;
      min_temp.innerHTML = Min;
      let Max = response.max_temp;
      max_temp.innerHTML = Max;
      wind_speed2.innerHTML = response.wind_speed;
      wind_speed.innerHTML = response.wind_speed2;
      // wind_degrees.innerHTML = response.wind_degrees;
      const sunriseTimestamp = response.sunrise;
      const sunsetTimestamp = response.sunset;

      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunsetDate = new Date(sunsetTimestamp * 1000);

      sunrise.innerHTML = sunriseDate.toLocaleTimeString();
      sunset.innerHTML = sunsetDate.toLocaleTimeString();
      let arr = {
        Feel,Humidity,Humidity2,Min,Max
      }
      Update(Feel);
      
// let a = document.getElementById("download");
// const J_S = JSON.stringify(arr);
// const NAME = JSON.stringify(cityName.innerHTML);
// a.addEventListener("click",function()
// {
//   const blob = new Blob([J_S],{type: "text/plain"});
//   a.href = URL.createObjectURL(blob);
//   a.download =`${NAME}.txt`;
// })
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});



const getAQI = (city) => {
  // cityName.innerHTML = city; // Assuming cityName is an existing element

  fetch(
      'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city,
      options1
  )
  .then((response) => response.json())
  .then((response) => {
   
    console.log(response);

    let pm2 = response['PM2.5'].aqi
    AQI.innerHTML = pm2 ;
    let co_var = response.CO.aqi;
    let aqi_var = response.overall_aqi;

     let aqi_icon = document.getElementById("icon");


     if(pm2 <=100)
     {
      aqi_icon.className = "fa-solid fa-face-smile";
     }
     else if (pm2 > 100)
     {
      aqi_icon.className = "fa-solid fa-skull-crossbones";
     }
     

    let Co_2 = ((co_var/aqi_var)*100).toFixed(2);
    Co.innerHTML = Co_2;
    const progress1 = document.getElementById("NO_prog1");
    progress1.style.width = (Co_2) + '%';



    let No_2 = ((response.NO2.aqi/response.overall_aqi)*100).toFixed(1);
    No2.innerHTML = No_2;
    const progress2 = document.getElementById("NO_prog2");
    progress2.style.width = (No_2) + '%';


    let O3_2 =  ((response.O3.aqi/response.overall_aqi)*100).toFixed(1);
    O3.innerHTML = O3_2;
    const progress3 = document.getElementById("NO_prog3");
    progress3.style.width = (O3_2) + '%';


    let SO2_2 =  ((response.SO2.aqi/response.overall_aqi)*100).toFixed(1);
    SO2.innerHTML = SO2_2;
    const progress4 = document.getElementById("NO_prog4");
    progress4.style.width = (SO2_2) + '%';

    
    
  })
  .catch((err) => console.error(err));
};
submit.addEventListener("click",(e)=>
{
  e.preventDefault();
  getAQI(city.value);
})

const getFore = (city) => {
    
  
  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=7`,
    options2
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      


      //LOCAL STORAGE OF DATA FROM API
      localStorage.setItem('response',JSON.stringify(response));
      const storedData = localStorage.getItem("response");
      if(storedData){const retrieved_data = JSON.parse(storedData);}

      //HOUR DATA COLLECTION
      const hoursData = response.forecast.forecastday[0].hour;
      const allHours = hoursData.map((hourEntry)=>hourEntry.time);
      const allTemp = hoursData.map((hoursEntry)=>hoursEntry.temp_c);
      const allWind = hoursData.map((hoursEntry)=>hoursEntry.wind_kph);


      //DAY COLLECTION
     

      const allDays = response.forecast.forecastday;

     const sevenDays = [];

     allDays.forEach((forecastDay) => {
      const dayDetails = 
      {
        Date: forecastDay.date,
        maxTempC: forecastDay.day.maxtemp_c,
        minTempC: forecastDay.day.mintemp_c,
        maxWindKph: forecastDay.day.maxwind_kph,
        totalPrecipMm: forecastDay.day.totalprecip_mm,
      };

      sevenDays.push(dayDetails);
     });

     //date vars

     wtime1.innerHTML = sevenDays[0].Date;
     wtemp1Max.innerHTML = sevenDays[0].maxTempC;
     wtemp1Min.innerHTML= sevenDays[0].minTempC;

     wtime2.innerHTML = sevenDays[1].Date;
     wtemp2Max.innerHTML = sevenDays[1].maxTempC;
     wtemp2Min.innerHTML= sevenDays[1].minTempC;

    

     wtime3.innerHTML = sevenDays[2].Date;
     wtemp3Max.innerHTML = sevenDays[2].maxTempC;
     wtemp3Min.innerHTML= sevenDays[2].minTempC;

     


      //hours vars
      let h1 = allHours[0];
      let h2 = allHours[1];
      let h3 = allHours[2];
      let h4 = allHours[3];

      let t1 = allTemp[0];
      let t2 = allTemp[1];
      let t3 = allTemp[2];
      let t4 = allTemp[3];

      let w1 = allWind[0];
      let w2 = allWind[1];
      let w3 = allWind[2];
      let w4 = allWind[3];


      //hour assingning
      time1.innerHTML = h1;
      Temp1.innerHTML = t1;
      

      time2.innerHTML = h2;
      Temp2.innerHTML = t2;

      time3.innerHTML = h3;
      Temp3.innerHTML = t3;

      time4.innerHTML = h4;
      Temp4.innerHTML = t4;

      //date assigning
      

    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click",(e)=>
{
e.preventDefault();
getFore(city.value);
})

getWeather("Madina");
getAQI("Madina");
getFore("Madina");

function playAudio()
{
  const text = document.getElementById('voice').value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}