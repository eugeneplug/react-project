import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav>
            <a className="NavLogo" href="#">Traunship</a>
            <div className="NavContent">
                <li>
                    <ul><a href="#">Features</a></ul>
                    <ul><a href="#">Products</a></ul>
                    <ul><a href="#">Testimonial</a></ul>
                    <ul><a href="#">Contact</a></ul>
                </li>
            </div>
            <button className="NavContentBtn">Try a demo</button>
        </nav>
     );
}
 
export default Navbar;