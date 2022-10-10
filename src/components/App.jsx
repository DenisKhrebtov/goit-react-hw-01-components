import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

// import FriendList from './FriendList';
// import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div className="main-container">
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
