// ============================================
// 3D Earth Check-in Application
// ============================================

// ============================================
// Data: Destinations with coordinates and landmarks
// ============================================
const DESTINATIONS = [
    {
        id: 'paris',
        name: 'Paris',
        country: 'France',
        icon: '🗼',
        lat: 48.8566,
        lng: 2.3522,
        description: 'The City of Light, home to the iconic Eiffel Tower, world-class museums, and romantic boulevards.',
        landmark: 'Eiffel Tower',
        landmarkColor: 0xc9a227,
        checkedIn: false
    },
    {
        id: 'newyork',
        name: 'New York',
        country: 'USA',
        icon: '🗽',
        lat: 40.7128,
        lng: -74.0060,
        description: 'The Big Apple - a global hub of finance, culture, and entertainment with the famous Statue of Liberty.',
        landmark: 'Statue of Liberty',
        landmarkColor: 0x4a9b7f,
        checkedIn: false
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        country: 'Japan',
        icon: '🏯',
        lat: 35.6762,
        lng: 139.6503,
        description: 'A fascinating blend of ultra-modern and traditional, from neon-lit skyscrapers to historic temples.',
        landmark: 'Tokyo Tower',
        landmarkColor: 0xff4444,
        checkedIn: false
    },
    {
        id: 'dubai',
        name: 'Dubai',
        country: 'UAE',
        icon: '🏗️',
        lat: 25.2048,
        lng: 55.2708,
        description: 'A futuristic city rising from the desert, featuring the world\'s tallest building - Burj Khalifa.',
        landmark: 'Burj Khalifa',
        landmarkColor: 0x4fc3f7,
        checkedIn: false
    },
    {
        id: 'sydney',
        name: 'Sydney',
        country: 'Australia',
        icon: '🏛️',
        lat: -33.8688,
        lng: 151.2093,
        description: 'Australia\'s largest city, famous for its stunning harbor and the iconic Opera House.',
        landmark: 'Sydney Opera House',
        landmarkColor: 0xffffff,
        checkedIn: false
    },
    {
        id: 'rio',
        name: 'Rio de Janeiro',
        country: 'Brazil',
        icon: '🗿',
        lat: -22.9068,
        lng: -43.1729,
        description: 'The Marvelous City, known for Christ the Redeemer, beautiful beaches, and vibrant carnival.',
        landmark: 'Christ the Redeemer',
        landmarkColor: 0xe0e0e0,
        checkedIn: false
    },
    {
        id: 'rome',
        name: 'Rome',
        country: 'Italy',
        icon: '🏛️',
        lat: 41.9028,
        lng: 12.4964,
        description: 'The Eternal City, an open-air museum of ancient history with the magnificent Colosseum.',
        landmark: 'Colosseum',
        landmarkColor: 0xd4a373,
        checkedIn: false
    },
    {
        id: 'cairo',
        name: 'Cairo',
        country: 'Egypt',
        icon: '🔺',
        lat: 30.0444,
        lng: 31.2357,
        description: 'Gateway to the ancient world, home to the Great Pyramids and the Sphinx.',
        landmark: 'Great Pyramid',
        landmarkColor: 0xe6c86e,
        checkedIn: false
    },
    {
        id: 'london',
        name: 'London',
        country: 'UK',
        icon: '🏰',
        lat: 51.5074,
        lng: -0.1278,
        description: 'A global cultural capital with Big Ben, royal palaces, and centuries of history.',
        landmark: 'Big Ben',
        landmarkColor: 0xbfa76f,
        checkedIn: false
    },
    {
        id: 'beijing',
        name: 'Beijing',
        country: 'China',
        icon: '🏯',
        lat: 39.9042,
        lng: 116.4074,
        description: 'China\'s capital, featuring the Great Wall and the magnificent Forbidden City.',
        landmark: 'Great Wall',
        landmarkColor: 0x8b7355,
        checkedIn: false
    },
    {
        id: 'mumbai',
        name: 'Mumbai',
        country: 'India',
        icon: '🌆',
        lat: 19.0760,
        lng: 72.8777,
        description: 'India\'s city of dreams, featuring the historic Gateway of India.',
        landmark: 'Gateway of India',
        landmarkColor: 0xd4a373,
        checkedIn: false
    },
    {
        id: 'singapore',
        name: 'Singapore',
        country: 'Singapore',
        icon: '🦁',
        lat: 1.3521,
        lng: 103.8198,
        description: 'A futuristic city-state known for the stunning Marina Bay Sands.',
        landmark: 'Marina Bay Sands',
        landmarkColor: 0x90caf9,
        checkedIn: false
    }
];

const HOME_CITIES = [
    { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060 },
    { name: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437 },
    { name: 'Chicago', country: 'USA', lat: 41.8781, lng: -87.6298 },
    { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
    { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
    { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
    { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074 },
    { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
    { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777 },
    { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
    { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
    { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
    { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332 }
];

// ============================================
// Achievements Data
// ============================================
const ACHIEVEMENTS = [
    { id: 'first_flight', icon: '✈️', name: 'First Flight', description: 'Complete your first check-in', condition: (stats) => stats.visited >= 1 },
    { id: 'explorer', icon: '🧭', name: 'Explorer', description: 'Visit 3 destinations', condition: (stats) => stats.visited >= 3 },
    { id: 'globetrotter', icon: '🌍', name: 'Globetrotter', description: 'Visit 6 destinations', condition: (stats) => stats.visited >= 6 },
    { id: 'world_traveler', icon: '🏆', name: 'World Traveler', description: 'Visit all 12 destinations', condition: (stats) => stats.visited >= 12 },
    { id: 'long_haul', icon: '🛫', name: 'Long Haul', description: 'Travel over 10,000 km', condition: (stats) => stats.distance >= 10000 },
    { id: 'jet_setter', icon: '💎', name: 'Jet Setter', description: 'Travel over 50,000 km', condition: (stats) => stats.distance >= 50000 },
    { id: 'continent_hopper', icon: '🗺️', name: 'Continent Hopper', description: 'Visit 4 continents', condition: (stats) => stats.continents >= 4 },
    { id: 'around_the_world', icon: '🌐', name: 'Around the World', description: 'Visit all 6 continents', condition: (stats) => stats.continents >= 6 }
];

// Continent mapping for destinations
const CONTINENT_MAP = {
    'paris': 'Europe', 'london': 'Europe', 'rome': 'Europe',
    'newyork': 'North America',
    'tokyo': 'Asia', 'dubai': 'Asia', 'beijing': 'Asia', 'mumbai': 'Asia', 'singapore': 'Asia',
    'sydney': 'Oceania',
    'rio': 'South America',
    'cairo': 'Africa'
};

// ============================================
// Global Variables
// ============================================
let scene, camera, renderer, controls;
let earth, clouds, atmosphere;
let markers = [];
let landmarks = {};
let selectedHome = null;
let isAnimating = false;
let flightPath = null;
let airplane = null;
let totalDistance = 0;
let unlockedAchievements = new Set();

// ============================================
// Utility Functions
// ============================================
function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c);
}

// ============================================
// Airplane Model Creation
// ============================================
function createAirplane() {
    const group = new THREE.Group();

    // Fuselage
    const fuselageGeometry = new THREE.CylinderGeometry(0.015, 0.012, 0.12, 8);
    const fuselageMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial);
    fuselage.rotation.z = Math.PI / 2;
    group.add(fuselage);

    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(0.012, 0.03, 8);
    const nose = new THREE.Mesh(noseGeometry, fuselageMaterial);
    nose.rotation.z = -Math.PI / 2;
    nose.position.x = 0.075;
    group.add(nose);

    // Main wings
    const wingGeometry = new THREE.BoxGeometry(0.02, 0.003, 0.1);
    const wingMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.position.x = -0.01;
    group.add(wings);

    // Tail wing (horizontal)
    const tailWingGeometry = new THREE.BoxGeometry(0.01, 0.002, 0.04);
    const tailWing = new THREE.Mesh(tailWingGeometry, wingMaterial);
    tailWing.position.x = -0.055;
    group.add(tailWing);

    // Tail fin (vertical)
    const tailFinGeometry = new THREE.BoxGeometry(0.015, 0.025, 0.002);
    const tailFin = new THREE.Mesh(tailFinGeometry, wingMaterial);
    tailFin.position.set(-0.05, 0.012, 0);
    group.add(tailFin);

    // Engines (2)
    const engineGeometry = new THREE.CylinderGeometry(0.006, 0.006, 0.025, 8);
    const engineMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });

    const engine1 = new THREE.Mesh(engineGeometry, engineMaterial);
    engine1.rotation.z = Math.PI / 2;
    engine1.position.set(0.01, -0.01, 0.03);
    group.add(engine1);

    const engine2 = new THREE.Mesh(engineGeometry, engineMaterial);
    engine2.rotation.z = Math.PI / 2;
    engine2.position.set(0.01, -0.01, -0.03);
    group.add(engine2);

    // Contrail particles (optional visual effect)
    const contrailGeometry = new THREE.SphereGeometry(0.004, 4, 4);
    const contrailMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });

    for (let i = 0; i < 3; i++) {
        const contrail = new THREE.Mesh(contrailGeometry, contrailMaterial.clone());
        contrail.position.x = -0.08 - i * 0.015;
        contrail.scale.setScalar(1 - i * 0.2);
        contrail.material.opacity = 0.5 - i * 0.15;
        group.add(contrail);
    }

    group.scale.setScalar(1.5);
    return group;
}

