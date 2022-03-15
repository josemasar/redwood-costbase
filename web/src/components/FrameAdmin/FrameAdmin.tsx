import NavBarAdmin from 'src/components/NavBarAdmin'

const FrameAdmin = ({ children }) => {
  return (
    <>
      <NavBarAdmin />
      <main>{children}</main>
    </>
  )
}

export default FrameAdmin
