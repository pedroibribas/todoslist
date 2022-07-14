import styled from 'styled-components';

export const Container = styled.header`
  max-width: 594px;
  height: auto;
  margin: 0 auto;
  background: var(--white);

  @media(max-width: 760px) {
    max-width: 480px;
  }
`

export const Content = styled.div`
  margin-top: 4rem;
  padding: 0rem 0.5rem;
`