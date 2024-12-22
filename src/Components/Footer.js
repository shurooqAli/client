import React from 'react';
import { Container, Row, Col } from "reactstrap";


function Footer(){
    return(
        <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center mb-2">
            <p>Copyright &copy; 2024 Library. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">University of Technology and Applied Science</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
}
export default Footer;