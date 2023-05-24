import { Alert, Spinner } from "react-bootstrap";
import { PostsState } from "../../store/slice/post";
import PostCard from "../post-card/PostCard";

interface Props {
  posts: PostsState;
  isAvatar: boolean;
}

const PostContainer = (props: Props) => {
  if (props.posts.loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (props.posts.error) {
    return (
      <Alert variant="danger">Произошла ошибка при загрузке данных.</Alert>
    );
  }
  return (
    <>
      {props.posts.post.map((item) => {
        return (
          <PostCard
            key={item.id}
            isAvatar={props.isAvatar}
            post={item}
          ></PostCard>
        );
      })}
    </>
  );
};

export default PostContainer;
