window.UNIT = {
  slug: "say-cheese",
  title: "Say Cheese!",
  level: "A1",
  minutes: 50,
  subject: "Photography",
  focus: ["imperatives: look, smile, don't move", "camera vocabulary", "object pronouns: me, him, her, them", "please / OK / ready?"],
  speakers: { "Diana": "f", "Mr. Soto": "m", "Fer": "f", "Toño": "m" },

  presentation: {
    scene: "📷💡🧍‍♀️✨",
    situation: "It's your first day in the **Photography** lab. Diana, a student photographer, is taking portraits of new students for the Faculty magazine.",
    warmup: {
      prompt: "What do you need for a photo session? Choose everything you know.",
      options: ["a camera", "a lens", "a tripod", "a light", "a flash", "a battery", "a memory card", "a background", "a model", "a reflector", "a phone", "a screen"],
      response: "Good! In this unit you'll learn to give and follow simple instructions in a photo session."
    },
    dialogueTitle: "In the photo studio",
    dialogue: [
      { who: "Diana", line: "Hi, Toño! Please *stand* here, in front of the white background." },
      { who: "Toño", line: "Here?" },
      { who: "Diana", line: "Yes, perfect. *Look* at the camera. *Don't look* at the light." },
      { who: "Toño", line: "OK. Like this?" },
      { who: "Diana", line: "Great. Now *turn* your head a little to the left… *Smile*!" },
      { who: "Toño", line: "Is my hair OK?" },
      { who: "Diana", line: "Yes, it's fine. *Don't move*… Ready? *Say cheese!*" }
    ]
  },

  objectives: [
    "I can name the basic equipment of a photo session.",
    "I can give instructions with affirmative and negative imperatives.",
    "I can use object pronouns: *look at me, help him, move them*.",
    "I can follow and give directions in a short photo session."
  ],

  explanation: {
    vocabTitle: "Photography equipment and actions",
    vocab: [
      { word: "camera", icon: "📷" }, { word: "lens", icon: "🔍" }, { word: "tripod", icon: "🗼" },
      { word: "flash", icon: "⚡" }, { word: "light", icon: "💡" }, { word: "battery", icon: "🔋" },
      { word: "memory card", icon: "💾" }, { word: "background", icon: "🖼️" }, { word: "model", icon: "🧍" },
      { word: "portrait", icon: "🧑‍🎨" }, { word: "landscape", icon: "🏞️" }, { word: "zoom in", icon: "➕" },
      { word: "take a photo", icon: "📸" }, { word: "smile", icon: "😁" }, { word: "turn", icon: "↩️" }
    ],
    grammar: [
      {
        title: "Imperatives",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "verb", "*Look* at the camera.<br>*Turn* left."],
          ["Negative", "*don't* + verb", "*Don't move.*<br>*Don't close* your eyes."],
          ["Polite", "*please* + verb / verb + *please*", "*Please stand* here.<br>*Sit down, please.*"],
          ["Group", "*Let's* + verb", "*Let's take* a group photo."]
        ],
        note: "Imperatives have **no subject**: *Look at me* (not *You look at me*)."
      },
      {
        title: "Object pronouns",
        head: ["Subject", "Object", "Example"],
        rows: [
          ["I", "me", "Look at *me*."], ["you", "you", "I can see *you*."],
          ["he", "him", "Help *him* with the tripod."], ["she", "her", "Take a photo of *her*."],
          ["it", "it", "Turn *it* on."], ["we", "us", "Take a photo of *us*!"], ["they", "them", "Put *them* on the table."]
        ],
        note: "Object pronouns go **after** the verb or a preposition: *look at her, give me the lens*."
      },
      {
        title: "Useful phrases in a session",
        head: ["Photographer", "Model"],
        rows: [
          ["Ready?", "Yes, I'm ready."],
          ["Like this. / Perfect!", "Like this?"],
          ["A little to the left / right.", "Is it OK?"],
          ["One more, please.", "Can I see it?"]
        ],
        note: "*Turn on* / *turn off* the camera: *Turn it off, please.*"
      }
    ],
    watchOut: [
      ["No move!", "Don't move!"],
      ["You look at the camera.", "Look at the camera."],
      ["Look at she.", "Look at her."],
      ["Take a photo to me.", "Take a photo of me."],
      ["Don't to smile.", "Don't smile."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the instructions.",
      items: [
        "[[Don't]] close your eyes!",
        "Ana is the model. Take a photo of [[her]].",
        "The lights are on. Please turn [[them]] off.",
        "[[Look]] at me and smile."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mr. Soto, the lab teacher, explains the rules of the photography lab. Listen and find the rules.",
      title: "Welcome to the lab",
      script: [
        { who: "Mr. Soto", line: "Welcome to the photography lab, everyone. Please listen carefully." },
        { who: "Mr. Soto", line: "First, write your name on the list when you take a camera." },
        { who: "Mr. Soto", line: "Don't touch the lens with your fingers. Use this cloth." },
        { who: "Mr. Soto", line: "Always put the camera on the tripod for studio photos." },
        { who: "Fer", line: "Excuse me, can we use the flash?" },
        { who: "Mr. Soto", line: "Yes, you can, but don't use it near the model's eyes." },
        { who: "Mr. Soto", line: "At the end of the class, turn off the lights and charge the batteries." },
        { who: "Fer", line: "And the memory cards?" },
        { who: "Mr. Soto", line: "Don't take them home. Copy your photos to the computer and leave the cards in the box." },
        { who: "Mr. Soto", line: "And please, don't eat or drink in the lab!" }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "Sort the lab rules.",
          bins: ["Do ✅", "Don't ❌"],
          items: [
            { text: "write your name on the list", bin: 0 }, { text: "use the cloth for the lens", bin: 0 },
            { text: "use the tripod for studio photos", bin: 0 }, { text: "charge the batteries", bin: 0 },
            { text: "touch the lens with your fingers", bin: 1 }, { text: "use the flash near the model's eyes", bin: 1 },
            { text: "take the memory cards home", bin: 1 }, { text: "eat or drink in the lab", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complete the rules",
          prompt: "Listen again and complete the rules with one or two words.",
          bank: true,
          items: [
            "Put the camera on the [[tripod]] for studio photos.",
            "Don't use the flash near the model's [[eyes]].",
            "Turn off the [[lights]] at the end of the class.",
            "Copy your photos to the [[computer]].",
            "Leave the memory cards in the [[box]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read this short guide from a photography blog for beginners.",
      title: "5 tips for a great portrait",
      text: [
        { author: "Tip 1 · Light", body: "Use natural light. Put your model next to a window. Don't use the flash for every photo: it makes the face flat." },
        { author: "Tip 2 · The eyes", body: "Focus on the eyes. Ask your model to look at the camera, or to look at something on the left or on the right." },
        { author: "Tip 3 · The background", body: "Choose a simple background, like a white wall or a tree. Don't put the model in front of a lot of objects." },
        { author: "Tip 4 · Talk to your model", body: "Your model is nervous? Talk to him or her. Tell a joke. Say 'Relax!' and 'You look great!'. A happy model gives you a natural smile." },
        { author: "Tip 5 · Take a lot of photos", body: "Don't stop after one photo. Take ten or twenty. Then look at them on the screen and choose the best one." }
      ],
      activities: [
        {
          type: "match", title: "Match the tip and the reason",
          prompt: "Match the instruction with its tip.",
          pairs: [
            ["Put the model next to a window.", "Light"],
            ["Ask the model to look at the camera.", "The eyes"],
            ["Choose a white wall.", "The background"],
            ["Tell a joke.", "Talk to your model"],
            ["Take ten or twenty photos.", "Take a lot of photos"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false according to the blog?",
          items: [
            { s: "Use the flash for every photo.", a: false },
            { s: "Focus on the model's eyes.", a: true },
            { s: "A background with a lot of objects is good.", a: false },
            { s: "Talk to your model when he or she is nervous.", a: true },
            { s: "Take one photo and stop.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the instructions first, then write a short guide.",
      activities: [
        {
          type: "tiles", title: "Put the instructions in order",
          items: [
            { a: "Please stand in front of the background." },
            { a: "Don't look at the light." },
            { a: "Turn your head to the left." },
            { a: "Take a photo of us, please." },
            { a: "Put them in the box." }
          ]
        },
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Change each instruction to the negative, or replace the underlined words with a pronoun.",
          items: [
            { q: "Move your head. → (negative)", a: ["Don't move your head.", "Do not move your head."] },
            { q: "Use the flash. → (negative)", a: ["Don't use the flash.", "Do not use the flash."] },
            { q: "Look at Ana. → Look at…", a: ["Look at her."] },
            { q: "Help Carlos with the tripod. → Help…", a: ["Help him with the tripod."] },
            { q: "Charge the batteries. → Charge…", a: ["Charge them."] },
            { q: "Take a photo of my friends and me. → Take a photo of…", a: ["Take a photo of us."] }
          ]
        },
        {
          type: "write", title: "My photo tips",
          prompt: "Write a short guide for a classmate: how to take a good photo with a phone. Write 5–7 instructions. Use affirmative and negative imperatives.",
          minWords: 40, maxWords: 80,
          model: "How to take a good photo with your phone. First, clean the lens. Don't use the zoom: move closer. Turn off the flash for portraits. Look for natural light. Hold the phone with two hands and don't move. Take a lot of photos and choose the best one.",
          bank: ["First,", "Then,", "Don't…", "Please…", "Hold the phone", "Turn off the flash", "Choose the best one"],
          checklist: [
            "I wrote **5–7** instructions.",
            "I used at least **two** negative imperatives with *don't*.",
            "I didn't use a subject before the verb.",
            "I used at least one object pronoun (*it, them, him…*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: the photo session",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Photographer", tasks: ["Greet the model and say where to stand.", "Give three instructions (look, turn, smile…).", "Give one negative instruction (*Don't…*).", "Say *Ready?* and take the photo."] },
            { name: "Student B · Model", tasks: ["Ask *Here?* or *Like this?*", "Follow the instructions.", "Ask *Can I see it?*", "Ask for one more photo."] }
          ],
          language: ["Please stand here.", "Look at me / at the camera.", "Turn a little to the left.", "Don't move.", "Smile!", "Ready? Say cheese!", "Like this?", "Can I see it?", "One more, please."],
          model: [
            { who: "A", line: "Hi! Please stand next to the window." },
            { who: "B", line: "Here?" },
            { who: "A", line: "Yes. Look at me. Don't look at the window." },
            { who: "B", line: "Like this?" },
            { who: "A", line: "Perfect. Smile! Ready? Say cheese!" },
            { who: "B", line: "Can I see it?" }
          ],
          seconds: 90,
          checklist: ["give at least four instructions?", "use *don't* at least once?", "use *please*?", "use an object pronoun (*me, her…*)?"]
        },
        {
          type: "speak", title: "Instructions for my camera",
          prompt: "Record yourself for about one minute. Explain to a new student how to use your phone camera or a camera from the lab: what to do and what not to do.",
          language: ["First, turn it on.", "Then, touch the screen to focus.", "Don't use the zoom.", "Turn off the flash.", "Finally, take the photo."],
          seconds: 75,
          checklist: ["name at least three parts or functions of the camera?", "use *first, then, finally*?", "use affirmative and negative imperatives?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name basic photography equipment.", review: "Explanation: the vocabulary cards" },
    { can: "I can give affirmative instructions: *Look, Turn, Smile*.", review: "Explanation: Imperatives" },
    { can: "I can give negative instructions with *don't*.", review: "Listening activity 1; Writing activity 2" },
    { can: "I can use object pronouns: *me, him, her, it, us, them*.", review: "Explanation: Object pronouns" },
    { can: "I can understand simple rules and tips about photography.", review: "Listening and Reading activities" },
    { can: "I can direct a short photo session.", review: "Speaking activity 1: the role-play" }
  ]
};
