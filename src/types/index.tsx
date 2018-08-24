export interface ITodo {
    text: string;
    completed: boolean;
}

export enum VisibilityFilter {
    ShowAll,
    ShowCompleted,
    ShowActive
}

export interface IStoreState {
    todoList: ITodo[];
    visibilityFilter: VisibilityFilter;
}