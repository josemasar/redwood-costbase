import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

type IdeaLayoutProps = {
  children: React.ReactNode
}

const IdeasLayout = ({ children }: IdeaLayoutProps) => {
  return (
    <AppLayout>
      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.ideas()} className="rw-link">
              Ideas
            </Link>
          </h1>
          <Link to={routes.newIdea()}>
            <div className="text-s flex cursor-pointer justify-center rounded border-0 bg-indigo-100 py-1  px-4 font-semibold uppercase  leading-loose tracking-wide text-gray-600 no-underline hover:bg-indigo-300">
              + New Idea
            </div>
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </AppLayout>
  )
}

export default IdeasLayout
