export const schema = gql`
  type Task {
    id: Int!
    idea: Idea!
    ideaId: Int!
    title: String!
    description: String!
    owner: String!
    status: String!
    finished: Boolean
    createdAt: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    ideaId: Int!
    title: String!
    description: String!
    owner: String!
    status: String!
    finished: Boolean
  }

  input UpdateTaskInput {
    ideaId: Int
    title: String
    description: String
    owner: String
    status: String
    finished: Boolean
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
