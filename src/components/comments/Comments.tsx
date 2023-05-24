import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

const Comments = ({ children, loading }: Props) => {
  const { error } = useAppSelector((state) => state.comments);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error.trim()) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return <>{children}</>;
};

export default Comments;
