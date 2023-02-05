

  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#f3ff', '#ffff', '#f3ff', '#f11f'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'random',
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
  
  