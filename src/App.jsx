import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import ToDoForm from './Component/ToDoForm'
import ListOfTodos from './Component/ListOfTodos'
import {store} from './Redux/Store'
const App = () => {
  return (
      <Provider store={store}>
        <div className='bg-linear-90 from-black/80 to-black h-[100vh]'>
          <ToDoForm/>
          <ListOfTodos/>
        </div>
      </Provider>
)
}

export default App