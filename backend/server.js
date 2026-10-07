const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Prevent DoS via large payload memory exhaustion
app.use(express.json({ limit: '10kb' }));

// Basic security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Lightweight in-memory rate limiter to prevent bot spam
const rateLimitMap = new Map();
const rateLimiter = (maxRequests = 10, windowMs = 60000) => (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const client = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };

  if (now > client.resetTime) {
    client.count = 1;
    client.resetTime = now + windowMs;
  } else {
    client.count += 1;
    if (client.count > maxRequests) {
      return res.status(429).json({ error: 'Too many requests. Please wait a minute before retrying.' });
    }
  }
  rateLimitMap.set(ip, client);
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'online', persona: 'Star-Lord_I', mascot: 'Sprout' });
});

// Contact form endpoint with rate limiting & input validation
app.post('/api/contact', rateLimiter(5, 60000), (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All transmission fields are required.' });
  }

  // Type & length validation
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid input format.' });
  }

  if (name.length > 100 || email.length > 120 || message.length > 2000) {
    return res.status(400).json({ error: 'Input exceeded maximum character limits.' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // Log with email masked to protect sender privacy
  const maskedEmail = email.replace(/^(.)(.*)(@.*)$/, (_, first, middle, domain) => first + '*'.repeat(Math.max(1, middle.length)) + domain);
  console.log(`[Transmission] Received from ${name.trim()} (${maskedEmail})`);
  res.json({ success: true, message: 'Transmission successfully received by Star-Lord_I fleet.' });
});

// Mascot chatbot endpoint with rate limiting
app.post('/api/chatbot', rateLimiter(15, 60000), (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const lowerQ = message.toLowerCase();
  let reply = "I'm Sprout! Jiya Khan Pathan (Star-Lord_I) is a talented frontend developer and CS graduate. Ask me about his projects like CineFinder or Fab Five DHH!";

  if (lowerQ.includes('project') || lowerQ.includes('cinefinder') || lowerQ.includes('fab five') || lowerQ.includes('zilla')) {
    reply = "Jiya's featured projects:\n1. CineFinder (MERN/React movie discovery platform)\n2. Fab Five DHH (React & Framer Motion experience)\n3. Zilla Parishad Management System (Final-year team solution built with Zilla Parishad, Chandrapur)";
  } else if (lowerQ.includes('skill') || lowerQ.includes('tech') || lowerQ.includes('stack')) {
    reply = "Jiya's stack: React.js, JavaScript, Tailwind CSS, HTML5, CSS3, Git, GitHub, Python, Vite, REST APIs, Node.js, and Express.js.";
  } else if (lowerQ.includes('intern') || lowerQ.includes('experience') || lowerQ.includes('futurepoint')) {
    reply = "Jiya worked as a Frontend Development Intern at FuturePoint Technologies (May–Jun 2023), building responsive pages with HTML5, CSS3, and JavaScript.";
  }

  res.json({ reply });
});

// Serve compiled frontend static assets with clean HTML routing
const distPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(distPath, { extensions: ['html'] }));

// Return custom 404.html with real HTTP 404 status code for unmapped routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(distPath, '404.html'), (err) => {
    if (err) {
      res.status(404).type('text/html').send('<!doctype html><title>404 Not Found</title><h1>404 Not Found</h1>');
    }
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Star-Lord_I backend server running on port ${PORT}`);
  });
}

module.exports = app;
