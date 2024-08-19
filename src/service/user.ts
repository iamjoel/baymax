import { User } from 'wasp/entities'
import { type GetUsers, CreateUser } from 'wasp/server/operations'

export const getUsers: GetUsers<void, User[]> = async (args, context) => {
  return context.entities.User.findMany()
}

type CreateUserPayload = Pick<User, 'name' | 'password'>

export const createUser: CreateUser<CreateUserPayload, User> = async ({ name, password }, context) => {
  return context.entities.User.create(
    { data: { name, password } }
  )
}