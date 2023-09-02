const projects = [
  {
    id: 1,
    title: 'Project number 1',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: true,
    link: 'project-number-1',
  },
  {
    id: 2,
    title: 'Project number 2',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: true,
    link: 'project-number-2',
  },
  {
    id: 3,
    title: 'Project number 3',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: true,
    link: 'project-number-3',
  },
  {
    id: 4,
    title: 'Project number 4',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: false,
    link: 'project-number-4',
  },
  {
    id: 5,
    title: 'Project number 5',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: false,
    link: 'project-number-5',
  },
  {
    id: 6,
    title: 'Project number 6',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: false,
    link: 'project-number-6',
  },
  {
    id: 7,
    title: 'Project number 7',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: false,
    link: 'project-number-7',
  },
];

export default projects;
