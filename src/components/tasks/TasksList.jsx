import { Table, TableContainer } from '@chakra-ui/react'
import TaskCard from './TaskCard.jsx'
import '../../styles/layout/TasksList.scss'

function TasksList ({ displayTasks, capitalizeFirstLetter, deleteTask, changeStatusTask }) {
  const listOfTasks = displayTasks.map((task, i) => {
    return <TaskCard task={task} key={i} capitalizeFirstLetter={capitalizeFirstLetter} deleteTask={deleteTask} changeStatusTask={changeStatusTask} />
  })
  return (
    <TableContainer width='82.5%' height='305px' overflowX='hidden' marginTop='10px' style={{ overflowY: displayTasks.length > 5 ? 'scroll' : 'hidden' }}>
      <Table variant='simple' className='table'>{listOfTasks}</Table>
    </TableContainer>
  )
}

export default TasksList
