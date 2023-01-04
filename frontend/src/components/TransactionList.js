import React, { useContext } from "react";
import { Transaction } from "./Transactions";
import { GlobalContext } from "../context/GlobalState";
import "../../static/css/App.css";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h4>History</h4>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
