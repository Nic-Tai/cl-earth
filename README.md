# 3D Earth Check-In

An interactive 3D globe web application where you can virtually travel the world and collect check-ins at famous landmarks!

![3D Earth Check-In](https://img.shields.io/badge/version-1.7-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Made with Three.js](https://img.shields.io/badge/made%20with-Three.js-orange)

## Features

**Interactive 3D Globe**
- Beautiful NASA satellite textures for realistic Earth visualization
- Smooth rotation and zoom controls
- Day/night cycle toggle with realistic lighting

**Virtual Travel Experience**
- 12 iconic destinations worldwide (Paris, Tokyo, New York, Sydney, and more!)
- Animated flight paths with 3D airplane model
- Real-time flight progress tracking with distance calculations

**Gamification**
- Achievement system with 8 unlockable badges
- Progress tracking across sessions (saved to LocalStorage)
- Statistics dashboard showing your travel stats

**3D Landmarks**
- Miniature 3D representations of famous landmarks
- Eiffel Tower, Statue of Liberty, Sydney Opera House, Big Ben, and more
- Preview landmarks before checking in

**Modern UI/UX**
- Glassmorphism design with smooth animations
- Collapsible panels for unobstructed globe viewing
- Responsive and mobile-friendly
- Sound effects for immersive experience

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cl-earth.git
   cd cl-earth
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server for best results:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

3. **Start exploring!**
   - Set your home city
   - Click on destination markers
   - Watch the flight animation
   - Collect achievements!

## Live Demo

Check out the live demo: [Your GitHub Pages URL]

## Tech Stack

- **Three.js** - 3D rendering and WebGL
- **GSAP** - Smooth animations
- **Web Audio API** - Procedural sound effects
- **LocalStorage** - Progress persistence
- **Pure CSS** - Glassmorphism UI (no frameworks!)

## Destinations

| City | Country | Landmark |
|------|---------|----------|
| Paris | France | Eiffel Tower |
| Tokyo | Japan | Tokyo Tower |
| New York | USA | Statue of Liberty |
| London | UK | Big Ben |
| Sydney | Australia | Opera House |
| Dubai | UAE | Burj Khalifa |
| Rio de Janeiro | Brazil | Christ the Redeemer |
| Cairo | Egypt | Pyramids |
| Rome | Italy | Colosseum |
| Beijing | China | Temple of Heaven |
| Singapore | Singapore | Marina Bay Sands |
| Moscow | Russia | St. Basil's Cathedral |

## Achievements

- **First Steps** - Complete your first check-in
- **World Traveler** - Visit 5 different destinations
- **Globe Trotter** - Visit all 12 destinations
- **Frequent Flyer** - Accumulate 10,000 km traveled
- **Jet Setter** - Accumulate 50,000 km traveled
- **Around the World** - Travel 40,075 km (Earth's circumference)
- **Early Bird** - Check in before 6 AM
- **Night Owl** - Check in after midnight

## Customization

Want to add your own destinations? Edit the `DESTINATIONS` array in `app.js`:

```javascript
{
    id: 'your-city',
    name: 'Your City',
    country: 'Country',
    lat: 0.0,      // Latitude
    lng: 0.0,      // Longitude
    landmark: 'Famous Landmark',
    icon: '🏛️'
}
```

## Contributing

Contributions are welcome! Feel free to:
- Add new destinations and landmarks
- Improve the 3D models
- Add new achievements
- Enhance the UI/UX
- Fix bugs

## License

MIT License - feel free to use this project for learning, personal projects, or commercial applications!

## Acknowledgments

- NASA Blue Marble textures for Earth imagery
- Three.js community for excellent documentation
- All contributors and users!

---

**Made with love for travelers and developers alike!**

If you enjoy this project, please give it a star and share it with your friends!
