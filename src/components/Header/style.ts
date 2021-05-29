import styled from "styled-components";

export const Header = styled.header`
  background: var(--blue);
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  button {
    align-items: center;
    background-color: var(--blue-light);
    color: #fff;
    font-size: 1rem;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    display: flex;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
