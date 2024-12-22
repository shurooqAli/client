import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Col, Container, Row } from "reactstrap";
import Posts from "./Posts";
import SharePosts from "./SharePosts";
import User from "./User";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  let email = useSelector((state) => state.counter.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) navigate("/");
  }, [email]);

  return (
    <div className="home-container">
      <Container fluid className="main-container">
        {/* First Row: User Profile */}
        <Row className="user-row">
          <Col md="3" className="user-column">
            <User />
          </Col>
          <Col md="9" />
        </Row>

        {/* Second Row: Share Posts */}
        <Row className="share-posts-row">
          <Col md="3" />
          <Col md="9" className="share-posts-column">
            <SharePosts />
          </Col>
        </Row>

        {/* Third Row: Posts */}
        <Row className="posts-row">
          <Col md="12">
            <Posts />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
