'use strict';

const database = require("../../config/database");
const util = require("node:util");
const query = util.promisify(database.query).bind(database);

exports.get = async(page, limit) => {
    try {
        const sqlCount = `
            SELECT COUNT(*) AS
                count
            FROM
                usuarios
        `;
        const [{ count }] = await query(sqlCount);
        
        if(!count) throw new Error("Não há nenhum usuário");

        limit = Number(limit);
        const offset = (page * limit) - limit;

        const sqlPagination = `
            SELECT * FROM
                usuarios
            LIMIT
                ?
            OFFSET
                ?
        `;

        const result = await query(sqlPagination, [limit, offset]);
        return {
            result,
            total: count
        }
    } catch(error) {
        throw new Error(error);
    }
}