import Logo from "../../assets/favicon.png";
import { Header, Wrapper } from "./style";

export function HeaderComponent() {
  return (
    <Header>
      <Wrapper>
        <img src={Logo} alt="DT money" />
        <button type="button">nova transação</button>
      </Wrapper>
    </Header>
  );
}
