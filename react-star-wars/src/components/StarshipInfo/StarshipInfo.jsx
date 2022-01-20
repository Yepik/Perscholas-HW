import React from "react";
import './StarshipInfo.css'
import {useNavigate} from "react-router-dom"
export default function StarshipInfo(props) {
    let navigate=useNavigate()
  return (
    <div className="StarshipInfo">
        <button onClick={()=> {navigate('/starships')}}>Go Back</button>
      <h1 className="Star">Starship Information</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.starship.name}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{props.starship.model}</td>
          </tr>
          <tr>
            <td>MGLT</td>
            <td>{props.starship.MGLT}</td>
          </tr>
          <tr>
            <td>Cargo Capacity</td>
            <td>{props.starship.cargo_capacity}</td>
          </tr>
          <tr>
            <td>Consumables</td>
            <td>{props.starship.consumables}</td>
          </tr>
          <tr>
            <td>Cost in credits</td>
            <td>{props.starship.cost_in_credits}</td>
          </tr>
          <tr>
            <td>Created</td>
            <td>{props.starship.created}</td>
          </tr>
          <tr>
            <td>Crew</td>
            <td>{props.starship.crew}</td>
          </tr>
          <tr>
            <td>Hyperdrive rating</td>
            <td>{props.starship.hyperdrive_rating}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>{props.starship.length}</td>
          </tr>
          <tr>
            <td>Manufacturer</td>
            <td>{props.starship.manufacturer}</td>
          </tr>
          <tr>
            <td>Max Atmosphering Speed</td>
            <td>{props.starship.max_atmosphering_speed}</td>
          </tr>

          <tr>
            <td>Passengers</td>
            <td>{props.starship.passengers}</td>
          </tr>

          <tr>
            <td>Starship Class</td>
            <td>{props.starship.starship_class}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
