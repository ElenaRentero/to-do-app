import { Table, TableContainer } from '@chakra-ui/react'
import TaskCard from './TaskCard.jsx'
import '../../styles/layout/TasksList.scss'

function TasksList ({ displayTasks, capitalizeFirstLetter, deleteTask, changeStatusTask }) {
  const listOfTasks = displayTasks.map((task, i) => {
    return <TaskCard task={task} key={i} capitalizeFirstLetter={capitalizeFirstLetter} deleteTask={deleteTask} changeStatusTask={changeStatusTask} />
  })

  function isMobileDevice () {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
  };

  const lengthThreshold = isMobileDevice() ? 3 : 5

  return (
    <TableContainer className='table' width='82.5%' overflowX='hidden' marginTop='10px' style={{ overflowY: displayTasks.length > lengthThreshold ? 'scroll' : 'hidden' }}>
      <Table variant='simple' className='table__container'>{listOfTasks}</Table>
    </TableContainer>
  )
}

export default TasksList
