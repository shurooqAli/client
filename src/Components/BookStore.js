import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Card, CardImg, CardBody, Button, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';  // Importing Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import History from '../Images/history.webp';
import Horror from '../Images/horror.jpg';
import Science from '../Images/science.jpg';
import Drama from '../Images/drama.webp';
//import Feedback from './Feedback'; 


function BookStore() {
  return (
    <div className="bookStore">
      <Container className="mt-5">
        <Row>
          {/* Card 1 */}
          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={History} alt="History Books" />
              <CardBody>
                <Link to="/historyBooks">
                <Button color="primary" block>History Books</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          
          {/* Card 2 */}
          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={Horror} alt="Horror Books" />
              <CardBody>
                <Link to="/horrorBooks">
                  <Button color="primary" block>Horror Books</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={Science} alt="Science Books" />
              <CardBody>
                <Link to="/scienceBooks">
                  <Button color="primary" block>Science Books</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={Drama} alt="Drama Books" />
              <CardBody>
                <Link to="/dramaBooks">
                  <Button color="primary" block>Drama Books</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="center-container">
      <FormGroup>
              <Link to="/home" className="link-text">
               <Button className="custom-btn">feedback</Button>
                </Link>
    </FormGroup>
    
    </Container>
    </div>
  );
}

export default BookStore;

