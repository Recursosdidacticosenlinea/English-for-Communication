window.UNIT = {
  slug: "my-media-day",
  title: "My Media Day",
  level: "A1",
  minutes: 50,
  subject: "Audience Studies",
  focus: ["adverbs of frequency: always, usually, never…", "How often…? / How many hours…?", "media and devices", "survey questions"],
  speakers: { "Sara": "f", "Omar": "m", "Lupita": "f", "Joel": "m" },

  presentation: {
    scene: "📱📺💻📊",
    situation: "In the **Audience Studies** class, students do a short survey: how do young people at the Faculty use media every day?",
    warmup: {
      prompt: "What do you use every day? Choose everything that is true for you.",
      options: ["my phone", "a laptop", "TV", "the radio", "Instagram", "TikTok", "YouTube", "WhatsApp", "Spotify", "Netflix", "newspapers", "video games"],
      response: "Interesting! In this unit you'll learn to talk about media habits and to ask simple survey questions."
    },
    dialogueTitle: "A quick survey",
    dialogue: [
      { who: "Sara", line: "Hi, Omar. Can I ask you some questions for my survey?" },
      { who: "Omar", line: "Sure!" },
      { who: "Sara", line: "*How often* do you watch TV?" },
      { who: "Omar", line: "Not very often. I *hardly ever* watch TV. I *usually* watch videos on my phone." },
      { who: "Sara", line: "*How many hours* a day do you use your phone?" },
      { who: "Omar", line: "About five hours. I *always* check WhatsApp in the morning." },
      { who: "Sara", line: "And do you read the news?" },
      { who: "Omar", line: "*Sometimes*. I read the news on Instagram, but I *never* buy a newspaper." }
    ]
  },

  objectives: [
    "I can name common media, platforms and devices.",
    "I can say how often I do things with *always, usually, sometimes, hardly ever, never*.",
    "I can ask survey questions with *How often…?* and *How many hours…?*",
    "I can understand and present simple survey results."
  ],

  explanation: {
    vocabTitle: "Media, devices and actions",
    vocab: [
      { word: "phone", icon: "📱" }, { word: "laptop", icon: "💻" }, { word: "TV", icon: "📺", say: "T V" },
      { word: "radio", icon: "📻" }, { word: "newspaper", icon: "📰" }, { word: "social media", icon: "💬" },
      { word: "streaming", icon: "🎬" }, { word: "video games", icon: "🎮" }, { word: "post", icon: "📤" },
      { word: "share", icon: "🔁" }, { word: "follow", icon: "➕" }, { word: "comment", icon: "💭" },
      { word: "watch", icon: "👀" }, { word: "listen to", icon: "🎧" }, { word: "survey", icon: "📋" }
    ],
    grammar: [
      {
        title: "Adverbs of frequency",
        head: ["Adverb", "%", "Example"],
        rows: [
          ["*always*", "100%", "I *always* check my phone in the morning."],
          ["*usually*", "80%", "She *usually* watches series on Netflix."],
          ["*often*", "60%", "We *often* share memes."],
          ["*sometimes*", "40%", "He *sometimes* listens to podcasts."],
          ["*hardly ever*", "10%", "They *hardly ever* watch TV."],
          ["*never*", "0%", "I *never* buy newspapers."]
        ],
        note: "The adverb goes **before** the main verb but **after** *be*: *I usually post…* / *I'm always online.*"
      },
      {
        title: "Survey questions",
        head: ["Question", "Answer"],
        rows: [
          ["*How often* do you watch TV?", "Every day. / Once a week. / Twice a month. / Never."],
          ["*How many hours* a day do you use your phone?", "About four hours."],
          ["*Do* you follow news accounts?", "Yes, I do. / No, I don't."],
          ["*What* platform do you use *most*?", "TikTok."],
          ["*When* do you listen to music?", "On the bus, in the morning."]
        ],
        note: "Expressions of frequency go at the **end**: *I post photos twice a week.*"
      }
    ],
    watchOut: [
      ["I check always my phone.", "I always check my phone."],
      ["I always am online.", "I am always online."],
      ["How often you watch TV?", "How often do you watch TV?"],
      ["I don't never read newspapers.", "I never read newspapers."],
      ["two times for week", "twice a week"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "How [[often]] do you listen to the radio?",
        "I [[never]] watch TV. (0%)",
        "She posts on Instagram twice [[a]] week.",
        "How many [[hours]] a day do you use your laptop?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Sara interviews two more students for her survey. Listen and complete the information.",
      title: "Survey interviews",
      script: [
        { who: "Sara", line: "Lupita, how often do you watch TV?" },
        { who: "Lupita", line: "I usually watch TV with my family on Sundays. We watch soccer." },
        { who: "Sara", line: "How many hours a day do you use your phone?" },
        { who: "Lupita", line: "Wow… about seven hours. I'm always on TikTok!" },
        { who: "Sara", line: "Do you listen to the radio?" },
        { who: "Lupita", line: "Hardly ever. I listen to Spotify on the bus." },
        { who: "Sara", line: "Thanks! Joel, what about you? How often do you play video games?" },
        { who: "Joel", line: "I play every night, about two hours." },
        { who: "Sara", line: "Do you read the news?" },
        { who: "Joel", line: "Yes, I always read the news on a website in the morning. I never use TikTok." },
        { who: "Sara", line: "How many hours a day do you use your phone?" },
        { who: "Joel", line: "Only three hours. I usually use my laptop." }
      ],
      activities: [
        {
          type: "sort", title: "Lupita or Joel?",
          prompt: "Who says it?",
          bins: ["Lupita", "Joel"],
          items: [
            { text: "watches soccer on Sundays", bin: 0 }, { text: "uses the phone about seven hours a day", bin: 0 },
            { text: "listens to Spotify on the bus", bin: 0 }, { text: "is always on TikTok", bin: 0 },
            { text: "plays video games every night", bin: 1 }, { text: "reads the news on a website", bin: 1 },
            { text: "never uses TikTok", bin: 1 }, { text: "usually uses a laptop", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complete the survey notes",
          prompt: "Listen again and complete Sara's notes.",
          bank: true,
          items: [
            "Lupita [[usually]] watches TV on Sundays.",
            "She [[hardly ever]] listens to the radio.",
            "Joel plays video games for about [[two]] hours.",
            "He [[always]] reads the news in the morning.",
            "He uses his phone for [[three]] hours a day."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the results of the class survey, published on the Faculty blog.",
      title: "How do Communication students use media?",
      text: [
        { author: "Survey results · 40 students", body: "We asked 40 students from the Faculty about their media habits. Here are the results." },
        { author: "Phones", body: "All the students have a smartphone. They use it for about five hours a day. 90% always check their phone before breakfast." },
        { author: "Social media", body: "The most popular platform is Instagram, then TikTok and YouTube. 70% of students post something every day, but only 20% comment on other people's posts." },
        { author: "TV and radio", body: "Only 15% of students watch TV every day. Most students watch series on streaming platforms. 60% never listen to the radio, but 75% often listen to podcasts." },
        { author: "News", body: "Students usually read the news on social media. 5% sometimes buy a newspaper. 25% never read the news. That's a problem for future journalists!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the results. Are the sentences true or false?",
          items: [
            { s: "Students use their phones for about five hours a day.", a: true },
            { s: "TikTok is the most popular platform.", a: false },
            { s: "Most students watch TV every day.", a: false },
            { s: "Many students listen to podcasts.", a: true },
            { s: "Most students buy a newspaper.", a: false }
          ]
        },
        {
          type: "match", title: "Match the numbers",
          prompt: "Match each percentage with the information.",
          pairs: [
            ["90%", "always check their phone before breakfast"],
            ["70%", "post something every day"],
            ["15%", "watch TV every day"],
            ["60%", "never listen to the radio"],
            ["25%", "never read the news"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the questions first, then write about your own media day.",
      activities: [
        {
          type: "tiles", title: "Write the survey questions",
          items: [
            { a: "How often do you watch TV?" },
            { a: "How many hours a day do you use your phone?" },
            { a: "Do you follow news accounts?" },
            { a: "What platform do you use most?" },
            { a: "I hardly ever listen to the radio." }
          ]
        },
        {
          type: "rewrite", title: "Add the adverb",
          prompt: "Rewrite each sentence with the adverb in the correct place.",
          items: [
            { q: "I check my phone in bed. (always)", a: ["I always check my phone in bed."] },
            { q: "She is online at night. (usually)", a: ["She is usually online at night.", "She's usually online at night."] },
            { q: "We share memes. (often)", a: ["We often share memes."] },
            { q: "He watches the news on TV. (hardly ever)", a: ["He hardly ever watches the news on TV."] },
            { q: "They are bored on social media. (never)", a: ["They are never bored on social media.", "They're never bored on social media."] }
          ]
        },
        {
          type: "write", title: "My media day",
          prompt: "Describe your media day. Which devices and platforms do you use? When? How often? How many hours?",
          minWords: 50, maxWords: 90,
          model: "I always check my phone when I wake up. I usually read WhatsApp messages and look at Instagram. On the bus I listen to music on Spotify. I use my laptop at the university for about three hours. I hardly ever watch TV, but I often watch series on Netflix at night. I never listen to the radio. I use my phone about six hours a day!",
          bank: ["I always…", "I usually…", "sometimes", "hardly ever", "never", "every day / twice a week", "about … hours a day", "in the morning / at night"],
          checklist: [
            "I used at least **four** different adverbs of frequency.",
            "I put the adverbs **before** the main verb (after *be*).",
            "I used an expression like *twice a week* or *every day*.",
            "I mentioned at least **three** devices or platforms."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: do the survey",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Researcher", tasks: ["Introduce the survey.", "Ask *How often…?* (2 questions).", "Ask *How many hours…?*", "Ask two more questions and say thank you."] },
            { name: "Student B · Participant", tasks: ["Answer with adverbs of frequency.", "Give extra information (when, where).", "Use *about* for numbers.", "Ask one question back."] }
          ],
          language: ["Can I ask you some questions?", "How often do you…?", "How many hours a day…?", "Do you…?", "What platform do you use most?", "I usually / hardly ever…", "About … hours.", "Thanks for your time!"],
          model: [
            { who: "A", line: "Hi! Can I ask you some questions for a survey?" },
            { who: "B", line: "Sure." },
            { who: "A", line: "How often do you listen to podcasts?" },
            { who: "B", line: "I often listen to podcasts on the bus. Maybe four times a week." },
            { who: "A", line: "How many hours a day do you use social media?" },
            { who: "B", line: "About three hours. What about you?" }
          ],
          seconds: 90,
          checklist: ["ask at least four questions?", "use *How often…?* and *How many hours…?*", "answer with adverbs of frequency?", "say thank you at the end?"]
        },
        {
          type: "speak", title: "Present your results",
          prompt: "Record yourself for about one minute. Present the results of your mini-survey: what your partner (or a family member) does with media and how often.",
          language: ["I interviewed…", "She / He always…", "She / He hardly ever…", "every day / once a week", "about … hours a day", "The most popular platform is…"],
          seconds: 75,
          checklist: ["use *he / she* + verb with -s?", "use at least three adverbs of frequency?", "give numbers (hours, times a week)?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name media, platforms and devices.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *always, usually, often, sometimes, hardly ever, never*.", review: "Explanation: Adverbs of frequency" },
    { can: "I can put adverbs of frequency in the right place.", review: "Writing activity 2" },
    { can: "I can ask survey questions with *How often…?* and *How many hours…?*", review: "Explanation: Survey questions; Speaking activity 1" },
    { can: "I can understand simple survey results with percentages.", review: "Reading activities" },
    { can: "I can describe my media habits in a short text.", review: "Writing activity 3" }
  ]
};
