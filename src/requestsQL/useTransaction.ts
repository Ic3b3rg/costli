//importo react Query
import { useMutation, useQuery } from "react-query";
//importa GraphQL-request client e GraphQueryLanguage(gql)
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://costli-be.herokuapp.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL);
//     , {
//   headers: {
//     Authorization: `Bearer ${process.env.API_KEY}`
//   }
// });

export function useAddTransaction() {
  return useMutation<any, any, any>(async ({ description, amount, type }) => {
    const { addTransaction } = await graphQLClient.request(
      gql`
        mutation addTransaction(
          $description: String!
          $amount: Float!
          $type: Boolean!
        ) {
          addTransaction(
            description: $description
            amount: $amount
            type: $type
          ) {
            id
            description
            amount
            type
            createdAt
          }
        }
      `,
      { description, amount, type }
    );
    return addTransaction;
  });
}

export function useGetTransiction() {
  return useQuery("get-transaction-list", async () => {
    const { getTransactionList } = await graphQLClient.request(
      gql`
        query {
          getTransactionList {
            id
            description
            amount
            type
            createdAt
          }
        }
      `
    );
    return getTransactionList;
  });
}
