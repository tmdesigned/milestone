export interface Project{
    id: number;
    name: string;
    status: string;
    statusDate: Date;
    created: Date;
    createdBy: string;
    modified: Date;
    modifiedBy: string;
    dueDate: Date;
    owner: string;
    customer: string;
    category: string;
    importance: number;
    history: Note[];
    milestones: Milestone[];
}

export interface Milestone{
    id: number;
    title: string;
    status: string;
    duration: number;
    originalDueDate: Date;
    currentDueDate: Date;
    statusDate: Date;
    history: Note[];
}

export interface Note{
    id: number;
    name: string;
    created: Date;
    modified: Date;
    createdBy: string;
    modifiedBy: string;
    note: string;
}

