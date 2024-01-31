let database = localStorage.getItem("response");


if(database)
{
  
    const total_data = JSON.parse(database);

    // Use 'total_data' as needed
    console.log(total_data);
    //HOUR DATA COLLECTION
    const hoursData = total_data.forecast.forecastday[0].hour;
    const allHours = hoursData.map((hourEntry)=>hourEntry.time);
    const allTemp = hoursData.map((hoursEntry)=>hoursEntry.temp_c);
    const allWind = hoursData.map((hoursEntry)=>hoursEntry.wind_kph);
    const allWindDeg = hoursData.map((hoursEntry)=>hoursEntry.wind_degree);
    const allHum = hoursData.map((hoursEntry)=>hoursEntry.humidity);
    const allWindChill = hoursData.map((hoursEntry)=>hoursEntry.windchill_c);
    const allHeat = hoursData.map((hoursEntry)=>hoursEntry.heatindex_c);
    const allRain = hoursData.map((hoursEntry)=>hoursEntry.chance_of_rain);


    //DAY COLLECTION
   

  //   const allDays = total_data.forecast.forecastday;

  //  const sevenDays = [];

  //  allDays.forEach((forecastDay) => {
  //   const dayDetails = 
  //   {
  //     Date: forecastDay.date,
  //     maxTempC: forecastDay.day.maxtemp_c,
  //     minTempC: forecastDay.day.mintemp_c,
  //     maxWindKph: forecastDay.day.maxwind_kph,
  //     totalPrecipMm: forecastDay.day.totalprecip_mm,
  //   };

  //   sevenDays.push(dayDetails);
  //  });

   //date vars

  //  wtime1.innerHTML = sevenDays[0].Date;
  //  wtemp1Max.innerHTML = sevenDays[0].maxTempC;
  //  wtemp1Min.innerHTML= sevenDays[0].minTempC;

  //  wtime2.innerHTML = sevenDays[1].Date;
  //  wtemp2Max.innerHTML = sevenDays[1].maxTempC;
  //  wtemp2Min.innerHTML= sevenDays[1].minTempC;

  

  //  wtime3.innerHTML = sevenDays[2].Date;
  //  wtemp3Max.innerHTML = sevenDays[2].maxTempC;
  //  wtemp3Min.innerHTML= sevenDays[2].minTempC;

   


  //hours vars
  let h1 = allHours[0];
  let t1 = allTemp[0];
  let hum1 = allHum[0];
  let heat1 = allHeat[0];
  let cr1 = allRain[0];
  let w1 = allWind[0];
  let wdeg1 = allWindDeg[0];
  time1.innerHTML = h1;
  temp1.innerHTML = t1;
  Hum1.innerHTML = hum1;
  he1.innerHTML = heat1;
  rain1.innerHTML = cr1;
  ws1.innerHTML = w1;
    let h2 = allHours[1];
  let t2 = allTemp[1];
  let hum2 = allHum[1];
  let heat2 = allHeat[1];
  let cr2 = allRain[1];
  let w2 = allWind[1];
  let wdeg2 = allWindDeg[1];
  time2.innerHTML = h2;
  temp2.innerHTML = t2;
  Hum2.innerHTML = hum2;
  he2.innerHTML = heat2;
  rain2.innerHTML = cr2;
  ws2.innerHTML = w2;
  



  
  let h3 = allHours[2];
  let t3 = allTemp[2];
  let hum3 = allHum[2];
  let heat3 = allHeat[2];
  let cr3 = allRain[2];
  let w3 = allWind[2];
  let wdeg3 = allWindDeg[2];
  time3.innerHTML = h3;
  temp3.innerHTML = t3;
  Hum3.innerHTML = hum3;
  he3.innerHTML = heat3;
  rain3.innerHTML = cr3;
  ws3.innerHTML = w3;
  
    let h4 = allHours[3];
    let t4 = allTemp[3];
    let hum4 = allHum[3];
    let heat4 = allHeat[3];
    let cr4 = allRain[3];
    let w4 = allWind[3];
    let wdeg4 = allWindDeg[3];
    time4.innerHTML = h4;
   temp4.innerHTML = t4;
   Hum4.innerHTML = hum4;
   he4.innerHTML = heat4;
   rain4.innerHTML = cr4;
   ws4.innerHTML = w4;
   
    let h5 = allHours[4];
    let t5 = allTemp[4];
    let hum5 = allHum[4];
    let heat5 = allHeat[4];
    let cr5 = allRain[4];
    let w5 = allWind[4];
    let wdeg5 = allWindDeg[4];
    time5.innerHTML = h5;
  temp5.innerHTML = t5;
  Hum5.innerHTML = hum5;
  he5.innerHTML = heat5;
  rain5.innerHTML = cr5;
  ws5.innerHTML = w5;
 


    let h6 = allHours[5];
    let t6 = allTemp[5];
    let hum6 = allHum[5];
    let heat6 = allHeat[5];
    let cr6 = allRain[5];
    let w6 = allWind[5];
    let wdeg6 = allWindDeg[5];
    time6.innerHTML = h6;
  temp6.innerHTML = t6;
  Hum6.innerHTML = hum6;
  he6.innerHTML = heat6;
  rain6.innerHTML = cr6;
  ws6.innerHTML = w6;
     
  let h7 = allHours[6];
  let t7 = allTemp[6];
  let hum7 = allHum[6];
  let heat7 = allHeat[6];
  let cr7 = allRain[6];
  let w7 = allWind[6];
  let wdeg7 = allWindDeg[6];
  time7.innerHTML = h7;
  temp7.innerHTML = t7;
  Hum7.innerHTML = hum7;
  he7.innerHTML = heat7;
  rain7.innerHTML = cr7;
  ws7.innerHTML = w7;
     
  let h8 = allHours[7];
  let t8 = allTemp[7];
  let hum8 = allHum[7];
  let heat8 = allHeat[7];
  let cr8 = allRain[7];
  let w8 = allWind[7];
  let wdeg8 = allWindDeg[7];
  time8.innerHTML = h8;
  temp8.innerHTML = t7;
  Hum8.innerHTML = hum8;
  he8.innerHTML = heat8;
  rain8.innerHTML = cr8;
  ws8.innerHTML = w8;
     
    
    




    
}
