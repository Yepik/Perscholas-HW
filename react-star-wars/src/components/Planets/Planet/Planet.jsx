import React from 'react'
import './Planet.css'

export default function Planet(props) {
    return(
        <div className="planet">
            <h3 className="planet-name">
                Planet name:{props.planet.name}
            </h3>
        </div>
    )
}