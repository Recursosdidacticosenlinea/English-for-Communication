window.UNIT = {
  slug: "look-at-this-poster",
  title: "Look at This Poster",
  level: "A1",
  minutes: 50,
  subject: "Visual Communication",
  focus: ["there is / there are", "colors and shapes", "adjective + noun", "at the top, on the left…"],
  speakers: { "Ms. Vega": "f", "Bruno": "m", "Karla": "f", "Leo": "m" },

  presentation: {
    scene: "🎨🖼️🔺🟦",
    situation: "It's your first **Visual Communication** class. The teacher shows a poster for the Faculty **Film Festival** and asks the students to describe it.",
    warmup: {
      prompt: "What can you see on a poster? Choose everything you know in English.",
      options: ["a title", "a photo", "a logo", "a date", "a circle", "a square", "a line", "an arrow", "a star", "a background", "text", "a QR code"],
      response: "Great! In this unit you'll learn to describe posters and images: what is in them, the colors and where things are."
    },
    dialogueTitle: "The Film Festival poster",
    dialogue: [
      { who: "Ms. Vega", line: "OK, everyone. Look at this poster. What can you see?" },
      { who: "Bruno", line: "*There is* a big camera in the center." },
      { who: "Ms. Vega", line: "Good! What color is the background?" },
      { who: "Karla", line: "It's *dark blue*. And *there are* three *yellow stars*." },
      { who: "Ms. Vega", line: "Where's the title?" },
      { who: "Bruno", line: "It's *at the top*. The letters are *white* and *big*." },
      { who: "Karla", line: "And the logo of the Faculty is *in the bottom right corner*." }
    ]
  },

  objectives: [
    "I can name colors, shapes and the parts of a poster.",
    "I can say what is in an image with *there is* and *there are*.",
    "I can describe elements with *adjective + noun*: *a big red circle*.",
    "I can say where things are: *at the top, on the left, in the center…*"
  ],

  explanation: {
    vocabTitle: "Parts of a poster, colors and shapes",
    vocab: [
      { word: "title", icon: "🔠" }, { word: "logo", icon: "🏷️" }, { word: "photo", icon: "📷" },
      { word: "background", icon: "🌄" }, { word: "text", icon: "📝" }, { word: "circle", icon: "⚪" },
      { word: "square", icon: "🟥" }, { word: "triangle", icon: "🔺" }, { word: "line", icon: "➖" },
      { word: "arrow", icon: "➡️" }, { word: "star", icon: "⭐" }, { word: "bright", icon: "🌞" },
      { word: "dark", icon: "🌑" }, { word: "big", icon: "🐘" }, { word: "small", icon: "🐜" }
    ],
    grammar: [
      {
        title: "There is / There are",
        head: ["", "Affirmative", "Negative", "Question"],
        rows: [
          ["One thing", "*There is* a logo.<br>*There's* a logo.", "*There isn't* a photo.", "*Is there* a date?"],
          ["Two or more", "*There are* two stars.", "*There aren't* any arrows.", "*Are there* any lines?"]
        ],
        note: "Short answers: *Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't.*"
      },
      {
        title: "Adjective + noun",
        head: ["Article", "Size", "Color", "Noun"],
        rows: [
          ["a", "big", "red", "circle"],
          ["two", "small", "yellow", "stars"],
          ["a", "", "dark blue", "background"]
        ],
        note: "In English the adjective goes **before** the noun, and it has **no plural**: *two yellow stars* (not *yellows*)."
      },
      {
        title: "Where is it?",
        head: ["Position", "Example"],
        rows: [
          ["*at the top* / *at the bottom*", "The title is *at the top*."],
          ["*on the left* / *on the right*", "The photo is *on the left*."],
          ["*in the center*", "There's a camera *in the center*."],
          ["*in the top left corner*", "The logo is *in the top left corner*."],
          ["*next to* / *under* / *above*", "The date is *under* the title."]
        ],
        note: "We say *at* the top, *on* the left and *in* the center or corner."
      }
    ],
    watchOut: [
      ["Have a camera in the poster.", "There is a camera in the poster."],
      ["There are a logo.", "There is a logo."],
      ["a circle red", "a red circle"],
      ["three yellows stars", "three yellow stars"],
      ["The title is in the top.", "The title is at the top."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "There [[is|'s]] a green triangle on the right.",
        "There [[are]] four small circles at the bottom.",
        "The title is [[at]] the top of the poster.",
        "[[Is]] there a QR code? – No, there isn't."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Two students describe their posters for a campus campaign. Listen and find the details.",
      title: "Two posters, one campaign",
      script: [
        { who: "Ms. Vega", line: "Karla, tell us about your poster for the recycling campaign." },
        { who: "Karla", line: "OK. My poster is green and white. There's a big tree in the center." },
        { who: "Karla", line: "The title is at the top. It says Recycle Today. The letters are black." },
        { who: "Karla", line: "There are three small icons at the bottom: a bottle, a can and a paper bag." },
        { who: "Ms. Vega", line: "Very nice. Is there a logo?" },
        { who: "Karla", line: "Yes, there is. It's in the bottom right corner." },
        { who: "Ms. Vega", line: "Thank you. Leo, your turn." },
        { who: "Leo", line: "My poster is very bright. The background is orange." },
        { who: "Leo", line: "There's a photo of students on the left and the text is on the right." },
        { who: "Leo", line: "There isn't a tree, but there are two big arrows. They are blue." },
        { who: "Leo", line: "The date is under the title: March twenty-second." }
      ],
      activities: [
        {
          type: "sort", title: "Karla's poster or Leo's poster?",
          prompt: "Put each element in the right poster.",
          bins: ["Karla's poster", "Leo's poster"],
          items: [
            { text: "a big tree in the center", bin: 0 }, { text: "green and white colors", bin: 0 },
            { text: "three small icons at the bottom", bin: 0 }, { text: "a logo in the bottom right corner", bin: 0 },
            { text: "an orange background", bin: 1 }, { text: "a photo on the left", bin: 1 },
            { text: "two blue arrows", bin: 1 }, { text: "the date under the title", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Karla's title is *Recycle Today*.", a: true },
            { s: "The letters of Karla's title are green.", a: false },
            { s: "There's a tree on Leo's poster.", a: false },
            { s: "Leo's text is on the right.", a: true },
            { s: "The date on Leo's poster is March 22nd.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Students posted their designs on the class page with a short description.",
      title: "Our class gallery",
      text: [
        { author: "Bruno · Concert poster", body: "My poster is for a rock concert at the university. The background is black and there are red and purple lines. There's a photo of a guitar in the center. The name of the band is at the top, in big white letters. The price and the date are at the bottom." },
        { author: "Karla · Book fair flyer", body: "This is a flyer for the Book Fair. The colors are light: yellow, white and pink. There are a lot of small books on the left. The text is on the right. There isn't a photo, but there's a big smiling sun in the top right corner." },
        { author: "Leo · Café menu", body: "My design is a menu for a café near the Faculty. It's brown and beige. There's a cup of coffee at the top and there are two columns of text: drinks on the left and food on the right. The logo is small. It's at the bottom, in the center." }
      ],
      activities: [
        {
          type: "match", title: "Find the design",
          prompt: "Match each detail with the design.",
          pairs: [
            ["a black background with red and purple lines", "the concert poster"],
            ["a big smiling sun", "the Book Fair flyer"],
            ["two columns of text", "the café menu"],
            ["a photo of a guitar", "the concert poster"],
            ["light colors: yellow, white and pink", "the Book Fair flyer"]
          ]
        },
        {
          type: "rewrite", title: "Fix the comments",
          prompt: "Classmates left comments. Each one has one mistake. Write the correct sentence.",
          items: [
            { q: "Bruno, I like the lines reds.", a: ["Bruno, I like the red lines.", "I like the red lines."] },
            { q: "Karla, there are a sun in your flyer!", a: ["Karla, there is a sun in your flyer!", "Karla, there's a sun in your flyer!", "There is a sun in your flyer!", "There's a sun in your flyer!"] },
            { q: "Leo, the logo is very smalls.", a: ["Leo, the logo is very small.", "The logo is very small."] },
            { q: "Bruno, the date is in the bottom.", a: ["Bruno, the date is at the bottom.", "The date is at the bottom."] },
            { q: "Karla, is there photo?", a: ["Karla, is there a photo?", "Is there a photo?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then describe a design of your own.",
      activities: [
        {
          type: "tiles", title: "Build the descriptions",
          items: [
            { a: "There is a big camera in the center." },
            { a: "There are two small yellow stars." },
            { a: "The title is at the top." },
            { a: "Is there a logo on the poster?" },
            { a: "The background is dark blue." }
          ]
        },
        {
          type: "gap", title: "Describe the image",
          prompt: "Complete the description of a magazine cover.",
          bank: true,
          items: [
            "[[There's|There is]] a photo of a singer in the center.",
            "The name of the magazine is [[at]] the top.",
            "There [[are]] three short titles on the left.",
            "The background is [[bright]] pink.",
            "There [[isn't|is not]] a logo, but there's a barcode in the bottom right [[corner]]."
          ]
        },
        {
          type: "write", title: "Describe your design",
          prompt: "Think of a poster, flyer or social media image you like (or design one!). Describe it: what is in it, the colors, the shapes and where everything is.",
          minWords: 40, maxWords: 80,
          model: "This is a poster for a photography workshop. The background is white. There's a big black camera in the center and there are three small photos on the right. The title is at the top in red letters. The date and the time are at the bottom. There isn't a logo.",
          bank: ["This is a poster for", "The background is", "There is / There are", "at the top / at the bottom", "on the left / on the right", "in the center", "There isn't…"],
          checklist: [
            "I used *there is* and *there are*.",
            "I used at least **three colors**.",
            "I put the adjective **before** the noun.",
            "I said where **three** things are."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: describe and draw",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Describer", tasks: ["Say the color of the background.", "Say what is in the center.", "Describe three more elements (shape, color, size).", "Say where each element is."] },
            { name: "Student B · Designer", tasks: ["Listen and draw.", "Ask *Is there a…?* or *Are there any…?*", "Ask *Where is the…?*", "Ask *What color is it?*"] }
          ],
          language: ["There's a… in the center.", "There are two…", "The background is…", "at the top / at the bottom", "on the left / on the right", "Is there a…?", "Where is the…?", "What color is it?"],
          model: [
            { who: "A", line: "The background is light blue. There's a big yellow circle in the center." },
            { who: "B", line: "OK. Is there a title?" },
            { who: "A", line: "Yes, there is. It's at the top, in black letters." },
            { who: "B", line: "Are there any photos?" },
            { who: "A", line: "No, there aren't. But there are two small stars on the right." }
          ],
          seconds: 90,
          checklist: ["use *there is* and *there are*?", "name colors and shapes?", "say where things are?", "ask at least one question?"]
        },
        {
          type: "speak", title: "My favorite image",
          prompt: "Record yourself for about one minute. Describe a poster, album cover or ad that you like. Say what is in it, the colors and where things are.",
          language: ["My favorite image is…", "There's a… in the center.", "The colors are…", "At the top there's…", "I like it because it's…"],
          seconds: 75,
          checklist: ["describe at least four elements?", "use colors and shapes?", "use *at the top / on the left…*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 10 words for colors, shapes and parts of a poster.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *there is* and *there are* correctly.", review: "Explanation: There is / There are" },
    { can: "I can ask *Is there…?* and *Are there…?* and answer.", review: "Speaking activity 1: Describe and draw" },
    { can: "I can put adjectives before nouns: *a big red circle*.", review: "Explanation: Adjective + noun; Reading activity 2" },
    { can: "I can say where things are in an image.", review: "Explanation: Where is it?; Writing activity 2" },
    { can: "I can describe a design in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
