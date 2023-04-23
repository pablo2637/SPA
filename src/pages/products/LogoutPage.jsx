import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UseContext";
import { Navigate } from 'react-router-dom';
import { deleteLocalUser } from "../../helpers/localStorage";

export const LogoutPage = () => {

  const { setUser } = useContext(UserContext);

  const logout = () => {

    setUser({});
    deleteLocalUser();
  };

  useEffect(() => {
    logout();

  }, []);

  return (
    <Navigate to='/' />
  );
};