// ============================================
// Flight Path Arc Creation
// ============================================
function createFlightPath(startLat, startLng, endLat, endLng) {
    // Remove existing flight path
    if (flightPath) {
        scene.remove(flightPath);
        flightPath = null;
    }

    const startPos = latLngToVector3(startLat, startLng, 1.55);
    const endPos = latLngToVector3(endLat, endLng, 1.55);

    // Calculate midpoint and raise it for arc effect
    const midPoint = new THREE.Vector3()
        .addVectors(startPos, endPos)
        .multiplyScalar(0.5);

    // Calculate arc height based on distance
    const distance = startPos.distanceTo(endPos);
    const arcHeight = 1.55 + distance * 0.3; // Higher arc for longer distances
    midPoint.normalize().multiplyScalar(arcHeight);

    // Create quadratic bezier curve
    const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    const points = curve.getPoints(100);

    // Create line geometry
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create gradient line with dashes
    const material = new THREE.LineDashedMaterial({
        color: 0x00d4ff,
        dashSize: 0.03,
        gapSize: 0.015,
        transparent: true,
        opacity: 0.8
    });

    flightPath = new THREE.Line(geometry, material);
    flightPath.computeLineDistances(); // Required for dashed lines
    scene.add(flightPath);

    // Store the curve for airplane animation
    flightPath.curve = curve;

    return curve;
}

function removeFlightPath() {
    if (flightPath) {
        scene.remove(flightPath);
        flightPath = null;
    }
    if (airplane) {
        scene.remove(airplane);
        airplane = null;
    }
}

// ============================================
// Progress Tracker
// ============================================
function updateProgressTracker() {
    const visitedCount = DESTINATIONS.filter(d => d.checkedIn).length;
    const totalCount = DESTINATIONS.length;
    const percentage = (visitedCount / totalCount) * 100;

    document.getElementById('visited-count').textContent = visitedCount;
    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('visited-progress-bar').style.width = `${percentage}%`;

    // Update message based on progress
    let message = 'Start your journey!';
    if (visitedCount === 1) {
        message = 'Great start! Keep exploring!';
    } else if (visitedCount >= 2 && visitedCount < 5) {
        message = 'You\'re on a roll!';
    } else if (visitedCount >= 5 && visitedCount < 8) {
        message = 'Halfway there! Amazing!';
    } else if (visitedCount >= 8 && visitedCount < 11) {
        message = 'Almost a world traveler!';
    } else if (visitedCount === 11) {
        message = 'One more to go!';
    } else if (visitedCount === totalCount) {
        message = '🎉 World Explorer Complete!';
    }

    document.getElementById('progress-message').textContent = message;
}

// ============================================
// Stats Dashboard
// ============================================
function getStats() {
    const visited = DESTINATIONS.filter(d => d.checkedIn);
    const visitedCount = visited.length;
    const countries = new Set(visited.map(d => d.country)).size;
    const continents = new Set(visited.map(d => CONTINENT_MAP[d.id])).size;

    return {
        visited: visitedCount,
        distance: totalDistance,
        countries: countries,
        continents: continents
    };
}

function updateStatsDashboard() {
    const stats = getStats();

    // Format distance with K/M suffix
    let distanceStr;
    if (stats.distance >= 1000000) {
        distanceStr = (stats.distance / 1000000).toFixed(1) + 'M';
    } else if (stats.distance >= 1000) {
        distanceStr = (stats.distance / 1000).toFixed(1) + 'K';
    } else {
        distanceStr = stats.distance.toString();
    }

    document.getElementById('total-distance-stat').textContent = distanceStr;
    document.getElementById('countries-stat').textContent = stats.countries;
    document.getElementById('continents-stat').textContent = stats.continents;
}

// ============================================
// Achievements System
// ============================================
function initAchievements() {
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = '';

    ACHIEVEMENTS.forEach(achievement => {
        const badge = document.createElement('div');
        badge.className = 'badge locked';
        badge.id = `badge-${achievement.id}`;
        badge.innerHTML = achievement.icon;
        badge.setAttribute('data-tooltip', `${achievement.name}: ${achievement.description}`);
        badgesGrid.appendChild(badge);
    });

    updateBadgesCount();
}

function checkAchievements() {
    const stats = getStats();
    const newlyUnlocked = [];

    ACHIEVEMENTS.forEach(achievement => {
        if (!unlockedAchievements.has(achievement.id) && achievement.condition(stats)) {
            unlockedAchievements.add(achievement.id);
            newlyUnlocked.push(achievement);

            // Update badge UI
            const badge = document.getElementById(`badge-${achievement.id}`);
            if (badge) {
                badge.classList.remove('locked');
                badge.classList.add('unlocked');
            }
        }
    });

    // Show notification for new achievements
    if (newlyUnlocked.length > 0) {
        showAchievementNotification(newlyUnlocked[0]);
    }

    updateBadgesCount();
    saveProgress();
}

function updateBadgesCount() {
    const count = unlockedAchievements.size;
    document.getElementById('badges-count').textContent = `${count}/${ACHIEVEMENTS.length}`;
}

