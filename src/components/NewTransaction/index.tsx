import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";

import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { TransactionContext } from "../../context/transactions";

import { Form, Row, RadioBox } from "./styles";
interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const { createTransaction } = useContext(TransactionContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function resetForm() {
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    onRequestClose();
    resetForm();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Form onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={close} alt="Fechar Modal" />
        </button>

        <h2>Cadastro Transação</h2>

        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <input
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          type="tel"
          placeholder="Valor"
        />

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

        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
