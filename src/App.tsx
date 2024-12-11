import { useState } from 'react';
import './App.css';
import { SideBar } from './components/SideBar';
import { Project } from './types/Project';
import { AddProject } from './components/AddProject';
import { ProjectDetail } from './components/ProjectDetail';

function App() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const addNewProject = (newProject: Project) => {
    setProjectList([
      ...projectList, {
        title: newProject.title,
        description: newProject.description,
        members: newProject.members,
        tasks: []
      }]);
  }

  const resetProjectToCreateNew = () => {
    setSelectedProject(null);
  }

  const addTaskToProject = (task: string) => {
    const newList: any = projectList.map((p) => {
      if (p.title === selectedProject?.title) {
        let oldTasks = p.tasks ?? [];
        return {
          ...selectedProject,
          tasks: [...oldTasks, task]
        }
      }
      return p;
    });
    
    const updatedProject = newList.find((p: any) => p.title === selectedProject?.title);
    if (updatedProject) {
      setSelectedProject(updatedProject);
    }
    setProjectList(newList);
  }

  const updateSelectedProject = (projectTitle: string) => {
    let findProject = projectList.find((p) => p.title === projectTitle);
    if (findProject) {
      setSelectedProject(findProject);
    }
  }

  const deleteTask = (task: string) => {
    const newList: any = projectList.map((p) => {
      if (p.title === selectedProject?.title) {
        let tasksWithTask = p.tasks ? p.tasks.filter(t => t !== task) : [];
        return {
          ...selectedProject,
          tasks: [...tasksWithTask]
        }
      }
      return p;
    });
    
    const updatedProject = newList.find((p: any) => p.title === selectedProject?.title);
    if (updatedProject) {
      setSelectedProject(updatedProject);
    }
    setProjectList(newList);
  }

  return (
    <>
      <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar 
        projectList={projectList} 
        updateSelectedProject={updateSelectedProject} 
        createProject={resetProjectToCreateNew}
      />

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Project Management</h1>
        { selectedProject === null && <AddProject onAddProject={addNewProject} /> }
        { selectedProject !== null && 
        <ProjectDetail  
          title={selectedProject.title}
          description={selectedProject.description}
          members={selectedProject.members}
          tasks={selectedProject?.tasks ?? []}
          addTaskToProject={addTaskToProject} 
          deleteTaskFromProject={deleteTask}
          /> 
        }
      </div>
    </div>
    </>
  );
}

export default App;
