import { Navigate } from 'react-router-dom';
import { authStatus } from '../../utils/auth';

export const PrivateRoute = ({ element }: any) => {
  const { getStatus } = authStatus();
  return getStatus() ? element : <Navigate to={'/'} replace />;
};
