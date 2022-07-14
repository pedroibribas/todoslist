import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { BsTrashFill } from 'react-icons/bs';
import { Container } from './TaskItem';

export function TaskItem({ id, title, completed, onChangeCompleted, onDelete }) {
  function handleChangeCompleted() {
    onChangeCompleted(id, completed);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <Container className={completed ? 'completed' : ''}>
      <button 
        onClick={handleChangeCompleted}
        className='complete'
      >
        {completed ? (
          <RiCheckboxCircleFill className='icon-filled' />
        ) : (
          <RiCheckboxBlankCircleLine /> 
        )}
      </button>

      <div className='title'>
        {title}
      </div>

      <button
        onClick={handleDelete}
        className='delete'
      >
        <BsTrashFill className='trash' />
      </button>
    </Container>
  )
}