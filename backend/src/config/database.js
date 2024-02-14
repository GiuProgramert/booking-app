import { createConnection } from "mysql";

const connection = createConnection({
  host: "localhost",
  user: "giu",
  password: "26110504",
  database: "booking_app",
});

export default connection;
