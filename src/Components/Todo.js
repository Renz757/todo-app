import { useState, useEffect } from 'react'

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const todoArray = JSON.parse(localStorage.getItem('todoData') || '[]')

const Todo = () => {

    const [todoState, setTodoState] = useState(todoArray);

    const onAddTodo = (todoObj) => {
        setTodoState(
            [
                ...todoState,
                todoObj
            ]
        );
        localStorage.setItem('todoData', JSON.stringify([...todoState, todoObj]))
    };

    const completeTodo = (id, isCompleted) => {
        //loop through array of objects and match id with the param id
        setTodoState(todoState.map(item => {
            if (item.id === id) {
                //update isCompleted
                item.isCompleted = !isCompleted
            }
            //return array with update, isCompleted 
            return item
        }));

        

    };

    //return new filtered array without the param that matches id
    const removeSelectedItem = id => {
        setTodoState(todoState.filter(item => item.id !== id))
        localStorage.setItem('todoData', JSON.stringify(todoState.filter(item => item.id !== id)))
    };



    return (
        <>
            <div className="h-auto w-9/12 mx-auto relative top-20">
                <TodoInput onAddTodo={onAddTodo} />
                <TodoList todoState={todoState} onRemoveItem={removeSelectedItem} onCompleteTodo={completeTodo} />
            </div>
        </>
    );
};

export default Todo;