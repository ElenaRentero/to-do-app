import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function InputForm({ tasks, newTask, filteredTasks, createNewTask, addNewTask, filterStatusTask }) {
    const changeValueInput = (ev) => {
        createNewTask(ev.target.value)
    }
    const selectStatusTask = (ev) => {
        filterStatusTask(ev.target.value) 
    }

    return (
        <InputGroup size='md'>
            <Input htmlSize={100} className='main__form--input' type="text" name="task" id="task" value={newTask.name} placeholder='Enter task' backgroundColor='white' onInput={changeValueInput} />
            <label htmlFor="task"></label>
            <InputLeftElement pointerEvents='none' children={<CheckIcon color={tasks.find(item => item.name.toLowerCase().includes(newTask.name.toLowerCase())) || newTask.name === '' ? 'gray.300' : 'green.300'} />}></InputLeftElement>
            <InputRightElement width='17rem'>
                <Button h='1.75rem' size='sm' marginRight={2} className={(!tasks.find(item => item.name.toLowerCase().includes(newTask.name.toLowerCase())) || !newTask.name === '' ? '' : 'not-active')} onClick={addNewTask}>Add</Button>
                <Select size='s' variant='filled' width='auto' marginLeft={2} borderRadius='5px' value={filteredTasks} onChange={selectStatusTask}>
                    <option value='All'>All</option>
                    <option value='Active'>Active</option>
                    <option value='Completed'>Completed</option>
                </Select>
            </InputRightElement>
        </InputGroup>
    )
}

export default InputForm