import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const ideas = () => {
  return db.idea.findMany()
}

export const idea = ({ id }: Prisma.IdeaWhereUniqueInput) => {
  return db.idea.findUnique({
    where: { id },
  })
}

interface CreateIdeaArgs {
  input: Prisma.IdeaCreateInput
}

export const createIdea = ({ input }: CreateIdeaArgs) => {
  return db.idea.create({
    data: input,
  })
}

interface UpdateIdeaArgs extends Prisma.IdeaWhereUniqueInput {
  input: Prisma.IdeaUpdateInput
}

export const updateIdea = ({ id, input }: UpdateIdeaArgs) => {
  return db.idea.update({
    data: input,
    where: { id },
  })
}

export const deleteIdea = ({ id }: Prisma.IdeaWhereUniqueInput) => {
  return db.idea.delete({
    where: { id },
  })
}
