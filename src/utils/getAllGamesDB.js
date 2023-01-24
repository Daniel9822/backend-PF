const { Op } = require("sequelize");
const { Game } = require("../models/games");
const { Genre } = require("../models/genres");

const getAllGamesDb = async (search = "") => {
    try {
        if (!search) {
            let response = await Game.findAll({
                include: {
                    model: Genre,
                },
            });
            return response;
        }
        let response = await Game.findAll({
            where: {
                name: { [Op.iLike]: `%${search}%` },
            },
            include: { model: Genre },
        });
        return response;
    } catch (error) {
        return error.message;
    }
};

module.exports = getAllGamesDb;
