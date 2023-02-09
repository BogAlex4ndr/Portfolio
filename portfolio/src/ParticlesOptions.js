const screenWidth = window.innerWidth;

const options = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: screenWidth,
      },
    },
    color: {
      value: ['#c4d109be'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: false,
      distance: 150,
      color: '#808080',
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top',
      random: false,
      straight: false,
      outModes: 'out',
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.3,
        },
      },
      push: {
        quantity: 1,
      },
    },
  },
};

export default options;
