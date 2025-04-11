import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/animals" className="nav-link">Animals</Link>
                <Link to="/crops" className="nav-link">Crops</Link>
                <Link to="/market" className="nav-link">Market</Link>
            </div>
        </nav>
    )
}

export default NavBar