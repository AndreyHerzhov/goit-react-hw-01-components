import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList"
 

export const App = () => {
  return (
    <div>
       <Profile></Profile>
       <Statistic></Statistic>       
       <FriendList></FriendList>
       
    </div>
  );
};
