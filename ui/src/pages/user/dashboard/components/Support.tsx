import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How do I fund my account?',
    answer: 'Use the Deposit tab to add funds from your wallet or bank transfer.',
  },
  {
    question: 'Can I change my investment plan?',
    answer: 'Yes, review your active investments and select a new plan in Markets.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We use industry-standard encryption and account security measures like 2FA.',
  },
];

export const Support = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold text-white'>Support Center</h1>
        <p className='text-slate-400'>Get help fast with FAQs, live support, and guidance for your account.</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {faqs.map((faq) => (
          <Card key={faq.question} className='bg-slate-900/80 border-slate-800'>
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-slate-300'>{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='bg-slate-900/80 border-slate-800'>
        <CardHeader>
          <CardTitle>Need live help?</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-slate-300'>Contact support for account, withdrawal, or investment questions.</p>
          <Button className='bg-violet-500 text-white hover:bg-violet-400'>Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  );
};
