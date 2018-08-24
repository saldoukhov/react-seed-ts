import {TodoAction} from "../actions";
import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "../constants";
import {IStoreState, ITodo} from "../types";

export function todoReducers(state: IStoreState, action: TodoAction): IStoreState {
    switch (action.type) {
        case ADD_TODO:
            const newTodo: ITodo = {
                text: action.text,
                completed: false
            };
            return {
                ...state, todoList: [...state.todoList, newTodo]
            };
        case TOGGLE_TODO:
            const newTodoList = state.todoList.map(x => x === action.todo
                ? {text: action.todo.text, completed: !action.todo.completed}
                : x
            );
            return {
                ...state, todoList: newTodoList
            };
        case SET_VISIBILITY_FILTER:
            return {
                ...state, visibilityFilter: action.filter
            }
    }
    return state;
}