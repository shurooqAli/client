import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from "../Images/d1.jpg";
import d2 from "../Images/d2.jpg";
import d3 from "../Images/d3.jpg";
import d4 from "../Images/d4.jpg";
import d5 from "../Images/d5.jpg";
import d6 from "../Images/d6.jpg";
import d7 from "../Images/d7.jpg";
import d8 from "../Images/d8.jpg";
import { Container, Row, Col, Card, CardImg, CardBody, Label } from 'reactstrap';

function DramaBooks() {
    return (
        <div className="book-store">
            <Container className="mt-5 text-center">
                <Row>
                    <Col>
                        <h1 className="text" style={{ fontWeight: "bold" }}>
                            Discover Your Next Drama Book!
                        </h1>
                        <p className="text">
                            Immerse yourself in gripping stories and emotional journeys. Browse our curated collection of must-read drama books.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {[
                        { img: d1, title: "The Kite Runner", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541428344i/17165596.jpg" },
                        { img: d2, title: "My Sister's Keeper", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1369504683i/10917.jpg" },
                        { img: d3, title: "Where the Crawdads Sing", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg" },
                        { img: d4, title: "A Thousand Splendid Suns", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655336738i/128029.jpg" },
                        { img: d5, title: "To Kill a Mockingbird", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg" },
                        { img: d6, title: "A Man Called Ove", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg" },
                        { img: d7, title: "Eleanor Oliphant Is Completely Fine", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557858891i/35900387.jpg" },
                        { img: d8, title: "Little Fires Everywhere", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522684533i/34273236.jpg" },
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

export default DramaBooks;
