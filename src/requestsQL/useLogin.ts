//importo react Query
import { useMutation } from "react-query";
//importa GraphQL-request client e GraphQueryLanguage(gql)
import { gql } from "graphql-request";
import { graphQLClient } from './gql-client';


export function useLogin() {
  return useMutation<any, any, any>(async ({ email, password }) => {
    const { loginUser } = await graphQLClient.request(
      gql`
        mutation loginUser(
          $email: String!
          $password: String!
        ) {
            loginUser(
            email: $email
            password: $password
          ) {
            email,
            token
          }
        }
      `,
      { email, password }
    );

    return loginUser;
  }, {
    onSuccess: (data) => {
      sessionStorage.setItem('user', data.email);
      sessionStorage.setItem('token', data.token);
      graphQLClient.setHeader('authorization', data.token);
    }
  });
}