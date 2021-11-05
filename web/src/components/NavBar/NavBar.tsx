import { Link, routes } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <>
      <div className="container mx-auto min-w-full h-22 bg-gray-800 opacity-95">
        <div className="flex flex-row">
          <div className="container p-4 flex justify-start">
            <img
              src="/static-files/costbase_logo.svg"
              className="object-top h-16"
              alt="costbase logo"
            />
          </div>
          <div className="container flex justify-end">
            <Link to={routes.login()}>
              <button className="btn-blue mr-16 mt-6">Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
