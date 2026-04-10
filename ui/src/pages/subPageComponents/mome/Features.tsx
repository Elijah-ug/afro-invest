import { Card, CardContent } from '@/components/ui/card';
import { Shield, Smartphone, TrendingUp, Zap } from 'lucide-react';
import React from 'react';

export const Features: React.FC = () => {
  return (
    <div>
      <section className='py-16 bg-slate-900'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 text-gradient-web3'>
              Why Choose Afro Invest?
            </h2>
            <p className='text-lg text-slate-300 max-w-2xl mx-auto'>
              Experience the future of investing with our cutting-edge platform designed for African investors
            </p>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center'>
            {[
              {
                icon: Shield,
                title: 'Secure & Regulated',
                desc: 'Your investments are protected with bank-level security and regulatory compliance',
                color: 'cyan',
              },
              {
                icon: Smartphone,
                title: 'Mobile First',
                desc: 'Invest anytime, anywhere with our responsive platform and dedicated mobile app',
                color: 'purple',
              },
              {
                icon: TrendingUp,
                title: 'Expert Guidance',
                desc: 'Professional advice tailored to your goals and risk tolerance',
                color: 'pink',
              },
              {
                icon: Zap,
                title: 'Instant Withdrawals',
                desc: 'Access your funds when you need them with lightning-fast processing',
                color: 'green',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-slate-800/50 border border-slate-700 backdrop-blur-sm shadow-lg sm:max-w-sm max-w-xs h-full glow-${feature.color}`}
              >
                <CardContent className='p-8 text-center'>
                  <div
                    className={`p-4 bg-linear-to-br from-${feature.color}-500/20 to-${feature.color}-600/20 rounded-full mb-6 mx-auto w-fit glow-${feature.color}`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>{feature.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
