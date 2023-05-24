import React from "react";
import { Alert, Spinner } from "react-bootstrap";

type Props = {
  loading: boolean;
  error: boolean;
  children: React.ReactNode;
};

const UserContainer = ({ children, error, loading }: Props) => {
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

export default UserContainer;
