import React from 'react';
import '../Head/style.css';

function Container() {



    return (

        
            // <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container ">
                        <div className="row justify-content-center">
                         <img className="col-3" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Google_Book_Search_Beta_logo.png"/>
                        </div>
                        <br></br>
                        <div className="row d-flex justify-content-center">
                        <h4 className="col-4">(React)
                              {/* <span className="blue">G</span>
                              <span className="red">o</span>
                              <span className="yellow">o</span>
                              <span className="blue">g</span>
                              <span className="green">l</span>
                              <span className="red">e</span> */}
                               Google Books Search</h4>
                        </div>
                        <div className="row d-flex justify-content-center">
                         <p className=" col-4 lead">Search for and save books of interest.</p>
                        </div>
                         
                     </div>
                </div>
            // </div>
       
    )
}


export default Container;
