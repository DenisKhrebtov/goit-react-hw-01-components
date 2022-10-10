import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
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
`;

export const StatisticsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
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
