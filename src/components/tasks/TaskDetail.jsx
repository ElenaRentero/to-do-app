import { Link, useParams } from "react-router-dom";
import { ArrowBackIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';

function TaskDetail({ tasks, writeDescription }) {
    const { id } = useParams();
    const task = tasks.find((task) => task.id === id);

    const handleClickWrite = (ev) => {
        writeDescription(ev.target.value)
    }

    return (
        <div className="detail">
            <Link to={"/"}><div className="detail__icon"><ArrowBackIcon></ArrowBackIcon>Volver</div></Link>
            <article className="detail__article">
                <h1 className="detail__article--name">Nombre de la tarea: {task.name}</h1>
                <form className="detail__article--form">
                    <label className="detail__article--label" for="desc">Descripción: {task.desc === '' ? <EditIcon onClick={handleClickWrite}></EditIcon> : <CheckIcon  onClick={handleClickWrite}></CheckIcon>} </label>
                    <textarea className={"detail__article--desc " /* + (task.desc ? "" : "not-active")</form>*/} id="desc" name="desc" rows="1" cols="80"></textarea>
                </form>
            </article>
        </div>
    )
}

export default TaskDetail


