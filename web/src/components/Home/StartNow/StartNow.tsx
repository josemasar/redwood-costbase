import { Link, routes } from '@redwoodjs/router'

const StartNow = () => {
  return (
    <>
      <section>
        {/* Background: bg-layered bg-no-repeat */}
        <div className="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Start your trial now.
            </h2>

            <p className="max-w-xl mx-auto mt-6 text-lg">
              Costbase is a project in development. The objective is to create a
              SaaS solution to manage cost in industrial companies with complex
              assembled products. The project started as a #365DaysOfCode
              challenge by @josemasar in May 2021. Github profile The intend is
              to release a Minimum Viable Product in 2022. If you are
              insterested in contributing, please get in touch!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                href="/get-started"
              >
                Start free trial
              </a>
              <a
                href=""
                className="block px-5 py-3 mt-4 font-medium text-blue-500 rounded-lg hover:text-blue-600 sm:mt-0"
              >
                Schedule a demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartNow
