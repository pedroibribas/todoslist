import { useEffect, useState } from "react";
import { FilterSelect } from "./components/FilterSelect";
import { Header } from "./components/Header/Header.jsx";
import { TasksFilter } from "./components/TasksFilter/TasksFilter.jsx";
import { GlobalStyle } from './styles/global';

function App() {
  const [tasksArr, setTasksArr] = useState([]);
  const [filterOption, setFilterOption] = useState('all');
  const [filteredArr, setFilteredArr] = useState([]);

  const allTasksAmount = tasksArr.length;


  useEffect(() => {
    function getLocalStorageData() {
      if (localStorage.getItem('tasks' === null)) {
        localStorage.setItem('tasks', JSON.stringify([]));
      } else {
        let data = JSON.parse(localStorage.getItem('tasks'));
        setTasksArr(data);
      }
    }
    
    getLocalStorageData();
  }, [])

  useEffect(() => {
    function handleFilterTasks() {
      if (tasksArr === null) {
        setTasksArr([]);
      } else {
        switch (filterOption) {
          case 'completed':
            setFilteredArr(tasksArr.filter(item => item.completed === true));
            break;
  
          case 'uncompleted':
            setFilteredArr(tasksArr.filter(item => item.completed === false));
            break;
        
          default:
            setFilteredArr(tasksArr);
            break;
        }
      }
    }

    function updateLocalStorageData() {
      localStorage.setItem('tasks', JSON.stringify(tasksArr));
    }

    handleFilterTasks();
    updateLocalStorageData();
  }, [tasksArr, filterOption])

  function handleAddNewTaskData(newTaskData) {
    setTasksArr(prevTasksArr => [...prevTasksArr, newTaskData]);
  }

  function handleChangeCompletedData(taskId, completedVal) {
    setTasksArr(tasksArr.map(item => {
      if (item.id === taskId) {
        return {
          ...item,
          completed: !completedVal
        }
      }
      return item;
    }));
  }

  function handleDeleteTaskData(taskId) {
    setTasksArr(tasksArr.filter(item => item.id !== taskId));
  }

  function handleFilterTasks(option) {
    setFilterOption(option);
  }

  return (
    <>
      <Header onAddNewTaskData={handleAddNewTaskData} />

      <FilterSelect
        allTasksAmount={allTasksAmount}
        filterOption={filterOption}
        onFilterChange={handleFilterTasks}
      />

      <TasksFilter
        filteredArr={filteredArr}
        allTasksAmount={allTasksAmount}
        onChangeCompletedData={handleChangeCompletedData}
        onDeleteTaskData={handleDeleteTaskData}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
