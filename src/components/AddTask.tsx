import { useRef } from "react";
import { NewTask } from "../types/NewTask";

export const AddTask = ({ onAddNewTask }: NewTask) => {
    const txtTaskRef = useRef<HTMLInputElement>(null);

    const addNewTask = () => {
        if (txtTaskRef?.current) {
            onAddNewTask(txtTaskRef?.current?.value);
            txtTaskRef.current.value = '';
        }
    }

    return (
        <>
            <label className="lock text-gray-700 text-sm font-bold mb-2">Enter Task</label>
            <input 
                ref={txtTaskRef} 
                type="text" 
                maxLength={50} 
                placeholder="Enter Task" 
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={addNewTask}
            >
                Add Task
            </button>
        </>
    );
}