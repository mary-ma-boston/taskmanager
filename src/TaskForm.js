import { useState } from "react";

function TaskForm({addTask}) {
    const [task, setTask] = useState({
        id: '',
        title: '',
        dueDate: '',
        completed: false
    });

    function handleInputChange(e) {
        setTask({...task, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTask({...task, id: Date.now().toString()});
        setTask({...task, title:'', dueDate:''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={task.title}
                placeholder="Task Title"
                onChange={handleInputChange}
            />
            <input 
                type="text"
                name="dueDate"
                value={task.dueDate}
                placeholder="Due Date"
                onChange={handleInputChange}
            />
            <button type="submit">Add Task</button>
        </form>
    )

}

export default TaskForm;