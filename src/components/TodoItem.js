import React from 'react'
import Button from './Button'

const TodoItem = () => {
    return (
        <div className='flex justify-between items-center text-white bg-mainBlue p-3'>
            TodoItem
            <div className='flex items-center gap-3'>
                <Button/>
                <Button/>
            </div>
        </div>
    )
}

export default TodoItem