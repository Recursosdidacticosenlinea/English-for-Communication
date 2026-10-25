window.UNIT = {
  slug: "lights-camera-action",
  title: "Lights, Camera, Action!",
  level: "A2",
  minutes: 55,
  subject: "Audiovisual Language and Production",
  focus: ["present continuous to describe scenes", "shot types and camera movements", "sequencers: first, then, after that", "film set language"],
  speakers: { "Director": "f", "Kevin": "m", "Camila": "f", "Óscar": "m" },

  presentation: {
    scene: "🎬🎥💡🎞️",
    situation: "In **Audiovisual Production**, Camila's team is planning a short film. They are looking at the **storyboard** and describing each shot.",
    warmup: {
      prompt: "Which roles on a film set do you know? Choose them.",
      options: ["director", "camera operator", "actor", "editor", "sound technician", "producer", "scriptwriter", "make-up artist", "lighting technician", "extra", "photographer", "assistant"],
      response: "Good! In this unit you'll learn to describe scenes and to plan a short video shot by shot."
    },
    dialogueTitle: "Reading the storyboard",
    dialogue: [
      { who: "Camila", line: "OK, team, let's check the storyboard. In shot one, it's a *wide shot* of the campus. Students *are walking* to class." },
      { who: "Kevin", line: "And in shot two?" },
      { who: "Camila", line: "It's a *close-up* of Óscar. He *is looking* at his phone and he *isn't smiling*." },
      { who: "Óscar", line: "Why *am* I *looking* at my phone?" },
      { who: "Camila", line: "Because you *are reading* a strange message. *Then*, the camera *pans* to the right." },
      { who: "Kevin", line: "*After that*, a *medium shot*: a girl *is running* towards you." },
      { who: "Camila", line: "Exactly. Positions, everyone… Lights, camera, *action*!" }
    ]
  },

  objectives: [
    "I can name the main shot types and camera movements.",
    "I can describe what is happening in a scene with the present continuous.",
    "I can order the shots of a scene with *first, then, after that, finally*.",
    "I can understand and give basic instructions on a film set."
  ],

  explanation: {
    vocabTitle: "Shots, movements and the set",
    vocab: [
      { word: "wide shot", icon: "🏞️" }, { word: "medium shot", icon: "🧍" }, { word: "close-up", icon: "😮" },
      { word: "extreme close-up", icon: "👁️" }, { word: "over-the-shoulder", icon: "👥" }, { word: "pan", icon: "↔️" },
      { word: "tilt", icon: "↕️" }, { word: "zoom", icon: "🔍" }, { word: "tracking shot", icon: "🛤️" },
      { word: "storyboard", icon: "🗒️" }, { word: "script", icon: "📜" }, { word: "scene", icon: "🎭" },
      { word: "take", icon: "🎬" }, { word: "edit", icon: "✂️" }, { word: "soundtrack", icon: "🎼" }
    ],
    grammar: [
      {
        title: "Present continuous: describing a scene",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "*am / is / are* + verb-*ing*", "Two students *are talking* in the cafeteria."],
          ["Negative", "*am not / isn't / aren't* + verb-*ing*", "He *isn't smiling*. They *aren't moving*."],
          ["Question", "*Am / Is / Are* + subject + verb-*ing*?", "*Is* she *crying*? – Yes, she *is*."],
          ["Wh- question", "Wh- + *is / are* + subject + verb-*ing*?", "What *is* he *doing*? – He's *reading* a message."]
        ],
        note: "Spelling: *run → running, sit → sitting, smile → smiling, look → looking*."
      },
      {
        title: "Sequencing the shots",
        head: ["Sequencer", "Example"],
        rows: [
          ["*First, …*", "*First*, we see a wide shot of the street."],
          ["*Then, …* / *Next, …*", "*Then*, the camera zooms in on the door."],
          ["*After that, …*", "*After that*, there's a close-up of her hands."],
          ["*Finally, …*", "*Finally*, the screen goes black."],
          ["*while*", "The music is playing *while* he is running."]
        ],
        note: "Storyboards and scripts often use the **present** to describe action: *The camera pans left.*"
      },
      {
        title: "On the set",
        head: ["Instruction", "Meaning"],
        rows: [
          ["*Quiet on set!*", "Everybody be silent."],
          ["*Rolling.* / *Speed.*", "The camera / sound is recording."],
          ["*Action!*", "Start acting now."],
          ["*Cut!*", "Stop acting and recording."],
          ["*Let's do another take.*", "Let's record the scene again."]
        ],
        note: "A *take* is one recording of a shot. A *scene* can have many shots and many takes."
      }
    ],
    watchOut: [
      ["She is walk.", "She is walking."],
      ["They talking.", "They are talking."],
      ["What he is doing?", "What is he doing?"],
      ["runing / siting", "running / sitting"],
      ["a close up shot of the campus (to show all the campus)", "a wide shot of the campus"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the description of the shot.",
      items: [
        "It's a close-up. The actor [[is]] crying.",
        "The two girls [[are]] sitting on a bench.",
        "What [[is]] the dog doing? It's running.",
        "[[First|First,]] we see the city. Then, the camera zooms in."
      ]
    }
  },

  skills: {
    listening: {
      intro: "The director describes the opening scene to her team. Listen and put the shots in order.",
      title: "The opening scene",
      script: [
        { who: "Director", line: "OK, everybody, this is the opening scene. It's early morning at a market." },
        { who: "Director", line: "First, a wide shot of the market. The sellers are opening their stalls and the sun is coming up." },
        { who: "Director", line: "Then, a tracking shot. The camera is following Doña Rosa. She's carrying a big basket of fruit." },
        { who: "Kevin", line: "Is she talking to anyone?" },
        { who: "Director", line: "No, she isn't talking. She's walking fast. We only hear the sounds of the market." },
        { who: "Director", line: "After that, a close-up of her hands. She's putting mangoes on the table." },
        { who: "Director", line: "Next, an over-the-shoulder shot: a young man is watching her from the street." },
        { who: "Director", line: "Finally, an extreme close-up of his eyes. The music starts. And… cut to the title." }
      ],
      activities: [
        {
          type: "match", title: "Shot and action",
          prompt: "Match each shot with what is happening.",
          pairs: [
            ["wide shot", "The sellers are opening their stalls."],
            ["tracking shot", "Doña Rosa is carrying a basket of fruit."],
            ["close-up", "Her hands are putting mangoes on the table."],
            ["over-the-shoulder shot", "A young man is watching her."],
            ["extreme close-up", "We see his eyes and the music starts."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The scene happens at night.", a: false },
            { s: "Doña Rosa is talking to the sellers.", a: false },
            { s: "We hear the sounds of the market.", a: true },
            { s: "The young man is in the street.", a: true },
            { s: "The music starts at the beginning of the scene.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this page from the script of a student short film.",
      title: "Script: \"The Message\" – Scene 3",
      text: [
        { author: "INT. LIBRARY – DAY", body: "A quiet library. Students are studying at long tables. Nobody is talking." },
        { author: "Action", body: "LUCÍA (20) is sitting alone near the window. She is writing in a notebook. Her phone is vibrating on the table, but she isn't looking at it." },
        { author: "Action", body: "MEDIUM SHOT: TOMÁS (21) is standing between two shelves. He is holding a book, but he isn't reading. He is watching Lucía." },
        { author: "Action", body: "CLOSE-UP: The phone screen. A message: \"Look up.\" Lucía picks up the phone. She is frowning." },
        { author: "Action", body: "WIDE SHOT: Lucía looks around the library. Tomás is smiling. He waves. Lucía is laughing now. The LIBRARIAN is looking at them angrily." },
        { author: "LIBRARIAN", body: "Shhh!" }
      ],
      activities: [
        {
          type: "sort", title: "Who is doing what?",
          prompt: "Put each action with the right character.",
          bins: ["Lucía", "Tomás", "The librarian"],
          items: [
            { text: "is sitting near the window", bin: 0 }, { text: "is writing in a notebook", bin: 0 }, { text: "is frowning at the message", bin: 0 },
            { text: "is standing between two shelves", bin: 1 }, { text: "is holding a book", bin: 1 }, { text: "is smiling and waving", bin: 1 },
            { text: "is looking at them angrily", bin: 2 }, { text: "says \"Shhh!\"", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Correct the description",
          prompt: "Each sentence is wrong. Write a negative sentence and then the correct one.",
          items: [
            { q: "Lucía is reading a book.", a: ["Lucía isn't reading a book. She is writing in a notebook.", "She isn't reading a book. She's writing in a notebook.", "Lucía isn't reading a book. She's writing in a notebook."] },
            { q: "Tomás is sitting at a table.", a: ["Tomás isn't sitting at a table. He is standing between two shelves.", "He isn't sitting at a table. He's standing between two shelves.", "Tomás isn't sitting at a table. He's standing between two shelves."] },
            { q: "The students are talking.", a: ["The students aren't talking. They are studying.", "They aren't talking. They're studying.", "The students aren't talking. They're studying."] },
            { q: "The librarian is smiling.", a: ["The librarian isn't smiling. She is looking at them angrily.", "The librarian isn't smiling. She's looking at them angrily.", "The librarian isn't smiling. He is looking at them angrily."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the language first, then write the storyboard for a short scene.",
      activities: [
        {
          type: "tiles", title: "Describe the shots",
          items: [
            { a: "First, we see a wide shot of the city." },
            { a: "The camera is following the actor." },
            { a: "What is she doing in this shot?" },
            { a: "They aren't talking in the close-up." },
            { a: "After that, the camera zooms in." }
          ]
        },
        {
          type: "gap", title: "A shot list",
          prompt: "Complete the shot list with the present continuous.",
          items: [
            "Shot 1 – Wide shot: It's raining. People [[are running|are walking]] (run) in the street.",
            "Shot 2 – Medium shot: A boy [[is waiting]] (wait) at the bus stop.",
            "Shot 3 – Close-up: He [[is checking|'s checking]] (check) the time on his phone.",
            "Shot 4 – Over-the-shoulder: A bus [[is coming]] (come), but it [[isn't stopping|is not stopping]] (not / stop).",
            "Shot 5 – Extreme close-up: His face. He [[isn't smiling|is not smiling]] (not / smile)."
          ]
        },
        {
          type: "write", title: "My storyboard",
          prompt: "Plan a short scene (5 shots) for a video about your university. For each shot, write the type of shot and what is happening. Use sequencers.",
          minWords: 70, maxWords: 120,
          model: "First, a wide shot of the Faculty in the morning. Students are arriving and some are drinking coffee. Then, a tracking shot: the camera is following a girl with a camera. She is walking to the photo lab. After that, a close-up of her hands. She is changing the lens. Next, a medium shot of the lab. Her classmates are setting up the lights. Finally, an extreme close-up of the camera: click! The screen goes white.",
          bank: ["First,", "Then,", "After that,", "Next,", "Finally,", "a wide shot of…", "a close-up of…", "The camera is following…", "…is / are + -ing"],
          checklist: [
            "I described **five** shots.",
            "I named the **type of shot** each time.",
            "I used the present continuous at least **five** times.",
            "I used sequencers to order the shots."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: guess the movie",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Describer", tasks: ["Say the type of shot.", "Describe what the characters are doing.", "Describe the camera movement.", "Use *first, then, after that*."] },
            { name: "Student B · Guesser", tasks: ["Ask *What is he / she doing?*", "Ask *Where are they?*", "Ask *Is it a close-up?*", "Guess the movie."] }
          ],
          language: ["In the first shot…", "It's a wide shot / close-up.", "A man is running…", "The camera is following…", "What is she doing?", "Are they talking?", "Is it…?"],
          model: [
            { who: "A", line: "First, it's a wide shot. We see the ocean. It's night and it's very cold." },
            { who: "B", line: "Are there any people?" },
            { who: "A", line: "Yes. Then there's a close-up: a woman is lying on a piece of wood. A man is holding her hand." },
            { who: "B", line: "Is he talking?" },
            { who: "A", line: "Yes, he's talking, but he's shaking. He's very cold." },
            { who: "B", line: "I know! It's Titanic!" }
          ],
          seconds: 120,
          checklist: ["name shot types?", "use the present continuous?", "use sequencers?", "ask and answer questions?"]
        },
        {
          type: "speak", title: "Pitch your scene",
          prompt: "Record yourself for about one minute. Present the storyboard you wrote in the Writing section to your production team, shot by shot.",
          language: ["This scene is about…", "In the first shot,…", "Then the camera…", "The actor is…", "Finally,…", "We need: a camera, a tripod…"],
          seconds: 75,
          checklist: ["describe at least four shots?", "use shot vocabulary?", "use the present continuous and sequencers?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name shot types and camera movements.", review: "Explanation: the vocabulary cards" },
    { can: "I can describe actions in a scene with the present continuous.", review: "Explanation: Present continuous; Writing activity 2" },
    { can: "I can make negatives and questions in the present continuous.", review: "Reading activity 2" },
    { can: "I can order shots with *first, then, after that, finally*.", review: "Explanation: Sequencing the shots" },
    { can: "I can understand a director describing a scene.", review: "Listening activities" },
    { can: "I can plan and present a short storyboard.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
