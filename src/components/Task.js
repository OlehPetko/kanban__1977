import '../App.css';

function Task(props) {


  return (
    <div className="App">
      {props.task.title}
      <button onClick={() => props.deleteTask(props.task.id)}>delete</button>
    </div>
  );
}

export default Task;
