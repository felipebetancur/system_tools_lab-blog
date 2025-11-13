export const languages: Record<'en' | 'es', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'es' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    skillsContent: {
      electronic_engineer: {
        title: 'Desarrollo de prototipos electrónicos',
        description:
          'Creación de soluciones de firmware eficientes y robustas para sistemas embebidos.',
      },
    },
    projectsContent: {
      sampleProject: {
        title: 'Proyecto de Ejemplo',
        description: 'Esta es la descripción de un proyecto de ejemplo.',
        imageAltText: 'Imagen de ejemplo para el proyecto',
        categoryText: 'Aplicación Web',
        dateText: 'Enero 2025',
        detailedDescription:
          'Descripción detallada del proyecto de ejemplo...',
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Adaptable',
            description: 'Totalmente funcional en todos los dispositivos.',
          },
          contentManagement: {
            title: 'Gestión de Contenido',
            description: 'Fácil de actualizar y mantener.',
          },
        },
        galleryImages: {
          sampleGalleryImage1: {
            alt: 'Texto alternativo para la imagen de la galería 1',
            caption: 'Leyenda para la imagen 1',
          },
        },
        challenges: 'Desafíos encontrados durante el desarrollo...',
        learnings: 'Lecciones aprendidas y logros...',
      },
    },
    site: {
      title: 'SystemToolsLab',
      description:
        'Un blog sobre eBPF, sistemas embebidos y herramientas de código abierto.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Sobre el autor',
      tips: 'Ejemplos',
    },
    footer: {
      followMe: 'Sígueme en redes sociales',
      license: 'Este blog está bajo la licencia.',
    },
    homePage: {
      pageTitle: 'Inicio |  SystemToolsLab - Tutoriales y revisión de herramientas y programas open source',
      pageDescription:
        "Bienvenido a SystemToolsLab, un espacio bilingüe dedicado a tutoriales y artículos sobre eBPF, sistemas embebidos, herramientas de Linux y software open source. Aprende y domina las tecnologías que impulsan el desarrollo y la optimización del sistema.",
      heroGreeting: "Explora herramientas OpenSource",
      heroSubtitlePart1: 'Código abierto para retos profesionales.',
      heroIntroduction: "En SystemToolsLab encontrarás artículos y tutoriales sobre tecnologías como eBPF, perf, QEMU, KVM, KiCAD, FreeCAD, entre otras potentes herramientas y programas principalmente de código abierto. Contenido disponible en español e inglés para una audiencia global que busca aprender y compartir conocimiento en tecnologías abiertas.",
      heroViewWorkButton: 'Artículos',
      heroContactButton: 'Sobre el autor',
      heroImageAlt:
        'Ilustración de una caja de herramientas abierta de la que salen diversos íconos representando herramientas de desarrollo de software y hardware',
      featuredBlogTitle: 'Últimos 3 artículos',
      featuredProjectsDescription:
        "Aquí encontrarás los artículos más recientes. ¡Explóralos!",
      projectCardTitle: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen no disponible',
      mySkillsTitle: 'Mis Habilidades',
      mySkillsDescription:
        "Ingeniero electrónico y músico bajista eléctrico. Explora la experiencia y habilidades que definen mi trabajo y pasión.",
    },
    blogPage: {
      pageTitle: 'Artículos y Tutoriales | SystemToolsLab',
      pageDescription:
        "Explora artículos y tutoriales bilingües (español e inglés) sobre eBPF, sistemas embebidos, herramientas libres y programas open source. Aprende desde conceptos básicos hasta temas avanzados para desarrolladores y entusiastas tecnológicos.",
      title: 'Artículos y tutoriales técnicos',
      description:
        "Explora artículos y tutoriales sobre eBPF, herramientas libres y programas open source. Aprende desde conceptos básicos hasta temas avanzados para desarrolladores y entusiastas tecnológicos.",
      comingSoon:
        'Los artículos de blog aparecerán aquí pronto. ¡Vuelve más tarde!',
      heroImageAlt: "Imagen de portada para el artículo: ",
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'No se encontró ninguna etiqueta.',
      selectTagCommandPlaceholder: 'Buscar una etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontró ningún artículo.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: "Imagen de portada para el artículo: ",
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'Te recomiendo también:',
      readMore: 'Leer más',
      },
    toc: {
      title: "Tabla de Contenido",
    },
    contactPage: {
      pageTitle: '¡Hola! Soy Oscar Felipe Betancur Lopera',
      pageDescription:
        "Ingeniero electrónico. Me gusta explorar nuevas tecnologías y compartir mis conocimientos con la comunidad.",
      title: 'Contáctame',
      description:
        "Ingeniero Electrónico. Me gusta explorar nuevas tecnologías y compartir mis aprendizajes.",
      professionalDescription: 'Ingeniero Electrónico. Me gusta explorar nuevas tecnologías y compartir mis aprendizajes.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Características Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Desafíos Encontrados',
      learningsTitle: 'Lecciones Aprendidas',
      visitProjectButton: 'Visitar el Proyecto',
      viewCodeButton: 'Ver el Código',
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página No Encontrada',
      message:
        'Lo sentimos, la página que estás buscando no parece existir. Verifica la URL o vuelve a la página de inicio.',
      homeLink: 'Volver a la Página de Inicio',
    },

    tipsPage: {
      metaTitle: 'Consejos y ejemplos prácticos | SystemToolsLab',
      metaDescription:
        'Descubre consejos y ejemplos prácticos de uso de tecnologías abiertas.',
      description:
        'Descubre consejos y ejemplos prácticos de uso de tecnologías abiertas.',
      title: 'Últimos consejos',
      noTips: 'No hay consejos para mostrar por el momento.',
      readTip: 'Leer el consejo',
      backToList: 'Volver a la lista de consejos',
      featuredTips: 'Consejos recomendados',
      allTips: 'Todos los consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es requerido.',
      required_field_custom: 'El campo {fieldName} es requerido.',
      // String errors
      too_small_string_minimum: 'Debe contener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No debe exceder {maximum} caracteres.',
      invalid_string_email: 'Dirección de e-mail inválida.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
      // You can add more specific messages as needed
    },
  },
  en: {
    skillsContent: {
      electronic_engineer: {
        title: 'Electronic Prototyping Development',
        description:
          'Building intelligent, efficient, and robust firmware solutions for embedded systems.',
      },
    },
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a description of a sample project.',
        imageAltText: 'Sample image for the project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription: 'Detailed description of the sample project...',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'Fully functional on all devices.',
          },
          contentManagement: {
            title: 'Content Management',
            description: 'Easy to update and maintain.',
          },
        },
        galleryImages: {
          sampleGalleryImage1: {
            alt: 'Alt text for gallery image 1',
            caption: 'Caption for image 1',
          },
        },
        challenges: 'Challenges encountered during development...',
        learnings: 'Lessons learned and achievements...',
      },
    },
    site: {
      title: 'SystemToolsLab',
      description:
        'A blog about eBPF, embedded systems, and open source tools.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'About the Author',
      tips: 'Tips',
    },
    footer: {
      followMe: 'Follow me on social media',
      license: 'This blog is under the license.',
    },
    homePage: {
      pageTitle: 'Home |  SystemToolsLab - Tutorials and Reviews of Open Source Tools and Software',
      pageDescription:
        'Welcome to SystemToolsLab, a bilingual space dedicated to tutorials and articles on eBPF, embedded systems, Linux tools, and open source software. Learn and master the technologies that drive system development and optimization.',
      heroGreeting: "Explore OpenSource Tools",
      heroSubtitlePart1: 'Open source for professional challenges.',
      heroIntroduction: "At SystemToolsLab you'll find articles and tutorials on technologies like eBPF, perf, QEMU, KVM, KiCAD, FreeCAD, among other powerful tools and software primarily open source. Content available in Spanish and English for a global audience looking to learn and share knowledge on open technologies.",
      heroViewWorkButton: 'Articles',
      heroContactButton: 'About the Author',
      heroImageAlt:
        'Illustration of an open toolbox with various icons representing software and hardware development tools coming out of it',
      featuredBlogTitle: '3 latest articles',
      featuredProjectsDescription:
        "Here you will find the most recent articles. Explore them!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Electronic engineer and electric bass musician. Explore the experience and skills that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'Articles and Tutorials | SystemToolsLab',
      pageDescription:
        'Explore bilingual articles and tutorials (Spanish and English) on eBPF, embedded systems, free tools, and open source software. Learn from basic concepts to advanced topics for developers and tech enthusiasts.',
      title: 'Technical Articles and Tutorials',
      description:
        'Explore bilingual articles and tutorials (Spanish and English) on eBPF, embedded systems, free tools, and open source software. Learn from basic concepts to advanced topics for developers and tech enthusiasts.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: '¡Hello! I am Oscar Felipe Betancur Lopera',
      pageDescription:
        "Electronic Engineer. I enjoy exploring new technologies and sharing my knowledge with the community.",
      title: 'Contact Me',
      description:
        "Electronic Engineer. I enjoy exploring new technologies and sharing my learnings.",
      professionalDescription: 'Electronic Engineer. I enjoy exploring new technologies and sharing my learnings.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Practical Tips and Examples | SystemToolsLab',
      metaDescription:
        'Discover practical tips and examples on using open technologies.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
};

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
