import { Link, routes } from '@redwoodjs/router'

const StartNow = () => {
  return (
    <>
      <section>
        {/* Background: bg-layered bg-no-repeat */}
        <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Start your trial now.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg">
              Costbase is a project in development. The objective is to create a
              SaaS solution to manage cost in industrial companies with complex
              assembled products. The project started as a #365DaysOfCode
              challenge by @josemasar in May 2021. Github profile The intend is
              to release a Minimum Viable Product in 2022. If you are
              insterested in contributing, please get in touch!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Start free trial
              </a>
              <a
                href=""
                className="mt-4 block rounded-lg px-5 py-3 font-medium text-blue-500 hover:text-blue-600 sm:mt-0"
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
