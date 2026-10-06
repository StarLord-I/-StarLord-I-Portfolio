# Star-Lord_I Portfolio — Overview

> Single source of truth for what this project is and how it's built.  
> Last updated: October 6, 2026

## 1. What this is

A personal developer portfolio for **Jiya Khan Pathan** (pronouns: **he/him**), presented under the coding persona **Star-Lord_I**. The site carries a space-opera visual language and modern engineering aesthetic. It showcases skills, projects, and experience, featuring an interactive macOS-style terminal box, theme-aligned loading screen, and robust dark/light mode support.

## 2. Goals

- Make a memorable first impression for recruiters/collaborators through a distinctive personality-driven design and high-performance architecture.
- Clearly present real skills, real projects, and real experience — no invented achievements.
- Provide a clean, interactive macOS terminal representation displaying developer telemetry and skills.
- Deliver robust light and dark mode toggling with high-contrast accessibility across all components.

## 3. Stack

| Layer | Technology | Status | Notes |
| --- | --- | --- | --- |
| Frontend | React 18 (Vite) | Implemented | Component-driven, responsive modern UI |
| Styling | Tailwind CSS | Implemented | Dark/light theme support, custom design tokens, dot grid pattern |
| Animation | Framer Motion | Implemented | Interactive card hovers, modal transitions, smooth startup sequence |
| Backend | Node.js + Express | Implemented | Serves API for health check and contact form |
| AI service | Python (FastAPI + Uvicorn) | Implemented | Optional automated Q&A service |

## 4. Structure

```text
Portfolio/
├── frontend/             # React 18 + Vite + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Glassmorphism header + mobile drawer + theme switcher
│   │   │   ├── Hero.jsx          # Hero section with CTA & social frequencies + TerminalBox
│   │   │   ├── TerminalBox.jsx   # macOS-style interactive terminal box
│   │   │   ├── About.jsx         # Background, degree, skills grid
│   │   │   ├── Projects.jsx      # CineFinder, Fab Five DHH, Zilla Parishad cards
│   │   │   ├── Experience.jsx    # FuturePoint Technologies internship timeline
│   │   │   ├── Contact.jsx       # Interactive transmission form + direct channels
│   │   │   └── LoadingScreen.jsx # Theme-aligned startup loading sequence with skip button
│   │   ├── App.jsx               # Main page layout & state management
│   │   └── main.jsx
├── backend/              # Node.js + Express API
├── ai-service/           # Python FastAPI service
└── docs/
    ├── PROJECT.md        # Architecture & content specification
    └── PROGRESS.md       # Implementation milestones and tracking
```

## 5. Decisions worth remembering

| Date | Decision | Why |
| --- | --- | --- |
| 2026-09-19 | Pronouns are strictly **he/him** and **his**. | Ensures absolute accuracy and respect for Jiya's gender identity across all UI copy and documentation. |
| 2026-10-06 | Replace Sprout mascot with macOS Terminal box. | Cleaner, more professional developer aesthetic while retaining personality through `whoami` telemetry and `npx jiya-dev`. |
| 2026-10-06 | Remove mixtape music player. | Streamlined user experience focusing strictly on professional projects, skills, and interactive developer tooling. |
| 2026-10-06 | Robust light and dark mode contrast tokens. | Ensures seamless accessibility and readability when toggling theme modes across all sections. |

## 6. Real content to draw from (source: resume)

**Persona / name:** Star-Lord_I (Jiya Khan Pathan)  
**Pronouns:** he/him  
**Degree:** B.Tech, Computer Science and Engineering, 2022–2026 (institution omitted)  
**Skills:** HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, Python, Vite, REST APIs, Node.js, Express.js  
**Experience:** Frontend Development Intern, FuturePoint Technologies (May–Jun 2023) — HTML5/CSS3 responsive pages, JS interactivity, team collaboration on UI components  
**Projects featured:**
1. **CineFinder** (MERN) — frontend tribute platform, React.js, physics-based interactions via Framer Motion — live at `cine-finder-mern.vercel.app`
2. **Fab Five DHH** (React, Framer Motion) — frontend tribute platform, interaction/animation focus — live at `fab-five-of-dhh.vercel.app`
3. **Zilla Parishad Management System** — final-year team project, web-based management solution built with Zilla Parishad, Chandrapur; backend development, database management, real stakeholder collaboration  
4. **Contact channels:** email, LinkedIn (`linkedin.com/in/jiya-khan-pathan-799827423`), GitHub (`github.com/StarLord-I`)
