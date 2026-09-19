# pyrefly: ignore [missing-import]
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Star-Lord_I Mascot AI Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@app.get("/")
def read_root():
    return {"status": "online", "service": "Sprout Mascot AI Service", "owner": "Jiya Khan Pathan (Star-Lord_I)"}

@app.post("/chat", response_model=ChatResponse)
def chat_with_sprout(request: ChatRequest):
    lowerQ = request.message.lower()
    reply = "Greetings! I am Sprout, Jiya Khan Pathan's (Star-Lord_I) original mascot. Ask me about his frontend skills in React, Tailwind CSS, or his projects like CineFinder!"

    if "project" in lowerQ or "cinefinder" in lowerQ or "fab five" in lowerQ or "zilla" in lowerQ:
        reply = "Jiya's standout projects include CineFinder (React/MERN tribute platform), Fab Five DHH (interactive frontend app with Framer Motion), and the Zilla Parishad Management System (final-year full-stack solution)."
    elif "skill" in lowerQ or "tech" in lowerQ or "stack" in lowerQ:
        reply = "Jiya is proficient in React.js, JavaScript, Tailwind CSS, HTML5, CSS3, Git, GitHub, Python, Vite, REST APIs, Node.js, and Express.js."
    elif "intern" in lowerQ or "experience" in lowerQ or "futurepoint" in lowerQ:
        reply = "Jiya completed a Frontend Development Internship at FuturePoint Technologies (May–Jun 2023), building responsive web interfaces and adding JavaScript interactivity."
    elif "contact" in lowerQ or "email" in lowerQ or "hire" in lowerQ:
        reply = "You can connect with Jiya via email, LinkedIn (jiya-khan-pathan-799827423), or GitHub (StarLord-I), or use the contact form on this site."

    return ChatResponse(reply=reply)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
