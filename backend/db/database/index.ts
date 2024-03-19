import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://tselmeg:A7oXlF0cWJyfEoxt@atlascluster.b62qwal.mongodb.net/";

export const connectDB = async () => {
  set(`strictQuery`, false);

  try {
    await connect(CONNECTION_STRING), console.log("Successfully connect to DB");
  } catch (err) {
    console.log("Connection is unsuccessful");
  }
};
