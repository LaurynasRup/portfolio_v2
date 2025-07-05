const projects = [
  {
    id: 1,
    title: 'AAM Roll of Honour',
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
    tech: ['node', 'react', 'next', 'typescript'],
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
    tech: ['css', 'js', 'twig', 'drupal'],
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
