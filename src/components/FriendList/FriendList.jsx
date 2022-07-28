import { UserCardsList,
         UserCardItem, 
         UserStatus, 
         UserAvatar,
         UserName } from "./FriendList.styled"
import PropTypes from "prop-types"

export const FriendList = ({friends}) => {
    return (
      <UserCardsList>
        {friends.map(({id, isOnline, avatar, username, name}) => (
            <UserCardItem key={id}>
                <UserStatus isOnline={isOnline}></UserStatus>
                <UserAvatar src={avatar} alt={username}></UserAvatar>
                <UserName>{name}</UserName>
            </UserCardItem>
        ))}
        </UserCardsList>
    );
  };
 
 

  FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
          
}