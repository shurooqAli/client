import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { getPosts, updatePost, deletePost } from "../Features/PostSlice";
import moment from "moment";
import { FaRegThumbsUp, FaRegThumbsDown, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const email = useSelector((state) => state.counter.user.email);
  const [modal, setModal] = useState(false);

  const [postMsg, setPostMsg] = useState(false);
  const [postId, setPostId] = useState(false);

  const dispatch = useDispatch();

  const toggle = (msg, id) => {
    setModal(!modal);
    setPostId(id);
    setPostMsg(msg);
  };

  const handleUpdate = () => {
    const postData = {
      postMsg: postMsg,
      postId: postId,
    };
    dispatch(updatePost(postData));
    dispatch(getPosts());
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      dispatch(deletePost(postId));
      dispatch(getPosts());
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);

  return (
    <>
      {posts.map((post) => (
        <Row className="post-row" key={post._id}>
          <Col md="3" />
          <Col md="6">
            <Card className="post-card">
              <CardHeader className="post-card-header">
                <img
                  src={post.user[0].pic}
                  className="user-avatar"
                  alt="User"
                />
                <div className="user-info">
                  <span className="user-name">{post.user[0].uname}</span>
                  <p className="post-time">
                    Posted {moment(post.createdAt).fromNow()}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="post-card-body">
                <CardText>
                  {post.lat && post.lng ? (
                    <iframe
                      src={`https://maps.google.com/maps?q=${post.lat},${post.lng}&hl=es;&output=embed`}
                      className="post-map"
                    />
                  ) : (
                    <p className="post-message">{post.postMsg}</p>
                  )}
                </CardText>
              </CardBody>
              <CardFooter className="post-card-footer">
                <Row>
                  <Col xs="2">
                    <FaRegThumbsUp className="icon thumbs-up" />
                  </Col>
                  <Col xs="2">
                    <FaRegThumbsDown className="icon thumbs-down" />
                  </Col>
                  {post.email === email && (
                    <>
                      <Col xs="2">
                        <FaEdit
                          className="icon edit-icon"
                          onClick={() => toggle(post.postMsg, post._id)}
                        />
                      </Col>
                      <Col xs="2">
                        <MdDelete
                          className="icon delete-icon"
                          onClick={() => handleDelete(post._id)}
                        />
                      </Col>
                    </>
                  )}
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col md="3" />
        </Row>
      ))}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Message</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            className="form-control"
            value={postMsg}
            onChange={(e) => setPostMsg(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              handleUpdate();
            }}
          >
            UPDATE
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Posts;
