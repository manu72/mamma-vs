# Mamma V's Italian Restaurant

A modern, responsive website for Mamma V's, an authentic Italian fine dining restaurant in Williamstown, built with React and deployed on GitHub Pages.

## Live Demo

Visit [Mamma V's Website](https://manu72.github.io/mamma-vs)

## Features

- Responsive design that works on all devices
- Beautiful animations using Framer Motion
- Styled with styled-components
- Interactive menu featuring authentic Italian cuisine
  - Antipasti, Primi Piatti, Secondi Piatti, and Dolci sections
  - Comprehensive Italian wine list with regional selections
    - Red wines (Vini Rossi)
    - White wines (Vini Bianchi)
    - Sparkling wines (Spumanti)
- Online reservation system
- Contact form with Google Maps integration
- Newsletter subscription
- Image optimization and lazy loading with fallback images
- HashRouter implementation for GitHub Pages compatibility

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manu72/mamma-vs.git
   cd mamma-vs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
mamma-vs/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── pasta-meal-unsplash.jpg (fallback)
│   │   ├── wine-fallback.jpg
│   │   ├── menu/ (food images)
│   │   └── wines/ (wine images)
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Bookings.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── Menu.js
│   ├── styles/
│   │   ├── GlobalStyle.js
│   │   └── theme.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages
- `npm run eject` - Ejects from Create React App

## Deployment

The website is deployed using GitHub Pages. To deploy updates:

1. Ensure your changes are committed to the repository
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
3. The website will be built and deployed to the `gh-pages` branch
4. Changes will be live at the GitHub Pages URL

## Contact Information

- **Address**: 175 Nelson Place, Williamstown, VIC 3016
- **Phone**: +61 444 999 678
- **Email**: info@mammavs.com
- **Hours**:
  - Mon-Thu: 5:00 PM - 10:00 PM
  - Fri-Sat: 5:00 PM - 11:00 PM
  - Sun: 5:00 PM - 9:00 PM

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Dependencies

- React 18.2.0
- React Router DOM 6.18.0
- Styled Components 6.1.0
- Framer Motion 10.16.4
- React Icons 4.11.0
- gh-pages 6.2.0 (dev dependency)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Create React App
- React Router
- Styled Components
- Framer Motion
- React Icons
- Google Maps Embed API