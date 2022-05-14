import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Task/TasksCell'

import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'

import Kanban from 'src/components/Kanban/Kanban/Kanban'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleDateString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TasksList = ({ tasks }) => {
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="table-th">
                      Id
                    </th>
                    <th scope="col" className="table-th">
                      Idea id
                    </th>
                    <th scope="col" className="table-th">
                      Title
                    </th>
                    <th scope="col" className="table-th">
                      Description
                    </th>
                    <th scope="col" className="table-th">
                      Owner
                    </th>
                    <th scope="col" className="table-th">
                      Status
                    </th>
                    <th scope="col" className="table-th">
                      Finished
                    </th>
                    <th scope="col" className="table-th">
                      Created at
                    </th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td className="table-td">{truncate(task.id)}</td>
                      <td className="table-td">{truncate(task.ideaId)}</td>
                      <td className="table-td">{truncate(task.title)}</td>
                      <td className="table-td">{truncate(task.description)}</td>
                      <td className="table-td">{truncate(task.owner)}</td>
                      <td className="table-td">{truncate(task.status)}</td>
                      <td className="table-td">
                        {checkboxInputTag(task.finished)}
                      </td>
                      <td className="table-td">{timeTag(task.createdAt)}</td>
                      <td className="table-td">
                        <Link
                          to={routes.task({ id: task.id })}
                          title={'Show task ' + task.id + ' detail'}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <span className="button_show">Show</span>
                        </Link>
                      </td>
                      <td className="button_edit_delete">
                        <Link
                          to={routes.editTask({ id: task.id })}
                          title={'Edit task ' + task.id}
                          className=" hover:text-indigo-900"
                        >
                          <RiEdit2Fill />
                        </Link>
                      </td>
                      <td className="button_edit_delete">
                        <button
                          type="button"
                          title={'Delete task ' + task.id}
                          onClick={() => onDeleteClick(task.id)}
                          className="hover:text-indigo-900"
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Kanban tasks={tasks} />
    </>
  )
}

export default TasksList
