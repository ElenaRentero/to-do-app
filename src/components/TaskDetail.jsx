import { Link, useParams } from "react-router-dom";

function TaskDetail({ tasks }) {
    const { id } = useParams();
    const taskFound = tasks.find((item) => item.id === id);

    return (
        <>
            <Link className="container__link--info" to={"/"}> <i className="fa-solid fa-backward"></i> Volver</Link>
            <h1>Detalle de la tarea {taskFound.name}</h1>
        </>
    )
}

export default TaskDetail