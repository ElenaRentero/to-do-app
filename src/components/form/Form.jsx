import InputForm from './InputForm.jsx'

function Form({ tasks, newTask, filteredTasks, changeInput, handleClickAdd, filterSelect }) {
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <main className='main'>
            <form className='main__form' onSubmit={handleSubmit}>
                <div>
                    <InputForm tasks={tasks} newTask={newTask} filteredTasks={filteredTasks} changeInput={changeInput} handleClickAdd={handleClickAdd} filterSelect={filterSelect} />
                </div>
            </form>
        </main>
    )
}

export default Form