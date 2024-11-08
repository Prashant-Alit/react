// import { Link} from "react-router-dom";

// import "./navbar.style.css"

// export const Navbar = () => {
//     return (
//         <div className="navbar-container">
//             {/* <div><h1>logo</h1></div> */}
//             <div>
//                <ul className="navitem-container">
//                 <Link to="/" className="navitems"> Home </Link>
//                 <Link to='/about' className="navitems">About</Link>
//                 <Link to="/contact" className="navitems">Contact</Link>
//                 <Link to="/dashboard" className="navitems">Dashboard</Link>
//                </ul>
//             </div>
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import "./navbar.style.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Logo (optional) */}
      {/* <div><h1>logo</h1></div> */}
      
      <div>
        <ul className="navitem-container">
          <li><Link to="/" className="navitems">Home</Link></li>
          <li><Link to='/about' className="navitems">About</Link></li>
          <li><Link to="/contact" className="navitems">Contact</Link></li>

          <li className="dropdown">
            <Link to="/dashboard" className="navitems">Dashboard</Link>
            <ul className="dropdown-menu">
              <li><Link to="/dashboard/profile" className="navitems">Profile</Link></li>
              {/* <li><Link to="/dashboard/settings" className="navitems">Settings</Link></li> */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
