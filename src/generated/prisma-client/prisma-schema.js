module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCommit {
  count: Int!
}

type AggregatePullRequest {
  count: Int!
}

type AggregateRepo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Commit {
  id: ID!
  message: String!
  user: User!
  date: String!
  repo: Repo!
}

type CommitConnection {
  pageInfo: PageInfo!
  edges: [CommitEdge]!
  aggregate: AggregateCommit!
}

input CommitCreateInput {
  id: ID
  message: String!
  user: UserCreateOneWithoutCommitsInput!
  date: String!
  repo: RepoCreateOneWithoutCommitsInput!
}

input CommitCreateManyWithoutRepoInput {
  create: [CommitCreateWithoutRepoInput!]
  connect: [CommitWhereUniqueInput!]
}

input CommitCreateManyWithoutUserInput {
  create: [CommitCreateWithoutUserInput!]
  connect: [CommitWhereUniqueInput!]
}

input CommitCreateWithoutRepoInput {
  id: ID
  message: String!
  user: UserCreateOneWithoutCommitsInput!
  date: String!
}

input CommitCreateWithoutUserInput {
  id: ID
  message: String!
  date: String!
  repo: RepoCreateOneWithoutCommitsInput!
}

type CommitEdge {
  node: Commit!
  cursor: String!
}

enum CommitOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  date_ASC
  date_DESC
}

type CommitPreviousValues {
  id: ID!
  message: String!
  date: String!
}

input CommitScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  AND: [CommitScalarWhereInput!]
  OR: [CommitScalarWhereInput!]
  NOT: [CommitScalarWhereInput!]
}

type CommitSubscriptionPayload {
  mutation: MutationType!
  node: Commit
  updatedFields: [String!]
  previousValues: CommitPreviousValues
}

input CommitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommitWhereInput
  AND: [CommitSubscriptionWhereInput!]
  OR: [CommitSubscriptionWhereInput!]
  NOT: [CommitSubscriptionWhereInput!]
}

input CommitUpdateInput {
  message: String
  user: UserUpdateOneRequiredWithoutCommitsInput
  date: String
  repo: RepoUpdateOneRequiredWithoutCommitsInput
}

input CommitUpdateManyDataInput {
  message: String
  date: String
}

input CommitUpdateManyMutationInput {
  message: String
  date: String
}

input CommitUpdateManyWithoutRepoInput {
  create: [CommitCreateWithoutRepoInput!]
  delete: [CommitWhereUniqueInput!]
  connect: [CommitWhereUniqueInput!]
  set: [CommitWhereUniqueInput!]
  disconnect: [CommitWhereUniqueInput!]
  update: [CommitUpdateWithWhereUniqueWithoutRepoInput!]
  upsert: [CommitUpsertWithWhereUniqueWithoutRepoInput!]
  deleteMany: [CommitScalarWhereInput!]
  updateMany: [CommitUpdateManyWithWhereNestedInput!]
}

input CommitUpdateManyWithoutUserInput {
  create: [CommitCreateWithoutUserInput!]
  delete: [CommitWhereUniqueInput!]
  connect: [CommitWhereUniqueInput!]
  set: [CommitWhereUniqueInput!]
  disconnect: [CommitWhereUniqueInput!]
  update: [CommitUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CommitUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CommitScalarWhereInput!]
  updateMany: [CommitUpdateManyWithWhereNestedInput!]
}

input CommitUpdateManyWithWhereNestedInput {
  where: CommitScalarWhereInput!
  data: CommitUpdateManyDataInput!
}

input CommitUpdateWithoutRepoDataInput {
  message: String
  user: UserUpdateOneRequiredWithoutCommitsInput
  date: String
}

input CommitUpdateWithoutUserDataInput {
  message: String
  date: String
  repo: RepoUpdateOneRequiredWithoutCommitsInput
}

input CommitUpdateWithWhereUniqueWithoutRepoInput {
  where: CommitWhereUniqueInput!
  data: CommitUpdateWithoutRepoDataInput!
}

input CommitUpdateWithWhereUniqueWithoutUserInput {
  where: CommitWhereUniqueInput!
  data: CommitUpdateWithoutUserDataInput!
}

input CommitUpsertWithWhereUniqueWithoutRepoInput {
  where: CommitWhereUniqueInput!
  update: CommitUpdateWithoutRepoDataInput!
  create: CommitCreateWithoutRepoInput!
}

input CommitUpsertWithWhereUniqueWithoutUserInput {
  where: CommitWhereUniqueInput!
  update: CommitUpdateWithoutUserDataInput!
  create: CommitCreateWithoutUserInput!
}

input CommitWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  user: UserWhereInput
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  repo: RepoWhereInput
  AND: [CommitWhereInput!]
  OR: [CommitWhereInput!]
  NOT: [CommitWhereInput!]
}

input CommitWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCommit(data: CommitCreateInput!): Commit!
  updateCommit(data: CommitUpdateInput!, where: CommitWhereUniqueInput!): Commit
  updateManyCommits(data: CommitUpdateManyMutationInput!, where: CommitWhereInput): BatchPayload!
  upsertCommit(where: CommitWhereUniqueInput!, create: CommitCreateInput!, update: CommitUpdateInput!): Commit!
  deleteCommit(where: CommitWhereUniqueInput!): Commit
  deleteManyCommits(where: CommitWhereInput): BatchPayload!
  createPullRequest(data: PullRequestCreateInput!): PullRequest!
  updatePullRequest(data: PullRequestUpdateInput!, where: PullRequestWhereUniqueInput!): PullRequest
  updateManyPullRequests(data: PullRequestUpdateManyMutationInput!, where: PullRequestWhereInput): BatchPayload!
  upsertPullRequest(where: PullRequestWhereUniqueInput!, create: PullRequestCreateInput!, update: PullRequestUpdateInput!): PullRequest!
  deletePullRequest(where: PullRequestWhereUniqueInput!): PullRequest
  deleteManyPullRequests(where: PullRequestWhereInput): BatchPayload!
  createRepo(data: RepoCreateInput!): Repo!
  updateRepo(data: RepoUpdateInput!, where: RepoWhereUniqueInput!): Repo
  updateManyRepoes(data: RepoUpdateManyMutationInput!, where: RepoWhereInput): BatchPayload!
  upsertRepo(where: RepoWhereUniqueInput!, create: RepoCreateInput!, update: RepoUpdateInput!): Repo!
  deleteRepo(where: RepoWhereUniqueInput!): Repo
  deleteManyRepoes(where: RepoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PullRequest {
  id: ID!
  author: User!
  title: String!
  merged: Boolean!
}

type PullRequestConnection {
  pageInfo: PageInfo!
  edges: [PullRequestEdge]!
  aggregate: AggregatePullRequest!
}

input PullRequestCreateInput {
  id: ID
  author: UserCreateOneWithoutPullRequestsInput!
  title: String!
  merged: Boolean!
}

input PullRequestCreateManyWithoutAuthorInput {
  create: [PullRequestCreateWithoutAuthorInput!]
  connect: [PullRequestWhereUniqueInput!]
}

input PullRequestCreateWithoutAuthorInput {
  id: ID
  title: String!
  merged: Boolean!
}

type PullRequestEdge {
  node: PullRequest!
  cursor: String!
}

enum PullRequestOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  merged_ASC
  merged_DESC
}

type PullRequestPreviousValues {
  id: ID!
  title: String!
  merged: Boolean!
}

input PullRequestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  merged: Boolean
  merged_not: Boolean
  AND: [PullRequestScalarWhereInput!]
  OR: [PullRequestScalarWhereInput!]
  NOT: [PullRequestScalarWhereInput!]
}

type PullRequestSubscriptionPayload {
  mutation: MutationType!
  node: PullRequest
  updatedFields: [String!]
  previousValues: PullRequestPreviousValues
}

input PullRequestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PullRequestWhereInput
  AND: [PullRequestSubscriptionWhereInput!]
  OR: [PullRequestSubscriptionWhereInput!]
  NOT: [PullRequestSubscriptionWhereInput!]
}

input PullRequestUpdateInput {
  author: UserUpdateOneRequiredWithoutPullRequestsInput
  title: String
  merged: Boolean
}

input PullRequestUpdateManyDataInput {
  title: String
  merged: Boolean
}

input PullRequestUpdateManyMutationInput {
  title: String
  merged: Boolean
}

input PullRequestUpdateManyWithoutAuthorInput {
  create: [PullRequestCreateWithoutAuthorInput!]
  delete: [PullRequestWhereUniqueInput!]
  connect: [PullRequestWhereUniqueInput!]
  set: [PullRequestWhereUniqueInput!]
  disconnect: [PullRequestWhereUniqueInput!]
  update: [PullRequestUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PullRequestUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PullRequestScalarWhereInput!]
  updateMany: [PullRequestUpdateManyWithWhereNestedInput!]
}

input PullRequestUpdateManyWithWhereNestedInput {
  where: PullRequestScalarWhereInput!
  data: PullRequestUpdateManyDataInput!
}

