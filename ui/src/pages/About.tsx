import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Users, Shield, TrendingUp, Globe, Award, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5' />

        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24'>
          <div className='text-center mb-12 md:mb-16'>
            <Badge
              variant='secondary'
              className='mb-4 px-5 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            >
              About Afro Invest
            </Badge>

            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight'>
              Empowering African{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600'>
                Investors
              </span>
            </h1>

            <p className=' sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Building the future of African finance — making investment accessible, secure, and profitable for everyone
              across the continent.
            </p>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            {[
              { number: '12,450+', label: 'Active Investors', icon: Users },
              { number: '$2.4M+', label: 'Total Invested', icon: TrendingUp },
              { number: '25+', label: 'Countries', icon: Globe },
              { number: '99.9%', label: 'Uptime', icon: Shield },
            ].map((stat, index) => (
              <Card
                key={index}
                className='group text-center hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700 shadow-md hover:-translate-y-1 active:scale-[0.98]'
              >
                <CardContent className='p-2 sm:p-6'>
                  <stat.icon className='h-5 w-5 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-3 transition-transform group-hover:scale-110' />
                  <div className='text-lg sm:text-3xl font-bold text-gray-900 dark:text-white mb-1'>{stat.number}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 md:py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-6 sm:gap-4 lg:gap-8 sm:grid-cols-2 place-items-center'>
            {/* Mission Card */}
            <Card className='group hover:shadow-2xl transition-all duration-300 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-lg overflow-hidden w-xs sm:w-sm lg:w-lg h-full'>
              <CardHeader className='pb-4'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl'>
                    <Target className='h-7 w-7 text-blue-600 dark:text-blue-400' />
                  </div>
                  <CardTitle className='text-2xl font-semibold text-gray-900 dark:text-white'>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='text-[15px] sm:text-base leading-relaxed text-gray-600 dark:text-gray-300'>
                To democratize access to investment opportunities across Africa, enabling individuals to build wealth
                regardless of their starting point or location.
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className='group hover:shadow-2xl transition-all duration-300 bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-lg overflow-hidden w-xs sm:w-sm lg:w-lg h-full'>
              <CardHeader className='pb-4'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl'>
                    <Eye className='h-7 w-7 text-purple-600 dark:text-purple-400' />
                  </div>
                  <CardTitle className='text-2xl font-semibold text-gray-900 dark:text-white'>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='text-[15px] sm:text-base leading-relaxed text-gray-600 dark:text-gray-300'>
                To become the leading pan-African investment platform that drives economic growth and financial
                inclusion across the continent.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist & What We Offer */}
      <section className='py-16 md:py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight'>
              Why Afro Invest Exists
            </h2>
            <p className='text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              Addressing real challenges African investors face with practical, accessible solutions.
            </p>
          </div>

          <div className='grid gap-6 sm:gap-4 lg:gap-8 sm:grid-cols-2 place-items-center'>
            {/* The Problem */}
            <Card className='hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg w-xs sm:w-sm lg:w-lg h-full'>
              <CardHeader>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-red-100 dark:bg-red-900/30 rounded-2xl'>
                    <Heart className='h-7 w-7 text-red-600 dark:text-red-400' />
                  </div>
                  <CardTitle className='text-2xl font-semibold text-gray-900 dark:text-white'>The Problem</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                  {[
                    'Limited access to formal investment vehicles',
                    'High barriers for retail investors',
                    'Lack of localized financial education',
                    'Need for trustworthy platforms',
                  ].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className='hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg w-xs sm:w-sm lg:w-lg h-full'>
              <CardHeader>
                <div className='flex items-center gap-4'>
                  <div className='p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl'>
                    <Award className='h-7 w-7 text-green-600 dark:text-green-400' />
                  </div>
                  <CardTitle className='text-2xl font-semibold text-gray-900 dark:text-white'>Our Solution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                  {[
                    'Diversified plans for different risk profiles',
                    'Low minimum investment — starting at $10',
                    'Educational resources & real-time insights',
                    'Bank-level security and compliance',
                    '24/7 multilingual customer support',
                  ].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 md:py-20 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-700'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight'>
            Ready to Join Our Community?
          </h2>
          <p className='text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto'>
            Start your investment journey today and be part of Africa’s financial revolution.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-10 py-4 bg-white text-blue-700 font-semibold rounded-2xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 shadow-lg'>
              Start Investing Now
            </button>
            <button className='px-10 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 active:bg-white/5 transition-all duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
