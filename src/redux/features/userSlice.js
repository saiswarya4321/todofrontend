import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    auth:{},
  },
  reducers: {
    saveuser: (state,action) => {
      state.auth=action.payload;
    },
    clearuser: (state) => {
      state.auth={}
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { saveuser, clearuser } = userSlice.actions

export default userSlice.reducer