function TaskItem({task, upDateStatusChange, deleteTask}) {
    const {id, title, dueDate, completed} = task;

    function handleStatusChange(){
        upDateStatusChange(id);
    }

    function handleDelete() {
        deleteTask(id);
    }

    return(
        <tr>
            <td><span>{title}</span></td>
            <td><span>{dueDate}</span></td>
            <td><button onClick={handleStatusChange}>{completed? "Mark Incomplete":"Mark Complete"}</button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default TaskItem;