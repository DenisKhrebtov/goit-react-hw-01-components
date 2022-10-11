import PropTypes from 'prop-types';
import {
  TableHead,
  TableBody,
  TableHeadline,
  TableData,
  TransactionTable,
} from './TransactionHistory.styles';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeadline>Type</TableHeadline>
          <TableHeadline>Amount</TableHeadline>
          <TableHeadline>Currency</TableHeadline>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </tr>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
