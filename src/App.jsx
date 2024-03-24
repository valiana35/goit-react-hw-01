import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import './App.css'

import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
