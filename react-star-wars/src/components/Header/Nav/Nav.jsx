
import { Link } from "react-router-dom";
import './Nav.css'
export default function Nav(props) {
  return (
    <nav className="Nav">
      <h3 className="logo">Logo</h3>
      <ul className="nav-link">
        <Link to={"Starships"}>
          <li className="nav-item">Starships</li>
        </Link>
        <Link to={"planets"}>
          <li className="nav-item">Planets</li>
        </Link>
        
      </ul>
    </nav>
  );
}
