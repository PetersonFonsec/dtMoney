import Modal from "react-modal";
import close from "../../assets/close.svg";
import { Form, Row, RadioBox } from "./styles";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Form>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={close} alt="Fechar Modal" />
        </button>

        <h2>Cadastro Transação</h2>

        <input type="text" placeholder="Título" />
        <input type="tel" placeholder="Valor" />

        <Row>
          <RadioBox
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            activeColor="green"
            type="button"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            activeColor="red"
            type="button"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </Row>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
