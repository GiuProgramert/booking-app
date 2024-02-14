import { createConnection } from "mysql2/promise";

const connection = await createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

/**
 * Make a Select Query
 * @param {string} query
 * @param {Array<*>} params 
 */
export const select = async (query, params = []) => {
  const [results] = await connection.execute(query, params);

  return results;
}

export default connection;
