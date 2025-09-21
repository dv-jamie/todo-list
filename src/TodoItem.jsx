function TodoItem({ todos, deleteTodo }) {
    return(
        <>
            {
                todos.map((todo, i) => {
                    return (
                    <li key={i} className='todo-item'>
                        <input type='checkbox' />
                        <p>{todo}</p>
                        <button
                        className='delete-button'
                        onClick={() => deleteTodo(i)}
                        >X</button>
                    </li>
                    )
                })
            }
        </>
    )
}

export default TodoItem;