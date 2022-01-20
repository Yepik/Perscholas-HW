import React from 'react';
import './Starship.css'
import { Link } from "react-router-dom";
//async await axios
export default function Starship(props){
    return(
        <div className="Starship">
            <Link to={`Starship${props.index}`}>
                <h2 className={`starship-name${props.index}`}>{props.starship.name}</h2>
            </Link>
        </div>
    )
}