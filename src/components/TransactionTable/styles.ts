import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  table {
    border-spacing: 0 0.5rem;
    margin-top: 4rem;
    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

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
  }
`;
