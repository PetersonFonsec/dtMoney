import { useContext } from "react";
import { TransactionContext } from "../../context/transactions";
import { Container } from "./styles";

function date(date: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

function real(amount: string | number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(amount));
}

export function TransactionTable() {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{real(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{date(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
