import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Dashboard from 'src/components/Dashboard/Dashboard'

export const QUERY = gql`
  query {
    tasks {
      id
      ideaId
      title
      description
      owner
      status
      finished
      createdAt
    }
    ideas {
      id
      product
      title
      description
      value
      author
      vendor
      active
      finished
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ideas yet. '}
      <Link to={routes.newIdea()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ideas, tasks }: CellSuccessProps) => {
  return <Dashboard ideas={ideas} tasks={tasks} />
}
