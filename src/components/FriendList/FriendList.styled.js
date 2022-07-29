import styled from "styled-components";

export const FriendListCard = styled.ul`
`


export const FriendListItem = styled.li`
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

export const FriendStatus = styled.button`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${p => p.isOnline ? 'green' : 'red'};
`

export const FriendAvatar = styled.img`
    border-radius: 20%;
    width: 50px;
    height: 50px;
    background-color: brown;
`

export const FriendName = styled.p`
   font-size: 16px;
`