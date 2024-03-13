const { Players } = require('../models');

const createPlayer = async (req, res) => {
    const { name, jersey, position, team } = req.body;

    await Players.create({
        name,
        jersey,
        position,
        team
    });

    res.status(201).send("");
};

const getPlayers = async (req, res) => {
    const players = await Players.findAll();
    res.status(200).send(players);
};

module.exports = {createPlayer, getPlayers}