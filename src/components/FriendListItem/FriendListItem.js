import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

class FriendListItem extends Component{
    render() {
        const { avatar, name ,isOnline} = this.props
        return (
        <ListItem>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt={name}></FriendAvatar>
            <FriendName>{name}</FriendName>
        </ListItem>
        )
    }
}

export default FriendListItem;
        
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
 
}

const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 50px;
margin:  auto;
margin-top: 50px;
background-color: azure;
width: 320px;
height: 100px;
`

const FriendStatus = styled.button`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${p => p.isOnline ? 'green' : 'red'};
`

const FriendAvatar = styled.img`
    border-radius: 20%;
    width: 50px;
    height: 50px;
    background-color: brown;
`

const FriendName = styled.p`
   font-size: 16px;
`