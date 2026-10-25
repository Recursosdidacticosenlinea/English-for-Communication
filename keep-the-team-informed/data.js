window.UNIT = {
  slug: "keep-the-team-informed",
  title: "Keep the Team Informed",
  level: "B1",
  minutes: 60,
  subject: "Organizational Communication",
  focus: ["must / have to / don't have to / mustn't", "should / shouldn't for advice", "internal communication channels", "writing an internal email"],
  speakers: { "Mariana": "f", "Luis": "m", "Ms. Ortega": "f", "Pedro": "m" },

  presentation: {
    scene: "🏢📧👥📌",
    situation: "Mariana is doing her **professional practice** in the internal communication area of a company. The company is moving to a new office, and the employees are confused.",
    warmup: {
      prompt: "How do people inform employees in an organization? Choose all the channels you know.",
      options: ["email", "a newsletter", "a bulletin board", "meetings", "WhatsApp groups", "an intranet", "posters", "video messages", "surveys", "Slack or Teams", "a suggestion box", "events"],
      response: "Good! In this unit you'll learn to explain rules and obligations and to give advice about internal communication."
    },
    dialogueTitle: "The office move",
    dialogue: [
      { who: "Luis", line: "Mariana, people *have to* move to the new office on Monday, but nobody knows the details." },
      { who: "Mariana", line: "We *should* send an email today. And we *should* put posters on every floor." },
      { who: "Luis", line: "Good idea. What *must* they do before Monday?" },
      { who: "Mariana", line: "They *must* pack their things by Friday at five. And they *mustn't* leave food in the boxes!" },
      { who: "Luis", line: "Do they *have to* move their computers?" },
      { who: "Mariana", line: "No, they *don't have to*. The IT team will do that." },
      { who: "Luis", line: "Perfect. Write the email, and we *should* also answer questions in a short meeting." }
    ]
  },

  objectives: [
    "I can name internal communication channels and their uses.",
    "I can explain obligations and prohibitions with *must, have to, mustn't*.",
    "I can say something is not necessary with *don't have to*.",
    "I can give advice with *should* and write a clear internal email."
  ],

  explanation: {
    vocabTitle: "Organizational communication",
    vocab: [
      { word: "employee", icon: "🧑‍💼" }, { word: "manager", icon: "👩‍💼" }, { word: "department", icon: "🏢" },
      { word: "staff", icon: "👥" }, { word: "newsletter", icon: "📰" }, { word: "intranet", icon: "🖥️" },
      { word: "bulletin board", icon: "📌" }, { word: "memo", icon: "📝" }, { word: "policy", icon: "📘" },
      { word: "deadline", icon: "⏰" }, { word: "feedback", icon: "💬" }, { word: "workplace climate", icon: "🌤️" },
      { word: "teamwork", icon: "🤝" }, { word: "announcement", icon: "📢" }, { word: "rumor", icon: "🗣️" }
    ],
    grammar: [
      {
        title: "Obligation and prohibition",
        head: ["Verb", "Meaning", "Example"],
        rows: [
          ["*must*", "obligation (rules, the speaker's opinion)", "You *must* wear your ID at all times."],
          ["*have to / has to*", "obligation (external, from rules or situations)", "Employees *have to* pack their things by Friday."],
          ["*mustn't*", "prohibition: it's not allowed", "You *mustn't* share passwords."],
          ["*don't have to / doesn't have to*", "not necessary (but you can)", "You *don't have to* move your computer. IT will do it."]
        ],
        note: "*mustn't* ≠ *don't have to*. *You mustn't come* = it's prohibited. *You don't have to come* = it's optional. Past: *had to* (*We had to work late yesterday.*)"
      },
      {
        title: "Advice: should / shouldn't",
        head: ["Form", "Example"],
        rows: [
          ["*should* + verb", "Managers *should* listen to their teams."],
          ["*shouldn't* + verb", "You *shouldn't* send important news by WhatsApp only."],
          ["*Should* + subject + verb?", "*Should* we *include* photos in the newsletter?"],
          ["*I think / I don't think* + should", "*I don't think* we *should* send three emails a day."]
        ],
        note: "*should* is softer than *must*: it's a recommendation, not a rule."
      },
      {
        title: "Internal email structure",
        head: ["Part", "Example"],
        rows: [
          ["Subject line (clear)", "Office move: what you need to do before Monday"],
          ["Greeting", "Dear all, / Hi team,"],
          ["Purpose", "I'm writing to inform you about…"],
          ["Key information (list)", "• You have to… • You don't have to…"],
          ["Closing", "If you have any questions, please contact… / Best regards,"]
        ],
        note: "Internal emails should be **short**, **clear** and **friendly but professional**."
      }
    ],
    watchOut: [
      ["You must to arrive at nine.", "You must arrive at nine."],
      ["She have to sign the form.", "She has to sign the form."],
      ["You mustn't bring a laptop. (= it's optional)", "You don't have to bring a laptop."],
      ["Do I must wear a uniform?", "Do I have to wear a uniform?"],
      ["You should to send a memo.", "You should send a memo."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences with *must, mustn't, have to, don't have to* or *should*.",
      items: [
        "The meeting is optional. You [[don't have to|do not have to]] go.",
        "Smoking is prohibited. You [[mustn't|must not]] smoke in the office.",
        "Everybody [[has to|must]] complete the survey by Friday — it's a company rule.",
        "I think you [[should]] write a shorter subject line. It's advice."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Ms. Ortega, the Human Resources manager, explains the new policies to the staff in a meeting. Listen and identify the rules.",
      title: "New policies meeting",
      script: [
        { who: "Ms. Ortega", line: "Good morning, everyone. Thank you for coming. I want to explain some new policies." },
        { who: "Ms. Ortega", line: "First, the new office. From Monday, you have to use your ID card to enter the building. You must carry it at all times." },
        { who: "Pedro", line: "Do we have to arrive earlier?" },
        { who: "Ms. Ortega", line: "No, you don't have to. The working hours are the same: nine to six." },
        { who: "Ms. Ortega", line: "Second, communication. Important announcements will come by email and on the intranet. You mustn't share internal information on social media." },
        { who: "Pedro", line: "What about the WhatsApp group?" },
        { who: "Ms. Ortega", line: "You can use it for quick messages, but you shouldn't use it for official information. People miss messages there." },
        { who: "Ms. Ortega", line: "Finally, every month you have to complete a short climate survey. It's anonymous, so you don't have to write your name." },
        { who: "Ms. Ortega", line: "And if you have ideas, you should use the suggestion box. We read everything." }
      ],
      activities: [
        {
          type: "sort", title: "Rule, not necessary or advice?",
          prompt: "Sort the information from the meeting.",
          bins: ["Obligation / prohibition", "Not necessary", "Advice"],
          items: [
            { text: "use the ID card to enter", bin: 0 }, { text: "complete the monthly climate survey", bin: 0 }, { text: "not share internal information on social media", bin: 0 },
            { text: "arrive earlier", bin: 1 }, { text: "write your name on the survey", bin: 1 },
            { text: "not use WhatsApp for official information", bin: 2 }, { text: "use the suggestion box", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The working hours are changing.", a: false },
            { s: "Official announcements will come by email and on the intranet.", a: true },
            { s: "Employees mustn't use the WhatsApp group.", a: false },
            { s: "The climate survey is anonymous.", a: true },
            { s: "The survey is every week.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this article from a magazine for communication professionals.",
      title: "Five mistakes in internal communication",
      text: [
        { author: "1. Employees hear the news last", body: "If employees learn about changes from the media or from rumors, they will stop trusting the company. Managers should always inform their teams first." },
        { author: "2. Too many emails", body: "Some companies send twenty emails a day. People stop reading them. Communication teams should choose the right channel for each message: not everything has to be an email." },
        { author: "3. Only top-down communication", body: "Communication must go in two directions. Employees have to be able to give feedback, ask questions and make suggestions." },
        { author: "4. Unclear messages", body: "A message with long paragraphs and technical words is difficult to understand. Messages should answer three questions: What is happening? What do I have to do? When?" },
        { author: "5. Ignoring the climate", body: "A good workplace climate doesn't happen by chance. Companies don't have to spend a lot of money, but they must listen, recognize good work and celebrate together." }
      ],
      activities: [
        {
          type: "match", title: "Mistake and solution",
          prompt: "Match each mistake with the writer's advice.",
          pairs: [
            ["Employees hear the news last.", "Managers should inform their teams first."],
            ["Too many emails.", "Choose the right channel for each message."],
            ["Only top-down communication.", "Employees have to be able to give feedback."],
            ["Unclear messages.", "Answer: What? What do I have to do? When?"],
            ["Ignoring the climate.", "Listen, recognize good work and celebrate."]
          ]
        },
        {
          type: "rewrite", title: "Say it with a modal",
          prompt: "Rewrite each sentence with the modal in brackets.",
          items: [
            { q: "It's necessary to inform the team first. (have to)", a: ["You have to inform the team first.", "We have to inform the team first.", "Managers have to inform the team first."] },
            { q: "It's not necessary to spend a lot of money. (don't have to)", a: ["Companies don't have to spend a lot of money.", "You don't have to spend a lot of money.", "We don't have to spend a lot of money."] },
            { q: "It's a good idea to use a clear subject line. (should)", a: ["You should use a clear subject line.", "We should use a clear subject line."] },
            { q: "It's prohibited to share internal information. (mustn't)", a: ["You mustn't share internal information.", "Employees mustn't share internal information.", "You must not share internal information."] },
            { q: "It's not a good idea to send twenty emails a day. (shouldn't)", a: ["You shouldn't send twenty emails a day.", "Companies shouldn't send twenty emails a day.", "We shouldn't send twenty emails a day."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the modals first, then write an internal email.",
      activities: [
        {
          type: "tiles", title: "Rules and advice",
          items: [
            { a: "All employees have to complete the survey." },
            { a: "You don't have to bring your computer." },
            { a: "You mustn't share your password." },
            { a: "Managers should listen to their teams." },
            { a: "Do we have to attend the meeting?" }
          ]
        },
        {
          type: "gap", title: "Fix the email",
          prompt: "Complete Mariana's email with the correct words.",
          items: [
            "Subject: Office [[move]] – what you need to do before Monday",
            "Dear all, I'm [[writing]] to inform you about the move to our new office.",
            "• You [[have to|must]] pack your things by Friday at 5 p.m.",
            "• You [[don't have to|do not have to]] move your computer. The IT team will do it.",
            "• You [[mustn't|must not]] leave food or drinks in the boxes. If you have any questions, please [[contact]] me. Best regards, Mariana"
          ]
        },
        {
          type: "write", title: "My internal email",
          prompt: "You work in the internal communication area of an organization. Write an email to all employees about a change (new schedule, an event, a new policy, a training course…). Include obligations, things that are not necessary, and one piece of advice.",
          minWords: 90, maxWords: 140,
          model: "Subject: New training course on digital tools – registration open. Dear all, I'm writing to inform you about a new training course on digital tools. The course starts on 3 November and it will take place online. All team leaders have to complete the course before December. Other employees don't have to take it, but it is highly recommended. To register, you must fill in the form on the intranet by Friday. You don't have to bring any materials. You should use headphones during the sessions. If you have any questions, please contact the HR team. Best regards, Mariana López, Internal Communication",
          bank: ["Subject:", "Dear all,", "I'm writing to inform you about…", "You have to / must…", "You don't have to…", "You mustn't…", "You should…", "If you have any questions, please contact…", "Best regards,"],
          checklist: [
            "My email has a **clear subject line**, greeting and closing.",
            "I used *have to* or *must* for obligations.",
            "I used *don't have to* for something optional.",
            "I gave at least one piece of advice with *should*."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: a confused employee",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Communication team", tasks: ["Explain the main change.", "Say two obligations (*have to / must*).", "Say one thing that is not necessary.", "Give one piece of advice."] },
            { name: "Student B · Employee", tasks: ["Say you're confused about the change.", "Ask *Do I have to…?* twice.", "Ask *Can I…?*", "Ask for advice: *What should I do if…?*"] }
          ],
          language: ["Do I have to…?", "Can I…?", "What should I do if…?", "Yes, you have to…", "No, you don't have to…", "You mustn't…", "I think you should…"],
          model: [
            { who: "B", line: "Hi, I'm a bit confused about the move. Do I have to pack everything?" },
            { who: "A", line: "Yes, you have to pack your personal things by Friday." },
            { who: "B", line: "Do I have to move my computer too?" },
            { who: "A", line: "No, you don't have to. IT will do it. But you mustn't leave food in the boxes." },
            { who: "B", line: "What should I do if I need more boxes?" },
            { who: "A", line: "You should ask at reception. They have extra boxes." }
          ],
          seconds: 120,
          checklist: ["use *have to* and *must*?", "use *don't have to* correctly?", "use *mustn't*?", "give advice with *should*?"]
        },
        {
          type: "speak", title: "Advice for a better workplace",
          prompt: "Record yourself for about one minute. Imagine you are a communication consultant. Give advice to an organization (a company, your Faculty, a club) to improve its internal communication.",
          language: ["In my opinion, the organization should…", "Managers have to…", "Employees / Students mustn't…", "They don't have to…, but…", "Another good idea is…"],
          seconds: 75,
          checklist: ["give at least three pieces of advice?", "use obligation and advice modals?", "mention communication channels?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name internal communication channels.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *must* and *have to* for obligations.", review: "Explanation: Obligation and prohibition" },
    { can: "I can tell the difference between *mustn't* and *don't have to*.", review: "Explanation: Obligation and prohibition; Listening activity 1" },
    { can: "I can give advice with *should* and *shouldn't*.", review: "Explanation: Advice; Reading activity 2" },
    { can: "I can write a clear internal email.", review: "Explanation: Internal email structure; Writing activity 3" },
    { can: "I can answer employees' questions about a change.", review: "Speaking activity 1: the role-play" }
  ]
};
