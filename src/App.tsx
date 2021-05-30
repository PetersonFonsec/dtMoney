import React, { useState } from "react";
import { GlobalStyle } from "./style/global";
import { HeaderComponent } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";

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
    <>
      <GlobalStyle />
      <Modal
        isOpen={isNewTransactionIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastro</h2>
      </Modal>
      <HeaderComponent
        onOpenNewTransactionOpen={handleOpenNewTransactionModal}
      />
      <Dashboard />
    </>
  );
}
