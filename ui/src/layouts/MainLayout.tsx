import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import { useLoggedinUserQuery } from '@/store/features/userQuery';

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useLoggedinUserQuery();
  // const isAdmin = data?.data.user.email === 'testnext@gmail.com';
  // console.log('Data isAdmin ==>', isAdmin);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/investment-plans', label: 'Investment Plans' },
    { to: '/profit-calculator', label: 'Profit Calculator' },
     { to: '/admin', label: 'Admin Dashboard' },
    data ? { to: '/dashboard', label: 'Dashboard' } : { to: '/login', label: 'Login' },
  ];

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link block py-3 px-4 rounded-xl transition-all duration-200 text-sm font-medium
     ${
       isActive
         ? 'nav-link-active bg-violet-500/10 text-violet-300 border border-violet-500/30 shadow-sm'
         : 'nav-link-inactive text-slate-400 hover:text-white hover:bg-white/5'
     }`;

  return (
    <div className='min-h-screen bg-slate-950'>
      <nav className='bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                `text-2xl font-bold tracking-tight transition-colors duration-200
                 ${isActive ? 'text-white' : 'text-slate-200 hover:text-white'}`
              }
            >
              Afro<span className='text-violet-400'>Invest</span>
            </NavLink>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-x-2'>
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navItemClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              // disabled
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10'
              aria-label='Toggle menu'
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Modern Slide Down */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className='px-4 pb-6 pt-2 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 space-y-1'>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={navItemClass}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className='py-8 pb-16'>
        <Outlet />
      </main>

      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme='colored'
      />

      <Footer />
    </div>
  );
};
