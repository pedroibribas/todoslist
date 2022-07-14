import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid var(--gray-300);

  h2 {
    color: var(--gray-900);
    font-weight: 500;
    text-transform: capitalize;

    span{
      font-weight: 300;
      text-transform: none;
    }
  }

  svg {
    margin-right: 0.75rem;
    color: var(--red-500);
    font-size: 1.25rem;
  }
`