import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { GET_COMMENTS } from "../../store/saga/action";
import { Comment, Post } from "../../api/user-rest/type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import UserDefault from "../../assets/defaultUser.jpg";
import Comments from "../comments/Comments";
type Props = {
  post: Post;
  isAvatar: boolean;
};

const PostCard = ({ post, isAvatar }: Props) => {
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { comments, error } = useAppSelector((state) => state.comments);

  const dispatch = useAppDispatch();

  const postComments = comments.filter((comment) => comment.postId === post.id);

  const getComments = (id: Post["id"]) => {
    setLoading(true);
    setShowComments(true);
    dispatch({ type: GET_COMMENTS, id: id });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const loadComments = () => {
    if (postComments.length == 0) {
      getComments(post.id);
    } else {
      setShowComments(true);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            {isAvatar && (
              <Col md={2}>
                <Link to={`user/${post.userId}`}>
                  {" "}
                  <Card.Img src={UserDefault} alt="Author Avatar" />
                </Link>
              </Col>
            )}

            <Col md={isAvatar ? 10 : 12}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>

              <Card.Title>Comments</Card.Title>
              {showComments && (
                <>
                  <Comments loading={loading} error={error}>
                    {postComments.map((comment) => (
                      <div key={comment.id}>
                        <strong>{comment.email}</strong>
                        <p>{comment.body}</p>
                      </div>
                    ))}
                  </Comments>
                  <Button
                    onClick={() => {
                      setShowComments(false);
                    }}
                  >
                    Hide Comments
                  </Button>
                </>
              )}
              {!showComments && (
                <Button
                  onClick={() => {
                    loadComments();
                  }}
                >
                  Show Comments
                </Button>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
