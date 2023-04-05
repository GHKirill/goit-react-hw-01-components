import user from '../user.json';
import friends from '../friends.json';
import statisticList from '../data.json';
import transactions from '../transactions.json';
import { Profile } from 'components/Profile/Profile';
import { StatisticsSection } from 'components/Statistics/StatisticsSection/StatisticsSection';
import { FriendsList } from 'components/Friends/FriendsList/FriendsList';
import { TransactionTable } from 'components/Transactions/TransactionsTable';
// =======
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsSection statisticList={statisticList} text="Upload stat" />
      <FriendsList friends={friends} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};
