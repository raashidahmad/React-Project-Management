import { useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { SideBar } from './components/SideBar';

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);

  const addNewTask = (task: string) => {
    setTaskList((prevTasks) => [...prevTasks, task]);
  }

  const deleteTask = (task: string) => {

  }

  return (
    <>
      <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar taskList={taskList} />

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Task Form</h1>
        <AddTask onAddNewTask={addNewTask} />
      </div>
    </div>
    </>
  );
}

export default App
