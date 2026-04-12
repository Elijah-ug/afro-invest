import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import { Gauge, BarChart3, Activity, TrendingUp, Bell, User, HelpCircle, ShieldCheck } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const { data } = useLoggedinUserQuery();
  const user = data?.data?.user;

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <Gauge className='h-4 w-4' /> },
    { id: 'portfolio', label: 'Portfolio', icon: <BarChart3 className='h-4 w-4' /> },
    { id: 'transactions', label: 'Transactions', icon: <Activity className='h-4 w-4' /> },
    { id: 'investments', label: 'Investments', icon: <TrendingUp className='h-4 w-4' /> },
    { id: 'analytics', label: 'Analytics', icon: <ShieldCheck className='h-4 w-4' /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className='h-4 w-4' /> },
    { id: 'profile', label: 'Profile', icon: <User className='h-4 w-4' /> },
    { id: 'support', label: 'Support', icon: <HelpCircle className='h-4 w-4' /> },
  ];

  return (
    <div className='pt-10 lg:pt-4 h-full min-h-[calc(100vh-4rem)] bg-slate-950 border border-slate-800 rounded-3xl lg:not-[]:p-4 flex flex-col shadow-xl shadow-slate-950/20'>
      {/* flex-1 space-y-2 */}
      <nav className='grid gap-4 py-3 px-2'>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className='w-[50%] justify-start gap-3 rounded-2xl text-left '
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className='pt-6 border-t border-slate-800 px-2 '>
        {/* bg-slate-900/80 */}
        <div className='flex items-center gap-3 rounded-3xl bg-slate-900/80 hover:bg-white/4 p-4 '>
          <Avatar className='h-14 w-14 border border-slate-700'>
            <AvatarImage src='' />
            <AvatarFallback className='text-lg'>
              {user?.firstname?.[0]}
              {user?.lastname?.[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='text-base font-semibold text-white'>
              {user?.firstname} {user?.lastname}
            </p>
            <p className='text-sm text-slate-400'>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
