import './List.scss'
import Task from '../Task/Task'
import { useTaskContext } from '../../context/TaskContext';

const List = () => {
  const {tasks}=useTaskContext();
  
  return (
    <div className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}

export default List