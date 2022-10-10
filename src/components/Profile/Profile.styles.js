import styled from 'styled-components';

export const Wrap = styled.div`
  width: 200px;
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
  width: 100%;
`;

export const StatsItem = styled.li`
  align-items: center;
  background-color: rgb(120, 120, 120);
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  width: calc(100% / 3);
  border: 1px solid blue;
`;

export const Label = styled.span`
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;

export const Quantity = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
