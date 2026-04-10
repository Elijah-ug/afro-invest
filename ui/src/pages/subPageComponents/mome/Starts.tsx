import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, DollarSign, Users } from 'lucide-react';
import React from 'react';

export const Starts: React.FC = () => {
  const stats = [
    {
      title: 'Active Investors',
      value: '12,450+',
      icon: Users,
      accent: 'from-cyan-400 to-cyan-600',
    },
    {
      title: 'Total Invested',
      value: '$2.4M+',
      icon: DollarSign,
      accent: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Average ROI',
      value: '14.5%',
      icon: BarChart3,
      accent: 'from-pink-400 to-pink-600',
      span: 'sm:col-span-2 lg:col-span-1',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-14'>
          <h2 className='text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4'>
            Trusted by Investors Worldwide
          </h2>
          <p className='text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto'>
            Join a growing community of investors building long-term wealth
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Card
                key={index}
                className={`
                  group relative overflow-hidden
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl
                  border border-white/20 dark:border-white/10
                  hover:border-white/40 dark:hover:border-white/20
                  transition-all duration-300
                  ${stat.span || ''}
                `}
              >
                {/* Gradient Glow Accent */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br ${stat.accent} blur-2xl`}
                />

                <CardContent className='relative p-5 sm:p-7'>
                  <div className='flex items-center gap-4'>
                    {/* Icon */}
                    <div className={`p-3 rounded-xl bg-linear-to-br ${stat.accent} shadow-md`}>
                      <Icon className='h-5 w-5 sm:h-6 sm:w-6 text-white' />
                    </div>

                    {/* Text */}
                    <div>
                      <p className='text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400'>
                        {stat.title}
                      </p>
                      <p className='text-xl sm:text-3xl font-semibold text-slate-900 dark:text-white'>{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
