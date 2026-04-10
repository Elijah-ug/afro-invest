import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Shield, Star, DollarSign, Clock, Target, Award } from 'lucide-react';

export const InvestmentPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Starter Plan',
      tagline: 'Begin Your Journey',
      description: 'Perfect for beginners looking to start their investment journey with confidence',
      minInvestment: 10,
      expectedReturn: '8-10%',
      duration: '3 months',
      risk: 'Low',
      riskColor: 'green',
      icon: Target,
      gradient: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      features: [
        'Principal protection guaranteed',
        'Monthly returns paid out',
        'Easy withdrawal anytime',
        'Financial education included',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Growth Plan',
      tagline: 'Build Wealth',
      description: 'Balanced approach for steady wealth accumulation with compounding returns',
      minInvestment: 100,
      expectedReturn: '12-15%',
      duration: '6 months',
      risk: 'Medium',
      riskColor: 'yellow',
      icon: TrendingUp,
      gradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: ['Compounding returns', 'Quarterly payouts', 'Portfolio diversification', 'Market analysis reports'],
      popular: true,
    },
    {
      id: 3,
      name: 'Accelerator Plan',
      tagline: 'Maximize Returns',
      description: 'High-growth option for experienced investors seeking premium returns',
      minInvestment: 500,
      expectedReturn: '18-22%',
      duration: '12 months',
      risk: 'High',
      riskColor: 'red',
      icon: Award,
      gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      features: [
        'Aggressive growth strategy',
        'Bi-annual returns',
        'Premium assets access',
        'Personal investment advisor',
      ],
      popular: false,
    },
  ];

  return (
    <div className='space-y-16 py-12'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
        <div className='relative max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-16 md:py-24'>
          <div className='text-center mb-12'>
            <Badge
              variant='secondary'
              className='mb-4 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
            >
              Investment Plans
            </Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight'>
              Choose Your{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600'>
                Investment Path
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Select the perfect plan that matches your financial goals, risk tolerance, and investment timeline. Start
              building wealth with confidence today.
            </p>
          </div>

          {/* Key Benefits */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <Shield className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Secure & Regulated</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Bank-level security with full regulatory compliance
              </p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <TrendingUp className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Proven Returns</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Consistent performance with transparent reporting
              </p>
            </div>
            <div className='text-center'>
              <div className='p-4 bg-white/80 dark:bg-gray-800/80 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm'>
                <DollarSign className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white mb-2'>Low Minimums</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Start investing with as little as $10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-3'>
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={plan.id}
                  className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-linear-to-br ${plan.gradient} border-0 shadow-lg overflow-hidden`}
                >
                  {plan.popular && (
                    <div className='absolute top-4 right-4 z-10'>
                      <Badge className='bg-yellow-500 text-yellow-900 hover:bg-yellow-600 px-3 py-1'>
                        <Star className='w-3 h-3 mr-1' />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className='pb-6'>
                    <div className='flex items-center mb-4'>
                      <div className={`p-3 bg-white/80 dark:bg-gray-800/80 rounded-full mr-4 backdrop-blur-sm`}>
                        <IconComponent className={`h-6 w-6 text-${plan.riskColor}-600`} />
                      </div>
                      <div>
                        <CardTitle className='text-2xl font-bold text-gray-900 dark:text-white'>{plan.name}</CardTitle>
                        <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>{plan.tagline}</p>
                      </div>
                    </div>
                    <CardDescription className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='space-y-6'>
                    {/* Key Metrics */}
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm'>
                        <DollarSign className='h-5 w-5 text-green-600 mx-auto mb-1' />
                        <div className='text-lg font-bold text-gray-900 dark:text-white'>${plan.minInvestment}</div>
                        <div className='text-xs text-gray-600 dark:text-gray-300'>Min Investment</div>
                      </div>
                      <div className='text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm'>
                        <TrendingUp className='h-5 w-5 text-blue-600 mx-auto mb-1' />
                        <div className='text-lg font-bold text-gray-900 dark:text-white'>{plan.expectedReturn}</div>
                        <div className='text-xs text-gray-600 dark:text-gray-300'>Expected Return</div>
                      </div>
                    </div>

                    {/* Duration & Risk */}
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center'>
                        <Clock className='h-4 w-4 text-gray-500 mr-2' />
                        <span className='text-sm text-gray-600 dark:text-gray-300'>{plan.duration}</span>
                      </div>
                      <Badge
                        variant='secondary'
                        className={`px-3 py-1 text-xs font-medium
                          ${
                            plan.riskColor === 'green'
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                              : plan.riskColor === 'yellow'
                                ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200'
                                : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                          }`}
                      >
                        {plan.risk} Risk
                      </Badge>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className='font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
                        <CheckCircle className='h-4 w-4 text-green-600 mr-2' />
                        Key Features
                      </h4>
                      <ul className='space-y-2'>
                        {plan.features.map((feature, index) => (
                          <li key={index} className='flex items-start text-sm text-gray-600 dark:text-gray-300'>
                            <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className='pt-6'>
                    <Button
                      className={`w-full ${plan.buttonColor} text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg`}
                      onClick={() => alert(`Investing in ${plan.name}! (Feature coming soon)`)}
                    >
                      Start Investing
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className='py-8 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center'>
          <div className='bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6'>
            <div className='flex items-center justify-center mb-4'>
              <Shield className='h-6 w-6 text-yellow-600 mr-2' />
              <span className='font-semibold text-yellow-800 dark:text-yellow-200'>Investment Risk Notice</span>
            </div>
            <p className='text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed'>
              All investments carry risk, including the potential loss of principal. Past performance does not guarantee
              future results. Please invest only what you can afford to lose and consider your risk tolerance carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-700'>
        <div className='max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Ready to Start Investing?</h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            Join thousands of investors who are already building their wealth with Afro Invest.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors duration-300'>
              Create Account
            </Button>
            <Button
              variant='outline'
              className='px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors duration-300'
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
