import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import IdeaForm from 'src/components/Idea/IdeaForm'

const CREATE_IDEA_MUTATION = gql`
  mutation CreateIdeaMutation($input: CreateIdeaInput!) {
    createIdea(input: $input) {
      id
    }
  }
`

const NewIdea = () => {
  const [createIdea, { loading, error }] = useMutation(CREATE_IDEA_MUTATION, {
    onCompleted: () => {
      toast.success('Idea created')
      navigate(routes.ideas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createIdea({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Idea</h2>
      </header>
      <div className="rw-segment-main">
        <IdeaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdea
