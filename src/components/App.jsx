import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { Friend } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div className="main-container">
      <Profile user={user} />
      <Statistics data={data} title="upload text" />
      <Friend friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
