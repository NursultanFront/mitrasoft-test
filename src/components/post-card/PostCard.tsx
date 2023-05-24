import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { GET_COMMENTS } from "../../store/saga/action";
import { Comment, Post } from "../../api/user-rest/type";
import { useAppDispatch } from "../../hooks/redux";

import UserDefault from "../../assets/defaultUser.jpg";
import Comments from "../comments/Comments";
type Props = {
  post: Post;
  comments: Comment[];
};

const PostCard = ({ post, comments }: Props) => {
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

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
            <Col md={2}>
              <Card.Img src={UserDefault} alt="Author Avatar" />
            </Col>

            <Col md={10}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>

              <Card.Title>Comments</Card.Title>
              {showComments && (
                <>
                  <Comments loading={loading}>
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