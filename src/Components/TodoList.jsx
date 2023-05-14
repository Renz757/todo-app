import CompleteButton from "./UI/CompleteButton"
import DeleteButton from "./UI/DeleteButton"

const TodoList = (props) => {


    return (
        <>
            {props.todoState <= 0 ? (
                <p>No ToDos</p>
            ) : (
                <ul>
                    {props.todoState.map(item =>
                        <li key={item.id} className="flex justify-between mt-3 rounded gap-1 transition-all duration-1000 ease-in delay-150">
                         
                            <p className={`bg-slate-600 grow p-1 rounded-lg text-white flex justify-center items-center`}>
                                {item.title}
                                <span className={`${item.isCompleted ? 'h-0.5 w-4/12 absolute bg-slate-300' : 'hidden'} `}></span>
                            </p>
                            
                            <div className="flex gap-1">
                                <CompleteButton onCompleteTodo={props.onCompleteTodo.bind(null, item.id, item.isCompleted)} />
                                {/* Calling .bind(null, "passedParameter") on a functin passed down as props will all function to receive parameter */}
                                <DeleteButton onDeleteItem={props.onRemoveItem.bind(null, item.id)} />
                            </div>
                        </li>
                    )}
                </ul>
            )
            }
        </>
    );
}

export default TodoList;