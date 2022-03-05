import { Page } from '@shopify/polaris'
import Pool from '../Pool/Pool'

const Kanban = ({ tasks }) => {
  return (
    <>
      <div className="mt-4">
        <Page fullWidth title="Kanban board">
          <main className="p-3 flex mt-5">
            <div className="grid grid-cols-3 gap-4">
              <Pool tasks={tasks} title="Work Queue" />
              <Pool tasks={tasks} title="Work in Progress" />
              <Pool tasks={tasks} title="Completed" />
            </div>
          </main>
        </Page>
      </div>
    </>
  )
}

export default Kanban
