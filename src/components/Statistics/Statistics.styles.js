import styled from 'styled-components';

export const StatisticsSection = styled.section`
  padding-top: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid black;
`;
export const StatisticsList = styled.ul`
  display: flex;
  box-sizing: border-box;
`;
export const StatisticsItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatisticsTitle = styled.h2`
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const StatisticsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const StatisticsPercentage = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
