import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendImg,
  FriendName,
  FriendStatus,
} from './FriendList.styles';

export const OneFriend = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendItem key={id}>
        <FriendStatus status={isOnline}></FriendStatus>
        <FriendImg src={avatar} alt={name} width="48" />
        <FriendName>{name}</FriendName>
      </FriendItem>
    );
  });
};

OneFriend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
