import React from "react";
import { Alert, Spinner } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
  loading: boolean;
  error: boolean;
};

const Comments = ({ children, loading, error }: Props) => {
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

  return <>{children}</>;
};

export default Comments;
