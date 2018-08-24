import * as React from "react";
import {ITodo} from "../types";

export interface ITodoProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void
}

function Todo({onClick, todo}: ITodoProps) {
    return (
        <li
            onClick={click}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
        >
            {todo.text}
        </li>
    );

    function click() {
        return onClick(todo);
    }
}

export default Todo;
