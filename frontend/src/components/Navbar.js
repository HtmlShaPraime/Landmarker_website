import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
    const {user} = useAuthContext()

    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="navigationBar">
                <nav>
                    <ul>
                        <li className="homeLink"><Link to="/">Landmarker</Link></li>
                        <li><Link to="/info">How does it work ?</Link></li>
                        <li>{user && (
                            <div>
                                <span>{user.email}</span>
                                <button onClick={handleClick}>Log out</button>
                            </div>
                        )}
                        </li>
                        <li>
                            {!user && (
                            <div>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar