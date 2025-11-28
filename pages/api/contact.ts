import type { NextApiRequest, NextApiResponse } from 'next';
import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10');
      client.release();
      
      res.status(200).json({ 
        success: true, 
        count: result.rows.length,
        data: result.rows 
      });
    } catch (error: any) {
      console.error('Erro GET:', error);
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Campos obrigatórios: name, email, message' });
      }

      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, email, subject || '', message]
      );
      client.release();

      res.status(201).json({ 
        success: true, 
        data: result.rows[0] 
      });
    } catch (error: any) {
      console.error('Erro POST:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
