import { GraphQLClient } from "graphql-request";


const API_URL = `https://costli-be.herokuapp.com/graphql`;

export const graphQLClient = new GraphQLClient(API_URL);