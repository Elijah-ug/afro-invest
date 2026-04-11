import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Charts } from '@/pages/subPageComponents/mome/Charts';
import { CTA } from './subPageComponents/mome/CTA';
import { Starts } from './subPageComponents/mome/Starts';
import { Features } from './subPageComponents/mome/Features';
import { HighlightsMarque } from './subPageComponents/mome/HighlightsMarque';
import { BecomeOurAmbassador } from './subPageComponents/mome/BecomeOurAmbassador';
import { useGetUserInfoQuery } from '@/store/features/userQuery';

export const Home = () => {
  const { data } = useGetUserInfoQuery();
  console.log('Data from backend==>', data);
  return (
    <div className='space-y-16'>
      {/* Hero Section with Background Video - Full Width */}
      <section className='relative overflow-hidden w-full'>
        {/* Background Video */}
        <div className='relative w-full h-150 md:h-175 lg:h-200'>
          <video
            autoPlay
            muted
            loop
            className='absolute inset-0 w-full h-full object-cover'
            aria-label='Background video showing financial charts'
          >
            <source
              src='https://v.ftcdn.net/02/26/70/76/700_F_226707694_bUMMYXQ8QdKrgD7XQXb2dno3PsuOM0Bo_ST.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay for better text readability */}
          <div className='absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-transparent'></div>

          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center py-20 md:py-32'>
            <Badge
              variant='secondary'
              className='mb-4 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm'
            >
              African-Focused Investment Platform
            </Badge>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight'>
              Build Your Wealth with{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400'>
                Confidence
              </span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed'>
              Join thousands of Africans creating generational wealth through smart, secure investments tailored for the
              modern investor.
            </p>
            {/* flex flex-col  sm:flex-row gap-4 justify-center */}
            <div className='grid grid-cols-2 sm:gap-4 gap-3'>
              <Button
                size='lg'
                className='px-8 py-5 sm:text-lg font-semibold bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-cyan-500/25 hover:shadow-cyan-500/40 sm:max-w-lg max-w-xs'
              >
                Start Investing Today
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-5 sm:text-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm sm:max-w-sm max-w-xs'
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Marquee - Ultra Compact & Modern (No Card Component) */}
      <HighlightsMarque />

      {/* Call to Action */}
      <CTA />

      {/* Features Section */}
      <Features />

      {/* charts */}
      <Charts />

      {/* become ambassador */}
      <BecomeOurAmbassador />

      {/* Stats Section */}
      <Starts />
    </div>
  );
};
