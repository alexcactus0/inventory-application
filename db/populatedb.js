const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    item VARCHAR ( 255 )
);

INSERT INTO items (item)
VALUES
    ('Mouse'),
    ('Keyboard'),
    ('Mic')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://alexcactus0:A2B00Du6L@localhost:3000/items",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
