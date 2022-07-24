import styled from "styled-components";


export const UserCard = styled.div`
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

export const UserStatus = styled.button`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${p => p.isOnline ? 'green' : 'red'};
`

export const UserAvatar = styled.img`
    border-radius: 20%;
    width: 50px;
    height: 50px;
    background-color: brown;
`

export const UserName = styled.p`
   font-size: 16px;
`