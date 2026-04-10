import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {  Users, Award, TrendingUp, Handshake, DollarSign } from 'lucide-react';

const whyItems = [
  {
    icon: <TrendingUp className='w-8 h-8' />,
    title: 'Early Access to Opportunities',
    desc: "Get first dibs on exclusive investment opportunities, partnerships, and emerging markets before they're publicly available.",
  },
  {
    icon: <Users className='w-8 h-8' />,
    title: 'Networking & Connections',
    desc: 'Connect with industry leaders, entrepreneurs, and fellow ambassadors in our global network.',
  },
  {
    icon: <Award className='w-8 h-8' />,
    title: 'Exclusive Perks & Rewards',
    desc: 'Enjoy premium benefits including priority support, special events, and performance-based incentives.',
  },
  {
    icon: <TrendingUp className='w-8 h-8' />,
    title: 'Personal Growth',
    desc: 'Develop leadership skills, gain valuable experience, and build your personal brand in the investment space.',
  },
  {
    icon: <Handshake className='w-8 h-8' />,
    title: 'Community Impact',
    desc: 'Contribute to empowering communities through investment and create lasting positive change.',
  },
  {
    icon: <DollarSign className='w-8 h-8' />,
    title: 'Financial Benefits',
    desc: 'Earn commissions, bonuses, and other financial incentives for successful referrals and partnerships.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Apply',
    desc: 'Submit your application through our online portal with your background and interests.',
  },
  {
    number: '2',
    title: 'Review',
    desc: 'Our team reviews your application and conducts an initial interview to assess fit.',
  },
  {
    number: '3',
    title: 'Training',
    desc: 'Complete our comprehensive training program to understand our platform and opportunities.',
  },
  {
    number: '4',
    title: 'Launch',
    desc: 'Start your journey as an ambassador with full access to tools, resources, and support.',
  },
];

export const BecomeOurAmbassador: React.FC = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        {/* Hero Section - Better mobile scaling */}
        <div className='text-center mb-16 md:mb-20'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 text-sm font-medium'>
            🌍 Join the Movement
          </div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight'>
            Become Our <span className='text-violet-400'>Ambassador</span>
          </h1>
          <p className='text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            Join our elite network and unlock exclusive opportunities in investments, networking, and growth.
          </p>
        </div>

        {/* Why Become an Ambassador */}
        <section className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-semibold text-center mb-12'>Why Become an Ambassador?</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {whyItems.map((item, index) => (
              <Card
                key={index}
                className='group bg-slate-900/70 border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                <CardHeader className='pb-4'>
                  <div className='w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform'>
                    {item.icon}
                  </div>
                  <CardTitle className='text-xl text-white'>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-slate-400 leading-relaxed'>{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works - Better mobile stack */}
        <section className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-semibold text-center mb-12'>How to Become an Ambassador</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6'>
            {steps.map((step, index) => (
              <div key={index} className='relative text-center group'>
                {/* Connecting Line (hidden on mobile, visible on larger screens) */}
                {index !== steps.length - 1 && (
                  <div className='hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-linear-to-r from-violet-500/30 to-transparent -translate-x-1/2' />
                )}

                <div className='flex justify-center mb-6'>
                  <div className='w-20 h-20 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl font-bold shadow-xl shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300'>
                    {step.number}
                  </div>
                </div>

                <h3 className='text-2xl font-semibold mb-3 text-white'>{step.title}</h3>
                <p className='text-slate-400 max-w-xs mx-auto leading-relaxed'>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - More prominent on mobile */}
        <div className='text-center'>
          <Card className='max-w-lg mx-auto bg-linear-to-br from-violet-600 via-purple-600 to-indigo-600 border-0 shadow-2xl overflow-hidden'>
            <CardHeader className='pb-6 pt-10'>
              <CardTitle className='text-3xl md:text-4xl font-bold'>Ready to Get Started?</CardTitle>
            </CardHeader>
            <CardContent className='px-8 pb-10'>
              <p className='text-lg text-white/90 mb-8'>
                Join our ambassador program today and start building your future in investments.
              </p>
              <Button
                size='lg'
                className='w-full sm:w-auto bg-white text-violet-700 hover:bg-gray-100 font-semibold text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.985]'
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
