import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type IdeaLayoutProps = {
  children: React.ReactNode
}

const IdeasLayout = ({ children }: IdeaLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.ideas()}
            className="rw-link"
          >
            Ideas
          </Link>
        </h1>
        <Link
          to={routes.newIdea()}
        >
         <div className="flex justify-center bg-indigo-100 hover:bg-indigo-300 rounded border-0 cursor-pointer leading-loose  text-gray-600 py-1 px-4  font-semibold text-s uppercase no-underline tracking-wide">
          + New Idea
         </div>
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default IdeasLayout
