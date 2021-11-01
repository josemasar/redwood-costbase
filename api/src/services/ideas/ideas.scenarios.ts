import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdeaCreateArgs>({
  idea: {
    one: {
      data: {
        product: 'String',
        title: 'String',
        description: 'String',
        value: 1938698,
        author: 'String',
        vendor: 'String',
      },
    },
    two: {
      data: {
        product: 'String',
        title: 'String',
        description: 'String',
        value: 3028175,
        author: 'String',
        vendor: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
