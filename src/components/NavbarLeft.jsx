import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { useState } from "react";

export const NavbarLeft = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="col-2">
      <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
        <div className="nav-container">
        <Link to={"/"} className="navbar-brand" href="index.html">
            <img src="./assets/Spotify_Logo.png" alt="Spotify_Logo" style={{ width: "170px", height: "80px" }} />
            </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                <Link to={"/"} className="navbar-brand" href="index.html">
                    <FaHome className="fas fa-home fa-lg"></FaHome>&nbsp; HOME </Link>
                </li>

                <li>
                  <a className="nav-item nav-link" href="/">
                    <BsFillBookFill className="fas fa-book-open fa-lg" />&nbsp; YOUR LIBRARY</a>
                </li>

                <li>
                  <div className="input-group mt-3">
                    <input type="search" className="form-control mb-2"id="searchField" placeholder="CERCA" aria-label="Search" aria-describedby="basic-addon2"
                      onChange={handleChange}/>

                    <div className="input-group-append" style={{ marginBottom: "6%" }}>
                      <Link to={"/search-page/" + query} className="btn btn-outline-secondary btn-m" type="button" id="button-addon1">GO</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">SIGN UP</button>
          <button className="btn login-btn" type="button">LOGIN</button>
          <br/>
          <a href="/">COOKIES</a> - <Link href="/">PRIVACY</Link>
        </div>
      </nav>
    </div>
  );
};
