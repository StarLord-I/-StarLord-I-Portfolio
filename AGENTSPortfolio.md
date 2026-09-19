# Star-Lord_I Portfolio — Agent Overview & Instructions

> Single reference guide for any AI assistant working on this codebase.  
> Detailed specifications live in `docs/PROJECT.md` and progress logs in `docs/PROGRESS.md`.

---

## 1. What this project is

A personal developer portfolio for **Jiya Khan Pathan**, presented under the coding persona **Star-Lord_I**.  
* **Pronouns:** Strictly **he/him** and **his** (never she/her).
* **Vibe:** Space-opera aesthetic (cosmic deep dark palette `#060810`, neon cyan/purple accents, retro-mixtape energy) inspired by Guardians of the Galaxy without violating any copyrighted intellectual property.
* **Mascot Companion:** An original botanical companion named **Sprout** with an interactive Q&A chatbot interface.
* **Music Widget:** A floating retro-cassette widget embedding a real curated Spotify playlist (*Space-Opera Vibes Vol. 1*).

---

## 2. Current Architecture & State

The full multi-service architecture is implemented and operational:

```text
Portfolio/
├── frontend/             # React 18 + Vite + Tailwind CSS + Framer Motion
│   ├── src/components/
│   │   ├── Navbar.jsx        # Glassmorphic header with quick toggles
│   │   ├── Hero.jsx          # Dynamic starfield intro & CTAs
│   │   ├── About.jsx         # B.Tech background & 3 categorized skill modules
│   │   ├── Projects.jsx      # CineFinder, Fab Five DHH, Zilla Parishad cards
│   │   ├── Experience.jsx    # FuturePoint Technologies internship timeline
│   │   ├── Contact.jsx       # Transmission form + social frequencies
│   │   ├── MusicPlayer.jsx   # Retro-cassette floating Spotify player
│   │   └── MascotChatbot.jsx # Sprout mascot companion chatbot
│   └── dist/                 # Verified production build output
├── backend/              # Node.js + Express API (port 5000)
│   └── server.js         # /api/health, /api/contact, /api/chatbot
├── ai-service/           # Python + FastAPI service (port 8000)
│   └── main.py           # / (health), /chat (Sprout Q&A)
└── docs/
    ├── PROJECT.md        # Definitive specification & decision record
    └── PROGRESS.md       # Implementation tracking & checklist
```

---

## 3. Hard Content Rules — Do Not Violate

1. **Pronouns**: Always use **he/him** and **his** for Jiya Khan Pathan. Never use she/her.
2. **Mascot Character**: The mascot is **Sprout** (an original botanical creature). Do not rename him "Groot" or alter his design to directly replicate Marvel IP.
3. **Music Player**: The music player plays a real curated Spotify playlist embed. Do not attempt to bundle or serve copyrighted audio files directly.
4. **Education**: State degree as *B.Tech in Computer Science and Engineering (2022–2026)*. Do **not** mention the college/university name on the public site.
5. **Contact**: Do **not** publish a personal phone number on the site. Direct inquiries through the contact form, LinkedIn, GitHub, or email.
6. **Fact Grounding**: Only reference verified projects (*CineFinder*, *Fab Five DHH*, *Zilla Parishad Management System*) and skills documented in `docs/PROJECT.md` Section 7. Do not invent achievements.

---

## 4. Agent Guidelines for Working on this Codebase

- **Propose Before Modifying**: Before making non-trivial architectural or structural modifications, outline a clear plan.
- **Maintain Documentation**: Keep `docs/PROJECT.md` and `docs/PROGRESS.md` synchronized whenever features, endpoints, or decisions change.
- **Build Verification**: Whenever editing frontend code in `frontend/src/`, verify that `npm run build` succeeds without syntax or styling errors.
- **Aesthetic Excellence**: Maintain the high-polish dark cosmic theme, glassmorphic card stylings, smooth Framer Motion spring transitions, and responsive mobile behaviors.
