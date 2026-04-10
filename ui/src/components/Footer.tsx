import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowUp, Send, Video, Rss, Code, X } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-slate-900 border-t border-slate-800'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='text-3xl'>📈</span>
              <span className='text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Afro Invest
              </span>
            </div>
            <p className='text-slate-400 mb-6 leading-relaxed'>
              Empowering Africans to build generational wealth through smart, secure investments in the digital economy.
            </p>
            <div className='mb-4'>
              <p className='text-sm font-semibold text-white mb-3'>Follow Us</p>
              <div className='flex flex-wrap gap-3'>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all'
                  onClick={() => window.open('https://twitter.com/afroinvest', '_blank')}
                  title='Follow on Twitter'
                >
                  <Send className='h-5 w-5' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-300 transition-all'
                  onClick={() => window.open('https://linkedin.com/company/afroinvest', '_blank')}
                  title='Connect on LinkedIn'
                >
                  <X className='h-5 w-5' />
                  
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-300 transition-all'
                  onClick={() => window.open('https://youtube.com/@afroinvest', '_blank')}
                  title='Subscribe on YouTube'
                >
                  <Video className='h-5 w-5' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-300 transition-all'
                  onClick={() => window.open('https://blog.afroinvest.com', '_blank')}
                  title='Read our Blog'
                >
                  <Rss className='h-5 w-5' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-slate-400 hover:bg-slate-700 hover:border-slate-600 hover:text-cyan-400 transition-all'
                  onClick={() => window.location.href = 'mailto:hello@afroinvest.com'}
                  title='Email us'
                >
                  <Mail className='h-5 w-5' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  className='border-slate-700 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-300 transition-all'
                  onClick={() => window.open('https://github.com/afroinvest', '_blank')}
                  title='View on GitHub'
                >
                  <Code className='h-5 w-5' />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Quick Links</h3>
            <nav className='space-y-3'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `block text-sm transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `block text-sm transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to='/investment-plans'
                className={({ isActive }) =>
                  `block text-sm transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                  }`
                }
              >
                Investment Plans
              </NavLink>
              <NavLink
                to='/profit-calculator'
                className={({ isActive }) =>
                  `block text-sm transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                  }`
                }
              >
                Profit Calculator
              </NavLink>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Resources</h3>
            <nav className='space-y-3'>
              <a href='#' className='block text-sm text-slate-400 hover:text-purple-400 transition-colors'>
                Documentation
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-purple-400 transition-colors'>
                Blog
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-purple-400 transition-colors'>
                FAQ
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-purple-400 transition-colors'>
                Support
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Legal</h3>
            <nav className='space-y-3'>
              <a href='#' className='block text-sm text-slate-400 hover:text-pink-400 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-pink-400 transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-pink-400 transition-colors'>
                Risk Disclaimer
              </a>
              <a href='#' className='block text-sm text-slate-400 hover:text-pink-400 transition-colors'>
                Cookies Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-800 mb-8'></div>

        {/* Bottom Footer */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-slate-400 text-center sm:text-left'>
            © {currentYear} Afro Invest. All rights reserved. | Built with ❤️ for African investors
          </p>
          <Button
            onClick={scrollToTop}
            size='sm'
            className='bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border-cyan-400/50 transition-all'
          >
            <ArrowUp className='h-4 w-4 mr-2' />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Responsive Footer Note */}
      <div className='bg-slate-950/50 border-t border-slate-800 px-2 sm:px-4 lg:px-6 py-4'>
        <p className='text-xs text-slate-500 text-center'>
          Stay updated with Africa's growing investment ecosystem. Join our community today.
        </p>
      </div>
    </footer>
  );
};