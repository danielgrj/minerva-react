import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../data/queries';

console.log(process.env.APOLLO_ENDPOINT);

const Login = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';

  if (error) return error.message;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.name}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Login;
