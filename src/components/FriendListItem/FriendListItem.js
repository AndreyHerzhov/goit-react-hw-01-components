// import React, { Component } from "react"
import { ListItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled'
import PropTypes from "prop-types"

export const FriendListItem = ({ avatar, name ,isOnline }) => {
    return (
        <ListItem>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt={name}></FriendAvatar>
            <FriendName>{name}</FriendName>
        </ListItem>
    );
  };

        
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


 