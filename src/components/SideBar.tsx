import { Project } from "../types/Project";
import { Button } from "./Button";

export const SideBar = ({ projectList, updateSelectedProject,  createProject}: any) => {

    const unSetProject = () => {
        createProject();
    }

    const setSelectedProject = (event: React.MouseEvent<HTMLAnchorElement>) => {
        updateSelectedProject(event.currentTarget.textContent); 
    }

    return (
        <div className="bg-gray-800 w-64 p-4 text-white">
            <h1 className="text-xl font-bold mb-4">Tasks</h1>
            <div className="mt-3">
                <Button label="New Project" type="button" onClick={unSetProject} />
            </div>
            <ul>
                {
                    projectList.map((project: Project) => {
                        return (
                            <li
                                key={project.title}
                                className="my-2 "
                                >
                                    <a 
                                        className="px-4 
                                            py-2 
                                            hover:bg-gray-700 
                                            hover:cursor-pointer
                                            rounded-md 
                                            transition-colors 
                                            duration-150 
                                            ease-in-out;"
                                        onClick={setSelectedProject}>
                                        {project?.title}
                                    </a>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    );
}