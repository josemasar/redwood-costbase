import { Link, routes } from '@redwoodjs/router'

const StartNow = () => {
  return (
    <div
      className="container mx-auto min-w-full min-h-full pb-28 flex flex-auto justify-center
    bg-layered bg-no-repeat"
    >
      <div className="my-36 lg:text-center">
        <p className="mt-2 text-3xl text-white leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Sign up today
        </p>
        <p className="mt-8 max-w-3xl text-xl text-gray-400 lg:mx-auto">
          Take advantage of this Open Source project
        </p>
        <Link to={routes.login()}>
          <button className="mt-20 py-2 bg-blue-500 text-xl text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75py-6 px-10">
            Start Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default StartNow
