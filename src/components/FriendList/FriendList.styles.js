import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const FriendItem = styled.li`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.1);
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
    border-color: green;
  }
`;
export const FriendImg = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  background-size: contain;
`;
export const FriendName = styled.p`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  align-items: center;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
