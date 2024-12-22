//sharePosts.js

import React, { useState, useEffect } from 'react';
import { Button, Input, Row, Col } from 'reactstrap';
import ab from '../Images/ab.png';
import { savePost } from '../Features/PostSlice';
import { useSelector, useDispatch } from 'react-redux';

const SharePosts = () => {
  const [msg, setMsg] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const email = useSelector((state) => state.counter.user.email);
  const dispatch = useDispatch();

  // Function to fetch and update user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  // Function to handle post sharing
  const sharePost = () => {
    if (msg.trim() === "") {
      alert("Please enter your feedback before posting.");
    } else {
      const postData = { email, msg, lat: null, lng: null };
      dispatch(savePost(postData));
      setMsg(""); // Clear the input field after posting
      alert("Your feedback has been shared!");
    }
  };

  // Function to handle sharing live location
  const shareLocation = () => {
    if (lat && lng) {
      const postData = { email, msg: "My Live Location is:", lat, lng };
      dispatch(savePost(postData));
      alert("Your location has been shared!");
    } else {
      alert("Unable to fetch your location. Please try again.");
    }
  };

  return (
    <div className="share-posts-container">
      <Row className="banner-row">
        <img src={ab} className="banner-pic" alt="Banner" />
      </Row>
      <Row className="header-row">
        <h3 className="feedback-header">We Value Your Feedback!</h3>
      </Row>
      <Row className="input-row">
        <Col md="9">
          <Input
            type="textarea"
            className="input-text form-control"
            placeholder="Share your thoughts about this app..."
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </Col>
        <Col>
          <Row className="button-row">
            <Button
              color="primary"
              className="post-button"
              onClick={sharePost}
            >
              POST IT
            </Button>
          </Row>
          <Row className="button-row">
            <Button
              color="success"
              className="post-button"
              onClick={shareLocation}
            >
              SHARE LOCATION
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SharePosts;
