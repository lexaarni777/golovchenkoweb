// src/features/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Определите начальное состояние
  items: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Определите редюсеры
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Экспортируйте действия и редюсер
export const { addItem, removeItem } = exampleSlice.actions;
export default exampleSlice.reducer;