
import { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function upDateStatusChange(taskId) {
    let newTasks = tasks.map((item)=>{
      if(item.id === taskId) {
        return {...item, completed: !item.completed}
      }
      return item
    })
    setTasks(newTasks);  
  }

  function deleteTask(taskId) {
    let newTasks = tasks.filter((item)=>{
      return item.id !== taskId
    });

    setTasks(newTasks);

  }

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskList 
        tasks={tasks}
        upDateStatusChange={upDateStatusChange}
        deleteTask={deleteTask}
      />   
    </div>
  );
}

export default App;
