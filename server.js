const express = require("express");
const cors = require("cors");
const port = 5000;


const registerRouter = require("./routers/routes/auth/signup");
const loginRouter = require("./routers/routes/auth/login");
const listDateRouter = require("./routers/routes/listDate");
const deleteDateRouter = require("./routers/routes/deleteDate");
const listBuyerRouter = require("./routers/routes/listBuyer");
const addDateRouter = require("./routers/routes/addDate");

const app = express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());

app.use(registerRouter);
app.use(loginRouter);
app.use(listDateRouter);
app.use(deleteDateRouter);
app.use(listBuyerRouter);
app.use(addDateRouter);


app.listen((port),()=>{
    console.log(`Server On ${port}`);
});