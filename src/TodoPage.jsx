import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import InputForm from './InputForm';
import TodoList from './TodoList';

function TodoPage() {
    const dbTodos = ['자바스크립트 공부하기', '파스타 먹기']
    const [todos, setTodos] = useState(dbTodos);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const next = inputValue.trim();
        if (!next) return;

        setTodos(prev => [next, ...prev]);
        setInputValue('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((_, i) => i !== id));
    }
    
    return (
        <>
            <Header />
        
            <InputForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTodo={addTodo}
            />

            <div className='todo-list-wrap'>
                <h2 className='list-title'>할 일</h2>

                <ul className='todo-list'>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
                </ul>
            </div>

            {/* <a href="링크">홈으로 돌아가기</a> */}
            <Link to="/">홈으로 돌아가기</Link>
        </>
    )
}

export default TodoPage