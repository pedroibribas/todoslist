import styled from 'styled-components';

export const Container = styled.ul`
  li + li {
    margin-top: 1rem;
  }
`

export const Fallback = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  border: 1px solid var(--gray-200);
  color: var(--gray-200);

  svg {
    font-size: 2rem;
  }
`