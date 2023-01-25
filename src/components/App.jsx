import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { Button, Tbody, Tr, Td } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import ls from '../services/localStorage.js';
import Header from './Header.jsx';
import Form from './Form.jsx';
import TaskDetail from './TaskDetail.jsx';
import Footer from './Footer.jsx';

import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState(ls.get('tasks', []));
  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    name: '',
    status: 'Active'
  });
  const [displayTasks, setDisplayTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState('All');

  useEffect(() => {
    ls.set('tasks', tasks);
  }, [tasks]);

  useEffect(() => {
    const tasksFromLS = ls.get('tasks');
    if (tasksFromLS) {
      setTasks(tasksFromLS);
      setDisplayTasks(tasksFromLS);
    }
  }, []);

  const changeInput = (value) => {
    setNewTask({ ...newTask, name: value });
    renderTasks(filterTasks(value));
  }

  const handleClickAdd = () => {
    if (newTask.name === '') { return; };
    if (tasks.find(item => item.name.toLowerCase() === newTask.name.toLowerCase())) { return; };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
    setNewTask({
      id: crypto.randomUUID(),
      name: '',
      status: 'Active'
    });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filterTasks = (value) => {
    if (!value) return tasks;
    const filterTasks = tasks.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setDisplayTasks(filterTasks);
  }

  const handleClickCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, status: task.status === 'Completed' ? 'Active' : 'Completed' };
      }
      return task;
    });
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
  }

  const filterSelect = (value) => {
    setFilteredTasks(value);
    if (value === 'All') {
      const allTasks = tasks.filter((item) => item.status === 'Active' || item.status === 'Completed')
      setDisplayTasks(allTasks);
      renderTasks();
    } else if (value === 'Active') {
      const activeTasks = tasks.filter((item) => item.status === 'Active')
      setDisplayTasks(activeTasks)
      renderTasks()
    } else if (value === 'Completed') {
      const completedTasks = tasks.filter((item) => item.status === 'Completed')
      setDisplayTasks(completedTasks)
      renderTasks()
    }
  }

  const renderTasks = (array = displayTasks) => {
    if (array && array.length) {
      return <Tbody>{array.map((item, index) => (
        <Tr className='table__item' key={index} id={index}><Td> {capitalizeFirstLetter(item.name)}</Td><Td className='button'><Button h='1.75rem' size='sm' marginRight='20px' className='button__completed' onClick={() => handleClickCompleted(index)}>{item.status}</Button><Button h='1.75rem' size='sm' className='button__delete' onClick={() => handleDeleteTask(index)}><DeleteIcon className='button__delete--icon' color='gray.300'></DeleteIcon></Button></Td></Tr>
      ))}</Tbody>
    }
  }

  const { pathname } = useLocation();
  const routeData = matchPath("/task/:id", pathname);
  const id = routeData !== null ? routeData.params.id : '';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              tasks={tasks}
              newTask={newTask}
              filteredTasks={filteredTasks}
              changeInput={changeInput}
              handleClickAdd={handleClickAdd}
              filterSelect={filterSelect}
              renderTasks={renderTasks}
            />}
        />
        <Route path="/task/:id" element={<TaskDetail tasks={tasks} />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App