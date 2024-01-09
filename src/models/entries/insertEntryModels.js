import getPool from "../../../database/getpool.js";

conts insertEntryModel = async (title, place, description, userId) => {
const pool = await getPool();

const [result] = await pool.query(
`
INSERT INTO entries(title, place, description, userId)
VALUES (?,?,?,?)`,
[title, place, description, userId]
);

console.log(result);

const {insertId} = result;

return insertId;
}

export default insertEntryModel;

