import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { loading: false },
  reducers: {
    toggle(state) {
      state.loading = !state.loading;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
