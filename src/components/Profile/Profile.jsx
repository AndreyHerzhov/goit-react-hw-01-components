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
import PropTypes from "prop-types"
 
          
 

export const Profile = ({avatar, 
                         username, 
                         tag, 
                         location,
                          stats:{followers,views,likes }}) => {
    return (
        <ProfileCard>
            <ProfileDescription>
                <ProfileAvatar src={avatar} alt={username}></ProfileAvatar>
                <ProfileUsername>{username}</ProfileUsername>
                <ProfileTag>{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileDescription>

            <ProfileList>
                <ProfileListItem>
                    <ProfileStats>Followers</ProfileStats>
                    <ProfileStats>{followers}</ProfileStats>
                </ProfileListItem>
                <ProfileListItem>
                    <ProfileStats>Views</ProfileStats>
                    <ProfileStats>{views}</ProfileStats>
                </ProfileListItem>
                <ProfileListItem>
                    <ProfileStats>Likes</ProfileStats>
                    <ProfileStats>{likes}</ProfileStats>
                </ProfileListItem>
            </ProfileList>

        </ProfileCard>
        
    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
     
}