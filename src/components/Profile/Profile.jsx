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