import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowBackIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'
import '../../styles/layout/TaskDetail.scss'

function TaskDetail ({ tasks, writeDescription }) {
  const { id } = useParams()
  const task = tasks.find((task) => task.id === id)
  const [editing, setEditing] = useState(false)

  const handleClickWrite = () => {
    setEditing(!editing)
  }

  const handleChangeDesc = (ev) => {
    writeDescription(ev.target.value)
    if (ev.target.value !== '') {
      writeDescription(ev.target.value, task.id)
    }
  }

  return (
    <div className='detail'>
      <Link to='/'><div className='detail__icon'><ArrowBackIcon />Return</div></Link>
      <article className='detail__article'>
        <h1 className='detail__article--name'>Task name: {task.name}</h1>
        <form className='detail__article--form'>
          <label className='detail__article--label' for='desc'>
            Description:
            {
                            editing
                              ? <CheckIcon marginLeft={2} onClick={handleClickWrite} />
                              : <EditIcon marginLeft={2} onClick={handleClickWrite} />
                        }
          </label>
          {
                        editing
                          ? <textarea className='detail__article--desc' id='desc' name='desc' rows='1' cols='80' value={task.desc} onChange={handleChangeDesc} />
                          : <div className='detail__article--desc'>{task.desc}</div>
                    }
        </form>
      </article>
    </div>
  )
}

export default TaskDetail
