const options = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#31785b', '#0b264b', '#ce443e', '#65a8d8'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.2,
    },
    size: {
      value: { min: 2, max: 7 },
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
  fpsLimit: 120,
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
