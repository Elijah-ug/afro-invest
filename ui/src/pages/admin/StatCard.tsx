import { Card, CardContent } from '@/components/ui/card';
// import React from 'react';
interface CardVals {
  title: any;
  value: any;
  icon: any;
}
export const StatCard = ({ title, value, icon }: CardVals) => {
  return (
    <Card>
      <CardContent className='flex items-center justify-between p-4'>
        <div>
          <p className='text-sm text-muted-foreground'>{title}</p>
          <h3 className='text-xl font-bold'>{value}</h3>
        </div>
        <div className='bg-muted p-2 rounded-xl'>{icon}</div>
      </CardContent>
    </Card>
  );
};
