import './Navbar.css';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { IoHeartCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1 style={{color:"black"}}>Product Mart</h1>
        </Link>
        <div className="nav-links">
          <Link to="/products" className="nav-link"><span style={{color:"black"}}>Products</span></Link>
          {/* <Link to="/products" className="nav-link">Products</Link> */}
          <Link to="/recipes" className="nav-link"><span style={{color:"black"}}>Recipes</span></Link>
          <Link to="/cartItems">
          <GrCart size={40} style={{ color: "lightcoral" }} />
          </Link>
        <Link to="/favItems">
        <IoHeartCircleSharp size={40} style={{color: "lightcoral"}} />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;