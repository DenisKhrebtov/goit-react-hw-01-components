import styled from 'styled-components';

export const TableHead = styled.thead`
  background-color: black;
  border-radius: 5px;
`;
export const TableBody = styled.tbody``;

export const TableHeadline = styled.th`
  color: white;
`;
export const TableData = styled.td`
  background-color: white;
  border: 1px solid black;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  &:hover,
  &:focus {
    transform: scale(1.5);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    color: green;
  }
`;
export const TransactionTable = styled.table`
  width: 200px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 5px;
`;
