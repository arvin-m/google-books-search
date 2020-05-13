import React from 'react';
import '../Jumbotron/style.css';

function jumbotron({children}) {



    return (
           
                <div className="jumbotron jumbotron-fluid">
                    <div className="container ">
                        <div className="row justify-content-center">
                         <img className="col-3" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Google_Book_Search_Beta_logo.png"/>
                        </div>
                        <br></br>
                        <div className="row d-flex justify-content-center">
                        <h4 className="col-4">(React)Google Books Search</h4>
                        </div>
                       {children}
                         
                     </div>
                </div>
       
    )
}


export default jumbotron;
