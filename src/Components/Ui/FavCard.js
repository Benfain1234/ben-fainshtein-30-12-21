import React, {Component, useEffect,useState} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import NavBar from './Navigation'


import {favorites} from "./Favorites";




const FavCard = ({ name, id ,LocalObservationDateTime,WeatherStatus,TemperatureValue,TemperatureUnit,MonT,MonU,TueT,TueU,WedT,WedU,ThuT,ThuU,FriT,FriU,addFav,cardClick}) =>



{


    return (
        <div >
            <div onClick={() => cardClick(name)} className=' grow w-32 hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5'>

                <div>

                    <h1>{name}</h1>

                    <p>Today: {WeatherStatus}</p>

                    <p>Temperature: {TemperatureValue}  ({TemperatureUnit})</p>


                    <></>
                </div>

            </div>




        </div>

    );
}

export default  FavCard;