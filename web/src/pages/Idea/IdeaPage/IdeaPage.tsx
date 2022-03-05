import IdeaCell from 'src/components/Idea/IdeaCell'

type IdeaPageProps = {
  id: Int
}

const IdeaPage = ({ id }: IdeaPageProps) => {
  return <IdeaCell id={id} />
}

export default IdeaPage