input PullRequestUpdateWithoutAuthorDataInput {
  title: String
  merged: Boolean
}

input PullRequestUpdateWithWhereUniqueWithoutAuthorInput {
  where: PullRequestWhereUniqueInput!
  data: PullRequestUpdateWithoutAuthorDataInput!
}

input PullRequestUpsertWithWhereUniqueWithoutAuthorInput {
  where: PullRequestWhereUniqueInput!
  update: PullRequestUpdateWithoutAuthorDataInput!
  create: PullRequestCreateWithoutAuthorInput!
}

input PullRequestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  merged: Boolean
  merged_not: Boolean
  AND: [PullRequestWhereInput!]
  OR: [PullRequestWhereInput!]
  NOT: [PullRequestWhereInput!]
}

input PullRequestWhereUniqueInput {
  id: ID
}

type Query {
  commit(where: CommitWhereUniqueInput!): Commit
  commits(where: CommitWhereInput, orderBy: CommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commit]!
  commitsConnection(where: CommitWhereInput, orderBy: CommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommitConnection!
  pullRequest(where: PullRequestWhereUniqueInput!): PullRequest
  pullRequests(where: PullRequestWhereInput, orderBy: PullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PullRequest]!
  pullRequestsConnection(where: PullRequestWhereInput, orderBy: PullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PullRequestConnection!
  repo(where: RepoWhereUniqueInput!): Repo
  repoes(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repo]!
  repoesConnection(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RepoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Repo {
  id: ID!
  name: String!
  description: String
  languages: [String!]!
  stars: Int
  link: String!
  commits(where: CommitWhereInput, orderBy: CommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commit!]
}

type RepoConnection {
  pageInfo: PageInfo!
  edges: [RepoEdge]!
  aggregate: AggregateRepo!
}

input RepoCreateInput {
  id: ID
  name: String!
  description: String
  languages: RepoCreatelanguagesInput
  stars: Int
  link: String!
  commits: CommitCreateManyWithoutRepoInput
}

input RepoCreatelanguagesInput {
  set: [String!]
}

input RepoCreateManyInput {
  create: [RepoCreateInput!]
  connect: [RepoWhereUniqueInput!]
}

input RepoCreateOneWithoutCommitsInput {
  create: RepoCreateWithoutCommitsInput
  connect: RepoWhereUniqueInput
}

input RepoCreateWithoutCommitsInput {
  id: ID
  name: String!
  description: String
  languages: RepoCreatelanguagesInput
  stars: Int
  link: String!
}

type RepoEdge {
  node: Repo!
  cursor: String!
}

enum RepoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  stars_ASC
  stars_DESC
  link_ASC
  link_DESC
}

type RepoPreviousValues {
  id: ID!
  name: String!
  description: String
  languages: [String!]!
  stars: Int
  link: String!
}

input RepoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  stars: Int
  stars_not: Int
  stars_in: [Int!]
  stars_not_in: [Int!]
  stars_lt: Int
  stars_lte: Int
  stars_gt: Int
  stars_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [RepoScalarWhereInput!]
  OR: [RepoScalarWhereInput!]
  NOT: [RepoScalarWhereInput!]
}

type RepoSubscriptionPayload {
  mutation: MutationType!
  node: Repo
  updatedFields: [String!]
  previousValues: RepoPreviousValues
}

input RepoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RepoWhereInput
  AND: [RepoSubscriptionWhereInput!]
  OR: [RepoSubscriptionWhereInput!]
  NOT: [RepoSubscriptionWhereInput!]
}

input RepoUpdateDataInput {
  name: String
  description: String
  languages: RepoUpdatelanguagesInput
  stars: Int
  link: String
  commits: CommitUpdateManyWithoutRepoInput
}

input RepoUpdateInput {
  name: String
  description: String
  languages: RepoUpdatelanguagesInput
  stars: Int
  link: String
  commits: CommitUpdateManyWithoutRepoInput
}

input RepoUpdatelanguagesInput {
  set: [String!]
}

input RepoUpdateManyDataInput {
  name: String
  description: String
  languages: RepoUpdatelanguagesInput
  stars: Int
  link: String
}

input RepoUpdateManyInput {
  create: [RepoCreateInput!]
  update: [RepoUpdateWithWhereUniqueNestedInput!]
  upsert: [RepoUpsertWithWhereUniqueNestedInput!]
  delete: [RepoWhereUniqueInput!]
  connect: [RepoWhereUniqueInput!]
  set: [RepoWhereUniqueInput!]
  disconnect: [RepoWhereUniqueInput!]
  deleteMany: [RepoScalarWhereInput!]
  updateMany: [RepoUpdateManyWithWhereNestedInput!]
}

input RepoUpdateManyMutationInput {
  name: String
  description: String
  languages: RepoUpdatelanguagesInput
  stars: Int
  link: String
}

input RepoUpdateManyWithWhereNestedInput {
  where: RepoScalarWhereInput!
  data: RepoUpdateManyDataInput!
}

input RepoUpdateOneRequiredWithoutCommitsInput {
  create: RepoCreateWithoutCommitsInput
  update: RepoUpdateWithoutCommitsDataInput
  upsert: RepoUpsertWithoutCommitsInput
  connect: RepoWhereUniqueInput
}

input RepoUpdateWithoutCommitsDataInput {
  name: String
  description: String
  languages: RepoUpdatelanguagesInput
  stars: Int
  link: String
}

input RepoUpdateWithWhereUniqueNestedInput {
  where: RepoWhereUniqueInput!
  data: RepoUpdateDataInput!
}

input RepoUpsertWithoutCommitsInput {
  update: RepoUpdateWithoutCommitsDataInput!
  create: RepoCreateWithoutCommitsInput!
}

input RepoUpsertWithWhereUniqueNestedInput {
  where: RepoWhereUniqueInput!
  update: RepoUpdateDataInput!
  create: RepoCreateInput!
}

input RepoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  stars: Int
  stars_not: Int
  stars_in: [Int!]
  stars_not_in: [Int!]
  stars_lt: Int
  stars_lte: Int
  stars_gt: Int
  stars_gte: Int
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  commits_every: CommitWhereInput
  commits_some: CommitWhereInput
  commits_none: CommitWhereInput
  AND: [RepoWhereInput!]
  OR: [RepoWhereInput!]
  NOT: [RepoWhereInput!]
}

