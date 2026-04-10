import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';

export const DashboardLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-slate-950'>
      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside className='w-64 bg-slate-900 border-r border-slate-800'>
          <div className='px-4 py-6'>
            <NavLink
              to='/dashboard'
              className='flex items-center space-x-3 text-xl font-semibold text-cyan-400 hover:text-cyan-300'
            >
              <span className='text-2xl'>📈</span>
              <span>Afro Invest</span>
            </NavLink>
          </div>

          <nav className='mt-10 space-y-2 px-4'>
            <NavLink
              to='/dashboard'
              className={({ isActive }) => `
              flex w-full items-center px-3 py-2 text-sm font-medium rounded-md transition-all
              ${isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-cyan-400'}
            `}
            >
              Overview
            </NavLink>

            <NavLink
              to='/investment-plans'
              className={({ isActive }) => `
              flex w-full items-center px-3 py-2 text-sm font-medium rounded-md transition-all
              ${isActive ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-purple-400'}
            `}
            >
              Investment Plans
            </NavLink>

            <NavLink
              to='/profit-calculator'
              className={({ isActive }) => `
              flex w-full items-center px-3 py-2 text-sm font-medium rounded-md transition-all
              ${isActive ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-pink-400'}
            `}
            >
              Profit Calculator
            </NavLink>
          </nav>

          <div className='mt-auto px-4 py-6 border-t border-slate-800'>
            <button
              onClick={() => {
                localStorage.removeItem('isAuthenticated');
                window.location.href = '/login';
              }}
              className='w-full flex items-center justify-start px-3 py-2 text-sm font-medium text-left text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-all'
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-6'>
          <div className='flex justify-between items-start'>
            <h1 className='text-2xl font-bold text-white'>Dashboard</h1>

            <div className='flex items-center space-x-3'>
              <button className='px-3 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-700 transition-all'>
                Notifications
              </button>
              <button className='px-3 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-md hover:bg-slate-700 transition-all'>
                Profile
              </button>
            </div>
          </div>

          <div className='mt-6'>
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
