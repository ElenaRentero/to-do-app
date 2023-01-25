import InputForm from './InputForm.jsx'
import TableForm from './TableForm.jsx'

function Form({ tasks, newTask, filteredTasks, changeInput, handleClickAdd, filterSelect, renderTasks }) {
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <main className='main'>
            <form className='main__form' onSubmit={handleSubmit}>
                <div>
                    <InputForm tasks={tasks} newTask={newTask} filteredTasks={filteredTasks} changeInput={changeInput} handleClickAdd={handleClickAdd} filterSelect={filterSelect} />
                    <TableForm renderTasks={renderTasks} />
                </div>
            </form>
        </main>
    )
}

export default Form