import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <div>
      <section className='py-20 bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
        {/* Animated background gradient */}
        <div className='absolute inset-0 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse'></div>
        {/* Glowing orbs */}
        <div className='absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse'></div>

        <div className='relative max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center'>
          <div className='flex justify-center mb-6'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='h-6 w-6 text-cyan-400 fill-current drop-shadow-lg' />
            ))}
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg'>
            Ready to Start Your{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400'>
              Investment Journey
            </span>
            ?
          </h2>
          <p className='text-xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of Africans building generational wealth through smart investing. Your future starts today.
          </p>
          <Button
            size='lg'
            className='px-10 py-5 text-xl font-semibold bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-400/50'
          >
            Create Account Free
          </Button>
          <p className='mt-4 text-slate-400 text-sm'>No hidden fees • Start with any amount • 24/7 support</p>
        </div>
      </section>
    </div>
  );
};
