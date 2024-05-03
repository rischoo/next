'use client'
import { Provider } from 'react-redux'
import { store, persistor } from '@store/storage'
import { PersistGate } from 'redux-persist/integration/react'

function Wrapper({ children }: { readonly children: React.ReactNode }) {
  return <>{children}</>
}

export default function ContainerProvider({ children }: { readonly children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>{children}</Wrapper>
      </PersistGate>
    </Provider>
  )
}
