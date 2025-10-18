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
            state.showedTasks = state.Tasks;
            state.NotComTasks = state.Tasks
        }, 
        CompletedTasks : (state,action) => {
            state.Tasks = state.Tasks.map((elem) => { if (elem.id == action.payload.id) {elem.comp = action.payload.comp}
                            return elem
            })
            state.CompletedTasks = state.Tasks.filter((elem) => elem.comp === true);
            state.NotComTasks = state.Tasks.filter((elem) => elem.comp === false);
            state.showedTasks = state.Tasks;
        },
        showingTasks : (state,action) => {
            state.showedTasks = action.payload;
        },
    }
})
export const {addTask,CompletedTasks,showingTasks} = userSlice.actions
export default userSlice.reducer
