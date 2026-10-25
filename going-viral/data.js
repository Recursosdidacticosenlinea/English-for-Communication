window.UNIT = {
  slug: "going-viral",
  title: "Going Viral",
  level: "A2",
  minutes: 55,
  subject: "Virtual Community Management",
  focus: ["be going to: plans", "will: predictions and quick decisions", "social media vocabulary", "content calendar"],
  speakers: { "Fernanda": "f", "Alan": "m", "Mónica": "f", "Gabriel": "m" },

  presentation: {
    scene: "📲💬❤️📈",
    situation: "In **Virtual Community Management**, Fernanda and Alan manage the Instagram and TikTok accounts of a small coffee shop near the campus. They're planning next week's content.",
    warmup: {
      prompt: "What kind of posts do you like? Choose your favorites.",
      options: ["memes", "tutorials", "behind the scenes", "giveaways", "polls", "reels", "live videos", "stories", "photos of food", "reviews", "challenges", "infographics"],
      response: "Nice! In this unit you'll learn to talk about content plans and to make predictions about how posts will perform."
    },
    dialogueTitle: "Planning the week",
    dialogue: [
      { who: "Fernanda", line: "OK, what *are we going to post* next week?" },
      { who: "Alan", line: "On Monday *I'm going to upload* a reel about the new iced coffee." },
      { who: "Fernanda", line: "Great idea. I think it *will get* a lot of views. It's going to be hot this week." },
      { who: "Alan", line: "And on Wednesday?" },
      { who: "Fernanda", line: "*We're going to do* a poll: *Latte or cappuccino?*" },
      { who: "Alan", line: "What about a giveaway? People love free things." },
      { who: "Fernanda", line: "Good point! *I'll write* the rules now. More followers… and maybe we'll *go viral*!" }
    ]
  },

  objectives: [
    "I can use social media vocabulary: *post, reel, engagement, followers…*",
    "I can talk about content plans with *be going to*.",
    "I can make predictions and quick decisions with *will*.",
    "I can plan and present a simple content calendar."
  ],

  explanation: {
    vocabTitle: "Social media management",
    vocab: [
      { word: "post", icon: "🖼️" }, { word: "reel", icon: "🎞️" }, { word: "story", icon: "⭕" },
      { word: "caption", icon: "✏️" }, { word: "hashtag", icon: "#️⃣" }, { word: "followers", icon: "👥" },
      { word: "likes", icon: "❤️" }, { word: "engagement", icon: "📊" }, { word: "reach", icon: "📡" },
      { word: "giveaway", icon: "🎁" }, { word: "poll", icon: "🗳️" }, { word: "influencer", icon: "🌟" },
      { word: "upload", icon: "⬆️" }, { word: "tag", icon: "🏷️" }, { word: "go viral", icon: "🚀" }
    ],
    grammar: [
      {
        title: "Be going to: plans and intentions",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "*am / is / are going to* + verb", "We*'re going to post* a reel on Monday."],
          ["Negative", "*'m not / isn't / aren't going to* + verb", "She *isn't going to upload* stories this week."],
          ["Question", "*Are / Is* + subject + *going to* + verb?", "*Are* you *going to use* hashtags? – Yes, I *am*."],
          ["Evidence", "We can see it now", "Look at those likes! It*'s going to be* a hit."]
        ],
        note: "Use *going to* for **decisions you made before** speaking: plans in your calendar."
      },
      {
        title: "Will: predictions and quick decisions",
        head: ["Use", "Example"],
        rows: [
          ["Prediction (opinion)", "I think this post *will get* a lot of comments."],
          ["Negative prediction", "People *won't like* a long caption."],
          ["Quick decision (now)", "No photo for today? *I'll take* one now!"],
          ["Offer / promise", "*I'll reply* to the messages. / We*'ll announce* the winner on Friday."]
        ],
        note: "*I think…will*, *probably*, *maybe*: *It'll probably go viral.* Negative: *I don't think it will…*"
      }
    ],
    watchOut: [
      ["I going to post a reel.", "I'm going to post a reel."],
      ["We will to upload it.", "We will upload it."],
      ["I think it won't works.", "I don't think it will work."],
      ["Tomorrow I post the video. (plan)", "Tomorrow I'm going to post the video."],
      ["Are you go to use hashtags?", "Are you going to use hashtags?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *going to* or *will*.",
      items: [
        "This weekend we [[are going to|'re going to]] launch a giveaway. It's in the calendar.",
        "The phone is ringing. I [[will|'ll]] answer it!",
        "I think this meme [[will]] get a lot of shares.",
        "[[Are]] you going to post a story today?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mónica, a community manager, talks to her client Gabriel about a campaign for his bookstore. Listen and find the plan.",
      title: "A campaign for a bookstore",
      script: [
        { who: "Gabriel", line: "So, Mónica, what are you going to do for my bookstore?" },
        { who: "Mónica", line: "First, we're going to change your profile photo and the bio. They're not very clear." },
        { who: "Gabriel", line: "OK. And the posts?" },
        { who: "Mónica", line: "We're going to post three times a week: on Mondays, a book recommendation; on Wednesdays, a reel; and on Fridays, a quote from a book." },
        { who: "Gabriel", line: "Are you going to use TikTok?" },
        { who: "Mónica", line: "Yes. Book videos are very popular. I think your followers will double in two months." },
        { who: "Gabriel", line: "Really? What about a giveaway?" },
        { who: "Mónica", line: "Good idea. We're going to give three books in December. I'm sure it'll be a success." },
        { who: "Gabriel", line: "And who's going to answer the messages?" },
        { who: "Mónica", line: "Don't worry, I'll answer them every day. And I'll send you a report every month." }
      ],
      activities: [
        {
          type: "match", title: "The content plan",
          prompt: "Match the day with the type of post.",
          pairs: [
            ["Mondays", "a book recommendation"],
            ["Wednesdays", "a reel"],
            ["Fridays", "a quote from a book"],
            ["December", "a giveaway of three books"],
            ["Every month", "a report for Gabriel"]
          ]
        },
        {
          type: "sort", title: "Plan or prediction?",
          prompt: "Is it a plan (*going to*) or a prediction / promise (*will*)?",
          bins: ["Plan (going to)", "Prediction or promise (will)"],
          items: [
            { text: "change the profile photo and the bio", bin: 0 }, { text: "post three times a week", bin: 0 },
            { text: "give three books in December", bin: 0 }, { text: "use TikTok", bin: 0 },
            { text: "the followers double in two months", bin: 1 }, { text: "the giveaway is a success", bin: 1 },
            { text: "answer the messages every day", bin: 1 }, { text: "send a report every month", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read this post from a marketing blog for small businesses.",
      title: "Social media trends: what's next?",
      text: [
        { author: "Short videos", body: "Short videos are not going away. Experts think they will continue to be the most popular format. Many brands are going to make videos of 15 seconds or less." },
        { author: "Real people", body: "Followers don't want perfect photos anymore. They want real people. In the future, small businesses will show their employees and their daily work: the \"behind the scenes\"." },
        { author: "Communities", body: "Big numbers of followers won't be the most important thing. Engagement will be more important: comments, conversations, and groups of loyal fans." },
        { author: "Artificial intelligence", body: "Community managers will use AI tools to write captions and analyze data. But AI won't replace people — brands will still need creative human ideas." },
        { author: "Our plans", body: "At our agency, we're going to offer a new course in January: *TikTok for small businesses*. We're also going to publish a free guide next month." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the post. Are the sentences true or false according to the writer?",
          items: [
            { s: "Short videos will probably disappear.", a: false },
            { s: "Followers will prefer real people to perfect photos.", a: true },
            { s: "The number of followers will be the most important thing.", a: false },
            { s: "AI will replace community managers.", a: false },
            { s: "The agency is going to offer a TikTok course.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Make it negative",
          prompt: "Write the opposite prediction or plan.",
          items: [
            { q: "Short videos will disappear.", a: ["Short videos won't disappear.", "Short videos will not disappear."] },
            { q: "AI will replace people.", a: ["AI won't replace people.", "AI will not replace people."] },
            { q: "We're going to publish a paid guide.", a: ["We aren't going to publish a paid guide.", "We're not going to publish a paid guide.", "We are not going to publish a paid guide."] },
            { q: "I think perfect photos will be popular.", a: ["I don't think perfect photos will be popular."] },
            { q: "She's going to post every day.", a: ["She isn't going to post every day.", "She's not going to post every day.", "She is not going to post every day."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the language first, then write a content plan.",
      activities: [
        {
          type: "tiles", title: "Plans and predictions",
          items: [
            { a: "We are going to post a reel on Monday." },
            { a: "I think this video will go viral." },
            { a: "Are you going to use hashtags?" },
            { a: "People won't read a long caption." },
            { a: "I'll answer the comments now." }
          ]
        },
        {
          type: "gap", title: "A message to the client",
          prompt: "Complete the message with *going to* or *will* and the verb.",
          items: [
            "Hi Gabriel! Next week we [[are going to post|'re going to post]] (post) a video about new books.",
            "I think your followers [[will love|'ll love]] (love) it.",
            "On Friday, Ana [[is going to take|'s going to take]] (take) photos of the store.",
            "Don't worry about the comments. I [[will reply|'ll reply]] (reply) today.",
            "I don't think the giveaway [[will be|'ll be]] (be) expensive."
          ]
        },
        {
          type: "write", title: "My content plan",
          prompt: "Choose a small business, a band or a university project. Write a one-week content plan: what you are going to post and when, and your predictions about the results.",
          minWords: 70, maxWords: 120,
          model: "This is my content plan for the Faculty's film club. On Monday, we're going to post a poster for the movie of the week. On Wednesday, we're going to upload a short reel with a scene from the film. On Friday, we're going to do a live video after the screening. I think the reel will get the most views. People will probably share the poster in their stories. I don't think the live video will be very popular at first, but it will grow.",
          bank: ["This is my content plan for…", "On Monday, we're going to…", "We're also going to…", "I think … will…", "It'll probably…", "I don't think … will…"],
          checklist: [
            "I used *going to* for at least **three** plans.",
            "I used *will* for at least **two** predictions.",
            "I used one negative prediction (*won't / I don't think…will*).",
            "I included days and types of post."
          ]
        }
      ]
    },

    speaking: {
      intro: "Practice with a partner, or play both roles yourself. Then record your evidence.",
      activities: [
        {
          type: "voice", title: "Talk to the computer: meeting with a client",
          prompt: "Practice the conversation with the computer. Choose a role: the computer reads the other part, and you say your lines. Then change roles. Your words are checked with voice recognition.",
          cards: [
            { name: "Student A · Community manager", tasks: ["Say what you're going to change in the profile.", "Present three posts for next week.", "Make two predictions about the results.", "Offer to do something (*I'll…*)."] },
            { name: "Student B · Business owner", tasks: ["Ask *What are you going to post?*", "Ask about a platform (*Are you going to use TikTok?*).", "Ask about the results.", "Ask who is going to answer messages."] }
          ],
          language: ["We're going to…", "On Monday / Next week…", "I think … will…", "You'll get more followers.", "I'll send you…", "Are you going to…?", "What will happen if…?"],
          model: [
            { who: "B", line: "So, what are you going to do for my gym?" },
            { who: "A", line: "We're going to post short workout videos three times a week." },
            { who: "B", line: "Are you going to use TikTok?" },
            { who: "A", line: "Yes. I think the videos will get a lot of views there." },
            { who: "B", line: "And the messages?" },
            { who: "A", line: "I'll answer them every afternoon." }
          ],
          seconds: 120,
          checklist: ["use *going to* for plans?", "use *will* for predictions?", "make an offer with *I'll*?", "ask and answer questions?"]
        },
        {
          type: "speak", title: "Trend forecast",
          prompt: "Record yourself for about one minute. What will social media be like in five years? Make at least four predictions and say one thing you're going to do to prepare as a communicator.",
          language: ["In five years, …", "I think people will…", "Brands probably won't…", "Maybe … will…", "To prepare, I'm going to…"],
          seconds: 75,
          checklist: ["make at least four predictions with *will*?", "use a negative (*won't*)?", "say one plan with *going to*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use social media management vocabulary.", review: "Explanation: the vocabulary cards" },
    { can: "I can talk about plans with *be going to*.", review: "Explanation: Be going to" },
    { can: "I can make predictions with *will* and *won't*.", review: "Explanation: Will; Reading activity 2" },
    { can: "I can choose between *going to* and *will*.", review: "Listening activity 2; Writing activity 2" },
    { can: "I can understand a text about social media trends.", review: "Reading activity 1" },
    { can: "I can present a simple content plan to a client.", review: "Writing activity 3 and Speaking activity 1" }
  ]
};
