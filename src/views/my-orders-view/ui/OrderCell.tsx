import { TableCell, TableCellProps } from '@mui/material';

type OrderCellProps = TableCellProps

function OrderCell({ children, ...props }: OrderCellProps) {
  return (
    <TableCell
      sx={(theme) => ({
        color: theme.palette.text.secondary,
        borderBottom: 'none',
      })}
      {...props}
    >
      {children}
    </TableCell>
  );
}

export default OrderCell;
