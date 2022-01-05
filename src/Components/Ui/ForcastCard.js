import React, {Component, useEffect,useState} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import NavBar from './Navigation'


import {favorites} from "./Favorites";
import FavCard from "./FavCard";




const ForcastCard = ({ name, id ,LocalObservationDateTime,WeatherStatus,TemperatureValue,TemperatureUnit,MonT,MonU,TueT,TueU,WedT,WedU,ThuT,ThuU,FriT,FriU,addFav,remfav}) =>



{


    return (
        <div>
            <div className=' grow w-32 hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5'>

                <div>
                    <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black' onClick={(Fav) => remfav(favcard)} >remove</button>
                    <button onClick={(Fav) => addFav(favcard)} className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black">add to favorites</button>
                    <h1>{name}</h1>

                    <p>Today: {WeatherStatus}</p>

                    <p>Temperature: {TemperatureValue}  ({TemperatureUnit})</p>


                    <></>
                </div>

            </div>


        </div>

    );
}

export default  ForcastCard;