import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div className="container" style={{marginTop:"2rem"}}>
               <h1 className="text-center">Page Not Found</h1>
               <div className="text-center">
                 <img src="Assets/404-err.PNG" aria-label="Face With Rolling Eyes Emoji"/>
               </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
