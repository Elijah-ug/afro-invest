import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  // TODO: Replace with actual auth check from Redux store
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};