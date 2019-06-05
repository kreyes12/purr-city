export const scenes = [
  {
    id: 1,
    bgImage: "/imgs/onlygate.png",
    catImage: "/imgs/catsolo-licking.png",
    name: "Entrance",
    sound: "./trumpet.mp3",
    text: ["Congratulations! You have reached the gates to Purr City."],
    goTo: 2
  },

  {
    id: 2,
    bgImage: "/imgs/onlygate.png",
    catImage: "/imgs/catsolo-sideways.png",
    name: "Sideways",
    text: [
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
    goTo: 3
  },
  {
    id: 3,
    bgImage: "/imgs/onlygate.png",
    catImage: "/imgs/catonbackwithkey.png",
    name: "OpenGate",
    text: [
      "Yum, I think I will have a nap now.",
      "Take the key from the Pawkeeper and unlock the gates to Purr City!"
    ],
    goTo: 4
  },

  {
    id: 4,
    bgImage: "/imgs/onlygate.png",
    catImage: "/imgs/catnokeynapping.png",
    name: "OpenGate",
    text: [
      "Now open the gates",
      "Go through the gate before the Pawkeeper wakes up!"
    ],
    goTo: 5
  },

  {
    id: 5,
    bgImage: "/imgs/twocatsbuilding.png",
    name: "Construction",
    text: [
      "Purr City is under construction",
      "We only have 2 cats working. Purr coins are needed to hire more paws."
    ],
    question: {
      text: `To receive 3 purr coins, what is the minimum wage in Purr City?`,
      responses: ["1 purr coin", "8 purr coins", "14 purr coins"]
    },
    goTo: 6
  },

  {
    id: 6,
    bgImage: "/imgs/twocatsbuilding.png",
    // catImage: "/imgs/thirdcat.png",
    catImage: "/imgs/fourthcat.png",
    name: "More workers",
    text: ["Paw Five! We just hired a couple of extra paws thanks to you!"],
    goTo: 7
  }
];
