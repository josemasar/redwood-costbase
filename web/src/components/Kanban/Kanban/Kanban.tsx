import Pool from '../Pool'
import type { FindTaskById } from 'types/graphql'
import type { CellSuccessProps } from '@redwoodjs/web'

const Kanban = ({ tasks }: CellSuccessProps<FindTaskById>) => {
  return (
    <>
      <div className="mt-4">
        <main className="mt-5 flex p-3">
          <div className="grid grid-cols-3 gap-4">
            <Pool tasks={tasks} title="Work Queue" />
            <Pool tasks={tasks} title="Work in Progress" />
            <Pool tasks={tasks} title="Completed" />
          </div>
        </main>
      </div>
    </>
  )
}

export default Kanban