function showAchievementNotification(achievement) {
    // Remove any existing notification
    const existing = document.querySelector('.badge-notification');
    if (existing) existing.remove();

    // Play achievement sound
    playSound('achievement');

    const notification = document.createElement('div');
    notification.className = 'badge-notification';
    notification.innerHTML = `
        <div class="badge-icon">${achievement.icon}</div>
        <h3>Achievement Unlocked!</h3>
        <p><strong>${achievement.name}</strong><br>${achievement.description}</p>
        <button class="btn btn-primary" onclick="this.parentElement.remove()">Awesome!</button>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ============================================
// LocalStorage - Save/Load Progress
// ============================================
function saveProgress() {
    const saveData = {
        version: '1.4',
        checkedIn: DESTINATIONS.filter(d => d.checkedIn).map(d => d.id),
        totalDistance: totalDistance,
        unlockedAchievements: Array.from(unlockedAchievements),
        selectedHome: selectedHome
    };

    try {
        localStorage.setItem('earthExplorerProgress', JSON.stringify(saveData));
    } catch (e) {
        console.warn('Could not save progress to localStorage:', e);
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('earthExplorerProgress');
        if (!saved) return false;

        const saveData = JSON.parse(saved);

        // Restore checked-in destinations
        if (saveData.checkedIn) {
            saveData.checkedIn.forEach(id => {
                const dest = DESTINATIONS.find(d => d.id === id);
                if (dest) {
                    dest.checkedIn = true;
                }
            });
        }

        // Restore total distance
        if (saveData.totalDistance) {
            totalDistance = saveData.totalDistance;
        }

        // Restore achievements
        if (saveData.unlockedAchievements) {
            unlockedAchievements = new Set(saveData.unlockedAchievements);
        }

        // Restore selected home
        if (saveData.selectedHome) {
            selectedHome = saveData.selectedHome;
        }

        return true;
    } catch (e) {
        console.warn('Could not load progress from localStorage:', e);
        return false;
    }
}

function applyLoadedProgress() {
    // Update UI for checked-in destinations
    DESTINATIONS.forEach(dest => {
        if (dest.checkedIn && dest.cardElement) {
            dest.cardElement.classList.add('checked-in');
            dest.cardElement.querySelector('.destination-status').textContent = '✓ Visited';

            // Show landmarks
            if (landmarks[dest.id]) {
                landmarks[dest.id].visible = true;
            }
        }
    });

    // Update home selection UI
    if (selectedHome) {
        const homeSelect = document.getElementById('home-select');
        const options = Array.from(homeSelect.options);
        const matchingOption = options.find(opt => {
            if (!opt.value) return false;
            const city = JSON.parse(opt.value);
            return city.name === selectedHome.name;
        });
        if (matchingOption) {
            homeSelect.value = matchingOption.value;
            const homeInfo = document.getElementById('home-info');
            homeInfo.innerHTML = `<strong>${selectedHome.name}</strong><br>Ready to explore the world!`;
            homeInfo.classList.remove('hidden');
        }
    }

    // Update progress tracker
    updateProgressTracker();

    // Update stats dashboard
    updateStatsDashboard();

    // Update achievements UI
    ACHIEVEMENTS.forEach(achievement => {
        if (unlockedAchievements.has(achievement.id)) {
            const badge = document.getElementById(`badge-${achievement.id}`);
            if (badge) {
                badge.classList.remove('locked');
                badge.classList.add('unlocked');
            }
        }
    });
    updateBadgesCount();
}

// ============================================
// Three.js Scene Setup
// ============================================
function initScene() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    document.getElementById('earth-container').appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.minDistance = 2.5;
    controls.maxDistance = 10;
    controls.enablePan = false;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0x4fc3f7, 0.3);
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    // Handle resize
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// Earth Creation
// ============================================
function createEarth() {
    const textureLoader = new THREE.TextureLoader();

    // Earth geometry - higher poly count for smoother sphere
    const earthGeometry = new THREE.SphereGeometry(1.5, 128, 128);

    // Texture URLs from reliable CDN sources (Solar System Scope - free for non-commercial use)
    const TEXTURE_BASE = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/';

    // Alternative high-quality textures from Solar System Scope
    const EARTH_TEXTURES = {
        map: 'https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg',
        bumpMap: 'https://unpkg.com/three-globe@2.24.13/example/img/earth-topology.png',
        specularMap: TEXTURE_BASE + 'earth_specular_2048.jpg',
        cloudsMap: 'https://unpkg.com/three-globe@2.24.13/example/img/earth-clouds.png',
        nightMap: 'https://unpkg.com/three-globe@2.24.13/example/img/earth-night.jpg'
    };

    // Create loading manager to track progress
    const loadingManager = new THREE.LoadingManager();
    const textureLoaderManaged = new THREE.TextureLoader(loadingManager);

    // Load Earth day texture (Blue Marble)
    const earthTexture = textureLoaderManaged.load(EARTH_TEXTURES.map);
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    // Load bump map for terrain elevation
    const bumpTexture = textureLoaderManaged.load(EARTH_TEXTURES.bumpMap);

    // Load specular map for ocean reflections
    const specularTexture = textureLoaderManaged.load(EARTH_TEXTURES.specularMap);

    // Create Earth material with all textures
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.015,
        specularMap: specularTexture,
        specular: new THREE.Color(0x333333),
        shininess: 15
    });

    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Clouds layer with real cloud texture
    const cloudsGeometry = new THREE.SphereGeometry(1.52, 64, 64);
    const cloudsTexture = textureLoaderManaged.load(EARTH_TEXTURES.cloudsMap);

    const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
        opacity: 0.35,
        depthWrite: false
    });

    clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    scene.add(clouds);

    // Night lights layer (visible on dark side)
    const nightGeometry = new THREE.SphereGeometry(1.501, 64, 64);
    const nightTexture = textureLoaderManaged.load(EARTH_TEXTURES.nightMap);
    nightTexture.colorSpace = THREE.SRGBColorSpace;

    const nightMaterial = new THREE.MeshBasicMaterial({
        map: nightTexture,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
    });

    const nightEarth = new THREE.Mesh(nightGeometry, nightMaterial);
    earth.add(nightEarth); // Add as child so it rotates with Earth

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.7, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true
    });

    atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
}

// ============================================
// Landmark Creation Functions
// ============================================
function createEiffelTower(position, scale = 0.08) {
    const group = new THREE.Group();

    // Tower base legs
    const legGeometry = new THREE.ConeGeometry(0.3, 1.5, 4);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0xc9a227 });

    // Four legs
    for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        const angle = (i * Math.PI / 2) + Math.PI / 4;
        leg.position.set(Math.cos(angle) * 0.3, 0.75, Math.sin(angle) * 0.3);
        leg.rotation.x = (i < 2 ? 0.2 : -0.2);
        leg.rotation.z = (i === 0 || i === 3 ? 0.2 : -0.2);
        group.add(leg);
    }

    // Middle section
    const middleGeometry = new THREE.CylinderGeometry(0.15, 0.25, 0.8, 4);
    const middle = new THREE.Mesh(middleGeometry, legMaterial);
    middle.position.y = 1.7;
    group.add(middle);

    // Top spire
    const spireGeometry = new THREE.ConeGeometry(0.08, 0.8, 4);
    const spire = new THREE.Mesh(spireGeometry, legMaterial);
    spire.position.y = 2.5;
    group.add(spire);

    // Platform rings
    const ringGeometry = new THREE.TorusGeometry(0.35, 0.02, 8, 4);
    const ring1 = new THREE.Mesh(ringGeometry, legMaterial);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 1.4;
    group.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.02, 8, 4), legMaterial);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = 2.0;
    group.add(ring2);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createStatueOfLiberty(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0x4a9b7f });

    // Pedestal
    const pedestalGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.6);
    const pedestal = new THREE.Mesh(pedestalGeometry, new THREE.MeshPhongMaterial({ color: 0x808080 }));
    pedestal.position.y = 0.4;
    group.add(pedestal);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.15, 0.25, 1.2, 8);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1.4;
    group.add(body);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const head = new THREE.Mesh(headGeometry, material);
    head.position.y = 2.1;
    group.add(head);

    // Crown
    const crownGeometry = new THREE.CylinderGeometry(0.18, 0.15, 0.15, 7);
    const crown = new THREE.Mesh(crownGeometry, material);
    crown.position.y = 2.3;
    group.add(crown);

    // Crown spikes
    for (let i = 0; i < 7; i++) {
        const spikeGeometry = new THREE.ConeGeometry(0.02, 0.15, 4);
        const spike = new THREE.Mesh(spikeGeometry, material);
        const angle = (i / 7) * Math.PI * 2;
        spike.position.set(Math.cos(angle) * 0.15, 2.45, Math.sin(angle) * 0.15);
        group.add(spike);
    }

    // Torch arm
    const armGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 6);
    const arm = new THREE.Mesh(armGeometry, material);
    arm.position.set(0.25, 2.3, 0);
    arm.rotation.z = -0.8;
    group.add(arm);

    // Torch
    const torchGeometry = new THREE.CylinderGeometry(0.06, 0.04, 0.15, 6);
    const torch = new THREE.Mesh(torchGeometry, new THREE.MeshPhongMaterial({ color: 0xffd700 }));
    torch.position.set(0.45, 2.6, 0);
    group.add(torch);

    // Flame
    const flameGeometry = new THREE.ConeGeometry(0.05, 0.15, 6);
    const flame = new THREE.Mesh(flameGeometry, new THREE.MeshPhongMaterial({
        color: 0xff6600,
        emissive: 0xff3300,
        emissiveIntensity: 0.5
    }));
    flame.position.set(0.45, 2.75, 0);
    group.add(flame);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createTokyoTower(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xff4444 });
    const whiteMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

    // Main structure - alternating red and white
    for (let i = 0; i < 8; i++) {
        const segmentGeometry = new THREE.CylinderGeometry(0.15 - i * 0.015, 0.18 - i * 0.015, 0.35, 4);
        const segment = new THREE.Mesh(segmentGeometry, i % 2 === 0 ? material : whiteMaterial);
        segment.position.y = 0.2 + i * 0.35;
        group.add(segment);
    }

    // Top antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.03, 0.5, 6);
    const antenna = new THREE.Mesh(antennaGeometry, whiteMaterial);
    antenna.position.y = 3.2;
    group.add(antenna);

    // Observation deck
    const deckGeometry = new THREE.CylinderGeometry(0.2, 0.18, 0.1, 8);
    const deck = new THREE.Mesh(deckGeometry, material);
    deck.position.y = 2.0;
    group.add(deck);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createBurjKhalifa(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0x4fc3f7, metalness: 0.8 });

    // Main tower - tapered design
    for (let i = 0; i < 12; i++) {
        const radius = 0.25 - i * 0.018;
        const height = 0.3;
        const segmentGeometry = new THREE.CylinderGeometry(radius * 0.8, radius, height, 6);
        const segment = new THREE.Mesh(segmentGeometry, material);
        segment.position.y = i * height + height / 2;
        group.add(segment);
    }

    // Spire
    const spireGeometry = new THREE.ConeGeometry(0.03, 0.8, 6);
    const spire = new THREE.Mesh(spireGeometry, material);
    spire.position.y = 4.0;
    group.add(spire);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createSydneyOpera(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

    // Base platform
    const baseGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
    const base = new THREE.Mesh(baseGeometry, new THREE.MeshPhongMaterial({ color: 0x808080 }));
    group.add(base);

    // Sail shells
    for (let i = 0; i < 4; i++) {
        const shellGeometry = new THREE.SphereGeometry(0.4, 16, 16, 0, Math.PI * 0.6, 0, Math.PI * 0.5);
        const shell = new THREE.Mesh(shellGeometry, material);
        shell.position.set(-0.4 + i * 0.25, 0.1, 0);
        shell.rotation.x = -0.3;
        shell.rotation.z = 0.2 - i * 0.1;
        shell.scale.set(1, 1.5 - i * 0.2, 0.8);
        group.add(shell);
    }

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createChristRedeemer(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xe0e0e0 });

    // Pedestal
    const pedestalGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.4);
    const pedestal = new THREE.Mesh(pedestalGeometry, new THREE.MeshPhongMaterial({ color: 0x808080 }));
    pedestal.position.y = 0.25;
    group.add(pedestal);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.12, 0.15, 1.2, 8);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.y = 1.1;
    group.add(body);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.12, 8, 8);
    const head = new THREE.Mesh(headGeometry, material);
    head.position.y = 1.85;
    group.add(head);

    // Arms (outstretched)
    const armGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.1);
    const arms = new THREE.Mesh(armGeometry, material);
    arms.position.y = 1.5;
    group.add(arms);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createColosseum(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xd4a373 });

    // Main structure - ring shape
    const ringGeometry = new THREE.TorusGeometry(0.5, 0.2, 8, 24);
    const ring = new THREE.Mesh(ringGeometry, material);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.3;
    group.add(ring);

    // Inner floor
    const floorGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 24);
    const floor = new THREE.Mesh(floorGeometry, new THREE.MeshPhongMaterial({ color: 0xc4a060 }));
    floor.position.y = 0.1;
    group.add(floor);

    // Arches around
    for (let i = 0; i < 16; i++) {
        const archGeometry = new THREE.BoxGeometry(0.08, 0.25, 0.05);
        const arch = new THREE.Mesh(archGeometry, material);
        const angle = (i / 16) * Math.PI * 2;
        arch.position.set(Math.cos(angle) * 0.5, 0.45, Math.sin(angle) * 0.5);
        arch.rotation.y = angle;
        group.add(arch);
    }

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createPyramid(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xe6c86e });

    // Main pyramid
    const pyramidGeometry = new THREE.ConeGeometry(0.8, 1.2, 4);
    const pyramid = new THREE.Mesh(pyramidGeometry, material);
    pyramid.position.y = 0.6;
    pyramid.rotation.y = Math.PI / 4;
    group.add(pyramid);

    // Smaller pyramids
    const smallPyramid1 = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.6, 4), material);
    smallPyramid1.position.set(0.8, 0.3, 0.4);
    smallPyramid1.rotation.y = Math.PI / 4;
    group.add(smallPyramid1);

    const smallPyramid2 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 4), material);
    smallPyramid2.position.set(0.6, 0.25, -0.5);
    smallPyramid2.rotation.y = Math.PI / 4;
    group.add(smallPyramid2);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createBigBen(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xbfa76f });

    // Main tower
    const towerGeometry = new THREE.BoxGeometry(0.4, 2.5, 0.4);
    const tower = new THREE.Mesh(towerGeometry, material);
    tower.position.y = 1.25;
    group.add(tower);

    // Clock face area
    const clockArea = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), material);
    clockArea.position.y = 2.0;
    group.add(clockArea);

    // Clock faces
    const clockGeometry = new THREE.CircleGeometry(0.15, 16);
    const clockMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

    for (let i = 0; i < 4; i++) {
        const clock = new THREE.Mesh(clockGeometry, clockMaterial);
        const angle = (i * Math.PI / 2);
        clock.position.set(
            Math.sin(angle) * 0.26,
            2.0,
            Math.cos(angle) * 0.26
        );
        clock.rotation.y = angle;
        group.add(clock);
    }

    // Spire
    const spireGeometry = new THREE.ConeGeometry(0.15, 0.6, 4);
    const spire = new THREE.Mesh(spireGeometry, material);
    spire.position.y = 2.8;
    group.add(spire);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createGreatWall(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0x8b7355 });

    // Wall segments going up a slope
    for (let i = 0; i < 8; i++) {
        const wallGeometry = new THREE.BoxGeometry(0.15, 0.25 + Math.sin(i * 0.5) * 0.1, 0.1);
        const wall = new THREE.Mesh(wallGeometry, material);
        wall.position.set(i * 0.12 - 0.4, 0.15 + i * 0.08, 0);
        group.add(wall);
    }

    // Watchtowers
    const towerGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.2);
    const tower1 = new THREE.Mesh(towerGeometry, material);
    tower1.position.set(-0.4, 0.35, 0);
    group.add(tower1);

    const tower2 = new THREE.Mesh(towerGeometry, material);
    tower2.position.set(0.5, 0.85, 0);
    group.add(tower2);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createGatewayOfIndia(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0xd4a373 });

    // Main arch
    const leftPillar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.5, 0.2), material);
    leftPillar.position.set(-0.3, 0.75, 0);
    group.add(leftPillar);

    const rightPillar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.5, 0.2), material);
    rightPillar.position.set(0.3, 0.75, 0);
    group.add(rightPillar);

    // Top arch
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.2), material);
    archTop.position.set(0, 1.65, 0);
    group.add(archTop);

    // Dome on top
    const domeGeometry = new THREE.SphereGeometry(0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const dome = new THREE.Mesh(domeGeometry, material);
    dome.position.y = 1.8;
    group.add(dome);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createMarinaBaySands(position, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: 0x90caf9 });

    // Three towers
    for (let i = 0; i < 3; i++) {
        const towerGeometry = new THREE.BoxGeometry(0.2, 2.0, 0.15);
        const tower = new THREE.Mesh(towerGeometry, material);
        tower.position.set(-0.35 + i * 0.35, 1.0, 0);
        tower.rotation.z = (i - 1) * 0.05;
        group.add(tower);
    }

    // SkyPark on top (boat-shaped platform)
    const skyParkGeometry = new THREE.BoxGeometry(1.3, 0.08, 0.3);
    const skyPark = new THREE.Mesh(skyParkGeometry, material);
    skyPark.position.y = 2.1;
    group.add(skyPark);

    // Pool on top
    const poolGeometry = new THREE.BoxGeometry(0.8, 0.03, 0.15);
    const pool = new THREE.Mesh(poolGeometry, new THREE.MeshPhongMaterial({ color: 0x00bcd4 }));
    pool.position.set(0.2, 2.15, 0);
    group.add(pool);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

function createGenericLandmark(position, color, scale = 0.08) {
    const group = new THREE.Group();
    const material = new THREE.MeshPhongMaterial({ color: color });

    // Simple monument shape
    const baseGeometry = new THREE.CylinderGeometry(0.3, 0.35, 0.2, 8);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.1;
    group.add(base);

    const pillarGeometry = new THREE.CylinderGeometry(0.15, 0.2, 1.5, 8);
    const pillar = new THREE.Mesh(pillarGeometry, material);
    pillar.position.y = 0.95;
    group.add(pillar);

    const topGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const top = new THREE.Mesh(topGeometry, material);
    top.position.y = 1.8;
    group.add(top);

    group.scale.setScalar(scale);
    group.position.copy(position);
    group.lookAt(0, 0, 0);
    group.rotateX(Math.PI / 2);

    return group;
}

// Factory function to create appropriate landmark
function createLandmark(destination, position) {
    switch (destination.id) {
        case 'paris':
            return createEiffelTower(position);
        case 'newyork':
            return createStatueOfLiberty(position);
        case 'tokyo':
            return createTokyoTower(position);
        case 'dubai':
            return createBurjKhalifa(position);
        case 'sydney':
            return createSydneyOpera(position);
        case 'rio':
            return createChristRedeemer(position);
        case 'rome':
            return createColosseum(position);
        case 'cairo':
            return createPyramid(position);
        case 'london':
            return createBigBen(position);
        case 'beijing':
            return createGreatWall(position);
        case 'mumbai':
            return createGatewayOfIndia(position);
        case 'singapore':
            return createMarinaBaySands(position);
        default:
            return createGenericLandmark(position, destination.landmarkColor);
    }
}

// ============================================
// Markers and Labels
// ============================================
function createMarkers() {
    DESTINATIONS.forEach(dest => {
        const position = latLngToVector3(dest.lat, dest.lng, 1.52);

        // Create marker pin
        const markerGroup = new THREE.Group();

        // Pin head (sphere)
        const headGeometry = new THREE.SphereGeometry(0.03, 16, 16);
        const headMaterial = new THREE.MeshPhongMaterial({
            color: 0x00d4ff,
            emissive: 0x00d4ff,
            emissiveIntensity: 0.3
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        markerGroup.add(head);

        // Pin stem
        const stemGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.08, 8);
        const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x00d4ff });
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = -0.05;
        markerGroup.add(stem);

        // Pulse ring
        const ringGeometry = new THREE.RingGeometry(0.04, 0.05, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        markerGroup.add(ring);

        markerGroup.position.copy(position);
        markerGroup.lookAt(0, 0, 0);
        markerGroup.userData = { destination: dest };

        scene.add(markerGroup);
        markers.push(markerGroup);

        // Create and add landmark
        const landmarkPosition = latLngToVector3(dest.lat, dest.lng, 1.55);
        const landmark = createLandmark(dest, landmarkPosition);
        landmark.userData = { destination: dest };
        landmark.visible = false; // Hidden by default, shown on check-in
        scene.add(landmark);
        landmarks[dest.id] = landmark;
    });
}

// ============================================
// UI Population
// ============================================
function populateUI() {
    // Populate home cities
    const homeSelect = document.getElementById('home-select');
    HOME_CITIES.forEach(city => {
        const option = document.createElement('option');
        option.value = JSON.stringify(city);
        option.textContent = `${city.name}, ${city.country}`;
        homeSelect.appendChild(option);
    });

    homeSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            selectedHome = JSON.parse(e.target.value);
            const homeInfo = document.getElementById('home-info');
            homeInfo.innerHTML = `<strong>${selectedHome.name}</strong><br>Ready to explore the world!`;
            homeInfo.classList.remove('hidden');

            // Rotate to home location
            rotateToLocation(selectedHome.lat, selectedHome.lng, 1500);

            // Save progress
            saveProgress();
        }
    });

    // Populate destinations
    const destinationsList = document.getElementById('destinations-list');
    DESTINATIONS.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-icon">${dest.icon}</div>
            <div class="destination-info">
                <h4>${dest.name}</h4>
                <p>${dest.country}</p>
            </div>
            <span class="destination-status">${dest.checkedIn ? '✓ Visited' : 'Visit'}</span>
        `;

        card.addEventListener('click', () => {
            showDestinationPopup(dest);
        });

        destinationsList.appendChild(card);
        dest.cardElement = card;
    });
}

