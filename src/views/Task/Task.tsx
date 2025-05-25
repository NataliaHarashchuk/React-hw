import { useTaskContext } from '../../context/TaskContext';
import type { TaskType } from '../../types/TaskType';
import './Task.scss'

export type TaskProps = {
  task: TaskType;
};

const Task = ({task }: TaskProps) => {  
  const {deleteTask, toggleTask}=useTaskContext();
  
  return (
    <div className='task'>
      <label className='checkbox-label'>
        <input type="checkbox"
          className="check-box"
          name="task"
          checked={task.isDone}
          onChange={()=>{toggleTask(task.id)}}
        />
        <span className="task-text">{task.taskName}</span>
      </label>
      <button className='delete-btn' onClick={() => deleteTask(task.id)}>X</button>
    </div>
  )
}

export default Task