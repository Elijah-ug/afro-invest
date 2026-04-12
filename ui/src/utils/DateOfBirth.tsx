'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldLabel } from '@/components/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DateOfBirthProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  label?: string;
}

export function DateOfBirth({ value, onChange, label = 'Date of birth' }: DateOfBirthProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleSelect = (selectedDate?: Date) => {
    setDate(selectedDate);
    onChange?.(selectedDate);
    setOpen(false);
  };

  return (
    <Field className='w-full'>
      <FieldLabel htmlFor='dob'>{label}</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' id='dob' className='justify-start font-normal w-full'>
            {date ? date.toLocaleDateString() : 'Select your birth date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0 rounded-3xl' align='start'>
          <Calendar
            mode='single'
            selected={date}
            defaultMonth={date}
            captionLayout='dropdown'
            onSelect={handleSelect}
            disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
            fromYear={1900}
            toYear={new Date().getFullYear()}
            initialFocus
            className='rounded-3xl p-4'
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
