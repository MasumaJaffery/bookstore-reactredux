import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.category = action.payload === 'Under construction' ? 'Under construction' : state;
    },
  },
});

export default categorySlice.reducer;
export const { checkStatus } = categorySlice.actions;
