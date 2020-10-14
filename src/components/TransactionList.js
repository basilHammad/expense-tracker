import React from "react";
import {List} from './List'

export const TransactionList = ({ userInput , delet }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <List deletItem={delet} transactions={userInput} />
      </ul>
    </>
  );
};
