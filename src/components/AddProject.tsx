import { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { NewProject, Project } from "../types/Project";

export const AddProject = ({ onAddProject }: NewProject) => {
    const titleRef = useRef<HTMLInputElement | undefined | null>(null);
    const descriptionRef = useRef<HTMLInputElement | undefined | null>(null);
    const membersRef = useRef<HTMLInputElement | undefined | null>(null);

    const createProject = () => {
        const newProject: Project = {
            title: titleRef?.current?.value || '',
            description: descriptionRef?.current?.value || '',
            members: membersRef?.current?.value || '0'
        }
        if (titleRef && titleRef.current) titleRef.current.value = '';
        if (descriptionRef && descriptionRef.current) descriptionRef.current.value = '';
        if (membersRef && membersRef.current) membersRef.current.value = '';
        onAddProject(newProject);
    }

    return (
        <div>
            <Input inputRef={titleRef} label="Project Title" type="text" maxLength={50} placeholder="Project Title" />
            <Input inputRef={descriptionRef} label="Project Description" type="text" maxLength={50} placeholder="Project Description" />
            <Input inputRef={membersRef} label="Team Members" type="number" placeholder="Enter total team members" />

            <Button 
                label="Add Project"
                type="button"
                onClick={createProject}
            />
        </div>
    );
}