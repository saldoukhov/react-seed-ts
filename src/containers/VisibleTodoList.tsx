import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {IStoreState, ITodo, VisibilityFilter} from "../types";
import TodoList, {ITodoListProps} from "../components/TodoList";
import {TodoAction, toggleTodo} from "../actions";

function getVisibleTodos(todos: ITodo[], filter: VisibilityFilter): ITodo[] {
    switch (filter) {
        case VisibilityFilter.ShowAll:
            return todos;
        case VisibilityFilter.ShowCompleted:
            return todos.filter(t => t.completed);
        case VisibilityFilter.ShowActive:
            return todos.filter(t => !t.completed);
    }
}

export function mapStateToProps({todoList, visibilityFilter}: IStoreState) : ITodoListProps {
    return {
        todos: getVisibleTodos(todoList, visibilityFilter)
    };
}

export function mapDispatchToProps(dispatch: Dispatch<TodoAction>): ITodoListProps {
    return {
        onTodoClick: (todo: ITodo) => dispatch(toggleTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);