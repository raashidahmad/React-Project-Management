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

    const deleteTask = (task: string) => {
        deleteTaskFromProject(task);
    }

    return (
        <>
            <h2>{title}</h2>
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
                            <li className="table-row" key={task}>
                                <span className="table-cell border border-gray-300 p-2">{task}</span>
                                <span className="table-cell border border-gray-300 p-2">
                                    <Button 
                                        type="button"
                                        label="Delete"
                                        onClick={deleteTask(task)}
                                        className="bg-blue-500 text-white p-1 rounded"
                                    >
                                        Delete
                                    </Button>
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