import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PortfolioProps {
  user: any;
}

export const Portfolio = ({ user }: PortfolioProps) => {
  const holdings: any = user?.portfolio || [
    { asset: 'Naira Growth Fund', value: 6200, allocation: 32 },
    { asset: 'Kenyan Equity Plan', value: 4200, allocation: 22 },
    { asset: 'Green Energy Token', value: 3100, allocation: 16 },
    { asset: 'US Tech ETF', value: 5200, allocation: 30 },
  ];

  const totalValue = holdings.reduce((sum: number, item: any) => sum + item.value, 0);

  return (
    <div className='space-y-16'>
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-white'>Portfolio Overview</h1>
          <p className='text-slate-400 max-w-2xl'>
            A snapshot of your holdings, performance, and diversification across the market.
          </p>
        </div>
        <Badge className='self-start rounded-full bg-violet-500/20 text-violet-200 border border-violet-500/30'>
          Total value
        </Badge>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-semibold'>${totalValue.toLocaleString()}</div>
            <p className='text-sm text-slate-400 mt-2'>Your total holdings value across tracked positions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Diversification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              {holdings.slice(0, 3).map((item: any) => (
                <div key={item.asset} className='flex items-center justify-between'>
                  <span>{item.asset}</span>
                  <span className='text-sm text-slate-400'>{item.allocation}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-semibold text-emerald-400'>+12.8%</div>
            <p className='text-sm text-slate-400 mt-2'>Last 30 days across all assets.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Holdings Breakdown</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid gap-3 md:grid-cols-2'>
            {holdings.map((item: any) => (
              <div key={item.asset} className='rounded-3xl border border-slate-800 p-4 bg-slate-900/70'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <p className='font-semibold'>{item.asset}</p>
                    <p className='text-sm text-slate-400'>Value</p>
                  </div>
                  <Badge variant='secondary'>{item.allocation}%</Badge>
                </div>
                <p className='mt-4 text-2xl font-bold'>${item.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
