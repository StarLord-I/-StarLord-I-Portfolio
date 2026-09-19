# Star-Lord_I Portfolio — Overview

> Single source of truth for what this project is and how it's built.  
> Last updated: September 19, 2026

## 1. What this is

A personal developer portfolio for **Jiya Khan Pathan** (pronouns: **he/him**), presented under the coding persona **Star-Lord_I**. The site carries a "Guardians of the Galaxy inspired" personality — witty, confident, a little rogue-ish, space-opera visual language — as a character trait of the brand, not a literal recreation of any copyrighted character or media. It showcases skills, projects, and experience, and includes an original mascot chatbot named **Sprout** that answers visitor questions about Jiya's work and background.

## 2. Goals

- Make a memorable first impression for recruiters/collaborators through a distinctive personality-driven design (reference: joshwcomeau.com/about-josh as a bar for polish and interactivity, not for copying content).
- Clearly present real skills, real projects, and real experience — no invented achievements.
- Ship an original mascot companion + chatbot (**Sprout**) that can answer visitor questions about Jiya's background, skills, and projects.
- Include a working, playable curated music widget with a retro-cassette mixtape visual identity.

## 3. Stack

| Layer | Technology | Status | Notes |
| --- | --- | --- | --- |
| Frontend | React 18 (Vite) | Implemented | Component-driven, responsive modern UI |
| Styling | Tailwind CSS | Implemented | Dark cosmic theme (`#060810`), custom gradients |
| Animation | Framer Motion | Implemented | Interactive card hovers, modal transitions, spring animations |
| Music widget | Spotify embed wrapped in custom cassette UI | Implemented | Plays curated retro playlist (*Space-Opera Vibes Vol. 1*) |
| Backend | Node.js + Express | Implemented | Serves API for health check, contact form, and chatbot |
| AI service | Python (FastAPI + Uvicorn) | Implemented | Mascot chatbot Q&A endpoint |
| Database | MongoDB | Optional/Later | For persistent contact transmissions or chat logging if needed |

## 4. Structure

```text
Portfolio/
├── frontend/             # React 18 + Vite + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Glassmorphism header + mobile drawer + quick toggles
│   │   │   ├── Hero.jsx          # Starfield hero with CTA & social frequencies
│   │   │   ├── About.jsx         # Background, degree, skills grid
│   │   │   ├── Projects.jsx      # CineFinder, Fab Five DHH, Zilla Parishad cards
│   │   │   ├── Experience.jsx    # FuturePoint Technologies internship timeline
│   │   │   ├── Contact.jsx       # Interactive transmission form + direct channels
│   │   │   ├── MusicPlayer.jsx   # Floating retro-cassette Spotify player
│   │   │   └── MascotChatbot.jsx # Sprout mascot companion chatbot
│   │   ├── App.jsx               # Main page layout & state management
│   │   └── main.jsx
├── backend/              # Node.js + Express API
│   ├── server.js         # Health, contact, and chatbot endpoints (port 5000)
│   └── package.json
├── ai-service/           # Python FastAPI service
│   └── main.py           # Chatbot Q&A service (port 8000)
└── docs/
    ├── PROJECT.md        # Architecture & content specification
    └── PROGRESS.md       # Implementation milestones and tracking
```

## 5. Decisions worth remembering

| Date | Decision | Why |
| --- | --- | --- |
| 2026-09-18 | Mascot is an original character, not Groot. | Groot's design and name are Disney/Marvel IP; an original tree/plant-like companion with a similar gentle, loyal personality avoids infringement while keeping the intended vibe. |
| 2026-09-19 | Mascot is officially named **Sprout**. | Friendly, memorable, botanical companion persona that fits the cosmic aesthetic. |
| 2026-09-19 | Pronouns are strictly **he/him** and **his**. | Ensures absolute accuracy and respect for Jiya's gender identity across all UI copy, chatbot dialogues, and backend services. |
| 2026-09-18 | Music widget plays a real Spotify playlist, not literal copyrighted audio. | Avoids copyright infringement; a Spotify-embedded playlist Jiya curates himself gives the same retro-mixtape experience using properly licensed playback. |
| 2026-09-18 | College name omitted from public site. | Jiya's explicit preference; degree and field are shown, institution is not. |
| 2026-09-18 | Phone number omitted from public contact info by default. | Standard practice for personal sites; email, LinkedIn, GitHub, and contact form cover outreach without exposing a personal phone number. |

## 6. Out of scope (for now)

- Blog / CMS
- Multi-language support
- Dark/light theme toggle (curated space dark mode is the intentional brand theme)
- Backend user auth / accounts

## 7. Real content to draw from (source: resume)

**Persona / name:** Star-Lord_I (Jiya Khan Pathan)  
**Pronouns:** he/him  
**Degree:** B.Tech, Computer Science and Engineering, 2022–2026 (institution omitted)  
**Skills:** HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, Python, Vite, REST APIs, Node.js, Express.js — actively strengthening MongoDB/backend  
**Experience:** Frontend Development Intern, FuturePoint Technologies (May–Jun 2023) — HTML5/CSS3 responsive pages, JS interactivity, team collaboration on UI components  
**Projects featured:**
1. **CineFinder** (MERN) — frontend tribute platform, React.js, physics-based interactions via Framer Motion — live at `cine-finder-mern.vercel.app`
2. **Fab Five DHH** (React, Framer Motion) — frontend tribute platform, interaction/animation focus — live at `fab-five-of-dhh.vercel.app`
3. **Zilla Parishad Management System** — final-year team project, web-based management solution built with Zilla Parishad, Chandrapur; backend development, database management, real stakeholder collaboration  
**Contact channels:** email, LinkedIn (`linkedin.com/in/jiya-khan-pathan-799827423`), GitHub (`github.com/StarLord-I`)

## 8. Current status & remaining considerations

- **Active State:** All frontend components, backend endpoints, and AI service files are created, tested, and passing production builds.
- **Backend Email Integration:** Select email service provider (e.g., Resend, SendGrid, or Nodemailer) for forwarding messages sent through the `/api/contact` route.
- **Deployment Platform:** Decide on deployment hosting (e.g. Vercel for frontend, Render/Railway for backend and AI service).
