import { useState } from 'react';
import './App.css';
import { SideBar } from './components/SideBar';
import { Project } from './types/Project';
import { AddProject } from './components/AddProject';

function App() {
  // const [taskList, setTaskList] = useState<string[]>([]);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  /* const addNewTask = (task: string) => {
    setTaskList((prevTasks) => [...prevTasks, task]);
  } */

  const addNewProject = (newProject: Project) => {
    setProjectList([
      ...projectList, {
        title: newProject.title,
        description: newProject.description,
        members: newProject.members
      }]);
  }

  const deleteTask = (task: string) => {

  }

  return (
    <>
      <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar projectList={projectList} />

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Project Management</h1>
        { !selectedProject && <AddProject onAddProject={addNewProject} />}
      </div>
    </div>
    </>
  );
}

export default App
