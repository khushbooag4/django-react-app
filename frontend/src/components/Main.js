import React from "react";
import { Balance } from "./Balance";
import { Expenses } from "./Expense";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransactions";
import { GlobalProvider } from "../context/GlobalState";

function Main() {
  return (
    <GlobalProvider>
      <div className="container-ap">
        <h2 className="header text-center">Money Tracker</h2>
        <Balance />
        <Expenses />
        <div class="row">
          <div class="col">
            <TransactionList />
          </div>
          <div class="col">
            {" "}
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Main;
