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
// Global Variables
// ============================================
let scene, camera, renderer, controls;
let earth, clouds, atmosphere;
let markers = [];
let landmarks = {};
let selectedHome = null;
let isAnimating = false;

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

    // Earth geometry
    const earthGeometry = new THREE.SphereGeometry(1.5, 64, 64);

    // Create Earth with procedural texture (no external dependencies)
    const earthMaterial = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        emissive: 0x112244,
        specular: 0x333333,
        shininess: 25
    });

    // Create a canvas texture for Earth
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Ocean gradient
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGradient.addColorStop(0, '#1a4d7c');
    oceanGradient.addColorStop(0.5, '#0a3d62');
    oceanGradient.addColorStop(1, '#1a4d7c');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw simplified continents
    ctx.fillStyle = '#2d5a27';

    // North America
    ctx.beginPath();
    ctx.ellipse(400, 280, 280, 180, 0, 0, Math.PI * 2);
    ctx.fill();

    // South America
    ctx.beginPath();
    ctx.ellipse(550, 620, 120, 200, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Europe
    ctx.beginPath();
    ctx.ellipse(1100, 280, 150, 100, 0, 0, Math.PI * 2);
    ctx.fill();

    // Africa
    ctx.beginPath();
    ctx.ellipse(1100, 520, 180, 220, 0, 0, Math.PI * 2);
    ctx.fill();

    // Asia
    ctx.beginPath();
    ctx.ellipse(1450, 320, 350, 200, 0, 0, Math.PI * 2);
    ctx.fill();

    // Australia
    ctx.beginPath();
    ctx.ellipse(1700, 680, 120, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Antarctica
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(1024, 980, 600, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Arctic
    ctx.beginPath();
    ctx.ellipse(1024, 50, 400, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    const earthTexture = new THREE.CanvasTexture(canvas);
    earthMaterial.map = earthTexture;
    earthMaterial.color = new THREE.Color(0xffffff);
    earthMaterial.emissive = new THREE.Color(0x000000);

    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Clouds layer
    const cloudsGeometry = new THREE.SphereGeometry(1.52, 64, 64);
    const cloudCanvas = document.createElement('canvas');
    cloudCanvas.width = 1024;
    cloudCanvas.height = 512;
    const cloudCtx = cloudCanvas.getContext('2d');

    // Transparent background
    cloudCtx.clearRect(0, 0, cloudCanvas.width, cloudCanvas.height);

    // Draw random cloud patterns
    cloudCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * cloudCanvas.width;
        const y = Math.random() * cloudCanvas.height;
        const w = 50 + Math.random() * 100;
        const h = 20 + Math.random() * 40;
        cloudCtx.beginPath();
        cloudCtx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
        cloudCtx.fill();
    }

    const cloudTexture = new THREE.CanvasTexture(cloudCanvas);
    const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.4,
        depthWrite: false
    });

    clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    scene.add(clouds);

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

    const miniScene = new THREE.Scene();
    const miniCamera = new THREE.PerspectiveCamera(45, previewContainer.clientWidth / 200, 0.1, 100);
    miniCamera.position.z = 3;

    const miniRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    miniRenderer.setSize(previewContainer.clientWidth, 200);
    miniRenderer.setClearColor(0x000000, 0);
    previewContainer.appendChild(miniRenderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    miniScene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 2);
    miniScene.add(directionalLight);

    // Create landmark preview
    const previewLandmark = createLandmark(destination, new THREE.Vector3(0, -0.5, 0));
    previewLandmark.scale.setScalar(0.8);
    previewLandmark.rotation.set(0, 0, 0);
    previewLandmark.visible = true;
    miniScene.add(previewLandmark);

    // Animation for preview
    let previewAnimFrame;
    function animatePreview() {
        previewAnimFrame = requestAnimationFrame(animatePreview);
        previewLandmark.rotation.y += 0.01;
        miniRenderer.render(miniScene, miniCamera);
    }
    animatePreview();

    // Store animation frame for cleanup
    popup.dataset.animFrame = previewAnimFrame;

    popup.classList.remove('hidden');

    // Close button
    document.getElementById('popup-close').onclick = () => {
        popup.classList.add('hidden');
        cancelAnimationFrame(parseInt(popup.dataset.animFrame));
    };

    // Check-in button
    document.getElementById('popup-checkin').onclick = () => {
        popup.classList.add('hidden');
        cancelAnimationFrame(parseInt(popup.dataset.animFrame));
        performCheckIn(destination);
    };
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
    const duration = 3000; // 3 seconds

    // First rotate to home
    await rotateToLocation(selectedHome.lat, selectedHome.lng, 800);

    // Then animate to destination
    const startLat = selectedHome.lat;
    const startLng = selectedHome.lng;
    const endLat = destination.lat;
    const endLng = destination.lng;

    const startTime = Date.now();

    return new Promise((resolve) => {
        function animateFlight() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease function
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            // Update progress bar
            progressFill.style.width = `${easeProgress * 100}%`;

            // Interpolate position
            const currentLat = startLat + (endLat - startLat) * easeProgress;
            const currentLng = startLng + (endLng - startLng) * easeProgress;

            // Update camera to follow
            const targetPos = latLngToVector3(currentLat, currentLng, 5);
            camera.position.lerp(targetPos, 0.1);
            camera.lookAt(0, 0, 0);

            if (progress < 1) {
                requestAnimationFrame(animateFlight);
            } else {
                // Animation complete - show landmark and check-in status
                flightInfo.classList.add('hidden');
                progressFill.style.width = '0%';

                // Mark as checked in
                destination.checkedIn = true;
                destination.cardElement.classList.add('checked-in');
                destination.cardElement.querySelector('.destination-status').textContent = '✓ Visited';

                // Show landmark on globe
                landmarks[destination.id].visible = true;

                // Show check-in status
                const checkinStatus = document.getElementById('checkin-status');
                document.getElementById('checkin-details').innerHTML = `
                    Welcome to <strong>${destination.name}</strong>!<br>
                    <small>${destination.landmark} is now visible on the globe</small>
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
// Initialize Application
// ============================================
function init() {
    initScene();
    createEarth();
    createMarkers();
    populateUI();
    setupRaycasting();

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1500);

    animate();
}

// Start the application
init();
