import { FriendListCard } from "./FriendList.styled"
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types"
 

export const FriendList = ({ friends}) => {
  return (
    <FriendListCard>
    {friends.map(({id, isOnline, avatar, name}) => (
        <FriendListItem  
                  key={id}
                  id={id} 
                  isOnline={isOnline} 
                  avatar={avatar}
                  name={name}/>
    ))}
    </FriendListCard>
  );
};



 
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


 
 
 
 