import { Link } from "react-router-dom";
import { Button, Tr, Td } from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';

import '../../styles/App.scss';

function TaskCard({ task, capitalizeFirstLetter, deleteTask, handleClickCompleted }) {
    const handleDeleteTask = () => {
        deleteTask(task.id)
    }
    return (
        <article classname='table__item' key={task.id}>
                <Tr className='table__item--head' key={task.id} id={task.id}>
                    <Td border='none'>{capitalizeFirstLetter(task.name)}</Td>
                    <Td className="button" border='none'>
                        <Button h='1.75rem' size='sm' marginRight='20px' onClick={() => handleClickCompleted(task.id)}>{task.status}</Button>
                        <Button h='1.75rem' size='sm' className='button__delete' onClick={() => handleDeleteTask(task.id)}>
                            <DeleteIcon className='button__delete--icon' color='gray.300'></DeleteIcon>
                        </Button>
                        <Link to={`/task/${task.id}`}>
                            <Button h='1.75rem' size='sm' marginLeft='20px' className='button__delete'>
                                <ViewIcon className='button__delete--icon' color='gray.300'></ViewIcon>
                            </Button>
                        </Link>
                    </Td>
                </Tr>
        </article>
    );
}

export default TaskCard;