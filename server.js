const express = require("express");
const port = 5000;


const registerRouter = require("./routers/routes/auth/signup");
const loginRouter = require("./routers/routes/auth/login");

const app = express();
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);


app.listen((port),()=>{
    console.log(`Server On ${port}`);
});