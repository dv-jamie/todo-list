import { useState } from 'react'
import './reset.css'
import './App.css'

function App() {
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
      <header className='header'>
        <h1 className='page-title'>TODO LIST</h1>
      </header>
      
      <div className='input-wrap'>
        <input
          className='user-input'
          placeholder='할 일을 입력하세요'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <button className='add-button' onClick={addTodo}>추가</button>
      </div>

      <div className='todo-list-wrap'>
        <h2 className='list-title'>할 일</h2>

        <ul className='todo-list'>
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
        </ul>
      </div>
    </>
  )
}

export default App
