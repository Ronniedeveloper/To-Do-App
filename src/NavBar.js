import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <h1>My Note</h1>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <Link to="/">Notes</Link>
                    </li>
                    <li>
                        <Link to="/create">Add note</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;
