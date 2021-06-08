import { Item } from "./styles";

interface TransactionItemProps {
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionItem({
  title,
  type,
  amount,
  category,
  createdAt,
}: TransactionItemProps) {
  function date(date: Date) {
    return new Intl.DateTimeFormat("pt-BR").format(date);
  }

  function real(amount: string | number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(amount));
  }

  return (
    <Item>
      <td>{title}</td>
      <td className={type}>{real(amount)}</td>
      <td>{category}</td>
      <td>{date(new Date(createdAt))}</td>
    </Item>
  );
}
