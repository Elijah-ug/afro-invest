import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLoggedinUserQuery } from '@/store/features/userQuery';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const { data } = useLoggedinUserQuery();
  const user = data?.data?.user;

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'investments', label: 'Investments', icon: '💼' },
    { id: 'transactions', label: 'Transactions', icon: '💳' },
    { id: 'charts', label: 'Charts', icon: '📈' },
  ];

  return (
    <div className='h-full bg-gray-50 dark:bg-gray-900 p-4 flex flex-col'>
      <div className='flex items-center space-x-3 mb-6'>
        <Avatar>
          <AvatarImage src='' />
          <AvatarFallback>
            {user?.firstname?.[0]}
            {user?.lastname?.[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className='font-medium'>
            {user?.firstname} {user?.lastname}
          </p>
          <p className='text-sm text-gray-500'>{user?.email}</p>
        </div>
      </div>
      <nav className='flex-1 space-y-2'>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className='w-full justify-start'
            onClick={() => setActiveTab(item.id)}
          >
            <span className='mr-2'>{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};
