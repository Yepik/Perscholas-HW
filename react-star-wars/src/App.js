import StarshipInfo from './components/StarshipInfo/StarshipInfo'
import './App.css';
import React,{useState,useReducer,useEffect} from 'react';
import Planets from './components/Planets/Planets'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Starships from './components/Starships/Starships'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'
import fetchData from './jsfile/fetchData.js'
const urlStarships ='https://swapi.dev/api/starships/'
const urlPlanets ='https://swapi.dev/api/planets/'

function reducerPlanets(state, action) {
  
  return [...state,...action.payload]
}
function reducerNextPagePlanets(state, action){
  return state=action.payload
}

function App() {
  const [starshipsData,setStarshipsData] =useState([]);
  const [isLoadMore,setIsLoadMore] =useState(false);
  const [isLoadMorePlanets,setIsLoadMorePlanets] =useState(false);
  const [errors,setError] =useState(null);
  const [pilotData,setPilotData] =useState([])
  const [loading,setLoading] =useState(false);
  const [nextPage,setNextPage]=useState("")
  const [planets, dispatchPlanets]=useReducer(reducerPlanets,[])
  const [nextPagePlanets, dispatchNextPagePlanets]=useReducer(reducerNextPagePlanets, 'apple')
  useEffect(() =>{
    fetch(urlStarships)
    .then(response =>{ if(response.ok)
    return response.json();
    throw response
})
        .then(data=> {
          
          setStarshipsData(data.results)
          setNextPage(data.next)})
          .catch(error =>{ 
          console.log("Error has occurred: " ,error)
          setError(error);
      })
      .finally(() =>{
      setLoading(false)});  
      fetch (urlPlanets)
        .then((response) =>{
          if(response.ok)
          return response.json();
          throw response
        })
          .then((data) =>{
            
            dispatchPlanets({type:'planets',payload:data.results})
            dispatchNextPagePlanets({type: "change", payload:data.next})
          })
  },[])

  const handleLoadMore=event=>{
    fetch(nextPage)
      .then(response => {
        if(response.ok)
          return response.json()
        throw response})
        .then(data => { 
          if(data.next===null ){
            setIsLoadMore(true)
            setStarshipsData([...starshipsData,...data.results])
        }
        else {
          setNextPage(data.next)
          
          setStarshipsData([...starshipsData,...data.results])
        }})
          
        }
        const handleLoadMorePlanets= event=>{
          fetch(nextPagePlanets)
      .then(response => {
        if(response.ok)
          return response.json()
        throw response})
        .then(data => { 
          if(data.next===null ){
            setIsLoadMorePlanets(true)
            dispatchPlanets({type:'planets',payload:data.results})
        }
        else {
          dispatchNextPagePlanets({type: "change", payload:data.next})
          
          dispatchPlanets({type:'planets',payload:data.results})
        }})
        }
  return (
    <BrowserRouter> 
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Starships data={starshipsData}/>} />
            <Route path="/starships" element={<Starships data={starshipsData} isLoadMore={isLoadMore} setIsLoadMore={setIsLoadMore} handleLoadMore={handleLoadMore}/>} />
            <Route path='/planets'element={<Planets planets={planets} handleLoadMorePlanets={handleLoadMorePlanets} isLoadMorePlanets={isLoadMorePlanets}/>}/>
            {starshipsData.map((starship, index) =><Route path={`/starships/starship/:id`} element={<StarshipInfo starship={starship} key={index} />} key={index}/>)}
            {starshipsData.map((starship, index) =><Route path={`/starship/:id`} element={<StarshipInfo starship={starship} key={index} />} key={index}/>)}
            <Route path="*" element={<Error/>}/>
          </Routes>
          
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
