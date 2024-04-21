'use strict';

const repository = require("../repositories/user-repository");

exports.get = async(req, res) => {
    try {
        const { page = 1, limit = 10 } = req.params;
        const data = await repository.get(page, limit);
        res.status(200).json(data);
    } catch(error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
}