export interface Project {
    title: string
    description: string
    members: string
}

export interface NewProject {
    onAddProject: (newProject: Project) => void
}

