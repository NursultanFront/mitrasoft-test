import { Alert, Spinner } from "react-bootstrap";
import { PostsState } from "../../store/slice/post";
import PostCard from "../post-card/PostCard";

const PostContainer = ({ error, loading, post }: PostsState) => {
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">Произошла ошибка при загрузке данных.</Alert>
    );
  }
  return (
    <>
      {post.map((item) => {
        return <PostCard key={item.id} isAvatar={true} post={item}></PostCard>;
      })}
    </>
  );
};

export default PostContainer;
