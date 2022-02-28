import { Link, routes } from '@redwoodjs/router'

const NavBar = () => {
  return (
    <>
      <header className="shadow-sm bg-gray-900">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <img
                src="/static-files/costbase_logo.svg"
                className="object-top h-16"
                alt="costbase logo"
              />
            </div>

            <nav className="hidden space-x-8 text-sm font-medium md:flex ">
              <a className="text-gray-500" href="">
                About
              </a>
              <a className="text-gray-500" href="">
                Blog
              </a>
              <a className="text-gray-500" href="">
                Projects
              </a>
              <a className="text-gray-500" href="">
                Contact
              </a>
            </nav>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <Link to={routes.login()}>
                <button className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
                  {' '}
                  Log in{' '}
                </button>
              </Link>
              <Link to={routes.login()}>
                <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
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
