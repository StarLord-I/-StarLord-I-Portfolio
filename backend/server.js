const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'online', persona: 'Star-Lord_I', mascot: 'Sprout' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All transmission fields are required.' });
  }

  // In production, send email or save to DB
  console.log(`Transmission received from ${name} (${email}): ${message}`);
  res.json({ success: true, message: 'Transmission successfully received by Star-Lord_I fleet.' });
});

// Mascot chatbot endpoint
app.post('/api/chatbot', (req, res) => {
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

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Star-Lord_I backend server running on port ${PORT}`);
  });
}

module.exports = app;
