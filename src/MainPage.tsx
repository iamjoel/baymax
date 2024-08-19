import waspLogo from './waspLogo.png'
import './Main.css'
import {
  getUsers,
  createUser,
  useQuery,
} from 'wasp/client/operations'

export const MainPage = () => {
  const { data: users, error } = useQuery(getUsers)
  console.log(users)

  const addUser = async () => {
    await createUser({
      name: 'John',
      password: '1234',
    })
  }
  return (
    <div className="container">
      {users?.map((item, i) => (
        <div>
          {i + 1}. {item.name}
        </div>
      ))}
      <button onClick={addUser}>Add User</button>
    </div>
  )
}
