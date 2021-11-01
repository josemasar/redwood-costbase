import type { EditIdeaById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import IdeaForm from 'src/components/Idea/IdeaForm'

export const QUERY = gql`
  query EditIdeaById($id: Int!) {
    idea: idea(id: $id) {
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
const UPDATE_IDEA_MUTATION = gql`
  mutation UpdateIdeaMutation($id: Int!, $input: UpdateIdeaInput!) {
    updateIdea(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ idea }: CellSuccessProps<EditIdeaById>) => {
  const [updateIdea, { loading, error }] = useMutation(UPDATE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea updated')
      navigate(routes.ideas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateIdea({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Idea {idea.id}</h2>
      </header>
      <div className="rw-segment-main">
        <IdeaForm idea={idea} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
