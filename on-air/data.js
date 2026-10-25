window.UNIT = {
  slug: "on-air",
  title: "On Air!",
  level: "A1",
  minutes: 55,
  subject: "Sound Language and Radio",
  focus: ["present simple: he / she / it", "telling the time", "days and in / on / at", "radio vocabulary"],
  speakers: { "Majo": "f", "Rafa": "m", "Host": "f", "Iker": "m" },

  presentation: {
    scene: "🎙️📻🎧🔴",
    situation: "The university **radio station** needs volunteers. Majo is a host. She is showing Rafa, a new student, the studio and the weekly schedule.",
    warmup: {
      prompt: "What do you listen to? Choose everything that is true for you.",
      options: ["music", "the news", "podcasts", "sports", "interviews", "talk shows", "audiobooks", "the weather", "comedy", "radio dramas", "ads", "nothing!"],
      response: "Nice! In this unit you'll learn to talk about radio shows: what they are about, when they start and who presents them."
    },
    dialogueTitle: "In the radio studio",
    dialogue: [
      { who: "Majo", line: "Welcome to the studio, Rafa! This is the microphone, and these are the headphones." },
      { who: "Rafa", line: "Cool! What's the red light?" },
      { who: "Majo", line: "It means *on air*. When it's on, don't talk!" },
      { who: "Rafa", line: "OK! When is your show?" },
      { who: "Majo", line: "My show *starts* *at* seven o'clock *on* Mondays. It *finishes* at eight." },
      { who: "Rafa", line: "What is it about?" },
      { who: "Majo", line: "It's about music. I *play* new Mexican bands and I *interview* students. Iker *presents* the news *at* eight thirty." }
    ]
  },

  objectives: [
    "I can name equipment and types of shows at a radio station.",
    "I can describe what people do with the present simple (*he presents, she plays*).",
    "I can say and understand times and days with *at, on, in*.",
    "I can read and talk about a radio schedule."
  ],

  explanation: {
    vocabTitle: "At the radio station",
    vocab: [
      { word: "microphone", icon: "🎙️" }, { word: "headphones", icon: "🎧" }, { word: "studio", icon: "🏠" },
      { word: "host", icon: "🧑‍🎤" }, { word: "listener", icon: "👂" }, { word: "guest", icon: "🙋" },
      { word: "the news", icon: "📰" }, { word: "interview", icon: "🗣️" }, { word: "song", icon: "🎵" },
      { word: "podcast", icon: "📱" }, { word: "ad", icon: "📣", say: "ad" }, { word: "sound effect", icon: "🔊" },
      { word: "on air", icon: "🔴" }, { word: "record", icon: "⏺️" }, { word: "schedule", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Present simple: he, she, it",
        head: ["I / you / we / they", "he / she / it", "Spelling"],
        rows: [
          ["I *play* music.", "She *plays* music.", "+ s"],
          ["We *watch* the news.", "He *watches* the news.", "-ch, -sh, -s, -x → + es"],
          ["They *finish* at 8.", "The show *finishes* at 8.", ""],
          ["I *have* a show.", "She *has* a show.", "have → has"],
          ["You *don't* talk.", "He *doesn't* talk.", "negative: doesn't + verb"]
        ],
        note: "Questions: *Does* she *present* the news? – Yes, she *does*. / *When does* the show *start*?"
      },
      {
        title: "Telling the time",
        head: ["Time", "We say", "Or"],
        rows: [
          ["7:00", "seven o'clock", ""],
          ["7:15", "a quarter past seven", "seven fifteen"],
          ["7:30", "half past seven", "seven thirty"],
          ["7:45", "a quarter to eight", "seven forty-five"],
          ["7:10 / 7:50", "ten past seven / ten to eight", "seven ten / seven fifty"]
        ],
        note: "Ask: *What time is it?* / *What time does the show start?*"
      },
      {
        title: "At, on, in",
        head: ["Preposition", "Use", "Example"],
        rows: [
          ["*at*", "times", "*at* 7:30, *at* noon, *at* night"],
          ["*on*", "days", "*on* Monday, *on* Fridays, *on* the weekend"],
          ["*in*", "parts of the day, months", "*in* the morning, *in* the afternoon, *in* May"],
          ["*from… to…*", "start and end", "*from* 7 *to* 8"]
        ],
        note: "*on Mondays* = every Monday."
      }
    ],
    watchOut: [
      ["She present the news.", "She presents the news."],
      ["The show start at 7.", "The show starts at 7."],
      ["He don't play music.", "He doesn't play music."],
      ["in Monday", "on Monday"],
      ["What time starts the show?", "What time does the show start?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "Iker [[presents]] the news. (present)",
        "The music show finishes [[at]] eight o'clock.",
        "My podcast is [[on]] Fridays.",
        "What time [[does]] the sports show start?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the presentation of the radio station's new schedule. Find the times and days.",
      title: "This week on campus radio",
      script: [
        { who: "Host", line: "Good morning, listeners! This is your campus radio, and here is our new schedule." },
        { who: "Host", line: "From Monday to Friday, Iker presents the news at eight thirty in the morning." },
        { who: "Host", line: "At ten o'clock, there's a show about science. Dr. Ruiz interviews researchers from the university." },
        { who: "Host", line: "On Tuesdays and Thursdays, Rafa has a sports show. It starts at half past one and finishes at two thirty." },
        { who: "Host", line: "In the evening, Majo plays new Mexican music. Her show starts at seven o'clock on Mondays and Wednesdays." },
        { who: "Host", line: "And on Saturdays, there's a radio drama for children at eleven in the morning." },
        { who: "Host", line: "We don't have shows on Sundays. That's our day off!" }
      ],
      activities: [
        {
          type: "match", title: "Who presents what?",
          prompt: "Match the show with the details.",
          pairs: [
            ["the news", "Iker, 8:30, Monday to Friday"],
            ["the science show", "Dr. Ruiz, 10:00"],
            ["the sports show", "Rafa, 1:30, Tuesdays and Thursdays"],
            ["the music show", "Majo, 7:00, Mondays and Wednesdays"],
            ["the radio drama", "Saturdays, 11:00"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Iker presents the news in the evening.", a: false },
            { s: "Dr. Ruiz interviews researchers.", a: true },
            { s: "The sports show finishes at two thirty.", a: true },
            { s: "Majo's show is on Fridays.", a: false },
            { s: "The station has shows on Sundays.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the profiles of three campus radio hosts.",
      title: "Meet our hosts",
      text: [
        { author: "Majo · Música Nueva", body: "Majo studies Communication. She is 20 years old. On her show she plays new Mexican bands and she interviews young musicians. She gets up early on Mondays because she prepares her show in the morning. Her favorite part of the job is talking to listeners on the phone." },
        { author: "Iker · Campus News", body: "Iker is in his fourth semester. He presents the news every morning at 8:30. He gets to the studio at seven o'clock, reads the news on the internet and writes his script. He doesn't drink coffee — he drinks orange juice! He wants to be a journalist." },
        { author: "Rafa · Sports Zone", body: "Rafa is new at the station. He loves soccer and basketball. His show is on Tuesdays and Thursdays in the afternoon. He talks about university teams and he sometimes has a guest: a player or a coach. He records sound effects for the show too." }
      ],
      activities: [
        {
          type: "sort", title: "Who does it?",
          prompt: "Put each activity with the right host.",
          bins: ["Majo", "Iker", "Rafa"],
          items: [
            { text: "plays new Mexican bands", bin: 0 }, { text: "talks to listeners on the phone", bin: 0 }, { text: "prepares the show on Monday mornings", bin: 0 },
            { text: "gets to the studio at seven", bin: 1 }, { text: "writes a script", bin: 1 }, { text: "drinks orange juice", bin: 1 },
            { text: "talks about university teams", bin: 2 }, { text: "records sound effects", bin: 2 }, { text: "sometimes has a coach as a guest", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Correct the information",
          prompt: "Each sentence is wrong. Write a negative sentence and then the correct information.",
          items: [
            { q: "Iker drinks coffee.", a: ["Iker doesn't drink coffee. He drinks orange juice.", "He doesn't drink coffee. He drinks orange juice.", "Iker doesn't drink coffee, he drinks orange juice."] },
            { q: "Rafa's show is on Mondays.", a: ["Rafa's show isn't on Mondays. It's on Tuesdays and Thursdays.", "It isn't on Mondays. It's on Tuesdays and Thursdays."] },
            { q: "Majo plays music from Spain.", a: ["Majo doesn't play music from Spain. She plays new Mexican bands.", "She doesn't play music from Spain. She plays new Mexican bands.", "Majo doesn't play music from Spain. She plays Mexican music."] },
            { q: "Iker presents the news at night.", a: ["Iker doesn't present the news at night. He presents it in the morning.", "He doesn't present the news at night. He presents it in the morning.", "Iker doesn't present the news at night. He presents the news in the morning."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then create your own radio show.",
      activities: [
        {
          type: "tiles", title: "Make sentences about the schedule",
          items: [
            { a: "The news starts at half past eight." },
            { a: "She plays music on Wednesdays." },
            { a: "What time does the show finish?" },
            { a: "He doesn't work on Sundays." },
            { a: "Does Rafa have a guest today?" }
          ]
        },
        {
          type: "gap", title: "A host's day",
          prompt: "Complete the text with the verbs in the present simple.",
          items: [
            "Paola [[works]] (work) at the radio station.",
            "She [[gets]] (get) up at six o'clock.",
            "She [[watches]] (watch) the news on TV.",
            "Her show [[finishes]] (finish) at noon.",
            "She [[doesn't|does not]] (not / have) a show on Saturdays."
          ]
        },
        {
          type: "write", title: "My radio show",
          prompt: "Create a show for the campus radio. Write: the name of the show, what it is about, the day and time, who presents it and what the host does on the show.",
          minWords: 40, maxWords: 80,
          model: "My show is called Cine Club. It's about movies. It's on Fridays from five to six in the afternoon. The host is Daniela. She talks about new movies and she plays music from films. Every week she interviews a student director. Listeners send messages and she reads them on air.",
          bank: ["My show is called", "It's about", "It's on… from… to…", "The host is", "She / He plays…", "Every week", "Listeners…"],
          checklist: [
            "I wrote the **day** and the **time** with *on* and *from… to…*.",
            "I used *he / she* + verb with **-s**.",
            "I said what the show is about.",
            "I wrote at least **two** things the host does."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: the schedule",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Volunteer", tasks: ["News: 8:30, Iker", "Science show: 10:00, Dr. Ruiz", "Ask about: the sports show", "Ask about: the music show"] },
            { name: "Student B · Producer", tasks: ["Sports show: 1:30, Rafa, Tue/Thu", "Music show: 7:00, Majo, Mon/Wed", "Ask about: the news", "Ask about: the science show"] }
          ],
          language: ["What time does the… start?", "When is the…?", "Who presents it?", "It starts at…", "It's on Mondays.", "Does it finish at…?"],
          model: [
            { who: "A", line: "What time does the sports show start?" },
            { who: "B", line: "It starts at half past one." },
            { who: "A", line: "Who presents it?" },
            { who: "B", line: "Rafa. It's on Tuesdays and Thursdays." },
            { who: "B", line: "And when is the news?" },
            { who: "A", line: "At eight thirty, from Monday to Friday." }
          ],
          seconds: 90,
          checklist: ["ask *What time does…?*", "say times correctly?", "use *at* and *on*?", "use *he / she* + verb with -s?"]
        },
        {
          type: "speak", title: "Open your show!",
          prompt: "Record the first minute of your radio show. Greet the listeners, say the name of the show, the day and time, and what happens on today's show.",
          language: ["Good afternoon, listeners!", "Welcome to…", "I'm your host,…", "Every Friday at…", "Today we have a guest:…", "First, I play…", "Stay with us!"],
          seconds: 75,
          checklist: ["greet the listeners?", "say the name, day and time of the show?", "use the present simple?", "speak clearly for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name equipment and types of radio shows.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present simple with *he, she, it* (+ s).", review: "Explanation: Present simple; Writing activity 2" },
    { can: "I can make negatives and questions with *does / doesn't*.", review: "Reading activity 2" },
    { can: "I can say and understand the time.", review: "Explanation: Telling the time; Listening activity 1" },
    { can: "I can use *at, on, in* with times and days.", review: "Explanation: At, on, in" },
    { can: "I can present a short radio show.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
