import { Link, routes } from '@redwoodjs/router'

const Pool = ({ tasks, title }) => {
  console.log(title)
  const filteredTasks = tasks.filter((x) => x.status.includes(title))
  console.log(filteredTasks)

  return (
    <>
      <div className="rounded-md bg-white p-3">
        <h3 className="mb-6 flex justify-center text-3xl text-gray-900 ">
          {title}
        </h3>
        <ul className="bg-white">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Link
                to={routes.task({ id: task.id })}
                className="m-2 mb-4 block rounded-md bg-white p-5 shadow"
              >
                <div className="m-2 flex justify-between">
                  <p className="text-xl font-bold leading-snug text-gray-900">
                    {task.title}
                  </p>
                  <span>
                    <img className="h-6 w-6 rounded-full" src="" alt="" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="text-lg text-gray-900">
                    {task.description}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="text-lg text-gray-900">{task.owner}</div>
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
