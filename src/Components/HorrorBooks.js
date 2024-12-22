import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hr1 from "../Images/hr1.jpg";
import hr2 from "../Images/hr2.jpg";
import hr3 from "../Images/hr3.jpg";
import hr4 from "../Images/hr4.jpg";
import hr5 from "../Images/hr5.jpg";
import hr6 from "../Images/hr6.jpg";
import hr7 from "../Images/hr7.jpg";
import hr8 from "../Images/hr8.jpg";
import { Container, Row, Col, Card, CardImg, CardBody, Label } from 'reactstrap';

function HorrorBooks() {
    return (
        <div className="book-store">
            <Container className="mt-5 text-center">
                <Row>
                    <Col>
                        <h1 className="text" style={{ fontWeight: "bold" }}>
                            Explore Terrifying Horror Books!
                        </h1>
                        <p className="text">
                            Get ready to be thrilled with our gripping collection of horror books.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {[
                        { img: hr1, title: "Deadly Animals", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712758755i/203579073.jpg" },
                        { img: hr2, title: "The Estate", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1713555344i/205519756.jpg" },
                        { img: hr3, title: "She's Always Hungry: Stories", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714600043i/201033505.jpg" },
                        { img: hr4, title: "Ushers", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1725223613i/218362004.jpg" },
                        { img: hr5, title: "Darkly", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712508582i/208430757.jpg" },
                        { img: hr6, title: "Streetlight People", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712962171i/207611497.jpg" },
                        { img: hr7, title: "Dead Girls Don't Dream", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705277563i/200982282.jpg" },
                        { img: hr8, title: "Monstress, Volume 9: The Possessed", link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1730283575i/207296816.jpg" },
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

export default HorrorBooks;
