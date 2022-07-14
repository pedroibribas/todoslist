import { TaskItem } from "./TaskItem.jsx";
import { Container, Fallback } from "./TasksList";

export function TasksList({ items, onChangeCompletedData, onDeleteTaskData }) {
  if (items.length === 0) {
    return (
      <Fallback>
        Nenhuma tarefa encontrada.
      </Fallback>
    )
  }

  return (
    <Container>
      {items.map(item =>
        <TaskItem
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          onChangeCompleted={onChangeCompletedData}
          onDelete={onDeleteTaskData}
        />
      )}
    </Container>
  )
}