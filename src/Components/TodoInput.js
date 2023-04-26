import { useState } from "react";

const TodoInput = (props) => {
    const [currentInput, setCurrentInput] = useState('');
    const [validTodo, setValidTodo] = useState(true);
    

    const addTodoHandler = (event) => {
        setCurrentInput(event.target.value)
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        
        if (currentInput === '') {
            console.log('Please Enter ToDo')
            console.log(currentInput)
            setValidTodo(false)
            return;
        }

        const todoData = {
            id: Math.random().toString(),
            title: currentInput,
            isCompleted: false
        }

        props.onAddTodo(todoData)
        setCurrentInput('')
        setValidTodo(true)
    }

    return (
        <>
            <form className="flex gap-1 justify-between" onSubmit={submitHandler}>
                <input className={`rounded grow p-2 ${validTodo ? 'border-none' : 'border-2 border-solid border-red-400 animate-pulse'}`} type="text" value={currentInput} onChange={addTodoHandler}/>
                <button className="p-2 bg-teal-700 rounded">Enter ToDo</button>
            </form>
        </>
    );
}

export default TodoInput;