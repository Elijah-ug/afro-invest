import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestmentsQuery } from '@/store/features/investmentQuery';

interface OverviewProps {
  user: any;
}

export const Overview = ({ user }: OverviewProps) => {
  // Mock data for now, in real app calculate from user data
  // const portfolioValue = 1240.5;
  const monthlyReturns = 14.2;
  const activeInvestments = user?.investments?.length || 0;
  const nextPayout = 'Jul 15, 2024';

  const { data } = useInvestmentsQuery(user.id);
  if (!data) {
    return null;
  }
  // let profit;
  const totals = data?.data.investments.reduce(
    (acc: any, val: any) => {
      acc.amount = val.amount + acc;
      acc.expectedProfit = val.expectedProfit;
      return acc;
    },
    {
      expectedProfit: 0,
      amount: 0
    },
  );
  console.log('totalstotals==>',totals);

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Dashboard Overview</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Portfolio Value</CardTitle>
            <span className='text-xl'>💰</span>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>${totals.expectedProfit}</div>
            <p className='text-xs text-muted-foreground'>+2.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Monthly Returns</CardTitle>
            <span className='text-xl'>📈</span>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{monthlyReturns}%</div>
            <p className='text-xs text-muted-foreground'>Average per month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Investments</CardTitle>
            <span className='text-xl'>🎯</span>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{activeInvestments}</div>
            <p className='text-xs text-muted-foreground'>Plans invested in</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Next Payout</CardTitle>
            <span className='text-xl'>📅</span>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{nextPayout}</div>
            <p className='text-xs text-muted-foreground'>In 15 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
