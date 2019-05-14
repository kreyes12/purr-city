export const scenes = [
  {
    id: 1,
    catImage: "/imgs/gate_cat_licking_short.png",
    name: "Entrance",
    sound: "./trumpet.mp3",
    text: [
      "Congratulations! You have reached the gates to Purr City.",
      "But the gates are locked and guarded by the vigilant pawkeeper!",
      "You have a chicken drumstick and some milk in your satchel.",
      `Oh, you're not a cat!`,
      `You cannot come through.`,
      `Hmm..I can smell food.`
    ],
    question: {
      text: `How do you get past the Pawkeeper? (More than one action may be required)`,
      responses: [
        "You stroke it.",
        "You give it milk.",
        "You give it the chicken."
      ]
    },
    goTo: 2
  },
  {
    id: 2,
    bgImage: "src/imgs/gates_background.png",
    catImage: "/imgs/gate_cat_back.jpg",
    name: "OpenGate",
    text: [
      "Yum, I think I will have a nap now.",
      "Take the key from the pawkeeper and unlock the gates to Purr City!"
    ],
    goTo: 3
  },
  {
    id: 3,
    image: "src/imgs/gates_background.png",
    name: "Construction",
    text: [
      "Purr City is under construction",
      "We only have 2 cats working. Purr coins are needed to hire more paws."
    ],
    question: `How do you get past the Pawkeeper? (More than one action may be required)`,
    goTo: 4
  }
];
