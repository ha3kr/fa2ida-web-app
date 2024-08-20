require('dotenv').config()
const mongoose = require('mongoose');
const pagesRouter = require('./router/pages');
const dashboardRouter = require('./router/dashboard');
const categoriesRouter = require('./router/categories');
const serviceRouter = require('./router/service');
const authRouter = require('./router/auth');
const express = require('express');
const app = express()


mongoose.set('strictQuery', false);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.use(pagesRouter);
app.use("/category", categoriesRouter);
app.use("/service", serviceRouter);
app.use('/dashboard', dashboardRouter);
app.use("/auth", authRouter);

mongoose.connect(process.env.MONGODB_URL, () => {
    app.listen(3000)
})