import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

type TaskLayoutProps = {
  children: React.ReactNode
}

const TasksLayout = ({ children }: TaskLayoutProps) => {
  return (
    <AppLayout>
      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.tasks()} className="rw-link">
              Tasks
            </Link>
          </h1>
          <Link to={routes.newTask()}>
            <div className="flex justify-center bg-indigo-100 hover:bg-indigo-300 rounded border-0 cursor-pointer leading-loose  text-gray-600 py-1 px-4  font-semibold text-s uppercase no-underline tracking-wide">
              + New Task
            </div>
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </AppLayout>
  )
}

export default TasksLayout
