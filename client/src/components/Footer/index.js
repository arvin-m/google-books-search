import React from "react";
import './style.css'

function Footer() {
  return (
    <React.Fragment>
      
            <div className="push"></div>
            <footer className="footer ">
                <div className="container-fluid padding ">
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-12">
                        <a className="copyRight col-sm-12 col-md-12 " href="https://arvin-mahmoudi-portfolio.herokuapp.com/" ><span className="fas fa-copyright"></span>Arvin Mahmoudi</a>
                        </div>
                        {/* <span className="copyRight col-sm-12 col-md-12" href="https://arvin-mahmoudi-portfolio.herokuapp.com/">&copy;Arvin Mahmoudi</span> */}
                    </div>
                </div>
            </footer>
            
        </React.Fragment>
   
  );
}

export default Footer;
