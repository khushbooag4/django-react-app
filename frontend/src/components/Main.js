import React from "react";
import { Balance } from "./Balance";
import { Expenses } from "./Expense";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransactions";
import { GlobalProvider } from "../context/GlobalState";

function Main() {
  return (
    <GlobalProvider>
      <h2 className="header center">Budget Tracker</h2>
      <div className="container-ap">
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default Main;
