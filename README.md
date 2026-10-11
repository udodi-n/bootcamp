# How to run it locally

**1. Install the website's dependencies (in this main folder)**

```
npm i
```

**2. Go into the api folder and install its dependencies too**

```
cd api
npm i
```

**3. Start the backend server (run this from the api folder)**

```
npm run dev
```

`npm run dev` uses nodemon. If you'd rather run it with node.js, use:

```
npm start
```

When it's running it prints `server running on PORT 3000`. Leave this terminal open.

**4. Start the website (open a new terminal, go back to the main folder)**

```
npm run dev
```

Then open the address it prints, http://localhost:5173.

The website talks to the backend at http://localhost:3000. If your backend runs somewhere else, set `VITE_FETCH_URL` to that address.

---

# What the game does

It's a questionnaire played as a short story.

- You pick a cadet (male or female), type in your name, and press START.
- The story runs in six parts: the opening, then four acts — First Contact, Under Pressure, The Squad, Breaking Point — then the closing, The Decision.
- The commander talks to you, and after each part you pick one of the choices on screen. Your picks get saved as you go.
- There's background music, sound effects, and the commander's expression changes while you play.
- When the story ends, your choices get sent to the backend, which turns them into a score.
- The result page shows where you land on a chart with two sides: TEAM vs SOLO, and PLANNING/ANALYSIS vs ACTION/INITIATIVE.
- You get one of four results: **intel** (The Observer), **commander** (The Leader), **assault** (The Initiator), or **tactician** (The Strategist), along with your description, your strengths, and your weakness.
