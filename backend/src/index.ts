import app from "./app";
import dotenv from "dotenv";
import connectToDB from "./db/dbConfig";

dotenv.config();


const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World");
});

connectToDB()
.then(() => {
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
})
.catch((error) => {
    console.log("Error while starting the server");
});

