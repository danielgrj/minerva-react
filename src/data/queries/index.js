import { gql } from '@apollo/client';

const GET_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

export { GET_USERS };
