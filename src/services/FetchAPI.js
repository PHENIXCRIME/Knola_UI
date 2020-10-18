import React , {useState, useEffect} from 'react'

export default function GetUsers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/v1/users")
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <> 
        <ul>
        {users.map(user => (
          <li key={user.user_first_name}>
            {user.user_first_name} {user.user_last_name}
          </li>
        ))}
        </ul>
        
      </>

    );
  }
}