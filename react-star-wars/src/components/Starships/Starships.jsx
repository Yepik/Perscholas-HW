import React from 'react';
import './Starships.css'
import Starship from './Starship/Starship'
export default function Starships(props){
    let starships=props.data
    
    return(
        <div className="StarshipsPage">
        <div className="Starships">
            
            {starships.map((starship,index) =><Starship starship={starship} index={index} key={index}/>)}
            
        </div>
        <button type="button" hidden={props.isLoadMore} className="btn btn-primary btn-load-more" onClick={props.handleLoadMore}>Load More</button>
        </div>
    )
}