import { 
        ProfileCard, 
        ProfileDescription, 
        ProfileAvatar,
        ProfileUsername,
        ProfileTag,
        ProfileLocation,
        ProfileList,
        ProfileListItem,
        ProfileStats
         } from "./Profile.styled";
import user from "../../user.json"
import PropTypes from "prop-types"
  
   
          
  

export const Profile = () => {
    return (
        <ProfileCard>
            <ProfileDescription>
                <ProfileAvatar src={user.avatar} alt={user.username}></ProfileAvatar>
                <ProfileUsername>{user.username}</ProfileUsername>
                <ProfileTag>{user.tag}</ProfileTag>
                <ProfileLocation>{user.location}</ProfileLocation>
            </ProfileDescription>

            <ProfileList>
                <ProfileListItem>
                    <ProfileStats>Followers</ProfileStats>
                    <ProfileStats>{user.stats.followers}</ProfileStats>
                </ProfileListItem>
                <ProfileListItem>
                    <ProfileStats>Views</ProfileStats>
                    <ProfileStats>{user.stats.views}</ProfileStats>
                </ProfileListItem>
                <ProfileListItem>
                    <ProfileStats>Likes</ProfileStats>
                    <ProfileStats>{user.stats.likes}</ProfileStats>
                </ProfileListItem>
            </ProfileList>

        </ProfileCard>
        
    )
}

Event.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired, 
          
}