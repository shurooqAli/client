// First.js
import React from 'react';
import { Button, Container, Row, Col, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO from '../Images/logo-t.jpg';


const First = () => {
  return (
    <div className="background-image">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col className="text-center">
          <img src={LOGO} width="800px" height="400px"/>
            <h1 className="title">Welcome To Book Library App</h1>
            <div className="mt-5">
              
              
                <Link to="/register" className="link-text">
                <Button className="custom-btn mr-3">
                  Register
                  </Button>
                </Link>              
    
              
                <Link to="/login"  className="link-text">
                <Button className="custom-btn">
                  Login
                  </Button>
                </Link>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default First;
