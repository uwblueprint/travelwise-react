import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../.env` });

export const HASURA_GRAPHQL_ADMIN_SECRET =
  process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET;

export const API_URL = process.env.REACT_APP_API_URL;
