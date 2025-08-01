const projects = [
  {
    id: 1,
    title: 'AAM Roll of Honour',
    body_short:
      'A NextJS and ExpressJS application built in TypeScript, offering WebSocket streaming, API integrations, data restructuring, scheduled updates via cron, and powering an 8-screen display at AAM Duxford.',
    body: [
      'AAM Roll of Honour is by far the project I’m most proud of. Having previously exceeded client expectations during the main AAM website build, we were trusted to rebuild the Roll of Honour app.',
      'This is not a typical website, but an app physically displayed at the AAM in Duxford on eight massive 4K screens, built using web technologies. I was the sole developer responsible for the build, collaborating occasionally with the tech lead.',
      'The app was built with NextJS and ExpressJS, both written in TypeScript, as it required a server separate from the main client apps. It features various API calls and data restructuring, intricate WebSocket integration that controls delayed animations across the screens to create departure board-like effects, and cron functionality that periodically updates live data and images.',
      'This app is still running strong and can be seen live in action at the American Air Museum in Duxford.',
    ],
    tech: ['node', 'next', 'react', 'typescript', 'css'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/v1754038328/roh_duyxh1.jpg',
    ],
    type: 'work',
    promoted: true,
    link: 'project-number-1',
  },
  {
    id: 2,
    title: 'American Air Museum',
    body_short:
      'A data-heavy Drupal website with a custom theme built using Twig, SCSS, and JavaScript. Features Gulp-managed assets, external libraries, SOLR Search, and a REST API.',
    body: [
      'AAM is one of the first websites for which I was solely responsible for building the front end. It is built on Drupal CMS, with a theme developed specifically for this project.',
      "The theme is built using Drupal’s native Twig templates, SCSS for styling, and JavaScript to enhance the UI. Gulp was used to handle both SCSS and JS assets. The website utilizes a few external libraries such as SwiperJS, LightGallery, and Google Maps, which is integrated to work with the site's data. It is a data-heavy website, so SOLR Search is also implemented to improve query performance.",
      'The website is also configured to expose a REST API, which supplies content for the Roll of Honour app.',
    ],
    tech: ['drupal', 'twig', 'js', 'css', 'php'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/AAM_home.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/AAM_archive.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/AAM_gallery.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/AAM_map.png',
    ],
    type: 'work',
    promoted: true,
    link: 'project-number-2',
  },
  {
    id: 3,
    title: 'British Ecological Society',
    body_short:
      'A WordPress website offering scientific content, membership services, CRM integration, and access to multiple archives for researchers and professionals in the scientific community.',
    body: [
      'We took over this website from another agency and were asked to build a new theme that works with the existing database and keeps the current membership management features in place.',
      'The project came with its challenges - mainly because there wasn’t much documentation, and the Blulight CRM integration for managing memberships was quite complex. On top of that, we had to handle a lot of relational data to support multiple archives.',
      'The BES website runs on standard WordPress tech - PHP, HTML, and SCSS. I was the main developer on the project, responsible for building the new theme and making sure everything kept running smoothly.',
    ],
    tech: ['wp', 'php', 'css', 'js'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/BES_hp_do61tu.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/BES_archive_x3dcna.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/BES_audience_k5qvmd.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/BES_search_rxx69l.png',
    ],
    type: 'work',
    promoted: true,
    link: 'project-number-3',
  },
  {
    id: 4,
    title: 'Hey Good Looking',
    body_short:
      'An internal Drupal tool for collecting inspirational charity websites, built with a custom theme, smooth animations, infinite scroll, and a bookmarking feature.',
    body: [
      'An internal tool/website that I developed together with the design team. The website allows designers to bookmark inspirational sites that feature standout design elements and focus on the non-profit industry.',
      'The site is built on Drupal with a custom theme, using traditional tools like PHP, SCSS, and JavaScript. It includes smooth animations, an archive page with infinite scroll (using AJAX), and bookmarking functionality for saving and organizing inspiration.',
    ],
    tech: ['drupal', 'twig', 'css', 'js'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/HGL_home_cuxtk4.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/HGL_home2_kbohv8.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/HGL_site_d_zhrwvh.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/HGL_site_m_rep2wt.png',
    ],
    type: 'work',
    promoted: false,
    link: 'project-number-4',
  },
  {
    id: 5,
    title: 'Parkinsons Europe',
    body_short:
      'An informative WordPress site with a custom theme, built using PHP, SCSS, and JS. Features scalable, modular design with ACF, Gulp-optimized assets, mega-menu, custom archives, and Mailchimp integration.',
    body: [
      "An informative website that provides general information and advice to people affected by Parkinson's. This website is built with WordPress, with a custom theme developed for it.",
      'The theme is built using standard WordPress technologies – PHP, SCSS, and JavaScript. Advanced Custom Fields (ACF) were used extensively to provide scalability and maintain a modular theme structure, while also enabling a flexible content editing experience. The theme assets are compiled and optimized with Gulp. Website features include various custom archives, a responsive mega-menu, Mailchimp integration, and various third-party enhancements.',
    ],
    tech: ['wp', 'php', 'js', 'css'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/PE_hp_kz3lrb.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/PE_nav_xahxve.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/PE_search_difyml.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/PE_map_gvvrvn.png',
    ],
    type: 'work',
    promoted: false,
    link: 'project-number-5',
  },
  {
    id: 6,
    title: 'Vale Holiday Parks',
    body_short:
      'A Drupal website I helped maintain and enhance, implementing mega nav, interactive SVG map, swipers, sticky elements, and theme updates aligned with a design refresh.',
    body: [
      'I was part of the maintenance team for this Drupal website, responsible for both ongoing support and the development of new features. During this time, I was involved in building a mega navigation menu, implemented an interactive SVG map, and developed various swipers and image galleries. I also worked on adding sticky UI elements to enhance the user experience.',
      "I also played an active role in the visual refresh of the site. This included updating the theme to reflect the new design direction and ensuring consistency across the site's layout and components.",
    ],
    tech: ['drupal', 'twig', 'css', 'js'],
    img: [
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/Vale_hp_jb8kh4.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/Vale_nav_utkjc3.png',
      'https://res.cloudinary.com/dtsgbqybk/image/upload/e_colorize:15,co_rgb:212121/q_auto/f_auto/Vale_map_aipjth.png',
    ],
    type: 'work',
    promoted: false,
    link: 'project-number-6',
  },
  {
    id: 7,
    title: 'Nurse Note (wip)',
    body_short:
      'A multi-platform app that enables nurses to quickly access content, featuring a mobile app and admin dashboard built with React Native, React, Supabase, Typesense, and OAuth.',
    body: [
      'This app enables nurses to quickly access protocols for various procedures, perform drug calculations, and reference notes.',
      'The system consists of a mobile application built with React Native (Expo) and an admin dashboard developed using React and Svelte. Supabase functions as the RESTful backend for both the mobile and dashboard applications.',
      'The mobile app features instant content search powered by the Typesense search engine, custom navigation, and a content bookmarking system. The dashboard provides robust content management capabilities. Both applications implement OAuth for secure authentication.',
    ],
    tech: ['react', 'expo', 'node', 'supabase'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'personal',
    promoted: false,
    link: 'project-number-7',
  },
  {
    id: 8,
    title: 'DonStone Dashboard',
    body_short:
      'Inventory app for a headstone manufacturer featuring barcode scanning, galleries, and role-based access. Built with React, NodeJS, and MongoDB to replace paper-based processes.',
    body: [
      'An inventory management app built for a headstone manufacturer. The app is developed using React, NodeJS, and MongoDB. It features user authentication with role-based permissions, various CRUD operations, a barcode scanner, and product galleries.',
      "This app enabled the company to transition from an old-fashioned, paper-based inventory management system to a digital one. As a result, it simplified the company's operations, increased efficiency, and made employees’ jobs easier.",
    ],
    tech: ['react', 'node', 'mongodb', 'css'],
    img: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
    type: 'personal',
    promoted: false,
    link: 'project-number-8',
  },
];

export default projects;
