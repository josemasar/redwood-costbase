import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const NavBarAdmin = () => {
  return (
    <div className="fixed top-0 left-0 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Ideas" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Tasks" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Results" />
      <SideBarIcon icon={<FaPoo size="20" />} text="Configuration" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Configuration" />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)

const Divider = () => <hr className="sidebar-hr" />

export default NavBarAdmin
