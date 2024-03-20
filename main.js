const express = require('express');
//const {check} = require('express-validator');
const cors = require('cors');
//const {Product} = require('./models');
//const {Op} = require('sequelize')
const playerController = require("./controllers/playerController.js");
const createPlayerValidator = require('./validators/createPlayerValidator');
const migrationhelper = require('./migrationhelper');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))


app.post('/createPlayer' ,createPlayerValidator.validatePlayer,(req,res)=>{

    playerController.createPlayer(req,res);
});

app.get('/getPlayers',(req,res)=>{
    playerController.getPlayers(req,res);
});

app.put('/updatePlayer/:id',(req,res)=>{
    playerController.updatePlayer(req,res);
});

app.delete('/deletePlayer/:id',(req,res)=>{
    playerController.deletePlayer(req,res);
});

app.listen(port, async () =>{
    await migrationhelper.migrate();
    console.log(`Example app listening on port ${port}`);
})