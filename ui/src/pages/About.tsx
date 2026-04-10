import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Users, Shield, TrendingUp, Globe, Award, Heart } from 'lucide-react';

export const About = () => {
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
              About Afro Invest
            </Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight'>
              Empowering African{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600'>
                Investors
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              We're building the future of African finance, making investment accessible, secure, and profitable for
              everyone across the continent.
            </p>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
            {[
              { number: '12,450+', label: 'Active Investors', icon: Users },
              { number: '$2.4M+', label: 'Total Invested', icon: TrendingUp },
              { number: '25+', label: 'Countries', icon: Globe },
              { number: '99.9%', label: 'Uptime', icon: Shield },
            ].map((stat, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg'
              >
                <CardContent className='p-6'>
                  <stat.icon className='h-8 w-8 text-blue-600 mx-auto mb-3' />
                  <div className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1'>{stat.number}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-300'>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            <Card className='hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-0 shadow-lg'>
              <CardHeader className='pb-4'>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full mr-4'>
                    <Target className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                  </div>
                  <CardTitle className='text-2xl text-gray-900 dark:text-white'>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                  To democratize access to investment opportunities across Africa, enabling individuals to build wealth
                  regardless of their starting point or location. We believe that everyone deserves the opportunity to
                  grow their financial future.
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border-0 shadow-lg'>
              <CardHeader className='pb-4'>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full mr-4'>
                    <Eye className='h-6 w-6 text-purple-600 dark:text-purple-400' />
                  </div>
                  <CardTitle className='text-2xl text-gray-900 dark:text-white'>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                  To become the leading pan-African investment platform that drives economic growth and financial
                  inclusion across the continent, creating a new generation of empowered investors and entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist & What We Offer */}
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Why Afro Invest Exists
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Addressing the real challenges African investors face and providing solutions that matter
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            <Card className='hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg'>
              <CardHeader>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-red-100 dark:bg-red-900/20 rounded-full mr-4'>
                    <Heart className='h-6 w-6 text-red-600 dark:text-red-400' />
                  </div>
                  <CardTitle className='text-xl text-gray-900 dark:text-white'>The Problem</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Limited access to formal investment vehicles in many African countries</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>High barriers to entry for retail investors with complex requirements</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Lack of localized financial education and market insights</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Need for transparent, trustworthy investment platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg'>
              <CardHeader>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-green-100 dark:bg-green-900/20 rounded-full mr-4'>
                    <Award className='h-6 w-6 text-green-600 dark:text-green-400' />
                  </div>
                  <CardTitle className='text-xl text-gray-900 dark:text-white'>Our Solution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Diversified investment plans tailored to different risk profiles</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Low minimum investment requirements (starting at just $10)</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Educational resources and real-time market insights</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>Secure platform with bank-level encryption and compliance</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0'></div>
                    <span>24/7 responsive customer support in multiple languages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-700'>
        <div className='max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Ready to Join Our Community?</h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            Start your investment journey today and be part of Africa's financial revolution.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300'>
              Start Investing
            </button>
            <button className='px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
