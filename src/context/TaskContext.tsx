import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { v4 as uuidv4 } from "uuid";
import type { TaskType } from "../types/TaskType.ts";


type TaskContextType = {
    tasks: TaskType[];
    addTask: (task: string) => void;
    deleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskType[]>(() => {
        const stored = localStorage.getItem('tasks');
        return stored ? JSON.parse(stored) : [];
    });


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (task: string) => {
        if (task.trim() === '') return;

        const newTask: TaskType = {
            id: uuidv4(),
            taskName: task.trim(),
            isDone: false
        };

        setTasks(prev => [...prev, newTask]);
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
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (context === null) {
        throw new Error("useTaskContext must be used within TaskContextProvider");
    }

    return context;
};

