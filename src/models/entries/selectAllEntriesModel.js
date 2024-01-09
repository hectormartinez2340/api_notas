import getPool from "../../database/getPool.js";

const selectAllEntriesModel = async () => {
  const pool = await getPool();

  const [entries] = await pool.query(
    `
            SELECT e.id, e.title, e.place, u.username, AVG(IFNULL(v.value,0)) AS votes, e.createdAt
            FROM entries e
            LEFT JOIN entryvotes v ON v.entryId = e.id
            INNER JOIN users u ON u.id = e.userId
            GROUP BY e.id
            ORDER BY e.createdAt DESC  `
  );

  for (const entry of entries) {
    const [photos] = await pool.query(
      `
                SELECT id, name FROM entryphotos WHERE entryId=?
            `,
      [entry.id]
    );

    //creo una nueva clave al objeto dentro del array
    entry.photos = photos;
  }

  return entries;
};

export default selectAllEntriesModel;
