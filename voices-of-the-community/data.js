window.UNIT = {
  slug: "voices-of-the-community",
  title: "Voices of the Community",
  level: "B1",
  minutes: 60,
  subject: "Communication for Development and Social Change",
  focus: ["used to / didn't use to", "indirect questions: Could you tell me…?", "interview techniques", "describing change in a community"],
  speakers: { "Tania": "f", "Don Hugo": "m", "Doña Rocío": "f", "Iván": "m" },

  presentation: {
    scene: "🏘️🎙️🌱🤝",
    situation: "For **Communication for Development and Social Change**, Tania and Iván are making a community radio program in a town near Puebla. Today they're interviewing an older resident about how the town has changed.",
    warmup: {
      prompt: "What problems or changes can a community communication project work on? Choose the topics that interest you.",
      options: ["water", "migration", "indigenous languages", "health", "education", "the environment", "women's rights", "local markets", "public safety", "traditions", "internet access", "young people"],
      response: "Great! In this unit you'll learn to interview people respectfully and to talk about how communities used to be."
    },
    dialogueTitle: "An interview in the town square",
    dialogue: [
      { who: "Tania", line: "Good morning, Don Hugo. *Could you tell me* how long you've lived here?" },
      { who: "Don Hugo", line: "All my life, seventy-two years." },
      { who: "Tania", line: "*Do you remember what* the town *was* like when you were young?" },
      { who: "Don Hugo", line: "Of course. We *used to* get water from the river. There *didn't use to* be any roads, only paths." },
      { who: "Iván", line: "*I was wondering if* you could tell us about the market." },
      { who: "Don Hugo", line: "Ah, the market! People *used to* exchange products — corn for beans, chickens for bread. We *didn't use to* need money." },
      { who: "Tania", line: "That's fascinating. And what do young people do now?" }
    ]
  },

  objectives: [
    "I can use vocabulary about communities and social projects.",
    "I can talk about past habits and situations with *used to* and *didn't use to*.",
    "I can ask polite indirect questions: *Could you tell me…? Do you know if…?*",
    "I can plan and carry out a respectful community interview."
  ],

  explanation: {
    vocabTitle: "Community and social change",
    vocab: [
      { word: "community", icon: "🏘️" }, { word: "resident", icon: "🧓" }, { word: "neighborhood", icon: "🏡" },
      { word: "local leader", icon: "🧑‍🤝‍🧑" }, { word: "participation", icon: "✋" }, { word: "needs", icon: "📋" },
      { word: "migration", icon: "🧳" }, { word: "tradition", icon: "🎎" }, { word: "community radio", icon: "📻" },
      { word: "workshop", icon: "🛠️" }, { word: "consent", icon: "✅" }, { word: "testimony", icon: "🗣️" },
      { word: "empower", icon: "💪" }, { word: "improve", icon: "📈" }, { word: "access to", icon: "🚪" }
    ],
    grammar: [
      {
        title: "Used to",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "*used to* + verb", "We *used to* get water from the river."],
          ["Negative", "*didn't use to* + verb", "There *didn't use to* be roads."],
          ["Question", "*Did* + subject + *use to* + verb?", "*Did* people *use to* speak Náhuatl at home? – Yes, they *did*."],
          ["Contrast with now", "*used to* … but now …", "Young people *used to* stay; *now* many of them migrate."]
        ],
        note: "*used to* is only for the **past** (habits and situations that are not true now). For the present, use *usually*: *I usually listen to the radio.*"
      },
      {
        title: "Indirect questions",
        head: ["Direct question", "Indirect (more polite)"],
        rows: [
          ["Where *do you* live?", "*Could you tell me* where *you live*?"],
          ["How long *have you* lived here?", "*Can I ask* how long *you have* lived here?"],
          ["*Is* the water clean?", "*Do you know if* the water *is* clean?"],
          ["What *was* the town like?", "*Do you remember* what the town *was* like?"],
          ["*Did* you go to school here?", "*I was wondering if* you went to school here."]
        ],
        note: "In indirect questions use **statement word order** (subject + verb) and **no do / does / did**. For yes/no questions use *if* or *whether*."
      },
      {
        title: "Interview techniques",
        head: ["Technique", "Example"],
        rows: [
          ["Ask for consent", "*Is it OK if I record our conversation?*"],
          ["Open questions", "*Could you tell me about…? How did you feel when…?*"],
          ["Follow-up", "*That's interesting. Could you give me an example?*"],
          ["Check understanding", "*So, if I understand correctly, …*"],
          ["Thank and close", "*Thank you for sharing your story with us.*"]
        ],
        note: "In community communication, the people interviewed are **participants**, not just sources. Listen more than you talk."
      }
    ],
    watchOut: [
      ["We use to get water from the river.", "We used to get water from the river."],
      ["Did you used to live here?", "Did you use to live here?"],
      ["Could you tell me where do you live?", "Could you tell me where you live?"],
      ["Do you know is the school open?", "Do you know if the school is open?"],
      ["I used to go to the market every Sunday. (= now)", "I usually go to the market every Sunday."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "People [[used]] to walk two hours to the nearest town.",
        "There [[didn't|did not]] use to be a clinic in the community.",
        "Could you tell me how old [[you are]]?",
        "Do you know [[if|whether]] the radio station is open on Sundays?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of the community radio program. Doña Rocío talks about women in the town.",
      title: "Women who changed the town",
      script: [
        { who: "Tania", line: "Doña Rocío, thank you for being here. Could you tell us how life was for women when you were young?" },
        { who: "Doña Rocío", line: "Very different, mija. Women didn't use to go to school after primary. We used to work at home and in the fields." },
        { who: "Iván", line: "Did women use to participate in community meetings?" },
        { who: "Doña Rocío", line: "No, only men used to go. We used to listen from outside the door!" },
        { who: "Tania", line: "Do you remember when that changed?" },
        { who: "Doña Rocío", line: "In the nineties. A group of us started a women's cooperative. We made embroidery and sold it in Puebla." },
        { who: "Iván", line: "And how did the men react?" },
        { who: "Doña Rocío", line: "At first they didn't like it. But when the money arrived, they changed their minds." },
        { who: "Tania", line: "What's the situation now?" },
        { who: "Doña Rocío", line: "Now my granddaughters study at the university. One of them is studying Communication, like you. And women speak at every meeting." }
      ],
      activities: [
        {
          type: "sort", title: "Then or now?",
          prompt: "Sort the information: how things used to be, or how they are now.",
          bins: ["In the past", "Now"],
          items: [
            { text: "Women didn't study after primary school.", bin: 0 }, { text: "Only men went to the meetings.", bin: 0 },
            { text: "Women worked at home and in the fields.", bin: 0 }, { text: "Women listened from outside the door.", bin: 0 },
            { text: "Her granddaughters study at the university.", bin: 1 }, { text: "Women speak at every meeting.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The women's cooperative started in the nineties.", a: true },
            { s: "The cooperative sold food in Puebla.", a: false },
            { s: "The men liked the cooperative from the beginning.", a: false },
            { s: "One of her granddaughters studies Communication.", a: true },
            { s: "Iván asks a question about community meetings.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this article about a community communication project.",
      title: "A radio station that speaks Náhuatl",
      text: [
        { author: "The beginning", body: "Fifteen years ago, the young people of a small town in the Sierra Norte de Puebla didn't use to speak Náhuatl. Their grandparents spoke it, but many parents thought Spanish was more useful. The language was disappearing." },
        { author: "The project", body: "A group of teachers and communication students decided to create a community radio station. They didn't use to have any equipment — they used to record programs with a phone and an old computer. Local people helped them build a small antenna." },
        { author: "Participation", body: "Before starting, the team asked the community: What do you need? What do you want to hear? The answers surprised them: people wanted music, local news, health information and stories from the elders — in Náhuatl." },
        { author: "The results", body: "Today the station broadcasts eight hours a day. Teenagers present programs in both languages, and grandparents tell stories every Sunday. \"We used to feel ashamed of our language. Now we feel proud,\" says Marisol, 17." },
        { author: "Lessons", body: "The founders say the secret is simple: \"Don't arrive with answers. Ask questions, listen, and let the community be the voice.\"" }
      ],
      activities: [
        {
          type: "match", title: "Before and after",
          prompt: "Match the past situation with the present situation.",
          pairs: [
            ["Young people didn't use to speak Náhuatl.", "Teenagers present programs in two languages."],
            ["They used to record with a phone.", "The station broadcasts eight hours a day."],
            ["Young people used to feel ashamed of the language.", "Now they feel proud."],
            ["Grandparents' stories were disappearing.", "Grandparents tell stories every Sunday."]
          ]
        },
        {
          type: "rewrite", title: "Make the questions polite",
          prompt: "You are going to interview the founders. Change the direct questions into indirect questions.",
          items: [
            { q: "When did the project start? (Could you tell me…)", a: ["Could you tell me when the project started?"] },
            { q: "What equipment did you use? (Do you remember…)", a: ["Do you remember what equipment you used?"] },
            { q: "Is the station on the internet? (Do you know if…)", a: ["Do you know if the station is on the internet?", "Do you know whether the station is on the internet?"] },
            { q: "How many people listen to the station? (Can I ask…)", a: ["Can I ask how many people listen to the station?"] },
            { q: "Did the parents support the project? (I was wondering if…)", a: ["I was wondering if the parents supported the project.", "I was wondering whether the parents supported the project."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then write about change in a community you know.",
      activities: [
        {
          type: "tiles", title: "Interview questions",
          items: [
            { a: "Could you tell me how long you have lived here?" },
            { a: "Do you know if the clinic is open?" },
            { a: "Did people use to speak Náhuatl at home?" },
            { a: "There didn't use to be a road." },
            { a: "Is it OK if I record our conversation?" }
          ]
        },
        {
          type: "gap", title: "My grandmother's town",
          prompt: "Complete the text with *used to / didn't use to* and the verb.",
          items: [
            "When my grandmother was a child, she [[used to walk]] (walk) to school for an hour.",
            "Her family [[didn't use to have|did not use to have]] (not / have) electricity.",
            "In the evenings, they [[used to listen]] (listen) to the radio together.",
            "[[Did]] she use to play in the street? Yes, she [[did]].",
            "Now the town has internet, but people [[don't|do not]] talk to their neighbors as much."
          ]
        },
        {
          type: "write", title: "A community then and now",
          prompt: "Write about how a community you know (your town, your neighborhood, your family's town) has changed. Describe how things used to be and how they are now. Then write three indirect questions you would ask an older resident.",
          minWords: 100, maxWords: 150,
          model: "My father's town is in the Mixteca region. Thirty years ago, most people used to work in the fields, and children used to help after school. There didn't use to be a secondary school, so young people had to go to the city. Many families used to speak Mixteco at home. Now there is a secondary school and an internet café, but a lot of young people have migrated to the United States, and fewer children speak Mixteco. Questions for an older resident: Could you tell me what the town was like when you were young? Do you remember when the first families migrated? I was wondering if people still celebrate the old festivals.",
          bank: ["… years ago,", "people used to…", "there didn't use to be…", "Now…", "but", "Could you tell me…?", "Do you remember…?", "I was wondering if…"],
          checklist: [
            "I used *used to* at least **three** times.",
            "I used *didn't use to* at least once.",
            "I compared the past with **now**.",
            "I wrote **three** indirect questions with correct word order."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: the community interview",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Interviewer", tasks: ["Greet and ask for consent to record.", "Ask at least three indirect questions.", "Ask one follow-up question.", "Summarize and thank the participant."] },
            { name: "Student B · Resident", tasks: ["Say how long you've lived there.", "Describe three things people used to do.", "Say one thing that didn't use to exist.", "Compare with now."] }
          ],
          language: ["Is it OK if I record…?", "Could you tell me…?", "Do you remember…?", "I was wondering if…", "Could you give me an example?", "So, if I understand correctly,…", "We used to…", "There didn't use to be…"],
          model: [
            { who: "A", line: "Good afternoon. Is it OK if I record our conversation for the community radio?" },
            { who: "B", line: "Yes, of course." },
            { who: "A", line: "Could you tell me what the town was like when you were a child?" },
            { who: "B", line: "It was very quiet. We used to play in the street, and there didn't use to be any cars." },
            { who: "A", line: "That's interesting. Could you give me an example of a game?" },
            { who: "B", line: "We used to play with a ball made of rags!" }
          ],
          seconds: 150,
          checklist: ["ask for consent?", "use indirect questions with the correct word order?", "use *used to* and *didn't use to*?", "ask a follow-up question?"]
        },
        {
          type: "speak", title: "A testimony for the radio",
          prompt: "Record a one-minute segment for a community radio program. Present a person or a place and describe how life used to be and how it has changed. You can use a real interview with a family member.",
          language: ["Welcome to…", "Today we're talking about…", "Many years ago, people used to…", "There didn't use to be…", "Now…", "As … told us, …"],
          seconds: 75,
          checklist: ["introduce the segment?", "use *used to* to describe the past?", "contrast the past with now?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use vocabulary about communities and social projects.", review: "Explanation: the vocabulary cards" },
    { can: "I can talk about the past with *used to* and *didn't use to*.", review: "Explanation: Used to; Writing activity 2" },
    { can: "I can ask questions with *Did … use to…?*", review: "Listening activity 1" },
    { can: "I can make indirect questions with the correct word order.", review: "Explanation: Indirect questions; Reading activity 2" },
    { can: "I can use techniques for a respectful interview (consent, follow-up).", review: "Explanation: Interview techniques" },
    { can: "I can interview a community member and present their testimony.", review: "Speaking activities 1 and 2" }
  ]
};
