import { Navigate } from 'react-router-dom';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import { Spinner } from '@/components/ui/spinner';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, error } = useLoggedinUserQuery();
  console.log('data==>', user);

  if (isLoading) {
    return <Spinner className='size-8' />;
  }

  if (error || !user) {
    console.log('Error==>', error);
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};
