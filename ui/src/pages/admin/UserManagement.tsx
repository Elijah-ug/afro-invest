// 'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserTable } from './UserTable';
import { useGetUserInfoQuery } from '@/store/features/userQuery';

export const UserManagement = () => {
  const [search, setSearch] = useState('');
  const { data } = useGetUserInfoQuery();

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Users</CardTitle>

          <Input
            placeholder='Search users...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='max-w-xs'
          />
        </CardHeader>

        {/* {data?.data.users.map((user: any) => ( */}
          <CardContent>
            <UserTable search={search} data={data} />
          </CardContent>
        {/* ))} */}
      </Card>
    </div>
  );
};
