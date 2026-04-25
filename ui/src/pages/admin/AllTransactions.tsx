// 'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TransactionTable } from './TransactionTable';

export const AllTransactions = () => {
  // const [typeFilter, setTypeFilter] = useState('all');
  // const [statusFilter, setStatusFilter] = useState('all');
  // typeFilter={typeFilter} statusFilter={statusFilter}
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle>All Transactions</CardTitle>

          {/* Filters */}
          <div className='flex gap-2'>
            <Select  defaultValue='all'>
              <SelectTrigger className='w-35'>
                <SelectValue placeholder='Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Types</SelectItem>
                <SelectItem value='deposit'>Deposits</SelectItem>
                <SelectItem value='withdrawal'>Withdrawals</SelectItem>
              </SelectContent>
            </Select>

            <Select  defaultValue='all'>
              <SelectTrigger className='w-35'>
                <SelectValue placeholder='Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Status</SelectItem>
                <SelectItem value='pending'>Pending</SelectItem>
                <SelectItem value='approved'>Approved</SelectItem>
                <SelectItem value='rejected'>Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <TransactionTable />
        </CardContent>
      </Card>
    </div>
  );
};
