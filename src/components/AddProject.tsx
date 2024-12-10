import { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const AddProject = ({ onAddProject }: any) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const membersRef = useRef();

    const createProject = () => {
        
    }

    return (
        <div>
            <Input ref={titleRef} label="Project Title" type="text" maxLength={50} placeholder="Project Title" />
            <Input ref={descriptionRef} label="Project Description" type="text" maxLength={50} placeholder="Project Description" />
            <Input ref={membersRef} label="Team Members" type="number" placeholder="Enter total team members" />

            <Button 
                title="Add Project"
                type="button"
                onClick={createProject}
            />
        </div>
    );
}