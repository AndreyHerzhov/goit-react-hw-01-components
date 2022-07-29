import { FriendListCard,
         FriendListItem, 
         FriendStatus, 
         FriendAvatar,
         FriendName } from "./FriendList.styled"
import PropTypes from "prop-types"
import React, { Component } from "react";


class FriendList extends Component {
  render() {
    const { friends } = this.props
    return (
      <FriendListCard>
        {friends.map(({id, isOnline, avatar, username, name}) => (
            <FriendListItem key={id}>
                <FriendStatus isOnline={isOnline}></FriendStatus>
                <FriendAvatar src={avatar} alt={username}></FriendAvatar>
                <FriendName>{name}</FriendName>
            </FriendListItem>
        ))}
        </FriendListCard>
    )
  }
}

export default FriendList

// export const FriendList = ({friends}) => {
//     return (
//       <FriendListCard>
//         {friends.map(({id, isOnline, avatar, username, name}) => (
//             <FriendListItem key={id}>
//                 <UserStatus isOnline={isOnline}></UserStatus>
//                 <UserAvatar src={avatar} alt={username}></UserAvatar>
//                 <UserName>{name}</UserName>
//             </FriendListItem>
//         ))}
//         </FriendListCard>
//     );
//   };
 
 
FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

 