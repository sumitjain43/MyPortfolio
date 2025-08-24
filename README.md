# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and build times
- 🎯 **SEO Friendly**: Semantic HTML structure for better search engine optimization
- 🔧 **Customizable**: Easy to customize with your own content and styling

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and professional summary
- **Skills**: Technical skills with progress bars and categories
- **Projects**: Portfolio showcase with project details and links
- **Contact**: Contact form and contact information
- **Footer**: Additional links and social media

## Technologies Used

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Emoji icons (easily replaceable with icon libraries)
- **Images**: Unsplash placeholder images (replace with your own)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Change name and tagline
- `src/components/About.jsx` - Update personal details and description
- `src/components/Contact.jsx` - Update contact information
- `src/components/Footer.jsx` - Update name and social links

### Projects

Edit the `projects` array in `src/components/Projects.jsx` to showcase your own projects:

```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    image: "path/to/your/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/yourusername/project",
    featured: true
  }
  // Add more projects...
]
```

### Skills

Modify the `skillCategories` array in `src/components/Skills.jsx` to reflect your skills:

```javascript
const skillCategories = [
  {
    title: "Your Category",
    skills: [
      { name: "Skill Name", level: 85 }
      // Add more skills...
    ]
  }
]
```

### Styling

The website uses Tailwind CSS for styling. You can:

- Modify colors by changing the color classes (e.g., `blue-600` to `purple-600`)
- Adjust spacing using Tailwind's spacing utilities
- Customize the theme in `tailwind.config.js`

### Images

Replace placeholder images with your own:

1. Add your images to the `public` folder
2. Update image paths in the components
3. For project images, you can use your own screenshots or designs

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### GitHub Pages

1. Update `vite.config.js` to include base path
2. Add deploy script to `package.json`
3. Use GitHub Actions for automatic deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

**Happy coding! 🚀**
