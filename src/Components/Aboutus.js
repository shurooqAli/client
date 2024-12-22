import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
    return (
        <div className="aboutUs">
            <Container className="mt-5">
                <h1 className="text-center mb-4 aboutUs-title">About Us</h1>
                <p className="text-center aboutUs-description">
                    Welcome to our team! We are Abeer, Shurooq, and Zahra, passionate individuals committed to delivering exceptional service and making a positive impact on our community. Our journey is driven by innovation, inspiration, and collaboration.
                </p>

                <Row className="mt-5">
                    <Col sm="12" md="6" lg="4" className="mb-4">
                        <Card className="aboutUs-card">
                            <CardBody>
                                <h5 className="text-center card-title">Abeer</h5>
                                <p className="text-center card-id">ID: 16j19171</p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" md="6" lg="4" className="mb-4">
                        <Card className="aboutUs-card">
                            <CardBody>
                                <h5 className="text-center card-title">Shurooq</h5>
                                <p className="text-center card-id">ID: 16s17110</p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" md="6" lg="4" className="mb-4">
                        <Card className="aboutUs-card">
                            <CardBody>
                                <h5 className="text-center card-title">Zahra</h5>
                                <p className="text-center card-id">ID: 16s1963</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;