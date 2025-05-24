export type TaskType = {
  id: string;
  taskName: string;
  isDone: boolean;
};

export type TaskProps = {
  task: TaskType;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export type TaskListType = {
  tasks: TaskType[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};
