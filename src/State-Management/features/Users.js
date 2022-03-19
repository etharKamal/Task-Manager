import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
    SetStatus: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.task_status = !user.task_status;
          console.log (user.task_status)
        }
      });
    }
  },
});

export const { addUser, deleteUser, updateUsername, SetStatus } = userSlice.actions;
export default userSlice.reducer;
