import { useEffect, useState } from 'react'
import './App.scss'
import List from './views/List/List'
import type { TaskType } from './types/TasksTypes';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
  
  const [currentDate, setCurrentDate] = useState<string>(() => {
    return new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      setCurrentDate(prev => (prev !== newDate ? newDate : prev));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (taskText.trim() === '') return;

    const newTask: TaskType = {
      id: uuidv4(),
      taskName: taskText.trim(),
      isDone: false
    };

    setTasks(prev => [...prev, newTask]);
    setTaskText('');
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <>
      <div className="list-container">
        <h1>Note your tasks</h1>
        <p className='date'>{currentDate}</p>
        <div className='task-input-container'>
          <input type='text' name='taskName' className='task-input'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter your task" />
        </div>
        <List tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </div>
    </>
  )
}

export default App
