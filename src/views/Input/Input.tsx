import { useState} from 'react'
import './Input.scss'
import { useTaskContext } from '../../context/TaskContext';

function Input() {
    const [taskText, setTaskText] = useState("");
    const { addTask } = useTaskContext();



    return (
        <input
            type='text'
            name='taskName'
            className='task-input'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => {
                if (e.key !== "Enter") {
                    return;
                }

                addTask(taskText);
                setTaskText("");
            }}
            placeholder="Enter your task" />
    )
}

export default Input