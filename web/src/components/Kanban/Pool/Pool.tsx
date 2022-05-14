import { Link, routes } from '@redwoodjs/router'

const Pool = ({ tasks, title }) => {
  const filteredTasks = tasks.filter((x) => x.status.includes(title))

  return (
    <>
      <div className="flex flex-col bg-white p-3 align-middle">
        <h3 className="mb-6 flex justify-center text-xl font-black text-gray-900 ">
          {title}
        </h3>
        <ul className="border-2 border-slate-500 bg-white">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Link
                to={routes.task({ id: task.id })}
                className="m-2 mb-4 block rounded-md bg-white p-5 "
              >
                <div className="m-2 flex justify-between">
                  <p className="mr-4 font-bold leading-snug text-gray-700">
                    {task.title}
                  </p>
                  <span>
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://josemasar.vercel.app/images/profile.jpg"
                      alt="josemasar"
                    />
                  </span>
                </div>
                <div className="flex justify-center">
                  <div className="text-xs text-gray-900">
                    {task.description}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-xs text-gray-900">
                    Owner: {task.owner}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Pool
