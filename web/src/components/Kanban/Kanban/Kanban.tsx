import Pool from '../Pool/Pool'

const Kanban = ({ tasks }) => {
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
