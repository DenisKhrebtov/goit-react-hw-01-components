import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsSection = styled.section`
  padding-top: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid black;
  &:hover,
  &:focus {
    transform: scale(1.5);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const StatisticsList = styled.ul`
  display: flex;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
export const StatisticsItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: ${getRandomHexColor};
  align-items: center;
  border: 1px solid black;
`;

export const StatisticsTitle = styled.h2`
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const StatisticsLabel = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  filter: drop-shadow(2px 2px 2px black);
`;
export const StatisticsPercentage = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  filter: drop-shadow(2px 2px 2px black);
`;
