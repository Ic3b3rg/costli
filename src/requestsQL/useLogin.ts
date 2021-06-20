//importo react Query
import { useMutation, useQuery } from "react-query";
//importa GraphQL-request client e GraphQueryLanguage(gql)
import { gql } from "graphql-request";
import {graphQLClient} from './gql-client';


export function useLogin() {
  return useMutation<any, any, any>(async ({ email , password }) => {
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
            token
          }
        }
      `,
      { email, password}
    );

    return loginUser;
  }, {
    onSuccess: (data) => {
      console.log("DATA", data);
      sessionStorage.setItem('token', data.token);
      graphQLClient.setHeader('authorization', data.token);
    }
  });
}