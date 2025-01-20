import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.middleware";
import contactRouter from "./routes/contact.routes";

const app = express();

app.use(express.json({
    limit:"50kb"
}));  

app.use(cors({
    origin:["http://127.0.0.1:5501"],  
    credentials:true  
}));

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static("public")); 
app.use(cookieparser());  
// routes 
app.use("/api/v1/", contactRouter);




// error handler
app.use(errorMiddleware);

export default app;
