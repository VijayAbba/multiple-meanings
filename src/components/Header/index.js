import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="header-bg-container">
    <div className="">
      <img
        className="logo-img"
        src="https://img.freepik.com/free-vector/luxury-brand-letter-d-design_1035-9029.jpg?w=826&t=st=1676808834~exp=1676809434~hmac=48b02e885693607388a9167993cb2a27ee797c14f8f4103105a22b96ed2466f3"
        alt=""
      />
    </div>
    <ul className="header-links-card">
      <li>
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
