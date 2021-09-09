import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
}

interface State {
  token: null | string
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state: State, action: { payload: string }) {
      state.token = action.payload;
    },
    removeToken (state: State) {
      state.token = null;
    }
  }
})

export default authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;
