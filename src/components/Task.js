import '../App.css';

function Task(props) {

    return (
        <div className="App">
            <button disabled={props.task.status === 'Todo'} onClick={() => props.moveTask(props.task.id, - 1)}>up</button>
            {props.task.title}
            <button disabled={props.task.status === 'Done'} onClick={() => props.moveTask(props.task.id, 1)}>down</button>
            <button onClick={() => props.deleteTask(props.task.id)}>delete</button>
        </div>
    );
}

export default Task;
