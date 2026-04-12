import { useState } from 'react';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from './components/Sidebar';
import { Overview } from './components/Overview';
import { Profile } from './components/Profile';
import { Investments } from './components/Investments';
import { Transactions } from './components/Transactions';
import { Charts } from './components/Charts';

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
      case 'profile':
        return <Profile user={user} />;
      case 'investments':
        return <Investments user={user} />;
      case 'transactions':
        return <Transactions />;
      case 'charts':
        return <Charts />;
      default:
        return <Overview user={user} />;
    }
  };

  return (
    <div className='h-screen flex'>
      {/* Fixed Sidebar */}
      <div className='w-80 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className='flex-1'>
        <ScrollArea className='h-full'>
          <div className='p-6'>{renderContent()}</div>
        </ScrollArea>
      </div>
    </div>
  );
};
