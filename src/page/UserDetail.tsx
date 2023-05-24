import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Button,
  Spinner,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import UserAvatar from "../assets/defaultUser.jpg";
import { GET_USER_BY_ID } from "../store/saga/action";
import { useAppSelector } from "../hooks/redux";
import PostCard from "../components/post-card/PostCard";
import { PostsState } from "../store/slice/post";
import PostContainer from "../components/post-container/PostContainer";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_BY_ID, id: id });
  }, [dispatch, id]);

  const { posts, user } = useAppSelector((state) => state);

  return (
    <Container>
      <Card className="user-details-card">
        <Row>
          <Col md={3}>
            <Card.Img
              src={UserAvatar}
              alt="Author Avatar"
              className="user-details-avatar"
            />
          </Col>
          <Col>
            <Card.Body>
              {posts.loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>
                  <Card.Title className="user-details-phone">
                    User Name:{user.username}
                  </Card.Title>
                  <Card.Title className="user-details-name">
                    Real Name: {user.name}
                  </Card.Title>
                  <Card.Text>
                    <Card.Link className="user-details-email">
                      Email: {user.email}
                    </Card.Link>
                  </Card.Text>
                  <Card.Text>
                    <Card.Link className="user-details-phone">
                      Phone:{user.phone}
                    </Card.Link>
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostContainer
              error={posts.error}
              loading={posts.loading}
              post={posts.post}
            ></PostContainer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UserDetails;
