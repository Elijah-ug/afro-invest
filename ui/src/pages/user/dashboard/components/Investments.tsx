import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface InvestmentsProps {
  user: any;
}

export const Investments = ({ user }: InvestmentsProps) => {
  const investments = user?.investments || [];

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Investments</h1>
      <div className='grid gap-4'>
        {investments.length > 0 ? (
          investments.map((investment: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  Investment #{index + 1}
                  <Badge variant='secondary'>Active</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Amount: ${investment.amount}</p>
                <p>Plan: {investment.plan}</p>
                <p>Status: {investment.status}</p>
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
