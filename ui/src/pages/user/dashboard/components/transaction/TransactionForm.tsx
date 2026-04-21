import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestmentPlansQuery } from '@/store/features/investmentPlansQuery';
import { useState } from 'react';
import { useReceiverAddrQuery } from '@/store/features/receiverQuery';
import { usePublicClient, useWriteContract } from 'wagmi';
import { toast } from 'react-toastify';
import { parseUnits } from 'viem';
import { afroBlocksAddress } from '@/abi/ercTokenAddress';
import { useDepositMutation } from '@/store/features/investmentQuery';
import { waitForTransactionReceipt } from 'viem/actions';
import { standardERC20Abi } from '@/abi/baseSepolia';

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
  const { writeContractAsync, isPending } = useWriteContract();
  const publicClient = usePublicClient();

  const { data: plans } = useInvestmentPlansQuery();
  const { data } = useReceiverAddrQuery();
  const [deposit, { error }] = useDepositMutation();
  const receiver = data?.data.receiver.address;

  console.log('deposit error==>', error);

  const handlePurchasePlan = async () => {
    if (!data) {
      return toast.error('Receiver address not found');
    }

    try {
      const parsedAmount = parseUnits(userPlan.amount.toString(), 18);
      console.log('parsedAmount=>', parsedAmount);
      const hash = await writeContractAsync({
        address: afroBlocksAddress,
        abi: standardERC20Abi,
        functionName: 'transfer',
        args: [receiver, parsedAmount],
        // gas: 300000n,
      });
      console.log('Tx Hash:', hash);
      if (!publicClient) {
        throw new Error('Public client not available');
      }
      const receipt = await waitForTransactionReceipt(publicClient, { hash });

      if (receipt.status === 'reverted') {
        toast.error('Transaction failed');
        return;
      }
      console.log('Transfer confirmed:', receipt);

      const res = await deposit({
        planId: parseInt(userPlan.planId),
        amount: parseInt(userPlan.amount),
        endDate: parseInt(userPlan.endDate),
        txHash: hash,
      });
      console.log('Deposit:', userPlan);

      console.log('res:', res);
      return res;
    } catch (error) {
      console.log('Error==>', error);
    }
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
          <Label htmlFor={type}>Plan</Label>
          <div className='flex gap-3 items-center   '>
            {plans?.data.plans.map((plan: any) => (
              <input
                key={plan.id}
                type='button'
                value={plan.duration}
                onClick={() => setUserPlan({ ...userPlan, endDate: plan.duration })}
                className={` px-8 py-2 rounded cursor-pointer transition bg-gray-600 w-full ${userPlan.endDate === plan.duration && 'bg-violet-500 '}`}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handlePurchasePlan}
          disabled={!userPlan?.amount || Number(userPlan?.amount) <= 0}
          className='w-full text-base font-semibold py-6'
          variant={isDeposit ? 'default' : 'destructive'}
        >
          {isPending ? <Spinner /> : isDeposit ? '💰 Deposit Now' : '💸 Withdraw Now'}
        </Button>
      </CardContent>
    </Card>
  );
};