// ============================================
// Popup and Check-in
// ============================================
function showDestinationPopup(destination) {
    const popup = document.getElementById('landmark-popup');
    document.getElementById('popup-title').textContent = `${destination.icon} ${destination.name}`;
    document.getElementById('popup-description').textContent = destination.description;

    // Create mini 3D preview
    const previewContainer = document.getElementById('popup-landmark-preview');
    previewContainer.innerHTML = '';

    // Wait for container to be visible and have dimensions
    setTimeout(() => {
        const containerWidth = previewContainer.clientWidth || 380;
        const containerHeight = 200;

        const miniScene = new THREE.Scene();
        miniScene.background = new THREE.Color(0x1a1a2e);

        const miniCamera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, 0.1, 100);
        miniCamera.position.set(0, 0.3, 1.5);
        miniCamera.lookAt(0, 0.3, 0);

        const miniRenderer = new THREE.WebGLRenderer({ antialias: true });
        miniRenderer.setSize(containerWidth, containerHeight);
        miniRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        previewContainer.appendChild(miniRenderer.domElement);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        miniScene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(3, 3, 3);
        miniScene.add(directionalLight);

        const backLight = new THREE.DirectionalLight(0x4fc3f7, 0.4);
        backLight.position.set(-2, 1, -2);
        miniScene.add(backLight);

        // Create landmark preview (use standalone version without globe positioning)
        const previewLandmark = createLandmarkForPreview(destination);
        miniScene.add(previewLandmark);

        // Add a subtle ground plane
        const groundGeometry = new THREE.CircleGeometry(0.8, 32);
        const groundMaterial = new THREE.MeshPhongMaterial({
            color: 0x2a2a4a,
            transparent: true,
            opacity: 0.5
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.01;
        miniScene.add(ground);

        // Animation for preview
        let previewAnimFrame;
        function animatePreview() {
            previewAnimFrame = requestAnimationFrame(animatePreview);
            previewLandmark.rotation.y += 0.01;
            miniRenderer.render(miniScene, miniCamera);
        }
        animatePreview();

        // Store animation frame and renderer for cleanup
        popup.dataset.animFrame = previewAnimFrame;
        popup._miniRenderer = miniRenderer;
    }, 50);

    popup.classList.remove('hidden');

    // Close button
    document.getElementById('popup-close').onclick = () => {
        popup.classList.add('hidden');
        if (popup.dataset.animFrame) {
            cancelAnimationFrame(parseInt(popup.dataset.animFrame));
        }
        if (popup._miniRenderer) {
            popup._miniRenderer.dispose();
        }
    };

    // Check-in button
    document.getElementById('popup-checkin').onclick = () => {
        popup.classList.add('hidden');
        if (popup.dataset.animFrame) {
            cancelAnimationFrame(parseInt(popup.dataset.animFrame));
        }
        if (popup._miniRenderer) {
            popup._miniRenderer.dispose();
        }
        performCheckIn(destination);
    };
}

// Create landmark for preview (without globe positioning)
function createLandmarkForPreview(destination) {
    const group = new THREE.Group();

    switch (destination.id) {
        case 'paris':
            createEiffelTowerPreview(group);
            break;
        case 'newyork':
            createStatueOfLibertyPreview(group);
            break;
        case 'tokyo':
            createTokyoTowerPreview(group);
            break;
        case 'dubai':
            createBurjKhalifaPreview(group);
            break;
        case 'sydney':
            createSydneyOperaPreview(group);
            break;
        case 'rio':
            createChristRedeemerPreview(group);
            break;
        case 'rome':
            createColosseumPreview(group);
            break;
        case 'cairo':
            createPyramidPreview(group);
            break;
        case 'london':
            createBigBenPreview(group);
            break;
        case 'beijing':
            createGreatWallPreview(group);
            break;
        case 'mumbai':
            createGatewayOfIndiaPreview(group);
            break;
        case 'singapore':
            createMarinaBaySandsPreview(group);
            break;
        default:
            createGenericLandmarkPreview(group, destination.landmarkColor);
    }

    return group;
}

function createEiffelTowerPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0xc9a227, flatShading: true });

    // Base legs
    for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.4, 4), material);
        const angle = (i * Math.PI / 2) + Math.PI / 4;
        leg.position.set(Math.cos(angle) * 0.12, 0.2, Math.sin(angle) * 0.12);
        leg.rotation.x = (i < 2 ? 0.15 : -0.15);
        leg.rotation.z = (i === 0 || i === 3 ? 0.15 : -0.15);
        group.add(leg);
    }

    // Middle section
    const middle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.25, 4), material);
    middle.position.y = 0.5;
    group.add(middle);

    // Top spire
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.25, 4), material);
    spire.position.y = 0.75;
    group.add(spire);

    // Platforms
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.008, 8, 4), material);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.38;
    group.add(ring1);
}

