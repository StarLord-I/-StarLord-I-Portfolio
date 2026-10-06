// Vercel Serverless Function: /api/contact
module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Type and length constraints
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid input format.' });
  }

  if (name.length > 100 || email.length > 120 || message.length > 2000) {
    return res.status(400).json({ error: 'Input exceeded length limits.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          from_name: `${name.trim()} (Portfolio Transmission)`,
          subject: `🚀 Portfolio Message from ${name.trim()}`,
          replyto: email.trim(),
        }),
      });

      const data = await response.json();
      return res.status(200).json(data);
    } catch (err) {
      console.error('Web3Forms dispatch error:', err);
      return res.status(500).json({ error: 'Failed to deliver transmission to inbox.' });
    }
  }

  // If no key is set yet in Vercel environment variables
  console.log(`[Transmission] From: ${name} (${email.slice(0, 3)}***): ${message.slice(0, 50)}...`);
  return res.status(200).json({
    success: true,
    message: 'Transmission logged. Set VITE_WEB3FORMS_ACCESS_KEY in Vercel for direct email dispatch.',
  });
}
