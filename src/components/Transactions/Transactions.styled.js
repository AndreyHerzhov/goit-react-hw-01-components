import styled from "styled-components";

export const TransactionsTable = styled.table`
    
    width: 600px;
    /* height: 320px; */
   border: 1px solid black;
   box-shadow: 5px 5px 5px lightgrey;
   border-radius: 20px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;

` 

export const TransactionsHead = styled.thead`
 background-color: aqua;
 border-radius: 10px;

`

export const TransactionsRow = styled.tr`
    border: 1px solid black;
`

export const TransactionsHeadName = styled.th`
border: 1px solid black;
`

export const TransactionsBody = styled.tbody`

`

export const TransactionBodyRow = styled.tr`
/* border: 1px solid black; */
background-color: ${p => p.index % 2 === 0 ? 'lightgray' : 'white'};
`

export const TransactionsBodyCol = styled.td`
text-align: center;
padding: 8px;
border: 1px solid black;

`