function createStatueOfLibertyPreview(group) {
    const greenMat = new THREE.MeshPhongMaterial({ color: 0x4a9b7f });
    const grayMat = new THREE.MeshPhongMaterial({ color: 0x808080 });
    const goldMat = new THREE.MeshPhongMaterial({ color: 0xffd700 });

    // Pedestal
    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.25, 0.2), grayMat);
    pedestal.position.y = 0.125;
    group.add(pedestal);

    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.35, 8), greenMat);
    body.position.y = 0.425;
    group.add(body);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), greenMat);
    head.position.y = 0.63;
    group.add(head);

    // Crown
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.04, 7), greenMat);
    crown.position.y = 0.68;
    group.add(crown);

    // Torch arm
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.18, 6), greenMat);
    arm.position.set(0.08, 0.68, 0);
    arm.rotation.z = -0.8;
    group.add(arm);

    // Torch
    const torch = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 6), goldMat);
    torch.position.set(0.14, 0.78, 0);
    group.add(torch);
}

function createTokyoTowerPreview(group) {
    const redMat = new THREE.MeshPhongMaterial({ color: 0xff4444 });
    const whiteMat = new THREE.MeshPhongMaterial({ color: 0xffffff });

    for (let i = 0; i < 6; i++) {
        const seg = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04 - i * 0.005, 0.05 - i * 0.005, 0.12, 4),
            i % 2 === 0 ? redMat : whiteMat
        );
        seg.position.y = 0.06 + i * 0.12;
        group.add(seg);
    }

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.15, 6), whiteMat);
    antenna.position.y = 0.85;
    group.add(antenna);
}

function createBurjKhalifaPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0x4fc3f7 });

    for (let i = 0; i < 10; i++) {
        const radius = 0.08 - i * 0.006;
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.8, radius, 0.08, 6), material);
        seg.position.y = i * 0.08 + 0.04;
        group.add(seg);
    }

    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.01, 0.2, 6), material);
    spire.position.y = 0.9;
    group.add(spire);
}

function createSydneyOperaPreview(group) {
    const whiteMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const grayMat = new THREE.MeshPhongMaterial({ color: 0x808080 });

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.25), grayMat);
    group.add(base);

    // Shells
    for (let i = 0; i < 4; i++) {
        const shell = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 16, 0, Math.PI * 0.6, 0, Math.PI * 0.5),
            whiteMat
        );
        shell.position.set(-0.12 + i * 0.08, 0.03, 0);
        shell.rotation.x = -0.3;
        shell.scale.set(1, 1.3 - i * 0.15, 0.6);
        group.add(shell);
    }
}

function createChristRedeemerPreview(group) {
    const whiteMat = new THREE.MeshPhongMaterial({ color: 0xe0e0e0 });
    const grayMat = new THREE.MeshPhongMaterial({ color: 0x808080 });

    // Pedestal
    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.15, 0.12), grayMat);
    pedestal.position.y = 0.075;
    group.add(pedestal);

    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.35, 8), whiteMat);
    body.position.y = 0.325;
    group.add(body);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), whiteMat);
    head.position.y = 0.54;
    group.add(head);

    // Arms
    const arms = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.03), whiteMat);
    arms.position.y = 0.45;
    group.add(arms);
}

function createColosseumPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0xd4a373 });

    // Main ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.08, 8, 24), material);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    group.add(ring);

    // Floor
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.03, 24), material);
    floor.position.y = 0.03;
    group.add(floor);

    // Arches
    for (let i = 0; i < 12; i++) {
        const arch = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.08, 0.015), material);
        const angle = (i / 12) * Math.PI * 2;
        arch.position.set(Math.cos(angle) * 0.2, 0.15, Math.sin(angle) * 0.2);
        arch.rotation.y = angle;
        group.add(arch);
    }
}

function createPyramidPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0xe6c86e });

    // Main pyramid
    const pyramid = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.35, 4), material);
    pyramid.position.y = 0.175;
    pyramid.rotation.y = Math.PI / 4;
    group.add(pyramid);

    // Smaller pyramids
    const small1 = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.18, 4), material);
    small1.position.set(0.25, 0.09, 0.12);
    small1.rotation.y = Math.PI / 4;
    group.add(small1);

    const small2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.14, 4), material);
    small2.position.set(0.18, 0.07, -0.15);
    small2.rotation.y = Math.PI / 4;
    group.add(small2);
}

function createBigBenPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0xbfa76f });
    const clockMat = new THREE.MeshPhongMaterial({ color: 0xffffff });

    // Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, 0.12), material);
    tower.position.y = 0.35;
    group.add(tower);

    // Clock area
    const clockArea = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.15), material);
    clockArea.position.y = 0.55;
    group.add(clockArea);

    // Clock face
    const clock = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), clockMat);
    clock.position.set(0, 0.55, 0.076);
    group.add(clock);

    // Spire
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.18, 4), material);
    spire.position.y = 0.75;
    group.add(spire);
}

function createGreatWallPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0x8b7355 });

    // Wall segments going up
    for (let i = 0; i < 6; i++) {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08 + Math.sin(i * 0.5) * 0.02, 0.03), material);
        wall.position.set(i * 0.06 - 0.15, 0.05 + i * 0.03, 0);
        group.add(wall);
    }

    // Watchtowers
    const tower1 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.15, 0.07), material);
    tower1.position.set(-0.15, 0.1, 0);
    group.add(tower1);

    const tower2 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.15, 0.07), material);
    tower2.position.set(0.18, 0.23, 0);
    group.add(tower2);
}

function createGatewayOfIndiaPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0xd4a373 });

    // Pillars
    const leftPillar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.06), material);
    leftPillar.position.set(-0.1, 0.225, 0);
    group.add(leftPillar);

    const rightPillar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.06), material);
    rightPillar.position.set(0.1, 0.225, 0);
    group.add(rightPillar);

    // Arch top
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.08, 0.06), material);
    archTop.position.set(0, 0.5, 0);
    group.add(archTop);

    // Dome
    const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2),
        material
    );
    dome.position.y = 0.54;
    group.add(dome);
}

function createMarinaBaySandsPreview(group) {
    const material = new THREE.MeshPhongMaterial({ color: 0x90caf9 });
    const poolMat = new THREE.MeshPhongMaterial({ color: 0x00bcd4 });

    // Three towers
    for (let i = 0; i < 3; i++) {
        const tower = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.04), material);
        tower.position.set(-0.1 + i * 0.1, 0.275, 0);
        tower.rotation.z = (i - 1) * 0.03;
        group.add(tower);
    }

    // SkyPark
    const skyPark = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.09), material);
    skyPark.position.y = 0.58;
    group.add(skyPark);

    // Pool
    const pool = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.01, 0.04), poolMat);
    pool.position.set(0.05, 0.6, 0);
    group.add(pool);
}

function createGenericLandmarkPreview(group, color) {
    const material = new THREE.MeshPhongMaterial({ color: color });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.06, 8), material);
    base.position.y = 0.03;
    group.add(base);

    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.45, 8), material);
    pillar.position.y = 0.28;
    group.add(pillar);

    const top = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), material);
    top.position.y = 0.55;
    group.add(top);
}

async function performCheckIn(destination) {
    if (isAnimating) return;

    if (!selectedHome) {
        alert('Please select your home city first!');
        return;
    }

    isAnimating = true;

    // Show flight info
    const flightInfo = document.getElementById('flight-info');
    document.getElementById('flight-from').textContent = selectedHome.name;
    document.getElementById('flight-to').textContent = destination.name;

    const distance = calculateDistance(
        selectedHome.lat, selectedHome.lng,
        destination.lat, destination.lng
    );
    document.getElementById('flight-distance').textContent = `Distance: ${distance.toLocaleString()} km`;

    flightInfo.classList.remove('hidden');

    // Animate progress bar and Earth rotation
    const progressFill = document.getElementById('progress-fill');
    const duration = 4000; // 4 seconds for better visual effect

    // First rotate to home
    await rotateToLocation(selectedHome.lat, selectedHome.lng, 800);

    // Create flight path arc
    const startLat = selectedHome.lat;
    const startLng = selectedHome.lng;
    const endLat = destination.lat;
    const endLng = destination.lng;

    const curve = createFlightPath(startLat, startLng, endLat, endLng);

    // Create airplane
    airplane = createAirplane();
    scene.add(airplane);

    // Play takeoff sound
    playSound('takeoff');

    const startTime = Date.now();

    return new Promise((resolve) => {
        function animateFlight() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease function for smooth animation
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            // Update progress bar
            progressFill.style.width = `${easeProgress * 100}%`;

            // Get position along the curve
            const point = curve.getPoint(easeProgress);
            const tangent = curve.getTangent(easeProgress);

            // Update airplane position and rotation
            if (airplane) {
                airplane.position.copy(point);

                // Orient airplane along flight path
                const up = point.clone().normalize();
                const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
                const radians = Math.acos(up.dot(tangent));

                airplane.quaternion.setFromAxisAngle(axis, radians);
                airplane.rotateX(Math.PI / 2);

                // Make airplane look in direction of travel
                const lookAtPoint = curve.getPoint(Math.min(easeProgress + 0.01, 1));
                airplane.lookAt(lookAtPoint);
            }

            // Update camera to follow
            const cameraOffset = point.clone().normalize().multiplyScalar(3.5);
            camera.position.lerp(point.clone().add(cameraOffset), 0.05);
            camera.lookAt(0, 0, 0);

            if (progress < 1) {
                requestAnimationFrame(animateFlight);
            } else {
                // Animation complete - cleanup and show results
                flightInfo.classList.add('hidden');
                progressFill.style.width = '0%';

                // Play landing sound
                playSound('landing');

                // Remove flight path and airplane after a short delay
                setTimeout(() => {
                    removeFlightPath();
                }, 500);

                // Mark as checked in
                destination.checkedIn = true;
                destination.cardElement.classList.add('checked-in');
                destination.cardElement.querySelector('.destination-status').textContent = '✓ Visited';

                // Update total distance traveled
                totalDistance += distance;

                // Show landmark on globe
                landmarks[destination.id].visible = true;

                // Update progress tracker and stats
                updateProgressTracker();
                updateStatsDashboard();

                // Check for new achievements
                checkAchievements();

                // Show check-in status
                const checkinStatus = document.getElementById('checkin-status');
                document.getElementById('checkin-details').innerHTML = `
                    Welcome to <strong>${destination.name}</strong>!<br>
                    <small>${destination.landmark} is now visible on the globe</small><br>
                    <small style="color: #00d4ff;">+${distance.toLocaleString()} km traveled</small>
                `;
                checkinStatus.classList.remove('hidden');

                document.getElementById('close-checkin').onclick = () => {
                    checkinStatus.classList.add('hidden');
                };

                // Create celebration particles
                createCelebrationParticles(destination);

                isAnimating = false;
                resolve();
            }
        }

        animateFlight();
    });
}

