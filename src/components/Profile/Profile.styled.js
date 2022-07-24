import styled from "styled-components";




export const ProfileCard = styled.div`
    height: 350px;
    width: 320px;
    background-color: lightgray;
    margin: 0 auto;
    margin-top: 50px;
`

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    height: 230px;
    width: 320px;
    background-color: white;
    margin: 0 auto;
    margin-top: 50px;
`

export const ProfileAvatar = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: brown;
    

`

export const ProfileUsername  = styled.p`
    margin-top: 10px;
    font-size: 24px;
    color: black;
    display: block;
`

export const ProfileTag = styled.p`
    margin-top: 10px;
    font-size: 18px;
    color: grey;
     
`

export const ProfileLocation = styled.p`
    margin-top: 10px;
    font-size: 18px;
    color: grey;
`
export const ProfileList = styled.ul`
height: 90px;
display: flex;
/* justify-content: space-around; */
align-items: center;

`
export const ProfileListItem = styled.li`
 width: 110px;
 height: 90px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 border: 1px solid grey;
`

export const ProfileStats = styled.span`
    display: flex;
`