// import React from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// function Nav() {
//   return (
//     <nav className="nav-container">
//       <h1>Shop</h1>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/products">Products</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/signup">SignUp</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
//-----------------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/brands">Brands</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
