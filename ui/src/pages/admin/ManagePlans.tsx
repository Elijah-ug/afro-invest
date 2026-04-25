import React from 'react';
import { useInvestmentPlansQuery } from '@/store/features/investmentPlansQuery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Calendar, Wallet, Edit } from 'lucide-react';

export const ManagePlans: React.FC = () => {
  const { data, isLoading } = useInvestmentPlansQuery();

  if (isLoading) {
    return <div className='p-6'>Loading plans...</div>;
  }

  return (
    <div className='p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {data?.data.plans.map((plan: any) => {
        const riskColor =
          plan.riskLevel === 'HIGH' ? 'bg-red-500' : plan.riskLevel === 'MEDIUM' ? 'bg-yellow-500' : 'bg-green-500';

        return (
          <Card key={plan.id} className='hover:shadow-lg transition border'>
            <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-lg'>{plan.name}</CardTitle>

              <Badge className={`${riskColor} text-white`}>{plan.riskLevel}</Badge>
            </CardHeader>

            <CardContent className='flex flex-col gap-4 text-sm'>
              {/* Description */}
              <p className='text-muted-foreground'>{plan.description}</p>

              {/* Returns */}
              <div className='flex items-center gap-2 font-medium'>
                <TrendingUp size={16} />
                <span>
                  {plan.returnRate}% Returns ({plan.returnType})
                </span>
              </div>

              {/* Duration */}
              <div className='flex items-center gap-2'>
                <Calendar size={16} />
                <span>
                  {plan.duration} days • {plan.payoutType}
                </span>
              </div>

              {/* Investment Range */}
              <div className='flex items-center gap-2'>
                <Wallet size={16} />
                <span>
                  ${plan.minAmount} - ${plan.maxAmount}
                </span>
              </div>

              {/* Status */}

              <div className='flex justify-between items-center mt-2'>
                <Badge className='bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                  {plan.isActive ? 'Active' : 'Inactive'}
                </Badge>

                <Button size='sm' variant='outline' className='text-green-500'>
                  <span>Edit</span>
                  <Edit />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
