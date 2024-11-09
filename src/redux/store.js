import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

// Configure the store
const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable the serializable check (needed for redux-persist)
      immutableCheck: false,     // Disable immutable check for performance (optional)
    }),
});

// Create the persistor instance
const persistor = persistStore(store);

// Extract dispatch for use outside of components if needed
const { dispatch } = store;

// Custom hooks for using useDispatch and useSelector with type safety
const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, persistor, dispatch, useDispatch, useSelector };
