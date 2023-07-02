import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    accounts : [
      {
        id: 1,
        customerName:"Israa Othman",
        accountNumber: "123456",
        accountType: "Savings"
      },
      {
        id: 2,
        customerName:"Ahmad Zahran",
        accountNumber: "987654",
        accountType: "Student accounts"
      }
],
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes.
    //   // Also, no return statement is required from these functions.
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default bankSlice.reducer