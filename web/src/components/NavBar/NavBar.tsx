import { Link, routes } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <>
      <header className="bg-gray-900 shadow-sm">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <img
                src="/static-files/costbase_logo.svg"
                className="h-16 object-top"
                alt="costbase logo"
              />
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex ">
              <a className="text-gray-300" href="#features">
                Features
              </a>
              <a className="text-gray-300" href="#method">
                Method
              </a>
              <a className="text-gray-300" href="#customers">
                Customers
              </a>
              <a className="text-gray-300" href="#technology">
                Technology
              </a>
            </nav>

            <div className="hidden flex-1 items-center justify-end space-x-4 sm:flex">
              <Link to={routes.login()}>
                <button className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                  {' '}
                  Log in{' '}
                </button>
              </Link>
              <Link to={routes.login()}>
                <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
                  {' '}
                  Sign up{' '}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar
