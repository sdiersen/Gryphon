import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthStateType,
  LoginDTO,
  NewAccountDTO,
} from "../../types/accountTypes";
import axiosInstance from "../../api/axios";
import { AppThunk } from "../index";

const initialState: AuthStateType = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ username: string }>) => {
      state.isAuthenticated = true;
      state.user = { username: action.payload.username };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const newAccount =
  (userData: NewAccountDTO): AppThunk =>
  async (dispatch: any) => {
    try {
      await axiosInstance.post("api/account/newaccount", userData);
      dispatch(loginSuccess({ username: userData.username }));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

export const login = (userData: LoginDTO) => async (dispatch: any) => {
  try {
    await axiosInstance.post("api/account/login", userData);
    dispatch(loginSuccess({ username: userData.username }));
    return Promise.resolve({ message: "Login successful" });
  } catch (error) {
    console.error("Login failed:", error);
    return Promise.reject(error);
  }
};

export const updatePassword = (userData: LoginDTO) => async (dispatch: any) => {
  try {
    await axiosInstance.put("api/account/updatepassword", userData);
    dispatch(loginSuccess({ username: userData.username }));
    return Promise.resolve({ message: "Password updated" });
  } catch (error) {
    console.error("Password update failed:", error);
    return Promise.reject(error);
  }
};

export default authSlice.reducer;
