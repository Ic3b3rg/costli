//importo react Query
import { useMutation, useQuery } from "react-query";
//importa GraphQL-request client e GraphQueryLanguage(gql)
import { gql } from "graphql-request";
import { graphQLClient } from './gql-client';

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
            transactions{
              id
              description
              amount
              type
              createdAt
            },
            summary{
              inSum,
              outSum,
              balance
            }
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
