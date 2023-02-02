import { useState, useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Route, Routes } from 'react-router-dom';

import ls from '../services/localStorage.js';
import Header from './Header.jsx';
import Form from './form/Form.jsx';
import TasksList from './tasks/TasksList.jsx';
import TaskDetail from './tasks/TaskDetail.jsx';
import Footer from './Footer.jsx';

import '../styles/App.scss';
import '../styles/core/Reset.scss';

function App() {
  // Variables estado
  const [tasks, setTasks] = useState(ls.get('tasks', []));
  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    name: '',
    desc: '',
    status: 'Active'
  });
  const [displayTasks, setDisplayTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState('All');

  // UseEffect: LocalStorage guardar y recoger datos
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

  // UseEffect: renderizar componente con el filtrado
  useEffect(() => {
    filterSelect(filteredTasks);
  }, [tasks, filteredTasks]);

  const changeInput = (value) => {
    setNewTask({ ...newTask, name: value });
    filterTasks(value);
  }

  // Función para añadir una nueva tarea
  const handleClickAdd = () => {
    if (newTask.name === '') { return; };
    if (tasks.find(item => item.name.toLowerCase() === newTask.name.toLowerCase())) { return; };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
    setNewTask({
      id: crypto.randomUUID(),
      name: '',
      desc: '',
      status: 'Active'
    });
  }

  // Función para poner la primera letra mayúscula en las tareas añadidas
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filterTasks = (value) => {
    if (!value) return setDisplayTasks(tasks);
    const filterTasks = tasks.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setDisplayTasks(filterTasks);
  }

  const handleClickCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: task.status === 'Completed' ? 'Active' : 'Completed' };
      }
      return task;
    });
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setDisplayTasks(updatedTasks);
  }

  const filterSelect = (value) => {
    setFilteredTasks(value);
    if (value === 'All') {
      setDisplayTasks(tasks);
    } else if (value === 'Active') {
      const activeTasks = tasks.filter((item) => item.status === 'Active')
      setDisplayTasks(activeTasks)
    } else if (value === 'Completed') {
      const completedTasks = tasks.filter((item) => item.status === 'Completed')
      setDisplayTasks(completedTasks)
    }
  }

  const writeDescription = (value) => {
    
    setNewTask({ ...newTask, desc: value });
  }

  // Rutas
  const { pathname } = useLocation();
  const routeData = matchPath("/task/:id", pathname);
  const id = routeData !== null ? routeData.params.id : '';

  const foundTask = (id) => {
    return tasks.find(
      (task) => task.id === parseInt(id)
    )
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form
                tasks={tasks}
                newTask={newTask}
                filteredTasks={filteredTasks}
                changeInput={changeInput}
                handleClickAdd={handleClickAdd}
                filterSelect={filterSelect}
              />
              {displayTasks.length > 0 ? (
                <TasksList displayTasks={displayTasks} capitalizeFirstLetter={capitalizeFirstLetter} deleteTask={deleteTask} handleClickCompleted={handleClickCompleted} />
              ) : (
                <h4 className="not-found">
                  Ningún resultado coincide con su búsqueda
                </h4>
              )}
            </>
          }
        />
        <Route path="/task/:id" element={<TaskDetail tasks={tasks} writeDescription={writeDescription} />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App