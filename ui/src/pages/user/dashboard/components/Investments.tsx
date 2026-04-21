import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInvestmentPlansQuery } from '../../../../store/features/investmentPlansQuery';
interface InvestmentsProps {
  user: any;
}

export const Investments = ({ user }: InvestmentsProps) => {
  const investments = user?.investments || [];
  // const { data: currentUser } = useLoggedinUserQuery();
  const { data } = useInvestmentPlansQuery();
  console.log('Investment plans==>', data);

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Investments</h1>
      <div className='grid gap-4'>
        {investments.length > 0 ? (
          investments.map((investment: any) => (
            <Card key={investment.id}>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  Investment #{1}
                  <Badge variant='secondary'>{investment.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Amount: ${investment.amount}</p>
                <p>From: {new Date(investment?.startDate).getMonth()}</p>
                <p>To: {new Date(investment?.endDate).getMonth()}</p>
                <p>Expected Profit: ${investment?.expectedProfit}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className='text-center py-8'>
              <p className='text-gray-500'>No investments yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
