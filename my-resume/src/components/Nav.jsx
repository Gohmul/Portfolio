import { Link } from "react-router-dom";

export default function Nav () {
    return(
       <div className="nav">
           <Link to="/">
               <h2 className="nav-item">Home</h2>
           </Link>
           <Link to="/projects">
               <h2 className="nav-item">Projects</h2>
           </Link>
           <Link to="/about">
               <h2 className="nav-item">About</h2>
           </Link>
       </div>
    )
}