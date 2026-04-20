import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestmentPlansQuery } from '@/store/features/investmentPlansQuery';
import { useState } from 'react';
import { useReceiverAddrQuery } from '@/store/features/receiverQuery';
import { useWriteContract } from 'wagmi';
import { toast } from 'react-toastify';
import { afroBlocksAbi } from '@/abi/baseSepolia';
import { parseUnits } from 'viem';
import { afroBlocksAddress } from '@/abi/ercTokenAddress';
import { useDepositMutation, useInvestmentsQuery } from '@/store/features/investmentQuery';

type TransactionFormProps = {
  type: 'deposit' | 'withdraw';
  //   amount: string;
  //   setAmount: (value: string) => void;
  //   onSubmit: () => void;
  //   isPending: boolean | any;
};
export const TransactionForm = ({ type }: TransactionFormProps) => {
  const isDeposit = type === 'deposit';
  const [userPlan, setUserPlan] = useState<any>({
    planId: '',
    amount: '',
    endDate: '',
  });
  const { writeContract, isPending } = useWriteContract();

  const { data: plans } = useInvestmentPlansQuery();
  const { data } = useReceiverAddrQuery();
  const [deposit, { error }] = useDepositMutation();
  const receiver = data?.data.receiver.address;
  const { data: investment } = useInvestmentsQuery();
  console.log('investment==>', investment);

  console.log('deposit error==>', error);

  const handlePurchasePlan = async () => {
    if (!data) {
      return toast.error('Receiver address not found');
    }

    const res = await deposit({
      planId: parseInt(userPlan.planId),
      amount: parseInt(userPlan.amount),
      endDate: parseInt(userPlan.endDate),
    });
   writeContract({
      address: afroBlocksAddress,
      abi: afroBlocksAbi,
      functionName: 'transfer',
      args: [receiver, parseUnits(userPlan.amount, 18)],
    });
    console.log('Deposit:', userPlan);

    console.log('res:', res);
    return res;
    // setUserPlan({});
  };

  return (
    <Card className='shadow-md border-muted/40'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          {isDeposit ? 'Deposit Funds' : 'Withdraw Funds'}
          <span className='text-sm text-muted-foreground'>{isDeposit ? 'Instant' : '1–3 days'}</span>
        </CardTitle>

        <CardDescription>
          {isDeposit ? 'Add money to your account instantly.' : 'Withdraw funds securely to your account.'}
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-5'>
        {/* amount */}
        <div className='space-y-2'>
          <Label htmlFor={type}>Amount (UGX)</Label>
          <Input
            id={type}
            type='number'
            placeholder='0.00'
            value={userPlan.amount}
            onChange={(e) => setUserPlan({ ...userPlan, amount: e.target.value })}
            className='text-xl h-12'
          />
        </div>
        {/*  plan id  */}
        <div className='space-y-2 '>
          <Label htmlFor={type}>Amount (UGX)</Label>
          <select
            name='planId'
            id='planId'
            value={userPlan.planId}
            onChange={(e) => setUserPlan({ ...userPlan, planId: e.target.value })}
            className='text-lg h-12 border w-full rounded-lg bg-stone-700'
          >
            <option value='' disabled>
              Select plan
            </option>
            {plans?.data.plans.map((plan: any) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        {/*  plan id  */}
        <div className='space-y-2 '>
          <Label htmlFor={type}>Amount (UGX)</Label>
          <div className='flex gap-3 items-center'>
            {plans?.data.plans.map((plan: any) => (
              <input
                key={plan.id}
                type='button'
                value={plan.duration}
                onClick={() => setUserPlan({ ...userPlan, endDate: plan.duration })}
                className='px-4 py-1 bg-gray-600 rounded cursor-pointer'
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handlePurchasePlan}
          disabled={!userPlan?.amount || Number(userPlan?.amount) <= 0}
          className='w-full text-base font-semibold'
          variant={isDeposit ? 'default' : 'destructive'}
        >
          {isPending ? <Spinner /> : isDeposit ? '💰 Deposit Now' : '💸 Withdraw Now'}
        </Button>
      </CardContent>
    </Card>
  );
};
