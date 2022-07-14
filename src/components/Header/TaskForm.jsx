import { useState } from "react";
import { HiOutlinePlus } from 'react-icons/hi';
import { Container } from "./TaskForm";

export function TaskForm({ onCreateTaskData }) {
  const [enteredTitle, setEnteredTitle] = useState('');

  function handleTitleChange(e) {
    setEnteredTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (enteredTitle === '') {
      alert('Insira sua tarefa no espaço em branco.');
      return enteredTitle;
    }

    const taskData = {
      title: enteredTitle
    }

    onCreateTaskData(taskData);

    setEnteredTitle('');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={enteredTitle}
          maxLength={55}
          placeholder="Adicionar nova tarefa"
          autoFocus
          onChange={handleTitleChange}
        />
        <button type='submit'>
          <HiOutlinePlus />
        </button>
      </form>
    </Container>
  )
}