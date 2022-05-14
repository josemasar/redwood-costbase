import type { Prisma } from '@prisma/client'

import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.TaskCreateInput[] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },

      {
        ideaId: 1,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E1',
        status: 'Work Queue',
        finished: false,
      },
      {
        ideaId: 2,
        title: 'Supplier negotation',
        description: 'Supplier negotation',
        owner: 'E2',
        status: 'Work in Progress',
        finished: false,
      },
      {
        ideaId: 3,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E4',
        status: 'Work in Progress',
        finished: false,
      },
      {
        ideaId: 4,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E5',
        status: 'Work Queue',
        finished: false,
      },
      {
        ideaId: 5,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E2',
        status: 'Work Queue',
        finished: false,
      },
      {
        ideaId: 6,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E1',
        status: 'Work Queue',
        finished: false,
      },
      {
        ideaId: 1,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E7',
        status: 'Work in Progress',
        finished: false,
      },
      {
        ideaId: 2,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E2',
        status: 'Work in Progress',
        finished: false,
      },
      {
        ideaId: 3,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E4',
        status: 'Work in Progress',
        finished: false,
      },
      {
        ideaId: 7,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E2',
        status: 'Completed',
        finished: true,
      },
      {
        ideaId: 8,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E2',
        status: 'Work Queue',
        finished: false,
      },
      {
        ideaId: 9,
        title: 'Reduce raw material quantity',
        description: 'Reduce raw material quantity',
        owner: 'E3',
        status: 'Completed',
        finished: true,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.js' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.TaskCreateManyInput) => {
        const record = await db.task.createMany({
          data: {
            ideaId: data.ideaId,
            title: data.title,
            description: data.description,
            owner: data.owner,
            status: data.status,
            finished: data.finished,
          },
        })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
