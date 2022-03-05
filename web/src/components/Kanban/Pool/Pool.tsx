import { Link, routes } from '@redwoodjs/router'

const Pool = ({ tasks, title }) => {
  console.log(title)
  const filteredTasks = tasks.filter((x) => x.status.includes(title))
  console.log(filteredTasks)

  return (
    <>
      <div className="p-3 bg-white rounded-md">
        <h3 className="text-3xl text-gray-900 flex justify-center mb-6 ">
          {title}
        </h3>
        <ul className="bg-white">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Link
                to={routes.task({ id: task.id })}
                className="block p-5 m-2 mb-4 bg-white rounded-md shadow"
              >
                <div className="flex justify-between m-2">
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
