import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const result = await sql`SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10`;
    return NextResponse.json({ 
      success: true, 
      count: result.rows.length,
      data: result.rows 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, email, message' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject || ''}, ${message})
      RETURNING *
    `;

    return NextResponse.json({ 
      success: true, 
      data: result.rows[0] 
    }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
