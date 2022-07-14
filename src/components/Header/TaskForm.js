import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    
    input {
      width: 100%;
      height: 2.5rem;
      padding: 0 0.5rem;
      border: 1px solid var(--gray-400);
      border-radius: 0.25rem;
      color: var(gray-900);
      font-size: 1rem;
      font-weight: bold;
  
      &::placeholder {
        font-weight: 400;
        opacity: 0.75;
      }

      &:focus {
        border: 2px solid var(--purple-400);
      }
    }
  
    button[type='submit'] {
      height: 2.5rem;
      margin-left: -0.2rem;
      padding: 0 0.5rem;
      border-radius: 0 0.25rem 0.25rem 0;
      background: var(--purple-400);
      color: var(--white);
      transition: filter 0.2s;
  
      svg {
        font-size: 1.5rem;
      }
  
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`