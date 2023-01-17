import { useState, useEffect } from 'react'
import ls from '../services/localStorage.js'
import '../styles/App.scss'

function App() {
  const [tasks, setTasks] = useState(ls.get('tasks',[]));
  const [newTask, setNewTask] = useState({})
  const [filterAll, setFilterAll] = useState('All');
  const [filterActive, setFilterActive] = useState('Active');
  const [filterCompleted, setFilterCompleted] = useState('Completed');

  useEffect(() => {
    ls.set('tasks', tasks);
  }, [tasks])

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const handleChange = (ev) => {
    setTasks(ev.target.value)
  }

  /*const handleClickAdd = () => {
    tasks.push(newTask);
    setNewTask('');
    renderTasks()
  }

  const renderTasks = () => {
    return tasks
    .map((item, index) => {
      return (
        <li key={index} id={index}>{item.task}</li>
        )
    })
  }*/

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>To Do App</h1>
      </header>
      <main className='main'>
        <form className='main__form' onSubmit={handleSubmit}>
          <input className='main__form--input' type="text" name="task" id="task" value={tasks} placeholder='Add new item' onChange={handleChange} />
          <label className='main__form--label' htmlFor="task"></label>
        </form>
        <button className='button__add'>Añadir</button>
        <button className='button__search'>Buscar</button>
        <button className='button'>All</button>
        <button className='button'>Active</button>
        <button className='button'>Completed</button>
        <ul className='list'>{tasks}</ul>
      </main>
      <footer>
        <small>Hecho por ElenaRentero</small>
      </footer>
    </div>
  )
}

export default App