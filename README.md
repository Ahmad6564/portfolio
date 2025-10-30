# Muhammad Ahmad - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience in Machine Learning, Deep Learning, Artificial Intelligence, and Embedded Systems.

![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Theme toggle with persistent dark/light mode preference
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Type-Safe**: Written in TypeScript for better development experience
- **Accessible**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📋 Sections

- **Hero**: Introduction with social links and resume download
- **About**: Professional summary and expertise areas
- **Skills**: Technical skills organized by categories
  - Machine Learning & AI
  - Programming Languages
  - Frameworks & Libraries
  - Embedded Systems
  - Database & Tools
- **Projects**: Portfolio of 11+ ML/AI and embedded systems projects
- **Education**: Academic background and certifications
- **Blog**: Link to Medium articles on ML and Deep Learning
- **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahmad6564/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ahmad6564/portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in seconds!

### Deploy to Netlify

```bash
npm run build
```

Then deploy the `out` folder to Netlify.

### Deploy to GitHub Pages

1. Update `next.config.mjs` with your repository name
2. Run `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 🎨 Customization

### Update Personal Information

- **Hero Section**: Edit `components/hero.tsx`
- **About Section**: Edit `components/about.tsx`
- **Skills**: Edit `components/skills-content.tsx`
- **Projects**: Edit `components/projects.tsx`
- **Education**: Edit `components/education.tsx`
- **Contact**: Edit `components/contact.tsx`

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title and description
- Keywords for SEO
- Open Graph tags
- Twitter card data

### Customize Theme

Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── client.tsx         # Client-side layout wrapper
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📧 Contact

- **Email**: [ahmadkhalid6564@gmail.com](mailto:ahmadkhalid6564@gmail.com)
- **LinkedIn**: [ahmad-khalid-846830201](https://www.linkedin.com/in/ahmad-khalid-846830201)
- **GitHub**: [@Ahmad6564](https://github.com/Ahmad6564)
- **Medium**: [@ahmadkhalid6564](https://medium.com/@ahmadkhalid6564)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with ❤️ by Muhammad Ahmad
