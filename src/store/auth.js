import { createSlice } from "@reduxjs/toolkit"
const initialStateAuth={
    isAuthentificated:false
}


const authSlice=createSlice({
    name:'auth',
    initialState:initialStateAuth,
    reducers:{
        login(state){
            state.isAuthentificated=true
        },
        logout(state){
            state.isAuthentificated=false
        }
    }
})
export const authActions=authSlice.actions

export default authSlice.reducer