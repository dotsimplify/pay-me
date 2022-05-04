import mongoose from "mongoose";

const connection = {};

async function databaseConnect() {
  //   if (connection.isConnected) {
  //     return;
  //   }

  //   const db = mongoose.connect(process.env.MONGODB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });

  //   connection.isConnected = db.connections[0].readyState;
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => {
    console.error(error);
  });

  db.once("open", () => {
    console.log("connected to database");
  });
}

export default databaseConnect;
