import getPool from "../../database/getPool.js";

const selectEntryByIdModel = async (entryId) => {
  const pool = await getPool();

  const [entry] = await pool.query(
    `
            SELECT e.id, e.title, e.place, u.username, e.userId, AVG(IFNULL(v.value,0)) AS votes, e.createdAt
            FROM entries e
            LEFT JOIN entryvotes v ON v.entryId = e.id
            INNER JOIN users u ON u.id = e.userId
            WHERE e.id = ${entryId}
            GROUP BY e.id
            ORDER BY e.createdAt DESC
        `
  );

  const [photos] = await pool.query(
    `
            SELECT id, name FROM entryphotos WHERE entryId = ?
        `,
    [entryId]
  );

  entry[0].photos = photos;

  return entry[0];
};

export default selectEntryByIdModel;
