const express = require('express');
//const {check} = require('express-validator');
const cors = require('cors');
//const {Product} = require('./models');
//const {Op} = require('sequelize')
const migrationhelper = require('./migrationhelper');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))



app.listen(port, async () =>{
    await migrationhelper.migrate();
    console.log(`Example app listening on port ${port}`);
})