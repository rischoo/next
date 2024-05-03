import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthData } from '@interfaces/auth'

const initialState: AuthData = {
  email: '',
  username: '',
  tokenSession: '',
  loginTimeStamp: null,
}

const dataUserSlice = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {
    setData: (_, action: PayloadAction<AuthData>) => ({
      ...action.payload,
    }),
    clear: () => ({ ...initialState }),
  },
})

export const userActions = dataUserSlice.actions
export const userReducer = dataUserSlice.reducer
