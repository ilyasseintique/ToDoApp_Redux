import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTask } from '../features/userSlice'

function ToDoForm() {
  const dispatch = useDispatch();
  const [inputTask , setInputTask] = useState('')
  const now = new Date();
  const time = now.toLocaleDateString();
  const addingTask = (e) => {
    e.preventDefault()
    if (inputTask.trim() !== ''){
      dispatch(addTask({
        id : Date.now(),
        task : inputTask,
        comp : false,
        Time : time
      }))
    } 
    setInputTask('')
  }
  return (
    <form onSubmit={addingTask}>
      <input 
      id='addtodo' 
      type="text" 
      placeholder='enter your task to do...'  
      className='rounded-xl relative left-1/2 -translate-x-1/2 bg-pink-400/30 text-white p-5 outline-none my-10'
      value = {inputTask}
      onChange = {(e) => setInputTask(e.target.value)}
      />
    </form>
  )
}

export default ToDoForm