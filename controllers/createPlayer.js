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

module.exports = {createPlayer}