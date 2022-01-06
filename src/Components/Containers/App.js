import React, {Component, useEffect, useLayoutEffect, useState} from 'react';
import CardList from '../Ui/CardList';
import Favlist from "../Ui/Favlist";
import SearchBox from '../Ui/SearchBox';
import Scroll from '../Ui/Scroll';

import NavBar from '../Ui/Navigation'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addFavorite, removeFavorite, setFavorites} from "../../State/ActionCreators/Index";
import { actionCreators } from '../../State/Index';
import {favorites} from "../Ui/Favorites";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyInput from "../Ui/Auto";
import SegList from "../Ui/SegList";
toast.configure()
const App =()=>  {
 const [citieslist,Setcities]= useState([])
 const [searchfield,Setsearchfiles]= useState('')
 const [route,Setroute]=useState('home')
 const [filteredcities,Setfiltercities]= useState([])
 const[seg,SetSeg]=useState([])
 const[havecards,Sethavecard]=useState("true")
  const[firstPage,SetfirstPage]= useState("true")
  const[currentres,Setcurrentres]=useState([])
  const[forcastres,Setforcast]=useState([])
  const[autocomplate,Setautocomplate]=useState([])
  const[cityName,SetCituName] =useState("Tel-aviv")
  const [FavRes,SetFavRes] =useState([])
  const[tempid,Settempid]=useState('')
   const[FevNamelist,SetFevName]= useState([])
   const[StartPage,SetStartPage]=useState('true')
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {setFavorites } = bindActionCreators(actionCreators, dispatch);
    const {addFavorite } = bindActionCreators(actionCreators, dispatch);
    const {removeFavorite } = bindActionCreators(actionCreators, dispatch);

   const homepage=()=>{
        Setroute('home');
    }

   const favpage=()=>{
        Setroute('fav');
    }

   const onSearchChange = (event) => {
     //  Setsearchfiles( event.target.value );
     if (event.target.value.length===3){
         axios({
             method: 'get',
             url:`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b&q=${event.target.value}`,
         })
             .then(res=> Setautocomplate(res.data))
     }
    if(event.target.value.length<3){
        Setautocomplate([])
    }
   }

   const onFevClick =(name)=>{
       axios({
           method: 'get',
           url:`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b&q=${name}`,

       })
           .then(res=> state.favorites[0]=(res.data[0].Key))

       axios({
           method: 'get',
           url:"http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b",
       })
           .then(res=> state.favorites[1]=(res.data[0]))

       axios({
           method: 'get',
           url:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b",

       })
           .then(res=> state.favorites[2]=(res.data))

      console.log(state.favorites)


       Setroute('home')

   }

   useEffect(()=>{
  console.log(state.favorites)
       const FavNames=[]
       const promises=[]
       for (let i=0;i<localStorage.length;i++)
       {
          let tempfav=JSON.parse((localStorage.getItem(localStorage.key(i))))
             const temppro=axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${tempfav.id}?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b`)
              promises.push(temppro)
            FavNames.push(tempfav.name)
       }

      SetFevName(FavNames)
       Promise.all(promises).then(res=> SetFavRes(res))
      SetfirstPage('false');
    axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b&q=tel-aviv`,

    })
        .then(res => Settempid(res.data[0].Key))

    axios({
        method: 'get',
        url: "http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b",
    })
        .then(res => Setcurrentres(res.data[0]))

    axios({
        method: 'get',
        url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b",

    })
        .then(res => Setforcast(res.data))
       },[])

    const cardsStatus=()=>{
       if(filteredcities.length===0)
       {

           Sethavecard('false')}
       else{
           Sethavecard('true')
    }
    }
  const Enter=()=>{
       Setfiltercities(
           [{
               name:"hello"
           }]
       )
  }

    const addfav=(fav)=>{
      const temp = localStorage.getItem(fav.name);
       if(temp)
        {
           if(firstPage!=="true")
           {toast('already in favorites',{position:toast.POSITION.TOP_LEFT})}
        }else
        {
            toast('addad to favorites',{position:toast.POSITION.TOP_LEFT})
            localStorage.setItem(fav.name,JSON.stringify(fav));
        }

   }
  const remfav=(fav)=>{

      const temp = localStorage.getItem(fav.name);
      if(temp){
          localStorage.removeItem(fav.name);
          toast('Removed from favorites',{position:toast.POSITION.TOP_LEFT})
      }else{ toast('This city is not in the favorites',{position:toast.POSITION.TOP_LEFT})}

  }
   const addcardtofav =(list)=>{
       addFavorite(list);

   }

const onUserSelect=(optionKey,optionName)=>{
       Setautocomplate([]);
       SetCituName(optionName);

    axios({
        method: 'get',
        url:`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b&q=${optionName}`,

    })
        .then(res=> Settempid(res.data[0].Key))

    axios({
        method: 'get',
        url: `http://dataservice.accuweather.com/currentconditions/v1/${optionKey}?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b`,
    })
        .then(res=> Setcurrentres(res.data[0]))

    axios({
        method: 'get',
        url:`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${optionKey}?apikey=0qIXVD2sQihKaDSFhZnfEkseGkf2vg5b`,

    })
        .then(res=> Setforcast(res.data))
}

    const Setfilteredcities=()=>{
        Setfiltercities( cities.filter(city=>{

            return city.name.toLowerCase()===(searchfield).toLowerCase();

        }))

    }

        return route==='fav'?
            ( localStorage.length!==0?
            <div className='tc'>

                <p>  Favorites Page </p>
                <NavBar home={homepage} fav={favpage}  />
                <Favlist cities={FavRes} addFav={addfav} favname={FevNamelist}  cardClick={onFevClick} />

            </div>
          :
                    <div className='tc'>

                        <p>  Favorites Page </p>
                        <NavBar home={homepage} fav={favpage}  />
                        <Favlist cities={FavRes} addFav={addfav} favname={FevNamelist} cardClick={onFevClick} />
                      <h1 className="grow w-32  flex-l hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5" > Favorite page is empty go back to the home page add cities</h1>
                    </div>
)
            :
          (

                <div className='tc'>

                    <h3>Weather App</h3>
                    <NavBar home={homepage} fav={favpage}  />

                    <Scroll>
                    <div>
                     <div className='input-contanior'>
                       <MyInput />

                        <div>
                         {autocomplate&&autocomplate.length&&
                              <div className="autoComplate-manu  grow w-32 hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5">
                                  {autocomplate.map((option,i)=>(
                                      <div className="br3 pa3 ma3" key={i} onClick={()=>onUserSelect(option.Key,option.LocalizedName)} >
                                          {option.LocalizedName}
                                      </div>
                                  ))}
                              </div>
                         }
                        </div>
                     </div>
                    </div>
                        <SegList />


                        <SearchBox searchChange={onSearchChange}/>


                        <CardList  forecast={forcastres} weatherCondition={currentres} cityName={cityName} addFav={addfav} remfav={remfav} id={tempid} />
                    </Scroll>
                </div>
            );

}

export default App;