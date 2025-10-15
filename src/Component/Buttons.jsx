import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {showingTasks} from '../features/userSlice'
function Buttons() {
  const dispatch = useDispatch();
  const AllTasks = useSelector((state) => state.TaskSlice.Tasks)
  const ComletedTasks = useSelector((state) => state.TaskSlice.CompletedTasks)
  const NotComTasks = useSelector((state) => state.TaskSlice.NotComTasks)

  return (  
    <div className='flex flex-wrap gap-3'>
        <button onClick={() => dispatch(showingTasks(AllTasks))} className='w-20 h-12 bg-blue-600 text-white rounded-md '>
            All tasks
        </button>
        <button onClick={() => dispatch(showingTasks(ComletedTasks))} className='w-20 h-12 bg-blue-600 text-white rounded-md '>Completed tasks</button>
        <button onClick={() => dispatch(showingTasks(NotComTasks))} className='w-30 h-12 bg-blue-600 text-white rounded-md '>None completed tasks</button>
    </div>
  )
}

export default Buttons