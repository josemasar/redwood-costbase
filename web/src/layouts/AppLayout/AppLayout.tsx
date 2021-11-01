import FrameAdmin from 'src/components/FrameAdmin'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <FrameAdmin>{children}</FrameAdmin>
    </>
  )
}

export default AppLayout
