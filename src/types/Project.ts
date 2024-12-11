export interface Project {
    title: string
    description: string
    members: string
    tasks?: string[]
}

export interface EditProject {
    title: string
    description: string
    members: string
    tasks?: string[]
    addTaskToProject: (task: string) => void
    deleteTaskFromProject: (task: string) => void
}

export interface NewProject {
    onAddProject: (newProject: Project) => void
}

