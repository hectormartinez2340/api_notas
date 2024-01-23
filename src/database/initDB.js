import getpool from "./getpool.js";

const initDB = async () => {
  try {
    let pool = await getpool();

    await pool.query(`DROP DATABASE IF EXISTS notas`);
    await pool.query(`CREATE DATABASE IF NOT EXISTS notas`);
    await pool.query(`USE notas`);

    console.log("Creando tablas");

    await pool.query(`
      DROP TABLE IF EXISTS notas, imagenes, categorias, usuarios
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id CHAR(36) PRIMARY KEY NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        username VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        avatar VARCHAR(100),
        active BOOLEAN DEFAULT false,
        role ENUM('admin', 'normal') DEFAULT 'normal',
        registrationCode CHAR(30),
        recoverPassCode CHAR(10),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS categorias (
        categoria_id INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(255) NOT NULL
      )
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS notas (
        notas_id INT PRIMARY KEY AUTO_INCREMENT,
        usuarios_id INT,
        titulo VARCHAR(255) NOT NULL,
        texto TEXT NOT NULL,
        categorias_id INT,
        publica BOOLEAN NOT NULL DEFAULT FALSE,
        url VARCHAR(255)
      )
    `);
 
    await pool.query(`
      CREATE TABLE IF NOT EXISTS imagenes (
        imagen_id INT PRIMARY KEY AUTO_INCREMENT,
        nota_id INT,
        ruta VARCHAR(255) NOT NULL,
        FOREIGN KEY (nota_id) REFERENCES notas(notas_id)
      )
    `);

    console.log("¡Tablas creadas!");
    process.exit(1);
  } catch (error) {
    console.error(error);
  }
};

initDB();
