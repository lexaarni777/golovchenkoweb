import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/exampleSlice'; // Импортируйте корневой редюсер

const store = configureStore({
  reducer: rootReducer,
});

export default store;