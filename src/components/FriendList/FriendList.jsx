import friends from "../../friends.json"
import { UserCard, UserStatus, UserAvatar,UserName } from "./FriendList.styled"

const UserWrapper = ({ data }) => {
    return (
      
        data.map(stat => (
            <UserCard key={stat.id}>
                <UserStatus isOnline={stat.isOnline}></UserStatus>
                <UserAvatar src={stat.avatar} alt={stat.username}></UserAvatar>
                <UserName>{stat.name}</UserName>
            </UserCard>
        ))
      
    );
  };
 

export const FriendList = () => {
    return (
        <UserWrapper data={friends}/>
    )
}