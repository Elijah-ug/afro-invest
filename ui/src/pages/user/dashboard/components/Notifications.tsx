import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const alerts = [
  {
    title: 'Dividend paid',
    message: 'Your Naira Growth Fund payout has been credited.',
    status: 'success',
  },
  {
    title: 'Market update',
    message: 'Kenyan Equity Plan is up 6.2% today.',
    status: 'info',
  },
  {
    title: 'Security alert',
    message: 'New sign-in from a new device. Review activity if this was not you.',
    status: 'warning',
  },
];

export const Notifications = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-white'>Notifications</h1>
        <p className='text-slate-400'>Important updates and alerts for your account and investments.</p>
      </div>

      <div className='grid gap-4'>
        {alerts.map((alert) => (
          <Card key={alert.title} className='bg-slate-900/80 border-slate-800'>
            <CardHeader>
              <div className='flex items-center justify-between gap-3'>
                <CardTitle>{alert.title}</CardTitle>
                <Badge
                  variant={alert.status === 'success' ? 'secondary' : alert.status === 'warning' ? 'outline' : 'ghost'}
                >
                  {alert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-slate-300'>{alert.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
