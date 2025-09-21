function InputForm({ inputValue, setInputValue, addTodo }) {
    return(
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
    )
}

export default InputForm;