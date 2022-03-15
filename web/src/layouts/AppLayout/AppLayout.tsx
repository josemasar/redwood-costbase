import NavBarAdmin from 'src/components/NavBarAdmin'

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBarAdmin />
      <div className="ml-20">{children}</div>
    </>
  )
}

export default AppLayout
