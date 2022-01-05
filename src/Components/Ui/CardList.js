import React from 'react';
import Card from './Card';
import FavCard from "./FavCard";
const CardList = ({addFav,remfav,weatherCondition,cityName,forecast,id}) => {
  return (

        <div>
   <div>
      <Card name={cityName} WeatherStatus={weatherCondition.WeatherText} addFav={addFav} remfav={remfav} id={id} ></Card>


       <h1 className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy">5-day daily forecast</h1>
   </div>
          {forecast && forecast.DailyForecasts &&
              <div>{forecast.DailyForecasts.map((day, i) => (
                  <div key={i}>
            <FavCard TemperatureUnit={day.Temperature.Minimum.Value} WeatherStatus={day.Day.IconPhrase} name={day.Date}></FavCard>



                  </div>
              ))}</div>
          }


    </div>
  );
}

export default CardList;