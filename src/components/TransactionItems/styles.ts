import styled from "styled-components";

export const Item = styled.tr`
  color: var(--text-body);
  font-weight: 400;
  padding: 1rem 2rem;
  line-height: 1.5rem;

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }
`;
