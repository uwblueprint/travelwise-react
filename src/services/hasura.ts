import ApolloClient from "apollo-boost";
import { HASURA_URL } from "../utils/config";

export default new ApolloClient({ uri: `${HASURA_URL}/v1/graphql` });
