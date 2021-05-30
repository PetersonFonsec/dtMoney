import { useState } from "react";
import Modal from "react-modal";
import Logo from "../../assets/favicon.png";
import { Header, Wrapper } from "./style";

interface HeaderProps {
  onOpenNewTransactionOpen: () => void;
}

export function HeaderComponent({ onOpenNewTransactionOpen }: HeaderProps) {
  return (
    <Header>
      <Wrapper>
        <img src={Logo} alt="DT money" />
        <button onClick={onOpenNewTransactionOpen} type="button">
          nova transação
        </button>
      </Wrapper>
    </Header>
  );
}
