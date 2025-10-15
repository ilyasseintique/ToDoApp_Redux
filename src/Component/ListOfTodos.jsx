import React, { useState } from 'react'
import Buttons from './Buttons'
import {useDispatch, useSelector} from 'react-redux'
import {addTask,CompletedTasks} from '../features/userSlice'


function ListOfTodos() {
  const showingTasks = useSelector((state) => state.TaskSlice.showedTasks);
  const dispatch = useDispatch()
  const completed = (id,task,toggling) => {
    if (toggling) {
      dispatch(CompletedTasks({ task:task, id : id }))
    }
  }
  const [toggling,setToggling] = useState(false)
  return (
    <div className='relative left-1/2 -translate-x-1/2 bg-black/40 w-[50vw] flex flex-col gap-10 pb-5 justify-center items-center'>
      <div className='relative left-1/2 -translate-x-1/2 w-[50vw] flex flex-col gap-5 p-10 justify-center items-center '>  
        {showingTasks.map((task) => 
        <button onClick={() => { setToggling(!toggling) ; completed(task.id,task.task,toggling)} } className = {toggling ? 'w-[40vw] h-15 bg-white text-black ' : 'w-[40vw] h-15 line-through bg-white text-black ' }>
          {/* this is the property task which hold the text of the task written by the user */}
          {task.task}
        </button> )}
      </div>
      <Buttons/>
    </div>
  )
}

export default ListOfTodos