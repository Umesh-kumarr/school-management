import mysql from "mysql2/promise";

// 🔹 create connection (using env variables)
async function connectDB() {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
}

// 🔹 POST: Add a new school
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, city, state, contact, image, email_id } = body;

    const db = await connectDB();
    await db.execute(
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, image, email_id]
    );

    return new Response(
      JSON.stringify({ message: "School added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to add school" }), {
      status: 500,
    });
  }
}

// 🔹 GET: Fetch all schools
export async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute(
      "SELECT id, name, address, city, state, contact, image, email_id FROM schools"
    );

    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch schools" }), {
      status: 500,
    });
  }
}
