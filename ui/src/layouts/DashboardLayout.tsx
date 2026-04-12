import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-slate-950'>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};
