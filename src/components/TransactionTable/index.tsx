import { useContext } from "react";
import { TransactionContext } from "../../context/transactions";
import { TransactionEmptyItem } from "../TransactionEmptyItem";
import { TransactionItem } from "../TransactionItems";
import { Container } from "./styles";

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
          {transactions.length ? (
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} {...transaction} />
            ))
          ) : (
            <TransactionEmptyItem />
          )}
        </tbody>
      </table>
    </Container>
  );
}
