const express = require('express');
const { connectMongoDB } = require("./connection");
const router=require("./routes/Index")
const PORT = 3005;

connectMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB Conenction established"))
.catch(err=>console.log(err))

const app = express();
app.use(express.json());
app.use("/URL",router)
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});