import '../App.css';
import Task from "./Task";

function Panel(props) {


  return (
    <div className="App">
      {props.statuses.map(status =>
      <div key={status}>
        <h3>
          {status}
        </h3>
        {props.tasks.filter(task => status === task.status).map(task => <Task deleteTask={props.deleteTask} task={task} key={task.id} />)}
      </div>
      )}
    </div>
  );
}

export default Panel;
