import * as constants from '../constants'
import {ITodo, VisibilityFilter} from "../types";

export interface IAddTodo {
    type: constants.ADD_TODO;
    text: string;
    completed: boolean;
}

export interface IToggleTodo {
    type: constants.TOGGLE_TODO;
    todo: ITodo
}

export interface ISetVisibilityFilter {
    type: constants.SET_VISIBILITY_FILTER;
    filter: VisibilityFilter
}

export type TodoAction = IAddTodo | IToggleTodo | ISetVisibilityFilter;

export function addTodo(text: string): IAddTodo {
    return {
        type: constants.ADD_TODO,
        text,
        completed: false
    }
}

export function toggleTodo(todo: ITodo): IToggleTodo {
    return {
        type: constants.TOGGLE_TODO,
        todo
    }
}

export function setVisibilityFilter(filter: VisibilityFilter): ISetVisibilityFilter {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter
    }
}