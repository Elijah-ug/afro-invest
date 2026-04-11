import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onDateChange: (date?: Date) => void;
  placeholder?: string;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ value, onDateChange, className, placeholder, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const selectedDate = value ? new Date(value) : undefined;
    const displayValue = selectedDate ? format(selectedDate, 'PPP') : '';

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <div className='relative'>
            <CalendarIcon className='pointer-events-none absolute left-3 top-4 h-5 w-5 text-slate-500' />
            <Input
              ref={ref}
              readOnly
              value={displayValue}
              placeholder={placeholder}
              className={cn(
                'pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12',
                className,
              )}
              {...props}
            />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            side='bottom'
            align='start'
            sideOffset={8}
            className='z-50 overflow-hidden rounded-lg border border-slate-700 bg-slate-950/95 p-2 shadow-2xl'
          >
            <Calendar
              mode='single'
              selected={selectedDate}
              onSelect={(date) => {
                onDateChange(date ?? undefined);
                setOpen(false);
              }}
              fromYear={1900}
              toYear={new Date().getFullYear()}
              className='w-[280px]'
            />
            <div className='mt-3 flex justify-end'>
              <Button type='button' variant='outline' size='sm' onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  },
);
DatePicker.displayName = 'DatePicker';
