import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../.env` });

export const HASURA_URL = process.env.REACT_APP_HASURA_URL;
export const API_URL = process.env.REACT_APP_API_URL;
