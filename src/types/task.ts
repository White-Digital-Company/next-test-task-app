export interface Task {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'review' | 'completed';
}
