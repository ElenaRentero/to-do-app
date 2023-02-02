import InputForm from './InputForm.jsx'

function Form({ tasks, newTask, filteredTasks, createNewTask, addNewTask, filterStatusTask }) {
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <main className='main'>
            <form className='main__form' onSubmit={handleSubmit}>
                <div>
                    <InputForm tasks={tasks} newTask={newTask} filteredTasks={filteredTasks} createNewTask={createNewTask} addNewTask={addNewTask} filterStatusTask={filterStatusTask} />
                </div>
            </form>
        </main>
    )
}

export default Form