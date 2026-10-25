window.UNIT = {
  slug: "behind-the-cover",
  title: "Behind the Cover",
  level: "A2",
  minutes: 55,
  subject: "Editorial Design and Digital Imaging",
  focus: ["comparatives: bigger, more modern, better", "superlatives: the most eye-catching", "(not) as … as", "design adjectives"],
  speakers: { "Ms. Ibarra": "f", "Nico": "m", "Brenda": "f", "Hugo": "m" },

  presentation: {
    scene: "📖🎨🖌️✂️",
    situation: "In **Editorial Design**, the class is choosing a cover for the Faculty magazine. There are three proposals. Which one is the best?",
    warmup: {
      prompt: "What makes a magazine cover attractive? Choose your top features.",
      options: ["a big photo", "bright colors", "a short title", "a famous person", "a clean design", "interesting headlines", "a strong font", "white space", "illustrations", "a surprise", "a good logo", "a question"],
      response: "Good choices! In this unit you'll learn to compare designs and to say which one is the best and why."
    },
    dialogueTitle: "Choosing the cover",
    dialogue: [
      { who: "Ms. Ibarra", line: "OK, which cover do you prefer: A, B or C?" },
      { who: "Nico", line: "I like cover A. The photo is *bigger* and the colors are *brighter than* in cover B." },
      { who: "Brenda", line: "Really? I think cover B is *more elegant*. The font is *more modern*." },
      { who: "Hugo", line: "But cover B is *not as eye-catching as* cover A." },
      { who: "Ms. Ibarra", line: "What about cover C?" },
      { who: "Nico", line: "Cover C is *the most original*, but the text is *the smallest*. It's difficult to read." },
      { who: "Brenda", line: "So… cover A is *the best* for the newsstand!" }
    ]
  },

  objectives: [
    "I can use adjectives to describe a design: *bold, clean, elegant, eye-catching…*",
    "I can compare two designs with comparatives: *bigger than, more modern than*.",
    "I can choose the best option with superlatives: *the most original, the best*.",
    "I can give and justify my opinion about a cover or layout."
  ],

  explanation: {
    vocabTitle: "Talking about editorial design",
    vocab: [
      { word: "cover", icon: "📕" }, { word: "layout", icon: "📐" }, { word: "font", icon: "🔤" },
      { word: "headline", icon: "📰" }, { word: "column", icon: "▥" }, { word: "white space", icon: "⬜" },
      { word: "image", icon: "🖼️" }, { word: "bold", icon: "🅱️" }, { word: "clean", icon: "✨" },
      { word: "elegant", icon: "🎩" }, { word: "eye-catching", icon: "👀" }, { word: "busy", icon: "🌀" },
      { word: "readable", icon: "👓" }, { word: "original", icon: "💡" }, { word: "crop", icon: "✂️" }
    ],
    grammar: [
      {
        title: "Comparatives",
        head: ["Adjective", "Rule", "Comparative"],
        rows: [
          ["big, small, bright", "short: + *-er* (double consonant: big → bigger)", "*bigger than, smaller than, brighter than*"],
          ["busy, easy", "-y → *-ier*", "*busier than, easier than*"],
          ["modern, elegant, colorful", "long: *more* + adjective", "*more modern than, more elegant than*"],
          ["good / bad", "irregular", "*better than / worse than*"]
        ],
        note: "Use *than* after the comparative: *Cover A is bigger than cover B.*"
      },
      {
        title: "Superlatives",
        head: ["Adjective", "Superlative", "Example"],
        rows: [
          ["big", "*the biggest*", "Cover A has *the biggest* photo."],
          ["busy", "*the busiest*", "Cover C is *the busiest* design."],
          ["original", "*the most original*", "This is *the most original* layout."],
          ["good / bad", "*the best / the worst*", "B is *the best* font for titles."]
        ],
        note: "Use *the* before the superlative: *the most eye-catching cover of the three*."
      },
      {
        title: "(Not) as … as",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*as* + adjective + *as*", "equal", "The title is *as big as* the photo."],
          ["*not as* + adjective + *as*", "less", "Cover B is *not as colorful as* cover A."]
        ],
        note: "*not as … as* is a polite way to criticize: *It's not as readable as the other one.*"
      }
    ],
    watchOut: [
      ["more big", "bigger"],
      ["more better", "better"],
      ["bigger that cover B", "bigger than cover B"],
      ["the most elegant of the class", "the most elegant in the class"],
      ["It's the more original.", "It's the most original."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "This font is [[bolder]] than that one. (bold)",
        "Cover C is the [[most]] original of the three.",
        "Your layout is [[better]] than mine. (good)",
        "The photo isn't [[as]] big as the title."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Two students compare two layouts for a magazine article. Listen and decide which layout they choose.",
      title: "Layout 1 or layout 2?",
      script: [
        { who: "Nico", line: "OK, Brenda, let's compare the two layouts for the article about street food." },
        { who: "Brenda", line: "Layout 1 has three columns. Layout 2 has only two columns, so the text is bigger." },
        { who: "Nico", line: "Yes, layout 2 is more readable. But layout 1 has more photos." },
        { who: "Brenda", line: "True, but layout 1 is busier. There's not as much white space." },
        { who: "Nico", line: "What about the headline? I think the headline in layout 1 is more eye-catching. It's red and very big." },
        { who: "Brenda", line: "Hmm, the red is stronger, but the black font in layout 2 is more elegant." },
        { who: "Nico", line: "Which photo is the best? I like the photo of the tacos in layout 2. It's the most colorful." },
        { who: "Brenda", line: "I agree. So, layout 2 with the red headline from layout 1?" },
        { who: "Nico", line: "Perfect! That's the best combination." }
      ],
      activities: [
        {
          type: "sort", title: "Layout 1 or layout 2?",
          prompt: "Which layout is it?",
          bins: ["Layout 1", "Layout 2"],
          items: [
            { text: "has three columns", bin: 0 }, { text: "has more photos", bin: 0 },
            { text: "is busier", bin: 0 }, { text: "has a big red headline", bin: 0 },
            { text: "has bigger text", bin: 1 }, { text: "is more readable", bin: 1 },
            { text: "has a more elegant font", bin: 1 }, { text: "has the most colorful photo", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The article is about street food.", a: true },
            { s: "Layout 1 has more white space than layout 2.", a: false },
            { s: "Nico thinks the red headline is more eye-catching.", a: true },
            { s: "They choose layout 1 with all its elements.", a: false },
            { s: "Their final choice combines elements from both layouts.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article from a design blog about magazine covers.",
      title: "What makes a great magazine cover?",
      text: [
        { author: "Introduction", body: "You have only three seconds. That's the time a person looks at a magazine cover in a store. In those seconds, the cover must say: *Buy me!*" },
        { author: "Images", body: "Faces are the most effective images on covers. A face looking at the camera is more powerful than a face looking to the side. Close-up photos are usually better than full-body photos." },
        { author: "Text", body: "Fewer words are better. A cover with five short headlines is more effective than a cover with ten long ones. The main headline should be the biggest text after the magazine's name." },
        { author: "Color", body: "Bright colors are more eye-catching than dark colors, but too many colors make a cover busy. The best covers use two or three main colors." },
        { author: "Digital covers", body: "Today, many people see covers on their phones. Digital covers are smaller, so the design needs to be simpler and the text needs to be bigger than on paper." }
      ],
      activities: [
        {
          type: "match", title: "Complete the advice",
          prompt: "Match the beginnings and endings according to the article.",
          pairs: [
            ["A face looking at the camera is", "more powerful than a face looking to the side."],
            ["Close-up photos are usually", "better than full-body photos."],
            ["Five short headlines are", "more effective than ten long ones."],
            ["The best covers use", "two or three main colors."],
            ["Digital covers need", "simpler designs and bigger text."]
          ]
        },
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite the sentences with the words given.",
          items: [
            { q: "Cover B is less colorful than cover A. (not as … as)", a: ["Cover B is not as colorful as cover A.", "Cover B isn't as colorful as cover A."] },
            { q: "No other headline is as big as this one. (the biggest)", a: ["This is the biggest headline.", "This one is the biggest headline.", "This headline is the biggest."] },
            { q: "Layout 2 is less busy than layout 1. (busier)", a: ["Layout 1 is busier than layout 2."] },
            { q: "Paper covers are less simple than digital covers. (simpler)", a: ["Digital covers are simpler than paper covers."] },
            { q: "This photo and that photo are equally good. (as … as)", a: ["This photo is as good as that photo.", "This photo is as good as that one."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice comparing first, then write a design review.",
      activities: [
        {
          type: "tiles", title: "Compare the designs",
          items: [
            { a: "This cover is more eye-catching than that one." },
            { a: "The font in layout B is easier to read." },
            { a: "It is the most original design in the class." },
            { a: "The photo is not as clear as the title." },
            { a: "Which cover is the best?" }
          ]
        },
        {
          type: "gap", title: "A teacher's feedback",
          prompt: "Complete the feedback with the correct form of the adjective.",
          items: [
            "Your new cover is [[better]] (good) than the first version.",
            "The headline is [[bigger]] (big) and [[more readable]] (readable).",
            "The background is [[darker]] (dark) now, so the white text is clearer.",
            "It's the [[most professional]] (professional) design in the group.",
            "But the logo isn't [[as]] visible as the photo. Make it bigger!"
          ]
        },
        {
          type: "write", title: "Design review",
          prompt: "Choose two magazine covers, posters or album covers (look for them online). Compare them: images, colors, fonts, text. Which one is better and why? Write a short review.",
          minWords: 70, maxWords: 120,
          model: "I compared two covers of a music magazine. The first cover has a big photo of a singer and a yellow background. The second cover has an illustration and a white background. The first cover is more eye-catching because the colors are brighter. The second cover is more elegant, but the headlines are smaller and not as readable. In my opinion, the first cover is the best for a newsstand, because people can see it from far away.",
          bank: ["I compared…", "The first / second cover has…", "…is more … than…", "…is not as … as…", "the most…", "In my opinion,", "because…"],
          checklist: [
            "I used at least **three** comparatives (*-er than / more … than*).",
            "I used at least **one** superlative.",
            "I used *not as … as* once.",
            "I said which one is better and **why**."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: design meeting",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Art director", tasks: ["Say which cover you prefer and why.", "Compare two covers (image, color).", "Ask your partner's opinion.", "Agree on the best one."] },
            { name: "Student B · Editor", tasks: ["Give a different opinion.", "Compare the text and fonts.", "Use *not as … as*.", "Suggest a change to the best cover."] }
          ],
          language: ["I prefer… because…", "It's more … than…", "It's not as … as…", "It's the most…", "What do you think?", "I agree / I'm not sure.", "Let's choose…"],
          model: [
            { who: "A", line: "I prefer cover 2. The photo is bigger and more dramatic." },
            { who: "B", line: "Really? I think cover 3 is more elegant. The font is cleaner." },
            { who: "A", line: "Yes, but it's not as eye-catching as cover 2." },
            { who: "B", line: "OK, that's true. So cover 2 is the best for the newsstand." },
            { who: "A", line: "Agreed. But let's make the headline shorter." }
          ],
          seconds: 120,
          checklist: ["use at least three comparatives?", "use a superlative?", "use *not as … as*?", "agree on a final decision?"]
        },
        {
          type: "speak", title: "Present your favorite cover",
          prompt: "Record yourself for about one minute. Show or describe your favorite magazine, book or album cover. Explain why it is better than other covers.",
          language: ["My favorite cover is…", "It has…", "It's more … than other covers.", "It's the most … I know.", "The best thing about it is…"],
          seconds: 75,
          checklist: ["describe the image, colors and text?", "use comparatives?", "use *the most* or *the best*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe designs with adjectives like *bold, clean, busy, eye-catching*.", review: "Explanation: the vocabulary cards" },
    { can: "I can form comparatives with *-er* and *more*.", review: "Explanation: Comparatives; Writing activity 2" },
    { can: "I can form superlatives with *-est* and *the most*.", review: "Explanation: Superlatives" },
    { can: "I can use *(not) as … as* to compare.", review: "Explanation: (Not) as … as; Reading activity 2" },
    { can: "I can understand advice about magazine design.", review: "Reading activity 1" },
    { can: "I can compare two designs and justify my choice.", review: "Writing activity 3 and Speaking activity 1" }
  ]
};
