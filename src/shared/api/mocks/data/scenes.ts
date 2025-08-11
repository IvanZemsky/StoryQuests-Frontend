import { components } from "../../schema/generated"

const placeholderImg =
   "https://images.unsplash.com/photo-1599587997303-86d4294c5df7?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const scenesMocks: components["schemas"]["Scene"][] = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    storyId: "story-1",
    number: 1,
    type: "default",
    answers: [
      {
        id: "answer-1-1",
        text: "Explore the forest.",
        nextSceneNumber: 2,
      },
      {
        id: "answer-1-2",
        text: "Head towards the village.",
        nextSceneNumber: 3,
      },
    ],
    title: "The Crossroads",
    description: "You stand at a crossroads. A dark forest lies to the east, and a small village to the west. Which way do you go?",
    img: placeholderImg,
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-67890abcdef0",
    storyId: "story-1",
    number: 2,
    type: "default",
    answers: [
      {
        id: "answer-2-1",
        text: "Investigate the strange noises.",
        nextSceneNumber: 4,
      },
      {
        id: "answer-2-2",
        text: "Turn back.",
        nextSceneNumber: 1,
      },
    ],
    title: "Deep in the Forest",
    description: "The forest is dark and silent, except for strange noises coming from deeper within.",
    img: placeholderImg,
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-7890abcdef01",
    storyId: "story-1",
    number: 3,
    type: "default",
    answers: [
      {
        id: "answer-3-1",
        text: "Enter the tavern.",
        nextSceneNumber: 5,
      },
      {
        id: "answer-3-2",
        text: "Ask a villager for directions.",
        nextSceneNumber: 6,
      },
    ],
    title: "The Village",
    description: "You arrive at a small, quiet village. A tavern stands in the center of the square.",
    img: placeholderImg,
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-890abcdef012",
    storyId: "story-1",
    number: 4,
    type: "default",
    answers: [
      {
        id: "answer-4-1",
        text: "Confront the creature.",
        nextSceneNumber: 7,
      },
      {
        id: "answer-4-2",
        text: "Hide and observe.",
        nextSceneNumber: 8,
      },
    ],
    title: "The Creature",
    description: "You discover a strange creature lurking in the shadows.",
    img: placeholderImg,
  },
  {
    id: "e5f6a7b8-c9d0-1234-5678-abcdef012345",
    storyId: "story-1",
    number: 5,
    type: "default",
    answers: [
      {
        id: "answer-5-1",
        text: "Buy a drink.",
        nextSceneNumber: 9,
      },
      {
        id: "answer-5-2",
        text: "Listen to the rumors.",
        nextSceneNumber: 10,
      },
    ],
    title: "The Tavern",
    description: "The tavern is warm and inviting, filled with locals.",
    img: placeholderImg,
  },
  {
    id: "f6a7b8c9-d0e1-2345-6789-bcdef01234567",
    storyId: "story-1",
    number: 6,
    type: "default",
    answers: [
      {
        id: "answer-6-1",
        text: "Follow their directions.",
        nextSceneNumber: 11,
      },
      {
        id: "answer-6-2",
        text: "Ignore them and explore on your own.",
        nextSceneNumber: 3,
      },
    ],
    title: "Seeking Guidance",
    description: "A villager offers you directions to the lost temple.",
    img: placeholderImg,
  },
  {
    id: "a7b8c9d0-e1f2-3456-7890-def0123456789",
    storyId: "story-1",
    number: 7,
    type: "default",
    answers: [
      {
        id: "answer-7-1",
        text: "Attack!",
        nextSceneNumber: 12,
      },
      {
        id: "answer-7-2",
        text: "Try to reason with it.",
        nextSceneNumber: 8,
      },
    ],
    title: "Confrontation",
    description: "The creature snarls, ready to defend itself.",
    img: placeholderImg,
  },
  {
    id: "b8c9d0e1-f2a3-4567-8901-ef0123456789a",
    storyId: "story-1",
    number: 8,
    type: "default",
    answers: [
      {
        id: "answer-8-1",
        text: "Run away!",
        nextSceneNumber: 2,
      },
      {
        id: "answer-8-2",
        text: "Attempt communication.",
        nextSceneNumber: 7,
      },
    ],
    title: "Observing the Creature",
    description: "The creature seems sad and lost.",
    img: placeholderImg,
  },
  {
    id: "c9d0e1f2-a3b4-5678-9012-f0123456789ab",
    storyId: "story-1",
    number: 9,
    type: "default",
    answers: [
      {
        id: "answer-9-1",
        text: "Ask about the missing villagers.",
        nextSceneNumber: 13,
      },
      {
        id: "answer-9-2",
        text: "Gamble your coin.",
        nextSceneNumber: 5,
      },
    ],
    title: "A Drink at the Tavern",
    description: "The barkeep slides you a mug of ale.",
    img: placeholderImg,
  },
  {
    id: "d0e1f2a3-b4c5-6789-0123-0123456789abc",
    storyId: "story-1",
    number: 10,
    type: "default",
    answers: [
      {
        id: "answer-10-1",
        text: "Investigate the forest.",
        nextSceneNumber: 2,
      },
      {
        id: "answer-10-2",
        text: "Spread the word.",
        nextSceneNumber: 3,
      },
    ],
    title: "Tavern Rumors",
    description: "You overhear whispers of a growing darkness in the forest.",
    img: placeholderImg,
  },
  {
    id: "e1f2a3b4-c5d6-7890-1234-123456789abcd",
    storyId: "story-1",
    number: 11,
    type: "default",
    answers: [
      {
        id: "answer-11-1",
        text: "Enter the temple.",
        nextSceneNumber: 14,
      },
      {
        id: "answer-11-2",
        text: "Turn back to the village.",
        nextSceneNumber: 3,
      },
    ],
    title: "The Lost Temple",
    description: "You find yourself at the entrance of an ancient temple.",
    img: placeholderImg,
  },
  {
    id: "f2a3b4c5-d6e7-8901-2345-23456789abcde",
    storyId: "story-1",
    number: 12,
    type: "end",
    answers: [],
    title: "Victory Over the Creature",
    description: "You defeat the creature, ending its reign of terror.",
    img: placeholderImg,
  },
  {
    id: "a3b4c5d6-e7f8-9012-3456-3456789abcdef",
    storyId: "story-1",
    number: 13,
    type: "default",
    answers: [
      {
        id: "answer-13-1",
        text: "Search the forest for clues.",
        nextSceneNumber: 2,
      },
      {
        id: "answer-13-2",
        text: "Offer to help the villagers.",
        nextSceneNumber: 3,
      },
    ],
    title: "The Missing Villagers",
    description: "The barkeep reveals that several villagers have gone missing recently.",
    img: placeholderImg,
  },
  {
    id: "b4c5d6e7-f8a9-0123-4567-456789abcdef0",
    storyId: "story-1",
    number: 14,
    type: "default",
    answers: [
      {
        id: "answer-14-1",
        text: "Solve the riddle.",
        nextSceneNumber: 15,
      },
      {
        id: "answer-14-2",
        text: "Give up and leave the temple.",
        nextSceneNumber: 3,
      },
    ],
    title: "Inside the Temple",
    description: "A riddle is inscribed on the wall: 'What has an eye, but cannot see?'",
    img: placeholderImg,
  },
  {
    id: "c5d6e7f8-a9b0-1234-5678-56789abcdef01",
    storyId: "story-1",
    number: 15,
    type: "end",
    answers: [],
    title: "The Treasure Room",
    description: "You answer 'A needle' and the wall slides open, revealing a treasure room! You win!",
    img: placeholderImg,
  },
];