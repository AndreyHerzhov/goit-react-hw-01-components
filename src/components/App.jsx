import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import    FriendList from "./FriendList/FriendList"
import { TransactionHistory } from "./Transactions/Transactions";
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"
import user from "./data/user.json"
import statisic from "./data/data.json"

 

export const App = ( ) => {
  return (
    <div>

       <Profile 
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
       />

       <FriendList friends={friends}/>
     
       <Statistics title="Upload stats" stats={statisic} />     
       
       <TransactionHistory items={transactions} />;

    </div>
  );
};


