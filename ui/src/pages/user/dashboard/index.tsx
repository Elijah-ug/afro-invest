import { useState } from 'react';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Overview } from './components/Overview';
import { Profile } from './components/Profile';
import { Investments } from './components/Investments';
import { Transactions } from './components/Transactions';
import { Charts } from './components/Charts';
import { Notifications } from './components/Notifications';
import { Support } from './components/Support';
import { Portfolio } from './components/Portfolio';

export const Dashboard = () => {
  const { data, isLoading } = useLoggedinUserQuery();
  const user = data?.data?.user;

  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }

  if (!user) {
    return <div className='flex items-center justify-center h-screen'>User not found</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview user={user} />;
      case 'portfolio':
        return <Portfolio user={user} />;
      case 'transactions':
        return <Transactions />;
      case 'investments':
        return <Investments user={user} />;
      case 'analytics':
        return <Charts />;
      case 'notifications':
        return <Notifications />;
      case 'profile':
        return <Profile user={user} />;
      case 'support':
        return <Support />;
      default:
        return <Overview user={user} />;
    }
  };

  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row'>
      <aside className='hidden lg:block w-80 p-4'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      <main className='flex-1 overflow-hidden'>
        <div className='flex items-center justify-between gap-3 px-4 pb-3 lg:hidden'>
          <Sheet >
            <SheetTrigger asChild>
              <Button variant='outline' className='h-10 rounded-2xl border-slate-800 text-slate-200'>
                <Menu className='h-3 w-3' />
                <span className='ml-2'>Dashboard menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='h-full w-[85vw] max-w-sm p-0'>
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </SheetContent>
          </Sheet>
          <div>
            <p className='text-sm font-semibold text-white'>Dashboard</p>
            <p className='text-xs text-slate-400'>Tap to open navigation</p>
          </div>
        </div>

        <ScrollArea className='h-[calc(100vh-4rem)]'>
          <div className='p-6'>{renderContent()}</div>
        </ScrollArea>
      </main>
    </div>
  );
};
