import styled from 'styled-components';

export const Container = styled.div`
  max-width: 594px;
  height: 70px;
  margin: 0 auto;
  padding: 0 0.5rem;
  background: var(--white);

  @media(max-width: 760px) {
    max-width: 480px;
  }
`

export const Content = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 70px;
`

export const RadioBox = styled.button`
  height: 2rem;
  padding: 0 0.5rem;
  border: ${props => props.filterOption ? "none" : "1px solid var(--gray-200)"};
  border-radius: 0.25rem;
  background: ${props => props.filterOption ? "var(--purple-400)" : "var(--gray-100)"};
  color: ${props => props.filterOption ? "var(--white)" : "var(--gray-900)"};
  font-weight: ${props => props.filterOption ? "600" : "400"};
  transition: filter 0.2s;

  &:hover {
    filter: ${props => props.filterOption ? "none" : "brightness(0.8)"};
  }

  &.disabled {
    background: var(--gray-200);
    color: var(--gray-400);
    font-weight: "400";
    cursor: default;

    &:hover {
      filter: none;
    }
  }
`