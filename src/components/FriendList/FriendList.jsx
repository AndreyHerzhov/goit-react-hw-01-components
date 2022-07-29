import { FriendListCard } from "./FriendList.styled"
import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types"
import React, { Component } from "react";


class FriendList extends Component {
  render() {
    const { friends } = this.props
    return (
      <FriendListCard>
        {friends.map(({id, isOnline, avatar, name}) => (
            <FriendListItem  
                      key={id}
                      id={id} 
                      isOnline={isOnline} 
                      avatar={avatar}
                      username={name}
                      name={name}/>
        ))}
        </FriendListCard>
    )
  }
}

export default FriendList

 
FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};



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
 
 