import { FriendList } from '../FriendList/FriendList.styles';
import { FriendListItem } from './FriendListItem';

export const Friend = ({ friends }) => {
  return (
    <FriendList>
      <FriendListItem friends={friends} />
    </FriendList>
  );
};
