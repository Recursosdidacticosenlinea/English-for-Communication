window.UNIT = {
  slug: "breaking-news",
  title: "Breaking News",
  level: "A2",
  minutes: 55,
  subject: "Journalism Workshop",
  focus: ["past simple: regular and irregular", "Wh- questions in the past", "the 5 Ws of a news story", "headline language"],
  speakers: { "Editor": "f", "Pablo": "m", "Andrea": "f", "Witness": "m", "Reporter": "f" },

  presentation: {
    scene: "📰🗞️🎤🚨",
    situation: "It's Monday in the **Journalism Workshop**. Something happened on campus last night. The editor of the student newspaper needs the story — fast!",
    warmup: {
      prompt: "Where do you usually get the news? Choose all that are true.",
      options: ["Instagram", "X (Twitter)", "TikTok", "TV news", "news websites", "the radio", "newspapers", "my family", "WhatsApp groups", "YouTube", "podcasts", "I don't follow the news"],
      response: "Thanks! In this unit you'll learn to ask about past events and to write a short news story."
    },
    dialogueTitle: "At the student newspaper",
    dialogue: [
      { who: "Editor", line: "Pablo, *what happened* at the library last night?" },
      { who: "Pablo", line: "There *was* a small fire. It *started* in the cafeteria at about nine o'clock." },
      { who: "Editor", line: "*Did* anybody *get* hurt?" },
      { who: "Pablo", line: "No, nobody *got* hurt. The security guards *called* the firefighters and everybody *left* the building." },
      { who: "Editor", line: "*How did* it *start*?" },
      { who: "Pablo", line: "A coffee machine *broke*. I *talked* to a witness." },
      { who: "Editor", line: "Great. Write the story — Who, What, When, Where, Why. I need it by twelve!" }
    ]
  },

  objectives: [
    "I can use the past simple of regular and irregular verbs to report events.",
    "I can ask *Wh-* questions in the past: *What happened? When did it start?*",
    "I can identify the 5 Ws (Who, What, When, Where, Why) in a news story.",
    "I can write a short news story and interview a witness."
  ],

  explanation: {
    vocabTitle: "Newsroom vocabulary",
    vocab: [
      { word: "headline", icon: "🔠" }, { word: "reporter", icon: "🎤" }, { word: "editor", icon: "✍️" },
      { word: "witness", icon: "👁️" }, { word: "source", icon: "🗂️" }, { word: "interview", icon: "🗣️" },
      { word: "breaking news", icon: "🚨" }, { word: "event", icon: "📅" }, { word: "accident", icon: "💥" },
      { word: "fire", icon: "🔥" }, { word: "protest", icon: "📢" }, { word: "announce", icon: "📣" },
      { word: "report", icon: "📝" }, { word: "happen", icon: "❗" }, { word: "deadline", icon: "⏰" }
    ],
    grammar: [
      {
        title: "Past simple",
        head: ["", "Regular (+ed)", "Irregular"],
        rows: [
          ["Affirmative", "The guards *called* the firefighters.", "Everybody *left* the building."],
          ["Negative", "It *didn't start* in the library.", "Nobody *got* hurt. / They *didn't see* it."],
          ["Question", "*Did* the firefighters *arrive* quickly?", "*Did* you *speak* to a witness?"],
          ["Short answer", "Yes, they *did*.", "No, I *didn't*."]
        ],
        note: "After *didn't* and *did* use the **base form**: *Did it start…?* (not *started*)."
      },
      {
        title: "Common irregular verbs in the news",
        head: ["Base", "Past", "Base", "Past"],
        rows: [
          ["be", "was / were", "say", "said"],
          ["break", "broke", "see", "saw"],
          ["get", "got", "take", "took"],
          ["go", "went", "tell", "told"],
          ["leave", "left", "win", "won"],
          ["make", "made", "write", "wrote"]
        ],
        note: "Regular spelling: *stop → stopped, study → studied, arrive → arrived*."
      },
      {
        title: "The 5 Ws: questions in the past",
        head: ["Question word", "Question", "Answer"],
        rows: [
          ["*Who*", "*Who called* the firefighters? (subject)", "The security guards."],
          ["*What*", "*What happened*?", "There was a fire."],
          ["*When*", "*When did* it *start*?", "At about 9 p.m."],
          ["*Where*", "*Where did* it *start*?", "In the cafeteria."],
          ["*Why / How*", "*Why did* it *happen*? *How did* it *start*?", "A coffee machine broke."]
        ],
        note: "When *who* or *what* is the **subject**, don't use *did*: *What happened?* (not *What did happen?*)."
      }
    ],
    watchOut: [
      ["Did you saw the fire?", "Did you see the fire?"],
      ["What did happen?", "What happened?"],
      ["Where it started?", "Where did it start?"],
      ["Nobody didn't get hurt.", "Nobody got hurt."],
      ["They leaved the building.", "They left the building."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences in the past simple.",
      items: [
        "The students [[went]] (go) to the protest on Friday.",
        "When [[did]] the event start?",
        "The director [[didn't|did not]] (not / say) anything to reporters.",
        "What [[happened]] (happen) at the stadium?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A reporter from campus radio interviews a witness. Listen and find the 5 Ws.",
      title: "Interview with a witness",
      script: [
        { who: "Reporter", line: "Good afternoon. You were at the concert yesterday, right? What happened?" },
        { who: "Witness", line: "Yes, I was there. The concert started at seven, but at about eight the lights went off." },
        { who: "Reporter", line: "Where were you?" },
        { who: "Witness", line: "I was near the stage with my friends. Everything was dark, and people started to scream." },
        { who: "Reporter", line: "Did people leave the stadium?" },
        { who: "Witness", line: "Some people left, but most of us stayed. We used the lights on our phones." },
        { who: "Reporter", line: "Why did the lights go off?" },
        { who: "Witness", line: "The organizers said it was a problem with the electricity. It rained a lot in the afternoon." },
        { who: "Reporter", line: "And when did the concert continue?" },
        { who: "Witness", line: "After forty minutes. The band played for two more hours. It was amazing!" }
      ],
      activities: [
        {
          type: "match", title: "The 5 Ws",
          prompt: "Match each question with the information from the interview.",
          pairs: [
            ["What happened?", "The lights went off during a concert."],
            ["When?", "Yesterday, at about eight p.m."],
            ["Where was the witness?", "Near the stage."],
            ["Why?", "A problem with the electricity after the rain."],
            ["How did people see?", "With the lights on their phones."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The concert started at eight.", a: false },
            { s: "All the people left the stadium.", a: false },
            { s: "It rained in the afternoon.", a: true },
            { s: "The concert continued after forty minutes.", a: true },
            { s: "The witness didn't like the concert.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this story from the student newspaper.",
      title: "Communication students win national award",
      text: [
        { author: "Headline", body: "**Communication students win national award for documentary**" },
        { author: "Paragraph 1", body: "Three students from the Faculty of Communication won first prize at the National Student Film Festival in Guadalajara last Saturday. Their documentary, *Voces del Mercado*, tells the stories of women who sell food in a local market." },
        { author: "Paragraph 2", body: "Andrea López, Diego Ramos and Mariana Cruz made the film in their fifth semester for the Audiovisual Production Workshop. They recorded interviews for three months and edited the film in the Faculty lab." },
        { author: "Paragraph 3", body: "\"We didn't expect to win,\" said Andrea. \"We just wanted to show the work of these women.\" The judges said the film was \"honest and beautiful\"." },
        { author: "Paragraph 4", body: "The students received a prize of 30,000 pesos and a trip to a film festival in Spain. The Faculty is going to show the documentary on campus next Friday." }
      ],
      activities: [
        {
          type: "sort", title: "Find the 5 Ws",
          prompt: "Put each piece of information in the right group.",
          bins: ["Who?", "What?", "When?", "Where?"],
          items: [
            { text: "three Communication students", bin: 0 }, { text: "Andrea, Diego and Mariana", bin: 0 },
            { text: "won first prize", bin: 1 }, { text: "a documentary about women in a market", bin: 1 },
            { text: "last Saturday", bin: 2 }, { text: "in their fifth semester", bin: 2 },
            { text: "in Guadalajara", bin: 3 }, { text: "in the Faculty lab", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "Ask about the story",
          prompt: "Write the question for each answer.",
          items: [
            { q: "They won first prize. → What… ?", a: ["What did they win?"] },
            { q: "They made the film in their fifth semester. → When… ?", a: ["When did they make the film?"] },
            { q: "They recorded interviews for three months. → How long… ?", a: ["How long did they record interviews?", "How long did they record interviews for?"] },
            { q: "They edited the film in the Faculty lab. → Where… ?", a: ["Where did they edit the film?"] },
            { q: "The judges said it was honest and beautiful. → What… ?", a: ["What did the judges say?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the questions first, then write a short news story.",
      activities: [
        {
          type: "tiles", title: "Reporter's questions",
          items: [
            { a: "What happened at the stadium?" },
            { a: "When did the protest start?" },
            { a: "Did anybody get hurt?" },
            { a: "Why did the students leave?" },
            { a: "Who called the police?" }
          ]
        },
        {
          type: "gap", title: "Complete the news story",
          prompt: "Complete the story with the past simple.",
          items: [
            "Yesterday, about 200 students [[met|gathered]] (meet) in front of the Rector's office.",
            "They [[asked]] (ask) for more buses to the campus.",
            "The protest [[began]] (begin) at ten o'clock and [[finished]] (finish) at noon.",
            "The director [[spoke]] (speak) to the students.",
            "He [[said]] (say) the university is going to buy two new buses."
          ]
        },
        {
          type: "write", title: "Write the news",
          prompt: "Write a short news story (real or invented) about something that happened at your university or in your city. Include a headline and answer the 5 Ws. Use a quote from a witness.",
          minWords: 70, maxWords: 120,
          model: "Headline: Dog visits Communication class. On Tuesday morning, a small brown dog walked into a Semiotics class at the Faculty of Communication. The dog entered the classroom at about ten o'clock and sat under the teacher's desk. \"Everybody laughed, but the teacher continued the class,\" said a student. After the class, the students gave the dog some water and called an animal shelter. Now the dog has a new home.",
          bank: ["Headline:", "On (day), …", "at about … o'clock", "in / at (place)", "\"…,\" said…", "After that,", "Now…"],
          checklist: [
            "I wrote a **headline**.",
            "My story answers **Who, What, When, Where** and **Why/How**.",
            "I used at least **four** irregular verbs in the past.",
            "I included a **quote** with *said*."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: reporter and witness",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Reporter", tasks: ["Introduce yourself and your media.", "Ask *What happened?*", "Ask *When? Where? Who? Why?*", "Ask one *Did…?* question and say thank you."] },
            { name: "Student B · Witness", tasks: ["Choose an event (a fire, a famous visitor, a lost animal…).", "Answer with the past simple.", "Give details (time, place, people).", "Say how you felt."] }
          ],
          language: ["Hi, I'm … from campus radio.", "What happened?", "When did it happen?", "Where were you?", "Did you see…?", "Why did…?", "It was about…", "I saw / heard…"],
          model: [
            { who: "A", line: "Hi, I'm Andrea from campus radio. What happened here this morning?" },
            { who: "B", line: "A famous singer visited the Faculty! She came at ten o'clock." },
            { who: "A", line: "Where did she go?" },
            { who: "B", line: "She went to the auditorium and talked to the students." },
            { who: "A", line: "Did you take a photo with her?" },
            { who: "B", line: "Yes, I did! I was very nervous." }
          ],
          seconds: 120,
          checklist: ["ask at least four *Wh-* questions?", "use *did* correctly in questions?", "answer with irregular verbs?", "cover the 5 Ws?"]
        },
        {
          type: "speak", title: "Breaking news report",
          prompt: "Record a one-minute news report for campus radio or TV. Start with the most important information, then give the details.",
          language: ["Good morning. This is… with the news.", "Yesterday, …", "According to witnesses, …", "The police / The director said…", "We'll have more information later."],
          seconds: 75,
          checklist: ["start with the most important information?", "use the past simple?", "answer the 5 Ws?", "speak clearly, like a reporter?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the past simple of regular verbs.", review: "Explanation: Past simple" },
    { can: "I can use at least 12 irregular verbs in the past.", review: "Explanation: Common irregular verbs; Writing activity 2" },
    { can: "I can ask *Wh-* questions in the past with *did*.", review: "Explanation: The 5 Ws; Reading activity 2" },
    { can: "I can find the 5 Ws in a news story.", review: "Reading activity 1; Listening activity 1" },
    { can: "I can interview a witness about a past event.", review: "Speaking activity 1: the role-play" },
    { can: "I can write a short news story with a headline and a quote.", review: "Writing activity 3" }
  ]
};
