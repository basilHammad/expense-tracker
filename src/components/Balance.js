import React from "react";

export const Balance = ({ userInput }) => {
  const balance = userInput
    .map((transaction) => transaction.amount)
    .reduce((p, c) => (p += c), 0)
    .toFixed(2);
  return (
    <>
      <h2>Your Balance</h2>
      <h1>${balance}</h1>
    </>
  );
};
