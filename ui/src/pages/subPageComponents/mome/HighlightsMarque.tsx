import { BarChart3, Shield, Smartphone, TrendingUp, Users, Zap } from 'lucide-react';
import React from 'react';

export const HighlightsMarque: React.FC = () => {
  return (
    <div>
      <section className='py-8 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='relative'>
            {/* Marquee Container */}
            <div className='flex animate-marquee'>
              {/* First set of items */}
              {[
                { icon: TrendingUp, text: 'High Earnings' },
                { icon: Shield, text: 'Low Risk' },
                { icon: Zap, text: 'Easy Withdraw' },
                { icon: Shield, text: 'Secure Platform' },
                { icon: BarChart3, text: 'Daily Returns' },
                { icon: Users, text: 'Expert Support' },
                { icon: Smartphone, text: 'Mobile App' },
              ].map((item, index) => (
                <div key={`first-${index}`} className='shrink-0 mx-1.5 sm:mx-2 md:mx-3'>
                  <div className='group flex items-center gap-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-3 min-w-33.75 sm:min-w-37 md:min-w-39.5 lg:min-w-42 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5'>
                    <div className='p-2 bg-blue-100 dark:bg-blue-950 rounded-xl shrink-0 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-900'>
                      <item.icon className='h-5 w-5 sm:h-5.5 sm:w-5.5 text-blue-600 dark:text-blue-400' />
                    </div>
                    <span className='font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 whitespace-nowrap tracking-tight'>
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { icon: TrendingUp, text: 'High Earnings' },
                { icon: Shield, text: 'Low Risk' },
                { icon: Zap, text: 'Easy Withdraw' },
                { icon: Shield, text: 'Secure Platform' },
                { icon: BarChart3, text: 'Daily Returns' },
                { icon: Users, text: 'Expert Support' },
                { icon: Smartphone, text: 'Mobile App' },
              ].map((item, index) => (
                <div key={`second-${index}`} className='shrink-0 mx-1.5 sm:mx-2 md:mx-3'>
                  <div className='group flex items-center gap-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-3 min-w-33.75 sm:min-w-37 md:min-w-39.5 lg:min-w-42 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5'>
                    <div className='p-2 bg-blue-100 dark:bg-blue-950 rounded-xl shrink-0 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-900'>
                      <item.icon className='h-5 w-5 sm:h-5.5 sm:w-5.5 text-blue-600 dark:text-blue-400' />
                    </div>
                    <span className='font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 whitespace-nowrap tracking-tight'>
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
