import { useState, useEffect } from 'react'
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement, InputRightElement, Select, Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import ls from '../services/localStorage.js'
import '../styles/App.scss'

function App() {
  const [tasks, setTasks] = useState(ls.get('tasks', []))
  const [newTask, setNewTask] = useState('')
  const [displayTasks, setDisplayTasks] = useState(tasks)
  const [filteredTasks, setFilteredTasks] = useState('')
  /* const [filterActive, setFilterActive] = useState('Active');
  const [filterCompleted, setFilterCompleted] = useState('Completed');*/

  useEffect(() => {
    ls.set('tasks', tasks);
  }, [tasks]);

  useEffect(() => {
    const tasksFromLS = ls.get('tasks');
    if (tasksFromLS) setTasks(tasksFromLS);
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const handleChange = (ev) => {
    setNewTask(ev.target.value)
  }

  const handleClickAdd = () => {
    if (!tasks.find(item => item.toLowerCase().includes(newTask.toLowerCase()))) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setDisplayTasks(updatedTasks)
      setNewTask('');
    }
  }

  const handleClickSearch = () => {
    if (!newTask) {
      setDisplayTasks(tasks)
      renderTasks()
    } else {
      filterTasks();
    }
  }

  const filterTasks = () => {
    if (!newTask) return;
    const filteredTasks = tasks.filter(item => item.toLowerCase().includes(newTask.toLowerCase()));
    setDisplayTasks(filteredTasks);
  }

  const handleSelect = (ev) => {
    setFilteredTasks(ev.target.value) 
    if (ev.target.value === 'All'){
      setDisplayTasks(tasks)
      renderTasks()
      setNewTask('')
    }
  }

  const renderTasks = (array = displayTasks) => {
    if (array) {
      return <Tbody>{array.map((item, index) => (
        <Tr key={index} id={index}><Td className='table__item'> {item} </Td><Td><Button h='1.75rem' size='sm' className='button__delete'><DeleteIcon className='button__delete--icon' color='gray.300'></DeleteIcon></Button></Td></Tr>
      ))}</Tbody>
    }
  }


  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>To Do App</h1>
      </header>
      <main className='main'>
        <form className='main__form' onSubmit={handleSubmit}>
          <div>
          <InputGroup size='md'>
            <Input htmlSize={100} className='main__form--input' type="text" name="task" id="task" value={newTask} placeholder='Enter task' backgroundColor='white' onChange={handleChange} />
            <label className='main__form--label' htmlFor="task"></label>
            <InputLeftElement pointerEvents='none' children={<CheckIcon color={tasks.find(item => item.toLowerCase().includes(newTask.toLowerCase())) || newTask === '' ? 'gray.300' : 'green.300'} />}></InputLeftElement>
            <InputRightElement width='17rem'>
              <ButtonGroup>
                <Button h='1.75rem' size='sm' className={'button__add ' + (!tasks.find(item => item.toLowerCase().includes(newTask.toLowerCase())) || newTask === '' ? '' : 'not-active')} onClick={handleClickAdd}>Add</Button>
                <Button h='1.75rem' size='sm' className='button__search' onClick={handleClickSearch}>Search</Button>
              </ButtonGroup>
            <Select size='s' variant='filled' width='auto' marginLeft={2} borderRadius='5px' onSelect={handleSelect}>
              <option value='All'>All</option>
              <option value='Active'>Active</option>
              <option value='Completed'>Completed</option>
            </Select>
            </InputRightElement>
            </InputGroup>
          </div>
        </form>
        <TableContainer width='83%' height='310px' overflowY='scroll' overflowX='hidden' marginTop='10px'> 
          <Table variant='simple' className='table'>
                {renderTasks()}
          </Table>
        </TableContainer>
      </main>
      <footer className='footer'>
        <small className='footer__text'>Hecho por ElenaRentero</small>
      </footer>
    </div >
  )
}

export default App