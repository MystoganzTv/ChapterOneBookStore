import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem('token'));

  //children is my cartPage passed as prop
  return token ? children : <Navigate to='/login' />;
};
