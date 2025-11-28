import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API funcionando!' });
  } else if (req.method === 'POST') {
    res.status(200).json({ success: true, received: req.body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
