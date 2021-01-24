const express = require("express");
const errorHandlers = require("./handlers/errorHandlers");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", require("./routes/user"));
app.use("/gameroom", require("./routes/gameRoom"));

//Setup error handlers
// app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

const path = require("path");

// ... other app.use middleware
app.use(express.static("build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// ...
// Right before your app.listen(), add this:

// if (process.env.ENV === "DEVELOPMENT") {
//   app.use(errorHandlers.developmentErrors);
// } else {
//   app.use(errorHandlers.productionErrors);
// }

module.exports = app;
