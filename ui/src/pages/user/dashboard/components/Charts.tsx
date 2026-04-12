import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Charts = () => {
  // Mock data for portfolio growth
  const data = [
    { month: 'Jan', value: 1000 },
    { month: 'Feb', value: 1100 },
    { month: 'Mar', value: 1050 },
    { month: 'Apr', value: 1200 },
    { month: 'May', value: 1300 },
    { month: 'Jun', value: 1240 },
  ];

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Charts & Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='value' stroke='#8884d8' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
