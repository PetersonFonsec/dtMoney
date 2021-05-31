import React, { useState } from "react";
import { GlobalStyle } from "./style/global";
import { HeaderComponent } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { NewTransaction } from "./components/NewTransaction";
import { TransactionsProvider } from "./context/transactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionIsOpen, setNewTransactionIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <NewTransaction
        isOpen={isNewTransactionIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <HeaderComponent
        onOpenNewTransactionOpen={handleOpenNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}
