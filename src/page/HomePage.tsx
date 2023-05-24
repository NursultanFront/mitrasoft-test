import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { GET_COMMENTS, GET_POSTS } from "../store/saga/action";
import PostCard from "../components/post-card/PostCard";
import { Alert, Container, Spinner } from "react-bootstrap";
import PostContainer from "../components/post-container/PostContainer";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, post } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch({ type: GET_POSTS });
  }, [dispatch]);

  return (
    <Container>
      <PostContainer
        error={error}
        loading={loading}
        post={post}
      ></PostContainer>
    </Container>
  );
};

export default HomePage;
