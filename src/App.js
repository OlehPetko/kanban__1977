import './App.css';
import Panel from "./components/Panel";
import {useState} from "react";

function App() {

    const statuses = ['Todo', 'Progress', 'Review', 'Done']
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const addTask = () => {
        setTasks([...tasks, {id: Math.random(), title: newTask, status: statuses[0]}])
        setNewTask('')
    }
    const moveTask = (id, value) => {
      setTasks(tasks.map(task => task.id === id ? {...task, status: statuses[statuses.indexOf(task.status) + value]} : task))
    }
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <div className="App">
            <input placeholder='add new task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button onClick={addTask}>add task</button>
            <Panel statuses={statuses} tasks={tasks} deleteTask={deleteTask} moveTask={moveTask}/>
        </div>
    );
}

export default App;
