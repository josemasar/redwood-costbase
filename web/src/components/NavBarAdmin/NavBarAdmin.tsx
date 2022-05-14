import { Link, routes } from '@redwoodjs/router'
import { BsGearFill, BsBarChartFill } from 'react-icons/bs'
import { FaLightbulb, FaHome, FaTasks } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'

const NavBarAdmin = () => {
  return (
    <div className="fixed top-0 left-0 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-lg">
      <Link to={routes.home()}>
        {' '}
        <SideBarIcon icon={<FaHome size="28" />} text="Costbase" />
      </Link>
      <Divider />
      <Link to={routes.dashboard()}>
        <SideBarIcon icon={<MdSpaceDashboard size="28" />} text="Dashboard" />
      </Link>
      <Link to={routes.ideas()}>
        <SideBarIcon icon={<FaLightbulb size="28" />} text="Ideas" />
      </Link>
      <Link to={routes.tasks()}>
        <SideBarIcon icon={<FaTasks size="32" />} text="Tasks" />
      </Link>
      <Link to={routes.tasks()}>
        <SideBarIcon icon={<BsBarChartFill size="20" />} text="Results" />
      </Link>
      <Divider />
      <Link to={routes.tasks()}>
        <SideBarIcon icon={<BsGearFill size="22" />} text="Configuration" />
      </Link>
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
