import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//slice
import appReducer from "./slices/app"
import authReducer from "./slices/auth"

const rootPersistConfig = {
  key : "root",
  storage,
  keyPrefix:"redux"                  
}

const rootReducer = combineReducers({
  // create and map reducer  
  app:appReducer,
  auth:authReducer                
})

export {rootPersistConfig,rootReducer}