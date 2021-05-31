import { useContext } from "react";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionContext } from "../../context/transactions";
import { Container } from "./styled";

function real(amount: string | number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(amount));
}

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transactions) => {
      if (transactions.type === "deposit") {
        acc.deposit += transactions.amount;
        acc.total += transactions.amount;
      } else {
        acc.withdraw += transactions.amount;
        acc.total -= transactions.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>{real(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>- {real(summary.withdraw)}</strong>
      </div>
      <div className="Highlight">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{real(summary.total)}</strong>
      </div>
    </Container>
  );
}