function rotateToLocation(lat, lng, duration = 1000) {
    return new Promise((resolve) => {
        const targetPos = latLngToVector3(lat, lng, 5);
        const startPos = camera.position.clone();
        const startTime = Date.now();

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            camera.position.lerpVectors(startPos, targetPos, easeProgress);
            camera.lookAt(0, 0, 0);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        }

        animate();
    });
}

function createCelebrationParticles(destination) {
    const position = latLngToVector3(destination.lat, destination.lng, 1.6);
    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.01, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? 0x00d4ff : 0xffd700,
            transparent: true
        });
        const particle = new THREE.Mesh(geometry, material);
        particle.position.copy(position);
        particle.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.05,
            Math.random() * 0.05,
            (Math.random() - 0.5) * 0.05
        );
        scene.add(particle);
        particles.push(particle);
    }

    // Animate particles
    let frame = 0;
    function animateParticles() {
        frame++;
        particles.forEach(particle => {
            particle.position.add(particle.velocity);
            particle.velocity.y -= 0.001; // gravity
            particle.material.opacity = 1 - frame / 60;
        });

        if (frame < 60) {
            requestAnimationFrame(animateParticles);
        } else {
            particles.forEach(p => scene.remove(p));
        }
    }
    animateParticles();
}

// ============================================
// Raycasting for marker interaction
// ============================================
function setupRaycasting() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    renderer.domElement.addEventListener('click', (event) => {
        if (isAnimating) return;

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(markers, true);
        if (intersects.length > 0) {
            let markerGroup = intersects[0].object;
            while (markerGroup.parent && !markerGroup.userData.destination) {
                markerGroup = markerGroup.parent;
            }
            if (markerGroup.userData.destination) {
                showDestinationPopup(markerGroup.userData.destination);
            }
        }
    });

    // Hover effect
    renderer.domElement.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(markers, true);
        renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'grab';
    });
}

// ============================================
// Animation Loop
// ============================================
function animate() {
    requestAnimationFrame(animate);

    // Slow Earth rotation
    if (!isAnimating) {
        earth.rotation.y += 0.0005;
        clouds.rotation.y += 0.0007;
    }

    // Update controls
    controls.update();

    // Animate marker pulses
    const time = Date.now() * 0.001;
    markers.forEach((marker, i) => {
        const ring = marker.children[2];
        if (ring) {
            const scale = 1 + Math.sin(time * 2 + i) * 0.3;
            ring.scale.setScalar(scale);
            ring.material.opacity = 0.5 - Math.sin(time * 2 + i) * 0.3;
        }
    });

    // Make landmarks always face up (rotate with Earth)
    Object.values(landmarks).forEach(landmark => {
        if (landmark.visible) {
            landmark.rotation.y = earth.rotation.y;
        }
    });

    renderer.render(scene, camera);
}

// ============================================
// Sound Effects System
// ============================================
let soundEnabled = true;
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = null;

function initAudio() {
    try {
        audioContext = new AudioContext();
    } catch (e) {
        console.warn('Web Audio API not supported');
    }
}

function playSound(type) {
    if (!soundEnabled || !audioContext) return;

    // Resume audio context if suspended (required for some browsers)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
        case 'takeoff':
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.5);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;

        case 'landing':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.3);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;

        case 'achievement':
            // Play a happy arpeggio
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.value = freq;
                osc.type = 'sine';
                gain.gain.setValueAtTime(0.1, audioContext.currentTime + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.2);
                osc.start(audioContext.currentTime + i * 0.1);
                osc.stop(audioContext.currentTime + i * 0.1 + 0.2);
            });
            break;

        case 'click':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('sound-toggle');
    btn.textContent = soundEnabled ? '🔊' : '🔇';
    btn.classList.toggle('muted', !soundEnabled);
    if (soundEnabled) playSound('click');
}

// ============================================
// Day/Night Cycle
// ============================================
let isNightMode = false;
let sunLight = null;

function toggleDayNight() {
    isNightMode = !isNightMode;
    const btn = document.getElementById('day-night-toggle');
    btn.textContent = isNightMode ? '🌙' : '☀️';
    btn.classList.toggle('night-mode', isNightMode);
    document.body.classList.toggle('night-mode', isNightMode);

    // Update lighting
    if (sunLight) {
        if (isNightMode) {
            sunLight.intensity = 0.3;
            sunLight.color.setHex(0x4466aa);
        } else {
            sunLight.intensity = 1.5;
            sunLight.color.setHex(0xffffff);
        }
    }

    playSound('click');
}

// ============================================
// Social Sharing
// ============================================
function showShareModal() {
    playSound('click');

    const stats = getStats();
    const badgeCount = unlockedAchievements.size;

    // Remove existing modal
    const existing = document.getElementById('share-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.innerHTML = `
        <div class="share-content">
            <h3>📤 Share Your Journey</h3>
            <div class="share-stats">
                <p>🌍 <strong>${stats.visited}</strong> destinations visited</p>
                <p>✈️ <strong>${stats.distance.toLocaleString()}</strong> km traveled</p>
                <p>🗺️ <strong>${stats.continents}</strong> continents explored</p>
                <p>🏆 <strong>${badgeCount}</strong> achievements unlocked</p>
            </div>
            <div class="share-buttons">
                <button class="share-btn twitter" onclick="shareToTwitter()">
                    🐦 Tweet
                </button>
                <button class="share-btn copy" onclick="copyShareText()">
                    📋 Copy
                </button>
            </div>
            <button class="btn" onclick="this.closest('#share-modal').remove()">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

function getShareText() {
    const stats = getStats();
    const badgeCount = unlockedAchievements.size;
    return `🌍 I've explored ${stats.visited} destinations and traveled ${stats.distance.toLocaleString()} km on Earth Explorer! 🏆 ${badgeCount}/${ACHIEVEMENTS.length} achievements unlocked! Check it out: `;
}

function shareToTwitter() {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function copyShareText() {
    const text = getShareText() + window.location.href;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.share-btn.copy');
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
            btn.innerHTML = '📋 Copy';
        }, 2000);
    });
}

// ============================================
// Setup Controls
// ============================================
function setupControls() {
    document.getElementById('sound-toggle').addEventListener('click', toggleSound);
    document.getElementById('day-night-toggle').addEventListener('click', toggleDayNight);
    document.getElementById('share-btn').addEventListener('click', showShareModal);

    // Initialize audio on first user interaction
    document.addEventListener('click', () => {
        if (!audioContext) initAudio();
    }, { once: true });
}

// ============================================
// Initialize Application
// ============================================
function init() {
    initScene();
    createEarth();
    createMarkers();
    populateUI();
    setupRaycasting();
    setupControls();

    // Store reference to sunLight for day/night toggle
    sunLight = scene.children.find(child => child.type === 'DirectionalLight' && child.intensity > 1);

    // Initialize achievements
    initAchievements();

    // Load saved progress
    const hasProgress = loadProgress();

    // Hide loading screen and apply progress
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');

        // Apply loaded progress after UI is ready
        if (hasProgress) {
            setTimeout(() => applyLoadedProgress(), 100);
        }
    }, 1500);

    animate();
}

// Start the application
init();
