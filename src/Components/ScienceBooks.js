import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import S1 from "../Images/S1.jpg";
import S2 from "../Images/S2.jpg";
import S3 from "../Images/S3.jpg";
import S4 from "../Images/S4.jpg";
import S5 from "../Images/S5.jpg";
import S6 from "../Images/S6.jpg";
import S7 from "../Images/S7.jpg";
import S8 from "../Images/S8.jpg";
import { Container, Row, Col, Card, CardImg, CardBody, Label } from 'reactstrap';

function ScienceBooks() {
    return (
        <div className="book-store">
            <Container className="mt-5 text-center">
                <Row>
                    <Col>
                        <h1 className="text" style={{ fontWeight: "bold" }}>
                            Select Your Science Book!
                        </h1>
                        <p className="text">
                            Find the most captivating Science books here.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {[ 
                        { img: S1, title: "Science Fiction", link: "https://cdn.pixabay.com/photo/2024/06/18/08/53/universe-8837416_640.jpg" },
                        { img: S2, title: "A Battle for Translation", link: "https://rekhtabooks.com/cdn/shop/products/1vqovfG6KaiVWJaoENWMma_JN2-AmEJtv_9019968b-3c1c-403f-b9fc-dbb6016e4a6e.jpg?v=1680668072.jpg" },
                        { img: S3, title: "Future Fiction", link: "https://m.media-amazon.com/images/I/611Q0SmQvrL._SY425_.jpg" },
                        { img: S4, title: "Bioscience", link: "https://m.media-amazon.com/images/I/71ZWYFL+UeL._SY425_.jpg" },
                        { img: S5, title: "Brief Answers to the Big Questions", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536862019i/40277241.jpg" },
                        { img: S6, title: "Astrophysics for People in a Hurry", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562761669i/32191710.jpg" },
                        { img: S7, title: "A Brief History of Time", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg" },
                        { img: S8, title: "A Short History of Nearly Everything", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433086293i/21.jpg" },
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

export default ScienceBooks;
