import { Container, Content, RadioBox } from "./styles";

export function FilterSelect({ allTasksAmount, filterOption, onFilterChange }) {
  function handleFilterChange(option) {
    onFilterChange(option);
  }

  return (
    <Container>
      <Content>
        {allTasksAmount > 0
          ? (
            <RadioBox
              onClick={() => handleFilterChange('all')}
              filterOption={filterOption === 'all'}
              type="button"
            >
              Ver todos
            </RadioBox>
          )
          : (
            <RadioBox type='button' className="disabled">Ver todos</RadioBox>
          )
        }

        {allTasksAmount > 0
          ? (
            <RadioBox
              onClick={() => handleFilterChange('completed')}
              filterOption={filterOption === 'completed'}
              type="button"
            >
              Completos
            </RadioBox>
          )
          : (
            <RadioBox type='button' className="disabled">Completos</RadioBox>
          )
        }

        {allTasksAmount > 0 
          ? (
            <RadioBox
              onClick={() => handleFilterChange('uncompleted')}
              filterOption={filterOption === 'uncompleted'}
              type="button"
            >
              Incompletos
            </RadioBox>
          )
          : (
            <RadioBox type='button' className="disabled">Incompletos</RadioBox>
          )
        }
      </Content>
    </Container>
  )
}