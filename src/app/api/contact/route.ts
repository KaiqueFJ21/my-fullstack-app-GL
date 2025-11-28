import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Valida campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, email, message' },
        { status: 400 }
      );
    }

    // Insere no banco
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
    console.error('Erro ao salvar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar contato', details: error.message },
      { status: 500 }
    );
  }
}

// GET - listar contatos
export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM contacts ORDER BY created_at DESC
    `;
    
    return NextResponse.json({ 
      success: true, 
      data: result.rows 
    });

  } catch (error: any) {
    console.error('Erro ao buscar contatos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar contatos', details: error.message },
      { status: 500 }
    );
  }
} 