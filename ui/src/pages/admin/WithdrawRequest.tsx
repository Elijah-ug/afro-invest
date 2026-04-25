import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRequestsQuery } from '@/store/features/withdrawReq';
import { formatDate } from '@/utils/formatDate';
import { Wallet, User, Calendar, CheckCircle, XCircle } from 'lucide-react';

export const WithdrawRequest: React.FC = () => {
  const { data, isLoading } = useRequestsQuery();

  if (isLoading) {
    return <div className='p-6'>Loading...</div>;
  }

  return (
    <div className='p-6 grid gap-4'>
      {data?.data.requests.map((request: any) => {
        const shortAddress = request.user.address.slice(0, 6) + '...' + request.user.address.slice(-4);

        const statusColor =
          request.status === 'PENDING'
            ? 'text-yellow-500'
            : request.status === 'APPROVED'
              ? 'text-green-500'
              : 'text-red-500';

        return (
          <Card key={request.id} className='shadow-sm border hover:shadow-md transition'>
            <CardContent className='p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              {/* LEFT INFO */}
              <div className='flex flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2'>
                  <User size={16} />
                  <span className='text-muted-foreground'>User</span>
                  <span className='font-medium'>{shortAddress}</span>
                </div>

                <div className='flex items-center gap-2'>
                  <Wallet size={16} />
                  <span className='text-muted-foreground'>Amount</span>
                  <span className='font-semibold'>{request.amount}</span>
                </div>

                <div className='flex items-center gap-2'>
                  <Calendar size={16} />
                  <span className='text-muted-foreground'>Date</span>
                  <span>{formatDate(request.createdAt)}</span>
                </div>
              </div>

              {/* STATUS */}
              <div className={`font-medium ${statusColor}`}>{request.status}</div>

              {/* ACTIONS */}
              <div className='flex gap-2'>
                <Button size='sm' className='flex items-center gap-1'>
                  <CheckCircle size={16} />
                  Approve
                </Button>

                <Button size='sm' variant='destructive' className='flex items-center gap-1'>
                  <XCircle size={16} />
                  Decline
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
