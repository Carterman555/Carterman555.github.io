// ============================================================
//  data.js  —  Add / edit all your projects here
// ============================================================
//
//  aiUse     : 0–4  (0 = no AI, 4 = almost entirely AI-generated)
//  tutorialUse: 0–4  (0 = no tutorial used — meter will be HIDDEN)
//  selected  : true  = show in "Selected Projects" on homepage
//
// ============================================================

const projects = [
  {
    id: "cardcaster",
    title: "Cardcaster",
    dateRange: "Jul 2024 - Jun 2025",
    description: [
      "Cardcaster is a roguelike where you collect powerful cards that synergize in unique ways. You fight off enemies as you traverse the dungeon.",
      "Indie game built in Unity/C# (800 hours)."
    ],
    details: `## Technical Highlights
There are other systems I didn't include here.

### Procedural Generation
- Implemented a room-graph generation system.
- Preauthored room templates are used to build each level.
- A rule-based connector (via ScriptableObjects) determines valid room connections.
- This approach is inspired by [Enter the Gungeon's dungeon generation](https://www.boristhebrave.com/2019/07/28/dungeon-generation-in-enter-the-gungeon/).

### Deck System
- Implemented a full deck-hand-discard cycle.
- Supports operations: draw, play, discard, stack, replace, reshuffle.
- Maintains hand size dynamically in sync with player stats.

### Card Framework
- The card system uses \`ScriptableObject\` inheritance.
- Supports multiple card types: ability cards, modifiers, and persistent effects.
- Modular attributes (damage, duration, cooldown, area, projectile speed).
- Modifier system applies stat changes and effect prefabs at runtime.
- Plug-and-play card creation: new cards require no engine changes.
- Example cards:
  - **Dagger Shoot:** spawns projectiles with cooldown + applied effects.
  - **Open Palms:** modifies player hand size dynamically.

## What I'd Improve

Some functions in \`handcard.cs\` are messy. There are various if statements checking the type of card. If I were still working on the game, I would move this logic to the derived card scriptable objects.

The \`CardUIManager\`, \`DeckManager\`, and \`Handcard\` are more closely intertwined than I would like. Better encapsulation between these scripts would make the code clearer.

The card logic contains a lot of inheritance, which complicates the logic. If I were to start over, I would probably use composition instead. This actually didn't make working with the card logic too difficult unlike the enemy logic, which I refactored from inheritance-based to composition-based.`,
    image: "images/cardcaster_screenshot.png",
    tags: ["C#", "Unity"],
    aiUse: 1,
    aiDescription: "Used Chatgpt and Claude to generate Unity tools and a few utility classes.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com/Carterman555/cardcaster",
      live: "https://store.steampowered.com/app/3276950/Cardcaster/"
    },
    selected: true
  },
  {
    id: "workout-visualizer",
    title: "Workout Visualizer",
    dateRange: "Jul 2025 - Aug 2025",
    description: [
      "Workout Visualizer is an app to track, store, and visualize the progress of your workouts. It can also import data from the Strong app."
    ],
    image: "images/workout.jpg",
    tags: ["Python", "Pandas"],
    aiUse: 1,
    aiDescription: "I wrote the code myself, then used an LLM to recommend cleaner implementations as I was not too familiar with pandas.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com/Carterman555/workout-visualizer",
      live: ""
    },
    selected: false
  },
  {
    id: "neural-network",
    title: "Neural Network",
    dateRange: "Feb 2026 – Mar 2026",
    description: [
      "This program implements a basic multilayer perceptron from scratch in python."
    ],
    details: `It currently trains it on xor outputs. The neural network can be dynamically sized and trained on any set of data. For learning purposes, I used single values instead of matrices, which makes training less efficient.`,
    image: "images/neural-net.jpg",
    tags: ["Python"],
    aiUse: 0,
    aiDescription: "No AI was used.",
    tutorialUse: 2,
    tutorialDescription: "I followed [this tutorial](https://www.youtube.com/watch?v=VMj-3S1tku0) a couple months prior and created the value class based from memory and thinking it through. I did have to look back at certain parts of the code from the tutorial a couple times to remember how it worked.",
    links: {
      github: "https://github.com/Carterman555/neural_net",
      live: ""
    },
    selected: true
  },
  {
    id: "ai-asteroids",
    title: "AI Asteroids",
    dateRange: "Dec 2025",
    description: [
      "AI Asteroids uses [NEAT](https://neat-python.readthedocs.io/en/latest/index.html) to learn to play the game Asteroids.",
      "This program allows the user to play or train the AI.",
      "It displays the neural network structure using graphviz."
    ],
    image: "images/asteroids.jpg",
    tags: ["Python", "NEAT"],
    aiUse: 1,
    aiDescription: "Minimal AI was used.",
    tutorialUse: 1,
    tutorialDescription: "The base game of Asteroids was created following a project tutorial on [boot.dev](https://www.boot.dev/).",
    links: {
      github: "https://github.com/Carterman555/ai_asteroids",
      live: ""
    },
    selected: true
  },
  {
    id: "blokus",
    title: "Blokus",
    dateRange: "Dec 2025",
    description: [
      "Play Blokus with four players.",
      "Automatically detects where players can place pieces, skips players who cannot go, and determines when the game is over."
    ],
    image: "images/blokus.jpg",
    tags: ["Python"],
    aiUse: 1,
    aiDescription: "Minimal AI was used.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com/Carterman555/blokus",
      live: ""
    },
    selected: false
  },
  {
    id: "island-survivors",
    title: "Island Survivors",
    dateRange: "Jun 2024",
    description: [
      "In Island Survivors, you collect resources to build defenses to protect your keep from waves of enemies.",
      "Game built in Unity/C# during a two-week game jam."
    ],
    details: `## Technical Highlights

### Enemy AI
- There are 7 enemies with different behaviors.
- Uses an inheritance-based state machine.

### Buildings
- There are 6 unique building.
- Buildings can be built on a 1D grid and require resources.

### Resource collection
- Plants, rocks, and trees spawn randomly on the island.
- They can be harvested and they're resources can be use to create buildings.`,
    image: "images/island_survivors.jpg",
    tags: ["C#", "Unity"],
    aiUse: 1,
    aiDescription: "Minimal AI was used.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com/Carterman555/island-survivors",
      live: "https://taco-snake-games.itch.io/island-survivors"
    },
    selected: false
  }
];
