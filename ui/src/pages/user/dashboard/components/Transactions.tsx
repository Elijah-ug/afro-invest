import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TransactionForm } from './transaction/TransactionForm';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import { useInvestmentsQuery } from '@/store/features/investmentQuery';
import { Link } from 'react-router-dom';

export const Transactions = () => {
  const { data: user } = useLoggedinUserQuery();
  const { data: investment } = useInvestmentsQuery(user?.data.user.id);
  console.log('investment==>', investment);

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
          <TransactionForm type='deposit' />
        </TabsContent>

        <TabsContent value='withdraw' className='mt-4'>
          <TransactionForm type='withdraw' />
        </TabsContent>
      </Tabs>

      {/* History */}

      <Card className='shadow-sm border-muted/40'>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent activity will appear here.</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-2'>
          {investment?.data.investments.map((investment: any) => (
            <div className='flex items-center gap-4 bg-gray-800 p-2 rounded'>
              <span>$ {investment.amount}</span>
              <div className='flex items-center gap-3'>
                <span>View on base sepolia explorer</span>
                <Link to={`https://sepolia.basescan.org/tx/${investment.txHash}`} target='_blank' className='text-blue-500 hover:underline'>
                  sepolia.basescan.org
                </Link>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
