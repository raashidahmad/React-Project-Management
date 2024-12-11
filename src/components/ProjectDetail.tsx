import { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { EditProject } from "../types/Project";

export const ProjectDetail = ({ title, description, members, tasks, addTaskToProject, deleteTaskFromProject }: EditProject) => {
    const taskRef = useRef<HTMLInputElement | null>(null);

    const addNewTask = () => {
        addTaskToProject(taskRef?.current?.value || '');
        if (taskRef && taskRef.current) taskRef.current.value = '';
    }

    const deleteTask = (e: React.MouseEvent<HTMLElement>) => {
        deleteTaskFromProject(e.currentTarget.getAttribute('data-appmode') ?? '');
    }

    return (
        <>
            <h2><strong>Project Title: </strong>{title}</h2>
            <p>
                <strong>Description: </strong>
                {description}
            </p>
            <p>
                <strong>Members: </strong>
                {members}
            </p>

            <div className="mt-6">
                <h2><strong>Add New Task for ({title})</strong></h2>
                <Input inputRef={taskRef} title="Project Task" type="text" maxLength={50} />
                <Button type="button" label="Add Task" onClick={addNewTask} />
            </div>

            {
                tasks && <ul className="table-auto w-full border-collapse border border-gray-300 mt-4">
                    {tasks.map((task: string) => {
                        return (
                            <li className="table-row w-full" key={task}>
                                <span className="table-cell border border-gray-300 p-2 width-90-per-cent">{task}</span>
                                <span className="table-cell border border-gray-300 p-2">
                                    <a 
                                        className="text-white bg-blue-700 hover:bg-blue-800 
                                        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                                        text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
                                        focus:outline-none dark:focus:ring-blue-800
                                        hover:cursor-pointer" 
                                        data-appmode={task} 
                                        onClick={deleteTask}
                                    >
                                        Delete
                                    </a>
                                </span>
                            </li>
                        );
                    })}
                </ul>
            }

            {
                !tasks && <p>No tasks added yet</p>
            }

        </>
    );
}