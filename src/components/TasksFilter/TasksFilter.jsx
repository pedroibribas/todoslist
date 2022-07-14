import { TasksList } from "./TasksList.jsx";
import { Container, Content } from "./TasksFilter";

export function TasksFilter({ filteredArr, onChangeCompletedData, onDeleteTaskData }) {
  function handleChangeCompletedData(id, completed) {
    onChangeCompletedData(id, completed);
  }

  function handleDeleteTaskData(id) {
    onDeleteTaskData(id);
  }

  return (
    <Container>
      <Content>
        <TasksList
          items={filteredArr}
          onChangeCompletedData={handleChangeCompletedData}
          onDeleteTaskData={handleDeleteTaskData}
        />
      </Content>
    </Container>
  )
}