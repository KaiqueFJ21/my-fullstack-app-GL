import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10`;
      res.status(200).json({ 
        success: true, 
        count: result.rows.length,
        data: result.rows 
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Campos obrigatórios: name, email, message' });
      }

      const result = await sql`
        INSERT INTO contacts (name, email, subject, message)
        VALUES (${name}, ${email}, ${subject || ''}, ${message})
        RETURNING *
      `;

      res.status(201).json({ 
        success: true, 
        data: result.rows[0] 
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
