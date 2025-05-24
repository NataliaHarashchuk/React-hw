import './List.scss'
import Task from '../Task/Task'
import type { TaskListType } from '../../types/TasksTypes';


const List = ({ tasks, onDelete, onToggle }: TaskListType) => {
  return (
    <div className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default List