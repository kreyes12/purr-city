export const scenes = [
  {
    id: 1,
    bgImage: 'gates_background.png',
    catImage: './imgs/gate_cat_sideways.png',
    name: 'Entrance',
    text: [
      'Congratulations! You have reached the gates to Purr City.',
      'But the gates are locked and guarded by the vigilant pawkeeper!',
      'You have a chicken drumstick and some milk in your satchel.',
      'Oh, you are not a cat.'
    ],
    question: { text: `How do you get past the Pawkeeper? (More than one action may be required)`, options: [{text: `You stroke it.`, goTo: 1}, {text: `You give it milk.`, goTo: 1}, {text: `You give it the chicken.`, goTo: 2}]}
  },
  {
    id: 2,
    image: '../imgs/gates_background.png',
    name: 'OpenGate',
    text: 'Go through the gates before the Pawkeeper wakes up.'
  },
  {
    id: 3,
    image: '../imgs/cat_bus_small.png',
    name: 'Construction',
    text: [
      'Purr City is under construction',
      'We only have two cats working. Purr coins are needed to hire more paws.'
    ]
  },
  {
    id: 4,
    image: '../imgs/cat_bus_small.png',
    name: 'Hello',
    text: [
      'Purr City is under construction',
      'We only have two cats working. Purr coins are needed to hire more paws.'
    ]
  }
]
