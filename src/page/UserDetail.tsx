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
import UserContainer from "../components/user-container/UserContainer";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_BY_ID, id: id });
  }, [dispatch, id]);

  const { postSlice, userSlice } = useAppSelector((state) => state);

  const { user, loading, error } = userSlice;

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
              <UserContainer loading={loading} error={error}>
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
              </UserContainer>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostContainer posts={postSlice} isAvatar={false}></PostContainer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UserDetails;
