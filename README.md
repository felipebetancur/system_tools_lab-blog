# 🛠️ SystemToolsLab

> Bilingual technical blog exploring eBPF, embedded systems, Linux performance tools, and open source software.


## 🌟 About

SystemToolsLab is a bilingual (Spanish/English) platform dedicated to sharing knowledge about:

- **eBPF & Observability**: Deep dives into extended Berkeley Packet Filter for system monitoring and security
- **Linux Performance Tools**: Tutorials on perf, BCC, bpftrace, and other system analysis tools
- **Embedded Systems**: Development with QEMU, KVM, and firmware engineering
- **Open Source Tools**: Guides for KiCAD, FreeCAD, and other powerful open source software

Content is available in both Spanish and English to reach a global audience of developers and tech enthusiasts.

## 🚀 Features

- ✨ **Bilingual Content**: Full i18n support with Spanish and English
- 📱 **Responsive Design**: Optimized for all devices
- 🌙 **Dark Mode**: Automatic theme switching
- ⚡ **Fast Performance**: Built with Astro for optimal speed
- 📊 **Reading Time**: Estimated reading time for each article
- 🏷️ **Tag Filtering**: Easy content discovery by topics
- 🔍 **Search**: Quick article search functionality
- 📝 **MDX Support**: Rich content with embedded React components
- 🎨 **Syntax Highlighting**: Beautiful code blocks with Shiki
- 📈 **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.8.1
- **UI Library**: [React](https://react.dev) 19.0.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.0.0
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Content**: MDX with custom components
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)
- **Language**: TypeScript

## 📁 Project Structure
```
/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn/ui components
│   ├── content/        # Blog posts and tips (Astro Content Collections)
│   ├── features/       # Feature-based modules
│   │   ├── blog/      # Blog-specific components and layouts
│   │   ├── tips/      # Tips section
│   │   └── contact/   # Contact page
│   ├── i18n/          # Internationalization
│   │   └── ui.ts      # Translation strings
│   ├── layouts/       # Page layouts
│   ├── lib/           # Utilities and helpers
│   ├── pages/         # File-based routing
│   │   ├── blog/      # Blog pages (ES)
│   │   ├── tips/      # Tips pages (ES)
│   │   └── en/        # English pages
│   └── styles/        # Global styles
├── astro.config.mjs   # Astro configuration
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tu-usuario/systemtoolslab-blog.git
cd systemtoolslab-blog
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 📝 Creating Content

### Adding a Blog Post

1. Create a new `.mdx` file in `src/features/blog/content/es/` or `src/features/blog/content/en/`

2. Add frontmatter:
```mdx
---
lang: 'es'
title: 'Your Article Title'
description: 'Brief description'
pubDate: 2025-01-15
heroImage:
  url: '../../../../assets/your-image.png'
  alt: 'Image description'
tags: ['eBPF', 'Linux', 'Tutorial']
difficulty: 'beginner'
isDraft: false
featured: true
---

Your content here...
```

### Adding a Tip

Create a new file in `src/features/tips/content/es/` or `src/features/tips/content/en/` with similar frontmatter.

## 🌍 Internationalization

The blog supports Spanish (default) and English. Translations are managed in `src/i18n/ui.ts`.

To add a new translation:
```typescript
export const ui = {
  es: {
    yourFeature: {
      key: 'Texto en español',
    }
  },
  en: {
    yourFeature: {
      key: 'Text in English',
    }
  }
}
```

## 🎨 Customization

### Colors and Theme

Modify `src/styles/globals.css` to customize the color scheme:
```css
@layer base {
  :root {
    --primary: your-color;
    /* ... */
  }
}
```

### Components

UI components are based on shadcn/ui and located in `src/components/ui/`. Customize them as needed.

## 📦 Deployment

The blog is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

Other deployment options: Netlify, Cloudflare Pages, or any static hosting service.

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a suggestion:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Oscar Felipe Betancur Lopera**

- Website: [systemtoolslab.com](https://tu-sitio.com)
- GitHub: [@FelipeBetancur](https://github.com/FelipeBetancur)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/tu-usuario)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Inspired by the open source community

## 📧 Contact

Questions or feedback? Feel free to [open an issue](https://github.com/tu-usuario/systemtoolslab-blog/issues) or reach out!

---

⭐ If you find this project useful, please consider giving it a star on GitHub!