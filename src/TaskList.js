import TaskItem from './TaskItem';

function TaskList({tasks, upDateStatusChange, deleteTask}) {
    return(
        <div>
            {
                tasks.length === 0? (
                    <p>No tasks available.</p>
                ) : (
                    <table>
                        {
                            tasks.map((task) => {
                                return (
                                    <TaskItem 
                                        task={task}
                                        upDateStatusChange={upDateStatusChange}
                                        deleteTask={deleteTask}    
                                    />
                                )})
                        }
                    </table>
                )
            }     
        </div>   
    )
}

export default TaskList;