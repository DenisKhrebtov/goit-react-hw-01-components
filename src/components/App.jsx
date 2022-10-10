import user from '../user.json';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';
// import FriendList from './FriendList';
// import TransactionHistory from './TransactionHistory';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
    </>
  );
};
