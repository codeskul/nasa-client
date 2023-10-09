const resources = {
  background: {
    small: "/nasa-react-client/img/background-small.jpg",
    medium: "/nasa-react-client/img/background-medium.jpg",
    large: "/nasa-react-client/img/background-large.jpg",
  },
  pattern: "/nasa-react-client/img/glow.png",
};

const sounds = {
  shared: {
    volume: 0.5,
  },
  players: {
    click: {
      sound: { src: ["/nasa-react-client/sound/click.mp3"] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ["/nasa-react-client/sound/typing.mp3"] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ["/nasa-react-client/sound/deploy.mp3"] },
      settings: { oneAtATime: true }
    },
    success: {
      sound: {
        src: ["/nasa-react-client/sound/success.mp3"],
        volume: 0.2,
      },
      settings: { oneAtATime: true }
    },
    abort: {
      sound: { src: ["/nasa-react-client/sound/abort.mp3"] },
      settings: { oneAtATime: true }
    },
    warning: {
      sound: { src: ["/nasa-react-client/sound/warning.mp3"] },
      settings: { oneAtATime: true }
    },
  }
};

const theme = {
  color: {
    content: "#a1ecfb",
  },
  padding: 20,
  responsive: {
    small: 600,
    medium: 800,
    large: 1200
  },
  typography: {
    headerFontFamily: '"Titillium Web", "sans-serif"',
  },
};

export {
  resources,
  sounds,
  theme,
};