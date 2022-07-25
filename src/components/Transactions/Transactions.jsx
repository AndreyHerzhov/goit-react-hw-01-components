import { TransactionsTable, 
        TransactionsHead, 
        TransactionsRow, 
        TransactionsHeadName,
        TransactionsBody,
        TransactionBodyRow,
        TransactionsBodyCol } from "./Transactions.styled";

import trans from "../../transactions.json"
import PropTypes from "prop-types"

console.log(trans)
 
function TransactionsHeadInfo({name }) {
    return (
        <TransactionsHeadName>{name}</TransactionsHeadName>
  )
}

const TransactionsHistory = ({ props }) => {
    return (
 
        props.map((stat, index) => (
        <TransactionBodyRow key={stat.id} index={index}>
            <TransactionsBodyCol>{stat.type} </TransactionsBodyCol>
            <TransactionsBodyCol> {stat.amount} </TransactionsBodyCol>
            <TransactionsBodyCol> {stat.currency} </TransactionsBodyCol>
        </TransactionBodyRow>
        ))
       
    );
  };

export const Transactions = () => {
    return (
         <TransactionsTable  border="0" cellspacing="0" cellpadding="0">
            <TransactionsHead>
                <TransactionsRow>
                    <TransactionsHeadInfo name="Type"/> 
                    <TransactionsHeadInfo name="Amount"/> 
                    <TransactionsHeadInfo name="Currency"/> 
                </TransactionsRow>
            </TransactionsHead>


            <TransactionsBody> 
                <TransactionsHistory props={trans}/>
            </TransactionsBody>
          

         </TransactionsTable>
    )
}

Event.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
          
}