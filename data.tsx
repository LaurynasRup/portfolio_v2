const projects = [
  {
    id: 1,
    title: 'AAM Roll of Honour',
    body_short:
      'Built with NextJS and ExpressJS in TypeScript, this app features WebSocket streaming, API calls, data restructuring, cron updates, and powers an 8-screen display at AAM Duxford.',
    body: [
      'AAM Roll of Honour is by far the project I’m most proud of. Having previously exceeded client expectations during the main AAM website build, we were trusted to rebuild the Roll of Honour app.',
      'This is not a typical website, but an app physically displayed at the AAM in Duxford on eight massive 4K screens, built using web technologies. I was the sole developer responsible for the build, with minimal supervision.',
      'The app was built with NextJS and ExpressJS, both written in TypeScript, as it required a server separate from the main client apps. It features various API calls and data restructuring, intricate WebSocket integration that controls delayed animations across the screens to create departure board-like effects, and cron functionality that periodically updates live data and images.',
      'This app is still running strong and can be seen live in action at the American Air Museum in Duxford.',
    ],
    tech: ['node', 'next', 'react', 'typescript', 'css'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: true,
    link: 'project-number-1',
  },
  {
    id: 2,
    title: 'American Air Museum',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['drupal', 'twig', 'js', 'css'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: true,
    link: 'project-number-2',
  },
  {
    id: 3,
    title: 'British Ecological Society',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['wp', 'php', 'css', 'js'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: true,
    link: 'project-number-3',
  },
  {
    id: 4,
    title: 'Hey Good Looking',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['node', 'react', 'next', 'typescript'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: false,
    link: 'project-number-4',
  },
  {
    id: 5,
    title: 'Parkinsons Europe',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['css', 'js', 'twig', 'drupal'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: false,
    link: 'project-number-5',
  },
  {
    id: 6,
    title: 'Vale Holiday Parks',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['node', 'react', 'next', 'typescript'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'work',
    promoted: false,
    link: 'project-number-6',
  },
  {
    id: 7,
    title: 'Nurse Note (in progress)',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['css', 'js', 'twig', 'drupal'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'personal',
    promoted: false,
    link: 'project-number-7',
  },
  {
    id: 8,
    title: 'DonStone Dashboard',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: [
      'Phasellus magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.Praesent congue erat at massa. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Etiam vitae tortor.',
      'In ac felis quis tortor malesuada pretium. Aenean vulputate eleifend tellus. Aenean viverra rhoncus pede.Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus gravida semper nisi. Nam pretium turpis et arcu.',
      'Duis leo. Fusce a quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    ],
    tech: ['css', 'js', 'twig', 'drupal'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'personal',
    promoted: false,
    link: 'project-number-7',
  },
];

export default projects;
