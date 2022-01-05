import React from 'react';
import FavCard from './FavCard';

const FavList = ({cities,addFav,favname,cardClick}) => {

    return (


        <div>
            {
                cities.map((user, i) => {
                    return (
                        <FavCard

                            cardClick={cardClick}
                            key={i}

                            name={favname[i]}
                            WeatherStatus={cities[i].data[0].WeatherText}
                            TemperatureValue={cities[i].data[0].Temperature.Imperial.Value}
                            TemperatureUnit={cities[i].data[0].Temperature.Imperial.Unit}

                            addFav={addFav}

                        />
                    );
                })
            }
        </div>
    );
}

export default FavList;