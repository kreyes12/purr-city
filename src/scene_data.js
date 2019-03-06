export const scenes = [
  {
    bgImage: 'src/imgs/gates_background.png',
    catImage: './imgs/gate_cat_sideways.png',
    name: 'Entrance',
    text: ['Congratulations! You have reached the gates to Purr City.', 'But the gates are locked and guarded by the vigilant pawkeeper!', 'Hello'],
    question: {
      text: `How do you get past the Pawkeeper? (More than one action may be required)`,
      responses: ['You stroke it.', 'You give it milk.', 'You give it the chicken.']
    },
    goTo: 2
  },
  {
    image: 'src/imgs/gates_background.png',
    name: 'OpenGate',
    text: '',
    question: `How do you get past the Pawkeeper? (More than one action may be required)`,
    goTo: 3
  },
  {
    image: 'src/imgs/gates_background.png',
    name: 'OpenGate',
    text: '',
    question: `How do you get past the Pawkeeper? (More than one action may be required)`,
    goTo: 3
  }
]
