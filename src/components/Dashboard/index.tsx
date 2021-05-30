import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Main } from "./styled";

export function Dashboard() {
  return (
    <Main>
      <Summary />
      <TransactionTable />
    </Main>
  );
}
