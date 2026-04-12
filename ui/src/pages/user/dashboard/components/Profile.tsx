import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ProfileProps {
  user: any;
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-center space-x-4'>
            <Avatar className='h-20 w-20'>
              <AvatarImage src='' />
              <AvatarFallback className='text-lg'>
                {user?.firstname?.[0]}
                {user?.lastname?.[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className='text-2xl font-semibold'>
                {user?.firstname} {user?.lastname}
              </h2>
              <p className='text-gray-500'>{user?.email}</p>
              <Badge variant='secondary'>{user?.role}</Badge>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-sm font-medium'>Phone</label>
              <p>{user?.phone}</p>
            </div>
            <div>
              <label className='text-sm font-medium'>NIN</label>
              <p>{user?.nin}</p>
            </div>
            <div>
              <label className='text-sm font-medium'>Date of Birth</label>
              <p>{new Date(user?.dob).toLocaleDateString()}</p>
            </div>
            <div>
              <label className='text-sm font-medium'>Member Since</label>
              <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
