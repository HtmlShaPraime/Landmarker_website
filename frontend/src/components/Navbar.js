import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <header>
            <div className="navigationBar">
                <nav>
                    <ul>
                        <li className="homeLink"><Link to="/">Landmarker</Link></li>
                        <li><Link to="/info">How does it work ?</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar