import React from 'react'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    //Here we could write javascript code, fucntions, and so on.
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, { text: inputText, completed: false, id:Math.random()*100 }
        ])
        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
  return (
    <form>
        <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className='todo-input'
        />
        <button onClick={submitTodoHandler} className='todo-button' type='submit'>
            <i className='fa fa-plus-square'></i>
        </button>
        <div className='select'>
            <select onChange={statusHandler} name='todos' className='filter-todo'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </div>
    </form>

    // <div>Form</div>
  )
}

export default Form