import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import H1 from "../Images/H1.jpg";
import H2 from "../Images/H2.jpg";
import H3 from "../Images/H3.jpg";
import H4 from "../Images/H4.jpg";
import H5 from "../Images/H5.jpg";
import H6 from "../Images/H6.jpg";
import H7 from "../Images/H7.jpg";
import H8 from "../Images/H8.jpg";
import { Container, Row, Col, Card, CardImg, CardBody, Label } from 'reactstrap';

function HistoryBooks() {
    return (
        <div className="book-store">
            <Container className="mt-5 text-center">
                <Row>
                    <Col>
                        <h1 className="text" style={{ fontWeight: "bold" }}>
                            Explore Fascinating History Books!
                        </h1>
                        <p className="text">
                            Dive into the pages of the past with these captivating history books.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {[
                        { img: H1, title: "Black in Blues", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1726021576i/199534697.jpg" },
                        { img: H2, title: "The Wager: A Tale of Shipwreck, Mutiny and Murder", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659407155i/61714633.jpg" },
                        { img: H3, title: "Nuclear War: A Scenario", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698060837i/182733784.jpg" },
                        { img: H4, title: "The Guns of August", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617037342i/40779082.jpg" },
                        { img: H5, title: "The Memory Palace: True Short Stories of the Past", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718894981i/208894905.jpg" },
                        { img: H6, title: "1776", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1306787560i/1067.jpg" },
                        { img: H7, title: "John Adams", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478144278i/2203.jpg" },
                        { img: H8, title: "Guns, Germs, and Steel: The Fates of Human Societies", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842.jpg" },
                    ].map((book, index) => (
                        <Col key={index} sm="12" md="6" lg="3">
                            <a
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <Card className="book-card">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={book.img}
                                        alt={book.title}
                                        className="book-img"
                                    />
                                    <CardBody className="text-center">
                                        <Label className="book-title">{book.title}</Label>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HistoryBooks;
