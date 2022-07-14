import { v4 as uuidv4 } from 'uuid';
import { DateTitle } from './DateTitle.jsx';
import { TaskForm } from './TaskForm.jsx';
import { Container, Content } from './Header';

export function Header({ onAddNewTaskData }) {  
  function handleCreateNewTaskData(enteredTaskData) {
    const newTaskData = {
      ...enteredTaskData,
      id: uuidv4(),
      completed: false
    };
    onAddNewTaskData(newTaskData);
  }
  
  return (
    <Container>
      <Content>
        <DateTitle />
        <TaskForm onCreateTaskData={handleCreateNewTaskData} />
      </Content>
    </Container>
  )
}