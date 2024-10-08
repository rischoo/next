import ContainerProvider from '@components/organisms/Provider'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  return (
    <ContainerProvider>
      <div className='h-screen'>{children}</div>
    </ContainerProvider>
  )
}
