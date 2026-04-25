'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// import { Button } from '@/components/ui/button';

interface SearchType {
  search: any;
  data: any;
}
export const UserTable = ({ search, data }: SearchType) => {
  console.log('data here==>', search);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Phone</TableHead>
          {/* <TableHead className='text-right'>Actions</TableHead> */}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.data.users.map((user: any) => (
          <TableRow key={user.id}>
            <TableCell className='font-medium'>{user.firstname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.address.slice(0, 7) + '...' + user.address.slice(-5)}</TableCell>

            {/* Role */}
            {/* <TableCell>
              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>{user.role}</Badge>
            </TableCell> */}

            {/* Status */}
            <TableCell>
              {user.phone}
              {/* <Badge variant={user.status === 'active' ? 'outline' : 'destructive'}>{user.status}</Badge> */}
            </TableCell>

            {/* Actions */}
            {/* <TableCell className='text-right space-x-2'>
              <Button size='sm' variant='outline' onClick={() => toggleRole(user.id)}>
                Toggle Role
              </Button>

              <Button
                size='sm'
                variant={user.status === 'active' ? 'destructive' : 'secondary'}
                onClick={() => toggleBan(user.id)}
              >
                {user.status === 'active' ? 'Ban' : 'Unban'}
              </Button>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
