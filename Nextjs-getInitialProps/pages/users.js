
const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <span>{user.name.first} {user.name.last}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

Users.getInitialProps = async () => {
  const res = await fetch('https://randomuser.me/api/?results=10')
  const data = await res.json()
  return { users: data.results }
}

export default Users