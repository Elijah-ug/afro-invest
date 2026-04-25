import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
interface UserType {
  user: any;
}
export const UserDialogue = ({ user }: UserType) => {
  const handleLogOut = () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    localStorage.removeItem('token');
    return (window.location.href = '/login');
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className='flex items-center gap-3 rounded-3xl bg-slate-900/80 hover:bg-white/10 p-3 transition-colors'>
            <Avatar className='h-10 w-10 border border-slate-700'>
              <AvatarImage src='' />
              <AvatarFallback className='text-lg font-medium'>
                {user?.firstname?.[0]}
                {user?.lastname?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className='overflow-hidden'>
              <p className='font-semibold text-white truncate'>
                {user?.firstname} {user?.lastname}
              </p>
              <p className='text-sm text-slate-400 truncate'>{user?.email}</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='sm:max-w-sm'>
          <DialogHeader className='flex items-center justify-center '>
            <DialogTitle className='flex items-center justify-center p-2 rounded-full bg-white/10'>
              <User />
            </DialogTitle>
          </DialogHeader>
          {user && (
            <div className=''>
              <div className='flex items-center justify-center gap-2 text-xl'>
                <span>{user.firstname}</span>
                <span>{user.lastname}</span>
              </div>

              <div className='text-center'>
                <span>{user.email}</span>
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' onClick={handleLogOut}>
                Logout
              </Button>
            </DialogClose>
            <Button variant='outline'>Edit Profile</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
