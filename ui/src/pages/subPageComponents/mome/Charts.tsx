import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

declare global {
  interface Window {
    TradingView: any;
  }
}

export const Charts = () => {
  const btcContainerRef = useRef<HTMLDivElement>(null);
  const ethContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        // BTC Chart
        if (btcContainerRef.current) {
          new window.TradingView.widget({
            container_id: btcContainerRef.current.id,
            width: '100%',
            height: 320,
            symbol: 'BINANCE:BTCUSDT',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#1e293b',
            enable_publishing: false,
            allow_symbol_change: true,
            hide_side_toolbar: false,
            studies: [],
            show_popup_button: true,
            popup_width: '1000',
            popup_height: '650',
          });
        }

        // ETH Chart
        if (ethContainerRef.current) {
          new window.TradingView.widget({
            container_id: ethContainerRef.current.id,
            width: '100%',
            height: 320,
            symbol: 'BINANCE:ETHUSDT',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#1e293b',
            enable_publishing: false,
            allow_symbol_change: true,
            hide_side_toolbar: false,
            studies: [],
            show_popup_button: true,
            popup_width: '1000',
            popup_height: '650',
          });
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[src*="tradingview"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <section className='py-16 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg'>Live Market Charts</h2>
          <p className='text-lg text-slate-300 max-w-2xl mx-auto'>
            Track real-time cryptocurrency prices and market trends with professional trading charts
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Main BTC Chart */}
          <Card className='hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 border backdrop-blur-sm overflow-hidden shadow-lg shadow-cyan-500/10'>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 bg-orange-500 rounded-full mr-3 flex items-center justify-center shadow-lg shadow-orange-500/30'>
                  <span className='text-white font-bold text-xs'>₿</span>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-white'>Bitcoin (BTC/USDT)</h3>
                  <p className='text-sm text-slate-400'>Real-time price chart</p>
                </div>
              </div>
              <div
                id='tradingview_btc'
                ref={btcContainerRef}
                className='w-full h-80 rounded-lg overflow-hidden border border-slate-700'
              />
            </div>
          </Card>

          {/* ETH Chart */}
          <Card className='hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 border backdrop-blur-sm overflow-hidden shadow-lg shadow-purple-500/10'>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 bg-purple-500 rounded-full mr-3 flex items-center justify-center shadow-lg shadow-purple-500/30'>
                  <span className='text-white font-bold text-xs'>Ξ</span>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-white'>Ethereum (ETH/USDT)</h3>
                  <p className='text-sm text-slate-400'>Real-time price chart</p>
                </div>
              </div>
              <div
                id='tradingview_eth'
                ref={ethContainerRef}
                className='w-full h-80 rounded-lg overflow-hidden border border-slate-700'
              />
            </div>
          </Card>
        </div>

        {/* Market Stats */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center p-4 bg-slate-800/50 rounded-lg shadow border border-slate-700 backdrop-blur-sm'>
            <div className='text-2xl font-bold text-cyan-400 mb-1'>$2.1T</div>
            <div className='text-sm text-slate-400'>Crypto Market Cap</div>
          </div>
          <div className='text-center p-4 bg-slate-800/50 rounded-lg shadow border border-slate-700 backdrop-blur-sm'>
            <div className='text-2xl font-bold text-purple-400 mb-1'>24/7</div>
            <div className='text-sm text-slate-400'>Trading Available</div>
          </div>
          <div className='text-center p-4 bg-slate-800/50 rounded-lg shadow border border-slate-700 backdrop-blur-sm'>
            <div className='text-2xl font-bold text-pink-400 mb-1'>500+</div>
            <div className='text-sm text-slate-400'>Assets Tracked</div>
          </div>
          <div className='text-center p-4 bg-slate-800/50 rounded-lg shadow border border-slate-700 backdrop-blur-sm'>
            <div className='text-2xl font-bold text-green-400 mb-1'>99.9%</div>
            <div className='text-sm text-slate-400'>Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
