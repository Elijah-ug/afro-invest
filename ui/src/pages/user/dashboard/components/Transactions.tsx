import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TransactionForm } from './transaction/TransactionForm';




export const Transactions = () => {  
  

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
          />
        </TabsContent>

        <TabsContent value='withdraw' className='mt-4'>
          <TransactionForm
            type='withdraw'
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
