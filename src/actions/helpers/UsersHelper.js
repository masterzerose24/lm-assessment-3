
const AVATARS = [
  `https://semantic-ui.com/images/avatar2/large/rachel.png`,
  `https://semantic-ui.com/images/avatar/large/chris.jpg`,
  `https://semantic-ui.com/images/avatar2/large/kristy.png`,
  `https://react.semantic-ui.com/images/avatar/large/elliot.jpg`,
  `https://semantic-ui.com/images/avatar/large/helen.jpg`,
  `https://semantic-ui.com/images/avatar2/large/molly.png`,
  `https://react.semantic-ui.com/images/avatar/large/stevie.jpg`,
  `https://semantic-ui.com/images/avatar2/large/elyse.png`,
];

export const avatarRandomizer = () => {
  const avatarIdx = Math.floor(Math.random() * 8);
  return AVATARS[avatarIdx];
}