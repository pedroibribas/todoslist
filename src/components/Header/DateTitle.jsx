import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { Container } from "./DateTitle";

export function DateTitle() {
  const weekday = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
  const day = new Date().toLocaleDateString('pt-BR', { day: '2-digit' });
  const month = new Date().toLocaleDateString('pt-BR', { month: 'long' });
  
  return (
    <Container>
      <BsFillCalendarWeekFill />
      <h2>
        {weekday}, <span>{day} de {month}</span>
      </h2>
    </Container>
  )
}