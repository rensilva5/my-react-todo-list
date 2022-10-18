import React from 'react'

function Form() {
  return (
    <form>
        <input type="text" className='todo-input'/>
        <button className='todo-button' type='submit'>
            <i className='fa fa-plus-square'></i>
        </button>
        <div className='select'>
            <select name='todos' className='filter-todo'>
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