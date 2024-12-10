import { TaskList } from "../types/TaskList";
import { Task } from "./Task";

export const SideBar = ({ taskList }: TaskList) => {
    return (
        <div className="bg-gray-800 w-64 p-4 text-white">
            <h1 className="text-xl font-bold mb-4">Tasks</h1>
            <ul>
                {
                    taskList.map((task: string) => {
                        return <Task item={task} />
                    })
                }
            </ul>
        </div>
    );
}