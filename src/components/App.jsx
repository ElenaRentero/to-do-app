import { useState, useEffect } from 'react'
import { Button, Tbody, Tr, Td } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import ls from '../services/localStorage.js'
import Header from './Header.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'
import '../styles/App.scss'
import '../styles/core/Reset.scss'

function App() {
  const [tasks, setTasks] = useState(ls.get('tasks', []))
  const [newTask, setNewTask] = useState('')
  const [displayTasks, setDisplayTasks] = useState(tasks)
  const [filteredTasks, setFilteredTasks] = useState('All')
  /* const [filterActive, setFilterActive] = useState('Active');
  const [filterCompleted, setFilterCompleted] = useState('Completed');*/

  useEffect(() => {
    ls.set('tasks', tasks);
  }, [tasks]);

  useEffect(() => {
    const tasksFromLS = ls.get('tasks');
    if (tasksFromLS) {
      setTasks(tasksFromLS);
      setDisplayTasks(tasksFromLS)
    }
  }, []);

  const changeInput = (value) => {
    setNewTask(value)
    renderTasks(filterTasks(value))
  }

  const handleClickAdd = () => {
    if (newTask === '') { return; }
    if (tasks.find(item => item.toLowerCase() === newTask.toLowerCase())) { return; }
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks)
    setNewTask('');
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filterTasks = (value) => {
    const filteredTasks = tasks.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    setDisplayTasks(filteredTasks);
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
    setDisplayTasks(updatedTasks)
  }

  const filterSelect = (value) => {
    setFilteredTasks(value)
    if (value === 'All') {
      setDisplayTasks(tasks)
      renderTasks()
      setNewTask('')
    }
  }

  const renderTasks = (array = displayTasks) => {
    if (array && array.length) {
      return <Tbody>{array.map((item, index) => (
        <Tr key={index} id={index}><Td className='table__item'> {capitalizeFirstLetter(item)} </Td><Td className='button'><Button h='1.75rem' size='sm' className='button__delete' onClick={() => handleDeleteTask(index)}><DeleteIcon className='button__delete--icon' color='gray.300'></DeleteIcon></Button></Td></Tr>
      ))}</Tbody>
    }
  }

  return (
    <div className="App">
      <Header />
      <Form
        tasks={tasks}
        newTask={newTask}
        filteredTasks={filteredTasks}
        changeInput={changeInput}
        handleClickAdd={handleClickAdd}
        filterSelect={filterSelect}
        renderTasks={renderTasks}
      />
      <Footer />
    </div >
  )
}

export default App