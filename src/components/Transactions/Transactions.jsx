import { TransactionsTable, 
        TransactionsHead, 
        TransactionsRow, 
        TransactionsHeadName,
        TransactionsBody,
        TransactionBodyRow,
        TransactionsBodyCol } from "./Transactions.styled";
import PropTypes from "prop-types"
 
 

export const TransactionHistory  = ({ items }) => {
    return (
        <TransactionsTable  border="0" cellspacing="0" cellpadding="0">
        <TransactionsHead>
            <TransactionsRow>
                 <TransactionsHeadName>Type</TransactionsHeadName> 
                 <TransactionsHeadName>Amount</TransactionsHeadName>
                 <TransactionsHeadName>Currency</TransactionsHeadName> 
            </TransactionsRow>
        </TransactionsHead>


        <TransactionsBody> 
            {items.map(({id, type, amount, currency}, index) => (
            <TransactionBodyRow key={id} index={index}>
                <TransactionsBodyCol>{type} </TransactionsBodyCol>
                <TransactionsBodyCol> {amount} </TransactionsBodyCol>
                <TransactionsBodyCol> {currency} </TransactionsBodyCol>
            </TransactionBodyRow>
            ))}
        </TransactionsBody>
      

     </TransactionsTable>
        
       
    );
  };

 
TransactionHistory.propTypes = {
    
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}