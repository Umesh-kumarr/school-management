import { db } from "@/lib/db";
import { schools } from "@/lib/schema";

export async function GET() {
  try {
    const allSchools = await db.select().from(schools);
    return Response.json(allSchools);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await db.insert(schools).values({
      name: body.name,
      address: body.address,
      city: body.city,
      state: body.state,
      contact: body.contact,
      email_id: body.email,
      image: body.image,
    });
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
