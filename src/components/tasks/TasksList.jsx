import { Table, TableContainer } from '@chakra-ui/react'
import TaskCard from './TaskCard.jsx';

function TasksList({ displayTasks, capitalizeFirstLetter, deleteTask, handleClickCompleted }) {
    const listOfTasks = displayTasks.map((task) => {
        return <TaskCard task={task} capitalizeFirstLetter={capitalizeFirstLetter} deleteTask={deleteTask} handleClickCompleted={handleClickCompleted} />
    });
    return (
        <TableContainer width='82.5%' height='310px' overflowY='scroll' overflowX='hidden' marginTop='10px'>
            <Table variant='simple' className='table'>{listOfTasks}</Table>
        </TableContainer>
    )
}

export default TasksList