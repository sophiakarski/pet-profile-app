require("dotenv").config();
const pool = require("./db");

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS pets (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      age INT,
      species TEXT,
      gender TEXT,
      documents TEXT[]
    );
  `);
};

const seedData = async () => {
  const pets = Array.from({ length: 20 }).map((_, i) => ({
    name: `Pet${i + 1}`,
    age: Math.floor(Math.random() * 10) + 1,
    species: i % 2 === 0 ? "cat" : "dog",
    gender: i % 2 === 0 ? "female" : "male",
    documents: [`https://example.com/doc${i + 1}`],
  }));

  for (const pet of pets) {
    await pool.query(
      `INSERT INTO pets (name, age, species, gender, documents)
       VALUES ($1, $2, $3, $4, $5)`,
      [pet.name, pet.age, pet.species, pet.gender, pet.documents]
    );
  }
};

const run = async () => {
  await createTable();
  await seedData();
  console.log("Database seeded");
  process.exit();
};

run();