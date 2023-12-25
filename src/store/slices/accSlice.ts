import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Set UserName",
  img: "https://cdn.icon-icons.com/icons2/1446/PNG/256/22261pandaface_98765.png",
  age: 21,
  profileDesc: "Gay Sex is the Best",
  accEmail: null,
};

const accSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccSettings(state, action) {
      state.userName = action.payload.userName;
      state.img = action.payload.img;
      state.age = action.payload.age;
      state.profileDesc = action.payload.profileDesc;
      state.accEmail = action.payload.accEmail;
    },
  },
});

export const { setAccSettings } = accSlice.actions;
export default accSlice.reducer;
