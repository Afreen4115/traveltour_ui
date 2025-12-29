# ✈️ Travel Tour UI

A beautiful, modern travel and tourism website built with React. This application showcases stunning travel destinations with an immersive user experience, featuring video backgrounds, smooth animations, and a responsive design.

## ✨ Features

### User Interface
- **🎥 Video Backgrounds**: Immersive video backgrounds on hero and footer sections
- **🎨 Smooth Animations**: AOS (Animate On Scroll) library for elegant page transitions
- **📱 Responsive Design**: Fully responsive layout for all devices (desktop, tablet, mobile)
- **🎯 Interactive Search**: Destination search with date picker and price range filter
- **🖼️ Destination Gallery**: Showcase of 10+ stunning travel destinations
- **🔗 Social Media Integration**: Links to social media platforms
- **📧 Newsletter Subscription**: Email subscription form in footer

### Components
- **Navigation Bar**: Responsive navbar with mobile menu toggle
- **Hero Section**: Eye-catching hero with search functionality
- **Destination Cards**: Beautiful cards displaying travel destinations with details
- **Footer**: Comprehensive footer with links, social media, and newsletter

### Travel Destinations
The application features 10+ curated travel destinations including:
- Coral Bay, Australia
- Maya Bay, Thailand
- Blue Lagoon, Iceland
- Great Barrier Reef, Australia
- Santorini Caldera, Greece
- The Dead Sea, Jordan
- Bora Bora Lagoon, French Polynesia
- Whitsunday Islands, Australia
- Halong Bay, Vietnam
- Raja Ampat, Indonesia

## 🛠️ Technologies Used

- **React 18**: Modern UI library for building user interfaces
- **React Icons**: Comprehensive icon library
- **AOS (Animate On Scroll)**: Scroll animation library
- **SCSS/CSS**: Styling with SCSS preprocessor
- **React Scripts**: Build tooling and development server
- **HTML5 Video**: Video backgrounds for immersive experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14.x or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify: `npm --version`

3. **Git** (optional, for cloning)
   - Verify: `git --version`

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Afreen4115/traveltour_ui.git
cd traveltour_ui
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`.

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📖 Usage Guide

### Navigation

- **Desktop**: Full navigation menu visible in the header
- **Mobile**: Click the hamburger menu (☰) to open mobile navigation
- **Close Menu**: Click the close icon (✕) to close mobile menu

### Search Functionality

1. **Destination Search**: 
   - Enter a destination name in the search field
   - Click the location icon for suggestions

2. **Date Selection**: 
   - Click the date field to open date picker
   - Select your preferred travel date

3. **Price Filter**: 
   - Use the range slider to set maximum price
   - Price range: $1000 - $5000

4. **More Filters**: 
   - Click "MORE FILTERS" for additional search options

### Exploring Destinations

- Scroll down to view all available destinations
- Each destination card shows:
  - Destination image
  - Location with icon
  - Grade/rating
  - Price
  - Description
  - "DETAILS" button for more information

### Newsletter Subscription

- Scroll to the footer section
- Enter your email address
- Click "SEND" to subscribe to travel updates

## 📁 Project Structure

```
traveltour_ui/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── Assets/                  # Images and videos
│   │   ├── img1.jpg - img12.jpg # Destination images
│   │   ├── sea.mp4              # Hero video background
│   │   └── sea2.mp4             # Footer video background
│   ├── Components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx       # Navigation component
│   │   │   ├── navbar.scss      # Navbar styles
│   │   │   └── navbar.css       # Compiled CSS
│   │   ├── Home/
│   │   │   ├── Home.jsx         # Hero section component
│   │   │   ├── home.scss        # Home styles
│   │   │   └── home.css         # Compiled CSS
│   │   ├── Main/
│   │   │   ├── Main.jsx         # Destinations component
│   │   │   ├── main.scss        # Main styles
│   │   │   └── main.css         # Compiled CSS
│   │   └── Footer/
│   │       ├── Footer.jsx      # Footer component
│   │       ├── footer.scss      # Footer styles
│   │       └── footer.css      # Compiled CSS
│   ├── App.js                   # Main App component
│   ├── App.css                  # App styles
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🏗️ Architecture

### Component Structure

```
App
├── Navbar
│   └── Navigation menu with mobile toggle
├── Home
│   ├── Video background
│   ├── Search form (destination, date, price)
│   └── Social media icons
├── Main
│   └── Destination cards grid
└── Footer
    ├── Video background
    ├── Newsletter subscription
    ├── Footer links
    └── Social media links
```

### Key Features Implementation

- **AOS Animations**: Applied to various elements for scroll-triggered animations
- **Responsive Navigation**: State-based mobile menu toggle
- **Video Backgrounds**: HTML5 video elements with autoplay and loop
- **Dynamic Content**: Destination data stored in component state

## 🎨 Styling

The project uses **SCSS** for styling with the following structure:

