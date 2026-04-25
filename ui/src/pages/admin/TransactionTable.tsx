
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
import { useAllInvestmentsQuery } from '@/store/features/investmentQuery';


export const TransactionTable = () => {

  const { data } = useAllInvestmentsQuery();
  console.log('allInvestments', data?.data.data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.data.data.map((tx: any) => (
          <TableRow key={tx.id}>
            <TableCell className='font-medium'>{tx.user.email}</TableCell>
            <TableCell>{tx.amount}</TableCell>

            {/* Type */}
            <TableCell>
              {/* <Badge variant={tx.type === 'deposit' ? 'secondary' : 'outline'}>{tx.type}</Badge> */}
            </TableCell>

            {/* Status */}
            {/* <TableCell>
              <Badge
                variant={tx.status === 'approved' ? 'default' : tx.status === 'pending' ? 'outline' : 'destructive'}
              >
                {tx.status}
              </Badge>
            </TableCell> */}

            {/* Actions */}
            {/* <TableCell className='text-right space-x-2'>
              {tx.status === 'pending' && (
                <>
                  <Button size='sm' onClick={() => approveTx(tx.id)}>
                    Approve
                  </Button>

                  <Button size='sm' variant='destructive' onClick={() => rejectTx(tx.id)}>
                    Reject
                  </Button>
                </>
              )}
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
