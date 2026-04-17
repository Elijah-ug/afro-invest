import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, TrendingUp, Clock, Target, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLoggedinUserQuery } from '@/store/features/userQuery';

export const ProfitCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<{
    principal: number;
    rate: string;
    time: number;
    amount: string;
    profit: string;
    monthlyReturn: string;
    annualReturn: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleSetAmount = (val: string) => {
    setRate(val);
  };
  const calculateProfit = () => {
    setError('');
    setResult(null);

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (isNaN(p) || p <= 0) {
      setError('Please enter a valid principal amount');
      return;
    }

    if (isNaN(r) || r <= 0) {
      setError('Please enter a valid interest rate');
      return;
    }

    if (isNaN(t) || t <= 0) {
      setError('Please enter a valid time period');
      return;
    }

    // Simple compound interest calculation: A = P(1 + r)^t
    const amount = p * Math.pow(1 + r, t);
    const profit = amount - p;

    setResult({
      principal: p,
      rate: rate,
      time: t,
      amount: amount.toFixed(2),
      profit: profit.toFixed(2),
      monthlyReturn: (profit / (t * 12)).toFixed(2),
      annualReturn: (profit / t).toFixed(2),
    });
  };

  const resetCalculator = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult(null);
    setError('');
  };
  const { data } = useLoggedinUserQuery();

  return (
    <div className='space-y-16'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
        <div className='relative max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-16 md:py-24'>
          <div className='text-center mb-12'>
            <Badge
              variant='secondary'
              className='mb-4 px-4 py-2 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
            >
              Profit Calculator
            </Badge>
            <h1 className='text-xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight'>
              Calculate Your{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-green-600 to-blue-600'>
                Investment Returns
              </span>
            </h1>
            <p className=' md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Use our advanced calculator to estimate your potential earnings and plan your investment strategy with
              confidence.
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <Calculator className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Accurate Calculations</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Compound interest formulas for precise projections
              </p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <BarChart3 className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Visual Results</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Clear breakdown of your investment growth</p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <Zap className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Instant Results</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Get calculations in real-time as you type</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {/* Calculator Form */}
            <Card className='hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg'>
              <CardHeader>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full mr-4'>
                    <Calculator className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                  </div>
                  <CardTitle className='text-lg sm:text-2xl text-gray-900 dark:text-white'>
                    Investment Calculator
                  </CardTitle>
                </div>
                <p className='text-gray-600 dark:text-gray-300'>
                  Enter your investment details below to calculate potential returns
                </p>
              </CardHeader>
              <CardContent className='space-y-6'>
                {error && (
                  <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg'>
                    <div className='flex items-center'>
                      <div className='w-2 h-2 bg-red-500 rounded-full mr-3'></div>
                      {error}
                    </div>
                  </div>
                )}

                <div className='space-y-4'>
                  <div>
                    <Label
                      htmlFor='principal'
                      className='flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                    >
                      <DollarSign className='h-4 w-4 mr-2 text-green-600' />
                      Principal Amount ($)
                    </Label>
                    <Input
                      id='principal'
                      type='number'
                      placeholder='e.g., 1000'
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      className='w-full text-lg py-3'
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor='rate'
                      className='flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                    >
                      <TrendingUp className='h-4 w-4 mr-2 text-blue-600' />
                      Annual Interest Rate (%)
                    </Label>
                    <div className='flex items-center gap-2'>
                      {['5', '7', '9'].map((val, i) => (
                        <Button
                          key={i}
                          onClick={() => handleSetAmount(val)}
                          className={`${rate === val ? 'bg-violet-500' : 'bg-white/20'}`}
                        >
                          {val}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor='time'
                      className='flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                    >
                      <Clock className='h-4 w-4 mr-2 text-purple-600' />
                      Time Period (years)
                    </Label>
                    <Input
                      id='time'
                      type='number'
                      placeholder='e.g., 5'
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className='w-full text-lg py-3'
                    />
                  </div>
                </div>

                <div className='flex gap-3 pt-4'>
                  <Button
                    onClick={calculateProfit}
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg'
                  >
                    Calculate Returns
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant='outline'
                    className='px-6 py-3 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  >
                    Reset
                  </Button>
                </div>
                {result && (
                  <div className='text-xs bg-violet-900 text-center w-[50%] rounded-full'>
                    scroll down to see results
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Display */}
            <div className='space-y-6'>
              {result ? (
                <Card className='hover:shadow-xl transition-all duration-300 bg-linear-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 border-0 shadow-lg'>
                  <CardHeader>
                    <div className='flex items-center mb-4'>
                      <div className='p-3 bg-green-100 dark:bg-green-900/20 rounded-full mr-4'>
                        <Target className='h-6 w-6 text-green-600 dark:text-green-400' />
                      </div>
                      <CardTitle className='text-2xl text-gray-900 dark:text-white'>Your Results</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {/* Summary Cards */}
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm'>
                        <DollarSign className='h-6 w-6 text-green-600 mx-auto mb-2' />
                        <div className='text-2xl font-bold text-gray-900 dark:text-white'>${result.amount}</div>
                        <div className='text-xs text-gray-600 dark:text-gray-300'>Total Value</div>
                      </div>
                      <div className='text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm'>
                        <TrendingUp className='h-6 w-6 text-blue-600 mx-auto mb-2' />
                        <div className='text-2xl font-bold text-green-600 dark:text-green-400'>${result.profit}</div>
                        <div className='text-xs text-gray-600 dark:text-gray-300'>Total Profit</div>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className='space-y-3 p-4 bg-white/40 dark:bg-gray-800/40 rounded-lg backdrop-blur-sm'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600 dark:text-gray-300'>Principal Amount:</span>
                        <span className='font-medium text-gray-900 dark:text-white'>${result.principal}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600 dark:text-gray-300'>Interest Rate:</span>
                        <span className='font-medium text-gray-900 dark:text-white'>{result.rate}% per year</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-600 dark:text-gray-300'>Time Period:</span>
                        <span className='font-medium text-gray-900 dark:text-white'>{result.time} years</span>
                      </div>
                      <div className='border-t border-gray-200 dark:border-gray-700 pt-3 mt-3'>
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-600 dark:text-gray-300'>Annual Return:</span>
                          <span className='font-medium text-blue-600 dark:text-blue-400'>${result.annualReturn}</span>
                        </div>
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-600 dark:text-gray-300'>Monthly Return:</span>
                          <span className='font-medium text-purple-600 dark:text-purple-400'>
                            ${result.monthlyReturn}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='text-center'>
                      <Button className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg'>
                        <Link to={data ? '/dashboard' : '/register'}>Start Investing Now </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className='hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800/50 border-0 shadow-lg'>
                  <CardContent className='p-8 text-center'>
                    <div className='p-4 bg-gray-200 dark:bg-gray-700 rounded-full w-fit mx-auto mb-4'>
                      <BarChart3 className='h-8 w-8 text-gray-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Ready to Calculate</h3>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Fill in your investment details on the left to see your potential returns and growth projections.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Understanding Your Investments
            </h2>
            <p className='sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Learn how compound interest can help grow your wealth over time
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {[
              {
                icon: TrendingUp,
                title: 'Compound Interest',
                description:
                  'Earn interest on both your principal and previously earned interest, accelerating your wealth growth.',
                iconBg: 'bg-blue-100 dark:bg-blue-900/20',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Clock,
                title: 'Time is Key',
                description: 'The longer you invest, the more time compound interest has to work in your favor.',
                iconBg: 'bg-green-100 dark:bg-green-900/20',
                iconColor: 'text-green-600 dark:text-green-400',
              },
              {
                icon: Target,
                title: 'Start Small',
                description:
                  'Even small amounts invested regularly can grow significantly over time with compound interest.',
                iconBg: 'bg-purple-100 dark:bg-purple-900/20',
                iconColor: 'text-purple-600 dark:text-purple-400',
              },
            ].map(({ icon: Icon, title, description, iconBg, iconColor }) => (
              <Card
                key={title}
                className='hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg w-xs sm:w-sm lg:w-auto  h-full'
              >
                <CardContent className='p-6'>
                  <div className={`p-3 ${iconBg} rounded-full w-fit mb-4`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>

                  <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>{title}</h3>

                  <p className='text-sm text-gray-600 dark:text-gray-300'>{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-700'>
        <div className='max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Ready to Turn Calculations into Reality?</h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            Join thousands of investors who are already building their wealth with our proven investment plans.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors duration-300'>
              <Link to={data ? '/dashboard' : '/register'}>Start Investing Now </Link>
            </Button>
            <Button
              variant='outline'
              className='px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors duration-300'
            >
              View Investment Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
