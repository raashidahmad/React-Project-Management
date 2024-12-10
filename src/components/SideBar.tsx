import { Project } from "../types/Project";
import { Task } from "./Task";

export const SideBar = (projectList: Project[]) => {
    return (
        <div className="bg-gray-800 w-64 p-4 text-white">
            <h1 className="text-xl font-bold mb-4">Tasks</h1>
            <ul>
                {
                    projectList.map((project: Project) => {
                        return <Task item={project.title} />
                    })
                }
            </ul>
        </div>
    );
}