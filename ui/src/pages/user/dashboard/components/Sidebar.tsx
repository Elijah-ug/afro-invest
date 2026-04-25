import { Button } from '@/components/ui/button';
import { useLoggedinUserQuery } from '@/store/features/userQuery';
import {
  Gauge,
  BarChart3,
  Activity,
  TrendingUp,
  Bell,
  User,
  HelpCircle,
  ShieldCheck,
  GitPullRequest,
} from 'lucide-react';
import { UserDialogue } from './UserDialogue';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdmin: boolean;
  onClose?: () => void; // ← New optional prop for mobile
}

export const Sidebar = ({ activeTab, setActiveTab, isAdmin, onClose }: SidebarProps) => {
  // const [isDialogueOpen, setIsDialogueOpen] = useState<Boolean>();
  const { data } = useLoggedinUserQuery();
  const user = data?.data?.user;

  const menuItems = isAdmin
    ? [
        { id: 'overview', label: 'Overview', icon: <Gauge className='h-4 w-4' /> },
        { id: 'plans', label: 'Plans', icon: <HelpCircle className='h-4 w-4' /> },
        { id: 'users', label: 'Users', icon: <BarChart3 className='h-4 w-4' /> },
        { id: 'analytics', label: 'Analytics', icon: <ShieldCheck className='h-4 w-4' /> },
        { id: 'withdrawrequest', label: 'Withdraw Request', icon: <GitPullRequest className='h-4 w-4' /> },
        { id: 'transactions', label: 'Transactions', icon: <Activity className='h-4 w-4' /> },

        { id: 'notifications', label: 'Notifications', icon: <Bell className='h-4 w-4' /> },
        { id: 'support', label: 'Support Tickets', icon: <TrendingUp className='h-4 w-4' /> },
        { id: 'profile', label: 'Profile', icon: <User className='h-4 w-4' /> },
      ]
    : [
        { id: 'overview', label: 'Overview', icon: <Gauge className='h-4 w-4' /> },
        { id: 'portfolio', label: 'Portfolio', icon: <BarChart3 className='h-4 w-4' /> },
        { id: 'transactions', label: 'Transactions', icon: <Activity className='h-4 w-4' /> },
        { id: 'investments', label: 'Investments', icon: <TrendingUp className='h-4 w-4' /> },
        { id: 'analytics', label: 'Analytics', icon: <ShieldCheck className='h-4 w-4' /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell className='h-4 w-4' /> },
        { id: 'profile', label: 'Profile', icon: <User className='h-4 w-4' /> },
        { id: 'support', label: 'Support', icon: <HelpCircle className='h-4 w-4' /> },
      ];
  const handleTabClick = (id: string) => {
    setActiveTab(id);
    onClose?.(); // Close sheet on mobile after selecting a tab
  };

  return (
    <div className='pt-10 lg:pt-4 h-full min-h-[calc(100vh-4rem)] bg-slate-950 border border-slate-800 rounded-3xl lg:rounded-none flex flex-col shadow-xl shadow-slate-950/20 overflow-y-auto'>
      <nav className='flex-1 px-3 py-6 grid gap-2'>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? 'default' : 'ghost'}
            className='justify-start gap-3 rounded-2xl h-12 text-left'
            onClick={() => handleTabClick(item.id)}
          >
            {item.icon}
            <span className='font-medium'>{item.label}</span>
          </Button>
        ))}
        {/* wallet connect */}
        <div className='mt-auto '>
          <ConnectButton />
        </div>
      </nav>

      {/* User Info */}
      <div className='mt-auto p-4 border-t border-slate-800 cursor-pointer '>
        <UserDialogue user={user} />
      </div>
    </div>
  );
};
