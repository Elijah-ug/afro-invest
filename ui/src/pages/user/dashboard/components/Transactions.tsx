import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Transactions = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDeposit = () => {
    // TODO: Implement deposit logic
    console.log('Deposit:', depositAmount);
    setDepositAmount('');
  };

  const handleWithdraw = () => {
    // TODO: Implement withdraw logic
    console.log('Withdraw:', withdrawAmount);
    setWithdrawAmount('');
  };

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Transactions</h1>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Deposit Funds</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <Label htmlFor='deposit'>Amount</Label>
              <Input
                id='deposit'
                type='number'
                placeholder='Enter amount'
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>
            <Button onClick={handleDeposit} className='w-full'>
              Deposit
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Withdraw Funds</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <Label htmlFor='withdraw'>Amount</Label>
              <Input
                id='withdraw'
                type='number'
                placeholder='Enter amount'
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <Button onClick={handleWithdraw} className='w-full'>
              Withdraw
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-500'>No transactions yet.</p>
        </CardContent>
      </Card>
    </div>
  );
};
