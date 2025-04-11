import { Link } from "react-router-dom";
import "../css/NavBar.css"
import "bootswatch/dist/brite/bootstrap.min.css";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/animals" className="nav-link">Animals</Link>
                <Link to="/crops" className="nav-link">Crops</Link>
                <Link to="/market" className="nav-link">Market</Link>
            </div>
        </nav>
    )
}

export default NavBar