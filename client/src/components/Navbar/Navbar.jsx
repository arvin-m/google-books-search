import React from 'react';
import '../Navbar/style.css';


function Navbar() {



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <i className="navbar-brand" href="#">Google Books</i>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/search">Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
          
        </div>
      </nav>
    )
}


export default Navbar;
