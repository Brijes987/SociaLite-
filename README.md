# Social Media Analytics Dashboard

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A modern, responsive social media analytics dashboard built with React.js, Tailwind CSS, and Recharts. Track your social media performance across multiple platforms with beautiful visualizations and interactive features.

## 🚀 Features

- **Multi-Platform Analytics**: Track Instagram, Twitter, LinkedIn, and Facebook
- **Interactive Charts**: Line charts, bar charts, and pie charts for comprehensive data visualization
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Platform Filtering**: Filter data by specific social media platforms
- **Export Functionality**: Export dashboard as PNG or PDF
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Modern UI**: Clean, professional design with Tailwind CSS

## 📊 Dashboard Sections

- **Overview Cards**: Total followers, likes, comments, and engagement rate
- **Follower Growth**: Line chart showing growth trends over time
- **Platform Distribution**: Pie chart of followers across platforms
- **Engagement Analytics**: Weekly engagement rate visualization
- **Post Activity**: Time-based posting activity heatmap

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for React
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **html2canvas & jsPDF** - Export functionality
- **Vite** - Build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd social-media-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📱 Usage

- **Toggle Dark Mode**: Click the sun/moon icon in the header
- **Filter Platforms**: Use the platform buttons to show/hide specific social media data
- **Export Dashboard**: Click the Export button to download as PNG or PDF
- **Responsive**: The dashboard automatically adapts to different screen sizes

## 🎨 Customization

### Adding New Platforms

1. Update `src/data.json` with new platform data
2. Add platform colors and information
3. The dashboard will automatically include the new platform in charts and filters

### Modifying Charts

Charts are built with Recharts and can be easily customized in `src/components/Charts.jsx`:
- Change colors, styles, and chart types
- Add new chart components
- Modify data visualization logic

### Styling

The project uses Tailwind CSS for styling:
- Modify `tailwind.config.js` for theme customization
- Update component styles in individual component files
- Dark mode classes are automatically handled

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

This project is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.