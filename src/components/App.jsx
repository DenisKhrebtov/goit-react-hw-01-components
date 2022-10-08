import Profile from './Profile';
import user from 'path/to/user.json';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      React homework template
    </div>
  );
};

<Profile 
  username={user.username}
  tag={user.tag}
  location={user.loction}
  avatar={user.avatar}

