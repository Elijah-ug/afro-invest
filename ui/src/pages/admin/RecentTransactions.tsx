import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export const RecentTransactions = () => {
  const data = [
    { id: 1, user: 'John Doe', amount: '$500', type: 'Deposit' },
    { id: 2, user: 'Jane Smith', amount: '$200', type: 'Withdrawal' }
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{tx.user}</TableCell>
            <TableCell>{tx.amount}</TableCell>
            <TableCell>{tx.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};