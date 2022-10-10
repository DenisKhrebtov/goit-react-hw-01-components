import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

// import FriendList from './FriendList';
// import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
    </>
  );
};
