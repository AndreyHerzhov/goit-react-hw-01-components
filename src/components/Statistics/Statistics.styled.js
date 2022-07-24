import styled from "styled-components";

export const StatisticCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    height: 160px;
    background-color: white;
    margin: 0 auto;
    margin-top: 40px;

`

export const StatisticTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    font-size: 24px;
    height: 50%;
     
`

export const StatisticList = styled.ul`
width: 320px;
display: flex;
`

export const StatisticListItem = styled.li`
font-family: 'Courier New', Courier, monospace;
font-size: 18px;
color: white; 
display: flex;
flex-direction: column;
width: 80px;
align-items: center;
justify-content: center;
height: 80px;
background: ${props => props.theme.main};
 
`

export const StatisticListOnfo = styled.span`
`

