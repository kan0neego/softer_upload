import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
