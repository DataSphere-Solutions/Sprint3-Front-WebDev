import { Link } from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav = () => {
    return (
        <NavStyle>
            <header className="nav">
            <a href="/"><img src="./src/assets/Formula_E_2017 1 (1).png" alt="" className='logo' /></a>

                <div className="container">
                    <ul>
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/Palestras" className="navLink">Palestras</Link>
                        <Link to='/login' className="navLink">Login</Link>
                    </ul>
                </div>
            </header>
        </NavStyle>
    )
}
export default Nav