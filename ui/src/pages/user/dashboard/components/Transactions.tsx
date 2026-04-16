import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type TransactionFormProps = {
  type: 'deposit' | 'withdraw';
  amount: string;
  setAmount: (value: string) => void;
  onSubmit: () => void;
};

const TransactionForm = ({ type, amount, setAmount, onSubmit }: TransactionFormProps) => {
  const isDeposit = type === 'deposit';

  return (
    <Card className='shadow-md border-muted/40'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          {isDeposit ? 'Deposit Funds' : 'Withdraw Funds'}
          <span className='text-sm text-muted-foreground'>{isDeposit ? 'Instant' : '1–3 days'}</span>
        </CardTitle>

        <CardDescription>
          {isDeposit ? 'Add money to your account instantly.' : 'Withdraw funds securely to your account.'}
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-5'>
        <div className='space-y-2'>
          <Label htmlFor={type}>Amount (UGX)</Label>
          <Input
            id={type}
            type='number'
            placeholder='0.00'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='text-xl h-14'
          />
        </div>

        <Button
          onClick={onSubmit}
          disabled={!amount || Number(amount) <= 0}
          className='w-full text-base font-semibold'
          variant={isDeposit ? 'default' : 'destructive'}
        >
          {isDeposit ? '💰 Deposit Now' : '💸 Withdraw Now'}
        </Button>
      </CardContent>
    </Card>
  );
};

export const Transactions = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDeposit = () => {
    console.log('Deposit:', depositAmount);
    setDepositAmount('');
  };

  const handleWithdraw = () => {
    console.log('Withdraw:', withdrawAmount);
    setWithdrawAmount('');
  };

  return (
    <div className='space-y-8 max-w-xl mx-auto'>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Transactions</h1>
        <p className='text-muted-foreground text-sm'>Manage your deposits and withdrawals easily.</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue='deposit' className='w-full'>
        <TabsList className='grid w-full grid-cols-2 rounded-xl'>
          <TabsTrigger value='deposit'>Deposit</TabsTrigger>
          <TabsTrigger value='withdraw'>Withdraw</TabsTrigger>
        </TabsList>

        <TabsContent value='deposit' className='mt-4'>
          <TransactionForm
            type='deposit'
            amount={depositAmount}
            setAmount={setDepositAmount}
            onSubmit={handleDeposit}
          />
        </TabsContent>

        <TabsContent value='withdraw' className='mt-4'>
          <TransactionForm
            type='withdraw'
            amount={withdrawAmount}
            setAmount={setWithdrawAmount}
            onSubmit={handleWithdraw}
          />
        </TabsContent>
      </Tabs>

      {/* History */}
      <Card className='shadow-sm border-muted/40'>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent activity will appear here.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className='flex items-center justify-center py-10 text-muted-foreground text-sm'>
            No transactions yet.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
