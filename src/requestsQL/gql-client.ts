import { GraphQLClient } from "graphql-request";


const API_URL = `https://costli-be.herokuapp.com/graphql`;
// const API_URL = `http://localhost:4000/graphql`;

const token = sessionStorage.getItem('token');

export const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        authorization: token
    }
});

// graphQLClient.setHeader('authorization', token);
