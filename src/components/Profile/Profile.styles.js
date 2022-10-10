import styled from 'styled-components';

export const Wrap = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  :hover,
  :focus {
    box-shadow: 0 0 21px black;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;

export const Info = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 400px;
`;

export const StatsList = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
  list-style: none;
`;

export const StatsItem = styled.li`
  background-color: grey;
  display: flex;
  flex-direction: column;
  width: calc(100% - 3px);
  border: 1px solid blue;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-size: 15px;
  font-weight: 700;
`;
