import React, { useState,useEffect } from 'react'
import Buttons from './Buttons'
import {useDispatch, useSelector} from 'react-redux'
import {CompletedTasks} from '../features/userSlice'


function ListOfTodos() {
  const showingTasks = useSelector((state) => state.TaskSlice.showedTasks);
  console.log(showingTasks.map(t => ({ id: t.id, comp: t.comp })));
  const dispatch = useDispatch()
  const completed = (id,bool) => {
      dispatch(CompletedTasks({id : id,comp : !bool}))
  }
  return (
    <div className='relative left-1/2 -translate-x-1/2 bg-black/40 w-[50vw] flex flex-col gap-10 pb-5 justify-center items-center'>
      <div className='relative left-1/2 -translate-x-1/2 w-[50vw] flex flex-col gap-5 p-10 justify-center items-center  '>  
        {showingTasks.map((task) => 
        <button key={task.id} onClick={() => { 
          completed(task.id,task.comp)} } className = { task.comp ? 'relative rounded-xl w-[40vw] h-15 line-through bg-white text-black ' : 'relative rounded-xl w-[40vw] h-15 bg-white text-black ' }>
          {/* this is the property task which hold the text of the task written by the user */}
          {task.task}
          <div className='absolute text-black left-[85%] top-[66%]'>{task.Time}</div>
        </button> )}
      </div>
      <Buttons/>
    </div>
  )
}

export default ListOfTodos