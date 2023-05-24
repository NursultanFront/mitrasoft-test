import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { GET_COMMENTS, GET_POSTS } from "../store/saga/action";
import PostCard from "../components/post-card/PostCard";
import { Alert, Container, Spinner } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { posts, comments } = useAppSelector((state) => state);
  console.log(comments);

  useEffect(() => {
    dispatch({ type: GET_POSTS });
  }, [dispatch]);

  if (posts.loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (posts.error) {
    return (
      <Alert variant="danger">Произошла ошибка при загрузке данных.</Alert>
    );
  }

  return (
    <Container>
      {posts.post.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={post}
            comments={comments.comments}
          ></PostCard>
        );
      })}
    </Container>
  );
};

export default HomePage;
