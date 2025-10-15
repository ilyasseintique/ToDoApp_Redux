import {createSlice} from '@reduxjs/toolkit'
 
const initialState = {
    Tasks : [],
    CompletedTasks : [],
    NotComTasks : [],
    showedTasks : []
}
export const userSlice = createSlice({
    name : 'TaskSlice',
    initialState,
    reducers : {
        addTask : (state,action) => {
            state.Tasks.push(action.payload);
        }, 
        CompletedTasks : (state,action) => {
            state.CompletedTasks.push(action.payload);
            state.NotComTasks = state.NotComTasks.filter((elem) => elem.id != action.payload.id);
        },
        showingTasks : (state,action) => {
            state.showedTasks = action.payload;
        },
    }
})
export const {addTask,CompletedTasks,showingTasks} = userSlice.actions
export default userSlice.reducer
