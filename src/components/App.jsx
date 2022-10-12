import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { Friend } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

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
