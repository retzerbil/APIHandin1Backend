const express = require('express');
//const {check} = require('express-validator');
const cors = require('cors');
//const {Product} = require('./models');
//const {Op} = require('sequelize')
const createPlayer = require("./controllers/playerController.js");
const migrationhelper = require('./migrationhelper');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))


app.post('/createPlayer',(req,res)=>{
    createPlayer.createPlayer(req,res);
});

app.get('/getPlayers',(req,res)=>{
    createPlayer.getPlayers(req,res);
});

app.listen(port, async () =>{
    await migrationhelper.migrate();
    console.log(`Example app listening on port ${port}`);
})