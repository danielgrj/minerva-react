import { gql } from '@apollo/client';

const userQueries = {
  GET_USERS: gql`
    query {
      users {
        id
        name
        email
      }
    }
  `
};

export default userQueries;
