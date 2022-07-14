import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.15);
  color: var(--gray-900);

  &:hover {
    background: var(--gray-100);
  }

  button {
    height: 3.5rem;
    font-size: 1.5rem;
    transition: 0.2s;

    svg {
      height: 3.5rem;
    }
    
    &.complete {
      margin-right: 0.5rem;

      &:hover {
        filter: brightness(1.2);
      }

      svg {
        color: var(--purple-400);
      }
    }

    &.delete {
      margin: 0 0 0 auto;

      svg {
        color: var(--red-500);
        transition: transform 0.2s;
      }

      &:hover svg {
        transform: rotate(45deg);
      }
    }
  }

  &.completed .title {
    color: var(--gray-200);
  }

  .title {
    padding-right: 1rem;
    font-size: 1.1rem;
  }
`