import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '@store/reducers'

const persistConfig = {
  key: 'root',
  storage,
  version: 2,
  whiteList: ['userReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const setItem = <T,>(key: string, value: T) => {
  if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    const localStorageData = localStorage.getItem(key)
    if (!localStorageData) throw new Error(`[Log]: ${key} is not found`)
    return JSON.parse(localStorageData)
  }
}
