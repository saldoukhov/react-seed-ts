import * as React from "react";
import {ITodo} from "../types";
import Todo from "./Todo";

export interface ITodoListProps {
    todos?: ITodo[],
    onTodoClick?: (todo: ITodo) => void
}

const TodoList = ({todos, onTodoClick}: ITodoListProps) =>
        <ul>
            {todos!.map((todo, index) => (
                <Todo key={index} todo={todo} onClick={onTodoClick!}/>
            ))}
        </ul>;

export default TodoList;