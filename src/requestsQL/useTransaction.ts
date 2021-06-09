//importo react Query
import { useMutation, useQuery } from "react-query";
//importa GraphQL-request client e GraphQueryLanguage(gql)
import { GraphQLClient, gql } from "graphql-request";

// const API_URL = `http://localhost:4000/graphql`;
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

export function useGetTransiction(month: number) {
  return useQuery(["get-transaction-list", month], async () => {
    const { getTransactionList } = await graphQLClient.request(
      gql`
        query getTransactonList(
          $month: Int!
        ){
          getTransactionList(month: $month) {
            id
            description
            amount
            type
            createdAt
          }
        }
      `, { month }
    );
    return getTransactionList;
  });
}

export function useDeleteTransaction() {
  return useMutation<any, any, any>(async ({ id }) => {
    const { deleteTransaction } = await graphQLClient.request(
      gql`
        mutation deleteTransaction(
          $id: ID!
        ) {
          deleteTransaction(
            id: $id
          ) {
            id
            description
            amount
            type
            createdAt
          }
        }
      `,
      { id }
    );
    return deleteTransaction;
  });
}
