import React from 'react';
import { useAllInvestmentsQuery } from '../../store/features/investmentQuery';
import { useLoggedinUserQuery } from '@/store/features/userQuery';

export const AdminDashboard: React.FC = () => {
  const { data } = useAllInvestmentsQuery();

  const { data: admin } = useLoggedinUserQuery();
  const isAdmin = admin?.data.user.email === 'testnext@gmail.com';

  return (
    <div className=''>
      {isAdmin ? (
        <div className='grid gap-2 sm:grid-cols-2 px-3'>
          {data?.data.data.map((deposit: any) => (
            <div className='flex gap-6 bg-stone-900 px-3 py-4 rounded relative'>
              <div className='flex items-center gap-2'>
                <span>ID:</span>
                <span>{deposit.id}</span>
              </div>

              <div className='absolute right-1 top-1 rounded-full bg-amber-500 px-2'>
                <span>{deposit.status}</span>
              </div>

              <div className='flex items-center gap-2'>
                <span>Amount:</span>
                <span>${deposit.amount}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-screen text-2xl'>Oops! This Model Is Under Maintenance</div>
      )}
    </div>
  );
};
