import * as React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions";

const AddTodoComponent = ({dispatch} : any) => {

    let input: HTMLInputElement | null;

    return (
        <div>
            <form onSubmit={submit}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );

    function submit(e: any) {
        e.preventDefault();
        if (!input || !input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value));
        input.value = ''
    }
};

const AddTodo = connect()(AddTodoComponent);

export {AddTodo}
