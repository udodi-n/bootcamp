export const openingAct = (name) => [
    {name: "The Start"},
    {background: "/backgrounds/command-room.avif"},
    {q01: {
            speaker: "Commander",
            expression: "neutral",
            text: `G'day, Cadet ${name}. Today, you'll be taking part in a field assessment designed to evaluate how you think under pressure`
    }},
    {q01: {
            speaker: "Commander",
            expression: "neutral",
            text: "Your decisions will tell us more than your reflexes ever could"
    }},
    {q01: {
            speaker: "Commander",
            expression: "neutral",
            text: "We'll be looking at how you approach problems, how you work with your squad and how you respond when things don't go according to plan"
    }},
]