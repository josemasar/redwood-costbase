import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        owner: 'String',
        status: 'String',
        idea: {
          create: {
            product: 'String',
            title: 'String',
            description: 'String',
            value: 7673363,
            author: 'String',
            vendor: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        owner: 'String',
        status: 'String',
        idea: {
          create: {
            product: 'String',
            title: 'String',
            description: 'String',
            value: 6378676,
            author: 'String',
            vendor: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
