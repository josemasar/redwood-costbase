import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Idea/IdeasCell'

import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
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

const IdeasList = ({ ideas }) => {
  const [deleteIdea] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea deleted')
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
    if (confirm('Are you sure you want to delete idea ' + id + '?')) {
      deleteIdea({ variables: { id } })
    }
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Vendor
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Active
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Finished
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-2xl font-bold uppercase tracking-wider text-gray-500"
                  >
                    Created at
                  </th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {ideas.map((idea) => (
                  <tr key={idea.id}>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.id)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.product)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.title)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.value)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.author)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {truncate(idea.vendor)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {checkboxInputTag(idea.active)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {checkboxInputTag(idea.finished)}
                    </td>
                    <td className="whitespace-nowrap px-2 py-4 text-xl text-gray-500">
                      {timeTag(idea.createdAt)}
                    </td>
                    <td className="whitespace-nowrap py-4 text-xl font-medium">
                      <Link
                        to={routes.idea({ id: idea.id })}
                        title={'Show idea ' + idea.id + ' detail'}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <span className="inline-flex rounded-full bg-indigo-100 px-2 font-semibold">
                          Show
                        </span>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-2xl font-medium">
                      <Link
                        to={routes.editIdea({ id: idea.id })}
                        title={'Edit idea ' + idea.id}
                        className=" hover:text-indigo-900"
                      >
                        <RiEdit2Fill />
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-2xl font-medium">
                      <button
                        type="button"
                        title={'Delete idea ' + idea.id}
                        onClick={() => onDeleteClick(idea.id)}
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
  )
}

export default IdeasList
