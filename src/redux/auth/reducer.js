import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken (state) {
      state.token = null;
    }
  }
})

export default authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;
