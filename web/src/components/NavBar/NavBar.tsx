import { Link, routes } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <>
      <div className="container mx-auto min-w-full h-20 bg-gray-800 opacity-95">
        <div className="flex flex-row">
          <div className="container p-4 flex justify-start ">
            <p className="ml-20 text-4xl font-bold text-white">Logo</p>
          </div>
          <div className="container flex justify-end">
            <Link to={routes.login()}>
              <button className="btn-blue mr-14">Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
