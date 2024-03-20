const { Players } = require('../models');
const {Op} = require('sequelize')

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
    const q = req.query.q || '';
    const sortCol = req.query.sortCol || 'name';
    const sortOrder = req.query.sortOrder || 'asc';

    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 20);

    const players = await Players.findAndCountAll({
        where:{
            name:{
                [Op.like]: `%`+q+`%`
            }
        },
        order:[
            [sortCol, sortOrder]
        ],
        offset:offset,
        limit:limit
        });
    res.status(200).send(players);
};

const updatePlayer = async (req, res) => {
    const user = await Players.findOne({ where: { id: req.params.id } });
    user.name = req.body.name;
    user.jersey = req.body.jersey;
    user.position = req.body.position;
    user.team = req.body.team;

    await user.save();

    res.status(200).send(user);
}

const deletePlayer = async (req, res) => {
    await Players.destroy({ where: { id: req.params.id } });
    res.status(200).send("");
}
module.exports = { createPlayer, getPlayers, updatePlayer, deletePlayer }