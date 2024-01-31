let database = localStorage.getItem("response");

if(database)
{
    let total_data = JSON.parse(database);
    console.log(total_data);

    const allDays = total_data.forecast.forecastday;

   const sevenDays = [];

   allDays.forEach((forecastDay) => {
    const dayDetails = 
    {
      Date: forecastDay.date,
      maxTempC: forecastDay.day.maxtemp_c,
      avgTempC: forecastDay.day.avgtemp_c,
      maxHUM: forecastDay.day.avghumidity,
      chance_rain: forecastDay.day.daily_chance_of_rain,
      chance_snow: forecastDay.day.daily_chance_of_snow
    };

    sevenDays.push(dayDetails);
   });

date1.innerHTML = sevenDays[0].Date;
temp1.innerHTML = sevenDays[0].maxTempC;
avg1.innerHTML = sevenDays[0].avgTempC;
avghum1.innerHTML = sevenDays[0].maxHUM;
drain1.innerHTML = sevenDays[0].chance_rain;
dws1.innerHTML = sevenDays[0].chance_snow;

date2.innerHTML = sevenDays[1].Date;
temp2.innerHTML = sevenDays[1].maxTempC;
avg2.innerHTML = sevenDays[1].avgTempC;
avghum2.innerHTML = sevenDays[1].maxHUM;
drain2.innerHTML = sevenDays[1].chance_rain;
dws2.innerHTML = sevenDays[1].chance_snow;

date3.innerHTML = sevenDays[2].Date;
temp3.innerHTML = sevenDays[2].maxTempC;
avg3.innerHTML = sevenDays[2].avgTempC;
avghum3.innerHTML = sevenDays[2].maxHUM;
drain3.innerHTML = sevenDays[2].chance_rain;
dws3.innerHTML = sevenDays[2].chance_snow;

date4.innerHTML = sevenDays[3].Date;
temp4.innerHTML = sevenDays[3].maxTempC;
avg4.innerHTML = sevenDays[3].avgTempC;
avghum4.innerHTML = sevenDays[3].maxHUM;
drain4.innerHTML = sevenDays[3].chance_rain;
dws4.innerHTML = sevenDays[3].chance_snow;

date5.innerHTML = sevenDays[4].Date;
temp5.innerHTML = sevenDays[4].maxTempC;
avg5.innerHTML = sevenDays[4].avgTempC;
avghum5.innerHTML = sevenDays[4].maxHUM;
drain5.innerHTML = sevenDays[4].chance_rain;
dws5.innerHTML = sevenDays[4].chance_snow;

date6.innerHTML = sevenDays[5].Date;
temp6.innerHTML = sevenDays[5].maxTempC;
avg6.innerHTML = sevenDays[5].avgTempC;
avghum6.innerHTML = sevenDays[5].maxHUM;
drain6.innerHTML = sevenDays[5].chance_rain;
dws6.innerHTML = sevenDays[5].chance_snow;




}