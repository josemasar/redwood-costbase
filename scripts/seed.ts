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
    const data: Prisma.IdeaCreateInput[] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },

      {
        product: 'E',
        title: 'title',
        description: 'description',
        value: 866,
        author: 'E4',
        vendor: 'V3',
        active: true,
        finished: false,
      },
      {
        product: 'E',
        title: 'title',
        description: 'description',
        value: 122,
        author: 'E4',
        vendor: 'V1',
        active: true,
        finished: false,
      },
      {
        product: 'A',
        title: 'title',
        description: 'description',
        value: 89,
        author: 'E2',
        vendor: 'V3',
        active: true,
        finished: false,
      },
      {
        product: 'B',
        title: 'title',
        description: 'description',
        value: 349,
        author: 'E1',
        vendor: 'V1',
        active: false,
        finished: true,
      },
      {
        product: 'B',
        title: 'title',
        description: 'description',
        value: 221,
        author: 'E5',
        vendor: 'V1',
        active: true,
        finished: true,
      },
      {
        product: 'D',
        title: 'title',
        description: 'description',
        value: 38,
        author: 'E5',
        vendor: 'V1',
        active: true,
        finished: false,
      },
      {
        product: 'D',
        title: 'title',
        description: 'description',
        value: 38,
        author: 'E5',
        vendor: 'V1',
        active: true,
        finished: false,
      },
      {
        product: 'D',
        title: 'title',
        description: 'description',
        value: 771,
        author: 'E4',
        vendor: 'V5',
        active: true,
        finished: true,
      },
      {
        product: 'B',
        title: 'title',
        description: 'description',
        value: 801,
        author: 'E3',
        vendor: 'V4',
        active: true,
        finished: true,
      },
      {
        product: 'C',
        title: 'title',
        description: 'description',
        value: 671,
        author: 'E3',
        vendor: 'V1',
        active: false,
        finished: false,
      },
      {
        product: 'E',
        title: 'title',
        description: 'description',
        value: 785,
        author: 'E1',
        vendor: 'V5',
        active: true,
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
      data.map(async (data: Prisma.IdeaCreateManyInput) => {
        const record = await db.idea.createMany({
          data: {
            product: data.product,
            title: data.title,
            description: data.description,
            value: data.value,
            author: data.author,
            vendor: data.vendor,
            active: data.active,
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
