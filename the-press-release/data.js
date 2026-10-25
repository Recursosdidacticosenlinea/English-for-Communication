window.UNIT = {
  slug: "the-press-release",
  title: "The Press Release",
  level: "B1",
  minutes: 60,
  subject: "Public Relations",
  focus: ["present perfect: just, already, yet", "present perfect vs. past simple", "structure of a press release", "formal vs. informal language"],
  speakers: { "Daniela": "f", "Andrés": "m", "Journalist": "f", "Spokesperson": "m" },

  presentation: {
    scene: "📄🏛️📞🗞️",
    situation: "Daniela works in the **Public Relations** office of a museum. The museum has a new exhibition, and the press release must go out today.",
    warmup: {
      prompt: "What does a Public Relations professional do? Choose the tasks you think are part of the job.",
      options: ["write press releases", "organize events", "talk to journalists", "manage a crisis", "take photos", "plan social media", "write speeches", "sell products", "monitor the news", "prepare interviews", "design logos", "build relationships"],
      response: "Good! In this unit you'll learn to report recent news and achievements and to write a press release."
    },
    dialogueTitle: "Before the deadline",
    dialogue: [
      { who: "Andrés", line: "Daniela, *have you finished* the press release *yet*?" },
      { who: "Daniela", line: "Almost. I*'ve just added* the quote from the director." },
      { who: "Andrés", line: "Great. *Have* the journalists *confirmed* for the press conference?" },
      { who: "Daniela", line: "Five *have already confirmed*. Two *haven't answered yet*." },
      { who: "Andrés", line: "And the photos?" },
      { who: "Daniela", line: "The photographer *sent* them this morning. I*'ve chosen* three." },
      { who: "Andrés", line: "Perfect. Send it before twelve. This *has been* a crazy week!" }
    ]
  },

  objectives: [
    "I can use PR vocabulary: *press release, spokesperson, media coverage…*",
    "I can report recent news with the present perfect and *just, already, yet*.",
    "I can choose between the present perfect and the past simple.",
    "I can write a short press release in a formal style."
  ],

  explanation: {
    vocabTitle: "Public Relations vocabulary",
    vocab: [
      { word: "press release", icon: "📄" }, { word: "press conference", icon: "🎙️" }, { word: "spokesperson", icon: "🗣️" },
      { word: "media coverage", icon: "📺" }, { word: "stakeholders", icon: "🤝" }, { word: "reputation", icon: "⭐" },
      { word: "announce", icon: "📣" }, { word: "launch", icon: "🚀" }, { word: "statement", icon: "📜" },
      { word: "crisis", icon: "⚠️" }, { word: "quote", icon: "❝" }, { word: "headline", icon: "🔠" },
      { word: "media kit", icon: "🗂️" }, { word: "embargo", icon: "🔒" }, { word: "contact details", icon: "☎️" }
    ],
    grammar: [
      {
        title: "Present perfect with just, already, yet",
        head: ["Word", "Use", "Example"],
        rows: [
          ["*just*", "a very short time ago (before the participle)", "I*'ve just sent* the press release."],
          ["*already*", "sooner than expected (before the participle)", "Five journalists *have already confirmed*."],
          ["*yet*", "questions and negatives (at the end)", "*Have* you *finished yet*? / They *haven't answered yet*."],
          ["*ever / never*", "experience", "*Has* the museum *ever organized* a night event?"]
        ],
        note: "Form: *have / has* + past participle: *announce → announced, write → written, be → been, send → sent*."
      },
      {
        title: "Present perfect or past simple?",
        head: ["Present perfect", "Past simple"],
        rows: [
          ["No specific time, result now:<br>The museum *has opened* a new room.", "Specific finished time:<br>The museum *opened* the room *last Monday*."],
          ["*just, already, yet, ever, never, so far*", "*yesterday, last week, in 2019, two days ago, this morning (finished)*"],
          ["*How many* visitors *have come* so far?", "*When did* the exhibition *open*?"]
        ],
        note: "News often starts with the present perfect (the news) and continues with the past simple (the details): *The university has won a prize. It received it on Friday in Monterrey.*"
      },
      {
        title: "Formal language in a press release",
        head: ["Informal", "Formal"],
        rows: [
          ["We're super happy to tell you…", "We are pleased to announce…"],
          ["lots of people", "a large number of visitors"],
          ["get in touch", "contact"],
          ["start", "launch / inaugurate"],
          ["more info", "further information"]
        ],
        note: "Use the **third person** (*The museum announces…*), no contractions, and include a quote from a **spokesperson**."
      }
    ],
    watchOut: [
      ["I have sent it yesterday.", "I sent it yesterday."],
      ["Did you finish yet?", "Have you finished yet?"],
      ["I have already send it.", "I have already sent it."],
      ["She has yet not answered.", "She hasn't answered yet."],
      ["We are super excited to tell you!", "We are pleased to announce…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "I've [[just]] spoken to the journalist — two minutes ago.",
        "Has the director approved the text [[yet]]?",
        "The museum [[opened]] the exhibition last Friday.",
        "Over 3,000 people [[have|'ve]] visited the exhibition so far."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A journalist calls the museum's spokesperson to ask about the new exhibition. Listen and take notes.",
      title: "A call from the press",
      script: [
        { who: "Journalist", line: "Good morning. I'm calling from Puebla Hoy. I've just read your press release about the new exhibition." },
        { who: "Spokesperson", line: "Good morning. Thank you for calling. How can I help you?" },
        { who: "Journalist", line: "When did the exhibition open exactly?" },
        { who: "Spokesperson", line: "It opened last Thursday. It's called 'Voices of Clay' and it shows pottery from twelve communities in the state." },
        { who: "Journalist", line: "How many people have visited it so far?" },
        { who: "Spokesperson", line: "About two thousand people have already visited. That's more than we expected." },
        { who: "Journalist", line: "Have the artisans participated in any activities?" },
        { who: "Spokesperson", line: "Yes, they have. On Saturday they gave a workshop for children. And they've just started selling their work in the museum shop." },
        { who: "Journalist", line: "Has the museum received any international visitors yet?" },
        { who: "Spokesperson", line: "Not yet, but a group from Canada has booked a visit for next month." }
      ],
      activities: [
        {
          type: "gap", title: "The journalist's notes",
          prompt: "Listen again and complete the notes.",
          bank: true,
          items: [
            "Name of the exhibition: *Voices of [[Clay]]*",
            "Opened: last [[Thursday]]",
            "Pottery from [[twelve|12]] communities",
            "Visitors so far: about [[two thousand|2,000]]",
            "International visitors: not yet — a group from [[Canada]] next month"
          ]
        },
        {
          type: "sort", title: "Finished time or until now?",
          prompt: "Which tense does the spokesperson use?",
          bins: ["Past simple (finished time)", "Present perfect (until now)"],
          items: [
            { text: "The exhibition opened last Thursday.", bin: 0 }, { text: "On Saturday they gave a workshop.", bin: 0 },
            { text: "About 2,000 people have already visited.", bin: 1 }, { text: "They've just started selling their work.", bin: 1 },
            { text: "The museum hasn't received international visitors yet.", bin: 1 }, { text: "A group has booked a visit.", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the museum's press release.",
      title: "Press release",
      text: [
        { author: "FOR IMMEDIATE RELEASE · Puebla, 14 October", body: "**Museum of Popular Art launches \"Voices of Clay\" exhibition**" },
        { author: "Lead paragraph", body: "The Museum of Popular Art has inaugurated *Voices of Clay*, an exhibition of more than 300 pieces of pottery made by artisans from twelve communities in the state of Puebla." },
        { author: "Body", body: "The exhibition opened on 9 October. Since then, more than 2,000 visitors have explored its five rooms, which include videos and audio interviews with the artisans. The museum has also organized weekend workshops for children and families." },
        { author: "Quote", body: "\"These artisans have kept a tradition alive for centuries. We are proud to share their voices with the public,\" said María Elena Torres, director of the museum." },
        { author: "Practical information", body: "*Voices of Clay* will be open until 31 January. Entrance is free for students and teachers with ID." },
        { author: "Media contact", body: "Daniela Ríos, Public Relations Office · prensa@museo-ejemplo.mx · 222 000 0000" }
      ],
      activities: [
        {
          type: "match", title: "Parts of a press release",
          prompt: "Match each part with its function.",
          pairs: [
            ["Headline", "summarizes the news in one line"],
            ["Lead paragraph", "answers Who, What, Where in one or two sentences"],
            ["Body", "gives details and figures"],
            ["Quote", "adds the voice of a spokesperson"],
            ["Media contact", "tells journalists who to call"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false?",
          items: [
            { s: "The exhibition has more than 300 pieces.", a: true },
            { s: "The exhibition opened on 14 October.", a: false },
            { s: "The museum has organized workshops for families.", a: true },
            { s: "The quote is from Daniela Ríos.", a: false },
            { s: "Students don't have to pay.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the tenses and the formal style first, then write your own press release.",
      activities: [
        {
          type: "tiles", title: "Recent news",
          items: [
            { a: "Have you sent the press release yet?" },
            { a: "The director has just approved the quote." },
            { a: "Five journalists have already confirmed." },
            { a: "We are pleased to announce a new exhibition." },
            { a: "The museum opened the room last week." }
          ]
        },
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite the informal sentences for a press release.",
          items: [
            { q: "We're super happy to tell you about our new app.", a: ["We are pleased to announce our new app.", "We are pleased to announce the launch of our new app."] },
            { q: "Lots of people came to the event.", a: ["A large number of people attended the event.", "A large number of visitors attended the event.", "A large number of people came to the event."] },
            { q: "For more info, get in touch with Ana.", a: ["For further information, contact Ana.", "For further information, please contact Ana."] },
            { q: "The university started a new radio station.", a: ["The university launched a new radio station.", "The university has launched a new radio station."] }
          ]
        },
        {
          type: "write", title: "My press release",
          prompt: "Write a short press release about a real or invented event at your Faculty (a festival, an award, a new lab, a campaign…). Include a headline, a lead paragraph, details, a quote and contact information.",
          minWords: 100, maxWords: 160,
          model: "FOR IMMEDIATE RELEASE. Faculty of Communication launches student podcast network. The Faculty of Communication has launched Ondas, a network of ten student podcasts about culture, science and local news. The project started in August with the support of the Sound Production Workshop. Since then, students have recorded more than 40 episodes, and the podcasts have reached 15,000 listeners. \"Our students have found their own voice,\" said Laura Méndez, coordinator of the project. New episodes will be available every Monday on the main podcast platforms. Media contact: Press Office, Faculty of Communication.",
          bank: ["FOR IMMEDIATE RELEASE", "… has launched / announced…", "Since then, …", "so far", "\"…,\" said…", "will be available…", "Media contact:"],
          checklist: [
            "My press release has a **headline** and a **lead paragraph**.",
            "I used the present perfect for the news and the past simple for details.",
            "I included a **quote** from a spokesperson.",
            "I used a **formal** style (no contractions, third person)."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: the press call",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Spokesperson", tasks: ["Thank the journalist for calling.", "Announce the news (present perfect).", "Give details with dates (past simple).", "Say what will happen next."] },
            { name: "Student B · Journalist", tasks: ["Introduce yourself and your media.", "Ask *When did…?*", "Ask *How many… have… so far?*", "Ask *Have you… yet?*"] }
          ],
          language: ["Thank you for calling.", "We have just…", "We've already…", "It opened / started on…", "So far, …", "We haven't … yet.", "When did…?", "Have you … yet?"],
          model: [
            { who: "B", line: "Good morning, I'm calling from a local newspaper. I've heard about your new podcast network." },
            { who: "A", line: "Yes! We've just published our 40th episode." },
            { who: "B", line: "When did the project start?" },
            { who: "A", line: "It started in August, with ten student teams." },
            { who: "B", line: "Have you received any awards yet?" },
            { who: "A", line: "Not yet, but we've applied to a national competition." }
          ],
          seconds: 120,
          checklist: ["use the present perfect for recent news?", "use the past simple with specific times?", "use *just, already* or *yet*?", "sound professional and polite?"]
        },
        {
          type: "speak", title: "Official statement",
          prompt: "Record a one-minute statement as a spokesperson for an organization. Announce recent news, give two or three facts and finish with a formal closing.",
          language: ["Good morning. On behalf of…", "We are pleased to announce that…", "So far, we have…", "This project began in…", "Thank you for your attention."],
          seconds: 75,
          checklist: ["use formal language?", "use the present perfect and the past simple correctly?", "give figures or dates?", "speak clearly for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use Public Relations vocabulary.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present perfect with *just, already, yet*.", review: "Explanation: Present perfect; Writing activity 1" },
    { can: "I can choose between the present perfect and the past simple.", review: "Explanation: Present perfect or past simple?; Listening activity 2" },
    { can: "I can identify the parts of a press release.", review: "Reading activity 1" },
    { can: "I can change informal sentences into formal ones.", review: "Explanation: Formal language; Writing activity 2" },
    { can: "I can write a press release and answer a journalist's questions.", review: "Writing activity 3 and Speaking activity 1" }
  ]
};
