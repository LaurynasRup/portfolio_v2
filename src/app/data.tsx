const projects = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: true,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: true,
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: true,
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: false,
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: false,
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['node', 'react', 'next', 'typescript'],
    type: 'personal',
    promoted: false,
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor sit amet',
    body_short:
      'Sagittis neque odio nec vivamus posuere malesuada commodo nostra, curabitur pharetra lobortis potenti accumsan lacus diam, gravida cursus lectus integer egestas felis suspendisse.',
    body: 'Fusce vulputate eleifend sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus euismod mauris. Sed a libero. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce egestas elit eget lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nulla sit amet est. Mauris sollicitudin fermentum libero. Pellentesque commodo eros a enim. Nam eget dui. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Nunc nonummy metus. Vivamus laoreet. Ut varius tincidunt libero.',
    tech: ['css', 'js', 'twig', 'drupal'],
    type: 'work',
    promoted: false,
  },
];

export default projects;
