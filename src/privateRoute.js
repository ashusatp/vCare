import React from 'react';
import { Navigate } from 'react-router-dom';
// will remove later
import { useUserContext } from './context/userContext';

const PrivateRoute = ({children}) => {
  const {myUser} = useUserContext();
  if(!myUser){
    return <Navigate to='/login' />
  }
  return children;
};
export default PrivateRoute;