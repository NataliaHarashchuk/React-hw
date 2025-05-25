import './App.scss'
import List from './views/List/List'
import Header from './views/Header/Header'
import Input from './views/Input/Input'
import { TaskContextProvider } from './context/TaskContext'

function App() {
  return (
    <TaskContextProvider>
      <div className="list-container">
        <Header />
        <Input />
        <List />
      </div>
    </TaskContextProvider >
  );
}

export default App
