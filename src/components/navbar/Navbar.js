import { Link} from "react-router-dom";

import "./navbar.style.css"

export const Navbar = () => {
    return (
        <div className="navbar-container">
            {/* <div><h1>logo</h1></div> */}
            <div>
               <ul className="navitem-container">
                {/* <li className="navitems" onClick={}>Home</li>
                <li className="navitems">About</li>
                <li className="navitems">Contact</li> */}
                <Link to="/" className="navitems"> Home </Link>
                <Link to='/about' className="navitems">About</Link>
                <Link to="/contact" className="navitems">Contact</Link>
               </ul>
            </div>
        </div>
    )
}