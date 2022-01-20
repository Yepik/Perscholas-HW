import React from "react";
import Planet from './Planet/Planet'
import './Planets.css'
export default function Planets(props){
    
    return(
        <div className="Planets">
            <h2 className="planets-title">Planets</h2>
            <div className="planets-planets">

            {props.planets.map((planet, index) => <Planet planet={planet} key={index} />)}
            {props.isLoadMorePlanets?null:<button className="btn-load-more-planets" onClick={props.handleLoadMorePlanets}>Load More</button>}
            </div>
        </div>
    )
}