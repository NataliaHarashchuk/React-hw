import './Task.scss'
import type { TaskProps } from '../../types/TasksTypes';

const Task = ({task, onDelete, onToggle }: TaskProps) => {  
  return (
    <div className='task'>
      <label className='checkbox-label'>
        <input type="checkbox"
          className="check-box"
          name="task"
          checked={task.isDone}
          onChange={()=>{onToggle(task.id)}}
        />
        <span className="task-text">{task.taskName}</span>
      </label>
      <button className='delete-btn' onClick={() => onDelete(task.id)}>X</button>
    </div>
  )
}

export default Task