input RepoWhereUniqueInput {
  id: ID
}

type Subscription {
  commit(where: CommitSubscriptionWhereInput): CommitSubscriptionPayload
  pullRequest(where: PullRequestSubscriptionWhereInput): PullRequestSubscriptionPayload
  repo(where: RepoSubscriptionWhereInput): RepoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  repos(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repo!]
  commits(where: CommitWhereInput, orderBy: CommitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commit!]
  pullRequests(where: PullRequestWhereInput, orderBy: PullRequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PullRequest!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  repos: RepoCreateManyInput
  commits: CommitCreateManyWithoutUserInput
  pullRequests: PullRequestCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCommitsInput {
  create: UserCreateWithoutCommitsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPullRequestsInput {
  create: UserCreateWithoutPullRequestsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommitsInput {
  id: ID
  username: String!
  repos: RepoCreateManyInput
  pullRequests: PullRequestCreateManyWithoutAuthorInput
}

input UserCreateWithoutPullRequestsInput {
  id: ID
  username: String!
  repos: RepoCreateManyInput
  commits: CommitCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  repos: RepoUpdateManyInput
  commits: CommitUpdateManyWithoutUserInput
  pullRequests: PullRequestUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  username: String
}

input UserUpdateOneRequiredWithoutCommitsInput {
  create: UserCreateWithoutCommitsInput
  update: UserUpdateWithoutCommitsDataInput
  upsert: UserUpsertWithoutCommitsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPullRequestsInput {
  create: UserCreateWithoutPullRequestsInput
  update: UserUpdateWithoutPullRequestsDataInput
  upsert: UserUpsertWithoutPullRequestsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommitsDataInput {
  username: String
  repos: RepoUpdateManyInput
  pullRequests: PullRequestUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPullRequestsDataInput {
  username: String
  repos: RepoUpdateManyInput
  commits: CommitUpdateManyWithoutUserInput
}

input UserUpsertWithoutCommitsInput {
  update: UserUpdateWithoutCommitsDataInput!
  create: UserCreateWithoutCommitsInput!
}

input UserUpsertWithoutPullRequestsInput {
  update: UserUpdateWithoutPullRequestsDataInput!
  create: UserCreateWithoutPullRequestsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  repos_every: RepoWhereInput
  repos_some: RepoWhereInput
  repos_none: RepoWhereInput
  commits_every: CommitWhereInput
  commits_some: CommitWhereInput
  commits_none: CommitWhereInput
  pullRequests_every: PullRequestWhereInput
  pullRequests_some: PullRequestWhereInput
  pullRequests_none: PullRequestWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    