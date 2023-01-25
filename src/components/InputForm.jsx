import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function InputForm({ tasks, newTask, filteredTasks, changeInput, handleClickAdd, filterSelect }) {
    const handleChangeInput = (ev) => {
        changeInput(ev.target.value)
    }
    const handleSelect = (ev) => {
        filterSelect(ev.target.value) 
    }

    return (
        <InputGroup size='md'>
            <Input htmlSize={100} className='main__form--input' type="text" name="task" id="task" value={newTask.name} placeholder='Enter task' backgroundColor='white' onInput={handleChangeInput} />
            <label className='main__form--label' htmlFor="task"></label>
            <InputLeftElement pointerEvents='none' children={<CheckIcon color={tasks.find(item => item.name.toLowerCase().includes(newTask.name.toLowerCase())) || newTask.name === '' ? 'gray.300' : 'green.300'} />}></InputLeftElement>
            <InputRightElement width='17rem'>
                <Button h='1.75rem' size='sm' className={'button__add ' + (!tasks.find(item => item.name.toLowerCase().includes(newTask.name.toLowerCase())) || newTask.name === '' ? '' : 'not-active')} onClick={handleClickAdd}>Add</Button>
                <Select size='s' variant='filled' width='auto' marginLeft={2} borderRadius='5px' value={filteredTasks} onChange={handleSelect}>
                    <option value='All'>All</option>
                    <option value='Active'>Active</option>
                    <option value='Completed'>Completed</option>
                </Select>
            </InputRightElement>
        </InputGroup>
    )
}

export default InputForm