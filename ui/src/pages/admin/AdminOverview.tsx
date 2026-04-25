// 'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Wallet, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { RecentTransactions } from './RecentTransactions';
import { useGetUserInfoQuery } from '@/store/features/userQuery';

export const AdminOverview = () => {
  const { data } = useGetUserInfoQuery();
  // to shift logic to the backend
  const totalInvestment = data?.data.users.reduce((total: any, user: any) => {
    const userTotal = user.investments.reduce((sum: number, inv: any) => sum + Number(inv.amount), 0);
    return total + userTotal;
  }, 0);
  
  return (
    <div className='space-y-6'>
      {/* 🔝 Top Stats */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <StatCard title='Total Users' value={data?.data.users.length} icon={<Users className='h-5 w-5' />} />
        <StatCard
          title='Total Deposits'
          value={`$ ${totalInvestment}`}
          icon={<ArrowDownCircle className='h-5 w-5 text-green-500' />}
        />
        <StatCard title='Total Withdrawals' value='$00' icon={<ArrowUpCircle className='h-5 w-5 text-red-500' />} />
        <StatCard
          title='Platform Balance'
          value={`$ ${totalInvestment}`}
          icon={<Wallet className='h-5 w-5 text-yellow-500' />}
        />
      </div>

      {/* 📊 Main Section */}
      <div className='grid gap-6 lg:grid-cols-3'>
        {/* Recent Transactions */}
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            <Button className='w-full'>View Users</Button>
            <Button variant='secondary' className='w-full'>
              Manage Plans
            </Button>
            <Button variant='outline' className='w-full'>
              Pending Withdrawals
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