- **Component-specific styles**: Each component has its own SCSS file
- **Global styles**: App.css and index.css for global styles
- **Responsive design**: Media queries for mobile, tablet, and desktop
- **Flexbox/Grid**: Modern CSS layout techniques

### Color Scheme

- Primary: Blue tones (#6482AD and similar)
- Background: Light colors with video overlays
- Text: Dark colors for readability
- Accents: Various colors for icons and buttons

## 🔧 Configuration

### Changing Port

To run on a different port:

```bash
PORT=3001 npm start
```

Or create a `.env` file:
```
PORT=3001
```

### Customizing Destinations

Edit `src/Components/Main/Main.jsx` to modify destination data:

```javascript
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destinationTitle: "Your Destination",
    location: "Country",
    grade: "CULTURAL RELAX",
    fees: '$1500',
    description: "Your description here"
  },
  // Add more destinations...
];
```

### Modifying Videos

Replace video files in `src/Assets/`:
- `sea.mp4` - Hero section video
- `sea2.mp4` - Footer section video

Update imports in respective components:
```javascript
import sea from '../../Assets/your-video.mp4';
```

### Animation Settings

Modify AOS initialization in components:

```javascript
useEffect(() => {
  Aos.init({ 
    duration: 2000,  // Animation duration
    offset: 100,     // Offset trigger point
    easing: 'ease'  // Easing function
  })
}, [])
```

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

The build folder will contain optimized production files ready for deployment.

### Preview Production Build

```bash
npm run build
npx serve -s build
```

## 🚀 Deployment

### Deploy to Vercel

The application is already deployed at: [https://traveltour-ui-eta.vercel.app/](https://traveltour-ui-eta.vercel.app/)

**Steps to deploy:**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install ## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Afreen**
- GitHub: [@Afreen4115](https://github.com/Afreen4115)--save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/traveltour_ui",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Videos Not Playing
**Issue**: Video backgrounds not displaying

**Solutions**:
- Ensure video files are in `src/Assets/` directory
- Check video file paths in component imports
- Verify video file formats (MP4 recommended)
- Check browser console for errors

#### 2. Animations Not Working
**Issue**: AOS animations not triggering

**Solutions**:
- Ensure AOS is initialized in components: `Aos.init()`
- Check that AOS CSS is imported: `import 'aos/dist/aos.css'`
- Verify AOS is installed: `npm install aos`
- Check browser console for errors

#### 3. Icons Not Displaying
**Issue**: React Icons not showing

**Solutions**:
- Verify react-icons is installed: `npm install react-icons`
- Check icon imports are correct
- Ensure icon components are properly rendered

#### 4. Styles Not Applying
**Issue**: SCSS styles not working

**Solutions**:
- Ensure SCSS files are compiled to CSS
- Check CSS imports in components
- Verify node-sass or sass is installed
- Clear browser cache

#### 5. Build Errors
**Issue**: Production build fails

**Solutions**:
- Check for console errors
- Ensure all dependencies are installed
- Verify all file paths are correct
- Check for missing assets

#### 6. Mobile Menu Not Working
**Issue**: Mobile navigation not toggling

**Solutions**:
- Check state management in Navbar component
- Verify click handlers are properly attached
- Check CSS classes for active state
- Test in browser dev tools

## 🔒 Performance Optimization

### Current Optimizations
- React production build
- Optimized images
- Video autoplay with muted attribute
- Lazy loading for images (can be added)

### Recommended Improvements
- [ ] Image optimization and lazy loading
- [ ] Video compression
- [ ] Code splitting
- [ ] Service worker for offline support
- [ ] CDN for assets
- [ ] Gzip compression
- [ ] Minify CSS and JavaScript

## 🚧 Future Enhancements

Potential improvements for the project:

- [ ] Backend API integration for dynamic destinations
- [ ] User authentication and profiles
- [ ] Booking functionality
- [ ] Payment integration
- [ ] Real-time search with autocomplete
- [ ] Destination detail pages
- [ ] User reviews and ratings
- [ ] Travel blog section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Map integration
- [ ] Weather information
- [ ] Travel guides and tips
- [ ] Social sharing functionality
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA) features

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

The application is optimized for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test on multiple browsers
- Maintain consistent code style

## 📝 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (irreversible)
```


## 🙏 Acknowledgments

- [React](https://react.dev/) for the amazing UI library
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [AOS Library](https://michalsnik.github.io/aos/) for scroll animations
- [Vercel](https://vercel.com/) for hosting
- Contributors and users of this project

## 🔗 Live Demo

🌐 **Live Website**: [https://traveltour-ui-eta.vercel.app/](https://traveltour-ui-eta.vercel.app/)

## 📞 Support

For support, create an issue in the repository or contact the maintainer.

## 🔗 Useful Links

- [React Documentation](https://react.dev/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [AOS Documentation](https://michalsnik.github.io/aos/)
- [Create React App Documentation](https://create-react-app.dev/)
- [SCSS Documentation](https://sass-lang.com/documentation)

---

**Happy Travels! ✈️🌍✨**
