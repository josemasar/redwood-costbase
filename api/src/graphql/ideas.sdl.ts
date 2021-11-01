export const schema = gql`
  type Idea {
    id: Int!
    product: String!
    title: String!
    description: String!
    value: Int!
    author: String!
    vendor: String!
    active: Boolean
    finished: Boolean
    createdAt: DateTime!
  }

  type Query {
    ideas: [Idea!]! @requireAuth
    idea(id: Int!): Idea @requireAuth
  }

  input CreateIdeaInput {
    product: String!
    title: String!
    description: String!
    value: Int!
    author: String!
    vendor: String!
    active: Boolean
    finished: Boolean
  }

  input UpdateIdeaInput {
    product: String
    title: String
    description: String
    value: Int
    author: String
    vendor: String
    active: Boolean
    finished: Boolean
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @requireAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @requireAuth
    deleteIdea(id: Int!): Idea! @requireAuth
  }
`
