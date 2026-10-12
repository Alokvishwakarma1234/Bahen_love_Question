// ==========================================
// 💗 ASSET GROUP A — Ten Questions Flow
// ==========================================
const questionsData = [
    {
        q: "Kya tum mere sabse pyaare bhai ki sabse pyaari behen ho? 🥹💗",
        yes: "Haan Bhai, Main Hoon! 💖",
        no: "Nahi, Main Nahi Hoon! 🙈",
        img: "assets/face-normal.png"
    },
    {
        q: "Achhaaa, pakka? Ek baar aur soch lo, meri pyaari behen! 🥺🎀",
        yes: "Haan Bhai, Pakka! 🫶",
        no: "Nahi, Soch Liya! 😝",
        img: "assets/face-sad.png"
    },
    {
        q: "Toh phir bachpan mein mere saath ladta kaun tha? 😂💞",
        yes: "Main Hi Thi, Pagal! 💗",
        no: "Mujhe Nahi Pata! 🙄",
        img: "assets/face-happy.png"
    },
    {
        q: "Meri saari secrets sunne wali meri favourite insaan kaun hai? 🤫💕",
        yes: "Main Hoon Na, Bhai! 🥰",
        no: "Koi Aur Hoga! 😏",
        img: "assets/face-wink.png"
    },
    {
        q: "Itni jaldi apne bhai ko bhool gayi? Dil nahi dukhega mera? 🥹💔",
        yes: "Awww, Nahi Bhai! 🫂",
        no: "Mujhe Kya! 😂",
        img: "assets/face-crying.png"
    },
    {
        q: "Meri rakhi kaun baandhega phir? 🎀🥺",
        yes: "Main Baandhungi! ❤️",
        no: "Kisi Aur Se Bandhwa Lena! 😈",
        img: "assets/face-crying.png"
    },
    {
        q: "Meri favourite partner-in-crime kaun hai? 😎💗",
        yes: "Main Hi Hoon! 🫶",
        no: "Main Nahi! 🤭",
        img: "assets/face-happy.png"
    },
    {
        q: "Mammi ki kasam kha kar bolo, tum meri pyaari behen nahi ho? 😳❤️",
        yes: "Arre Haan Bhai, Hoon! 🥹",
        no: "Nahi Bhai, Nahi Hoon! 🙈",
        img: "assets/face-shocked.png"
    },
    {
        q: "Itna tang karne ke baad bhi Haan nahi bologi? 😭🎀",
        yes: "Achha Baba, Haan! 💖",
        no: "Bilkul Nahi! 😝",
        img: "assets/face-sad.png"
    },
    {
        q: "Main aakhiri baar poochh raha hoon… kya sach mein tum meri behen nahi ho? 😭💔",
        yes: "Haan Bhai, Main Teri Behen Hoon! 💖",
        no: "Nahi! 😈",
        img: "assets/face-pleading.png"
    }
];

// ==========================================
// 🏃💨 ASSET GROUP B — Final Q10 Chase Loop
// ==========================================
const chaseStages = [
    {
        q: "Areyyy pagli, maan jao na! 🥹💗<br>Kitni baar bolun ki tum meri pyaari behen ho!",
        img: "assets/chase-please.png"
    },
    {
        q: "Sachchi-sachchi bata do na ki tum meri behen ho, warna ye button tumhare haath nahi aayega! 😂🏃‍♂️",
        img: "assets/chase-pointing-smile.png"
    },
    {
        q: "Haye re meri nautanki behen! 😭🎀<br>Bhai ko aur kitna pareshan karogi? Bas Haan bol do na!",
        img: "assets/chase-crying-hands.png"
    },
    {
        q: "Itni zid achhi nahi hai, madam ji! 😤💕<br>No button pakadne se achha hai apne bhai ko ek Haan bol do!",
        img: "assets/chase-angry-pointing.png"
    },
    {
        q: "Achha baba, nahi bolna hai toh pakad ke dikhao! 🤭💨<br>Lekin yaad rakhna, main bhi haar maanne wala nahi hoon!",
        img: "assets/chase-wink-stop.png"
    }
];

// In-Memory Preloaded Images Cache for ZERO Latency
const preloadedCache = {};
function preloadAllAssets() {
    const list = [
        ...questionsData.map(q => q.img),
        ...chaseStages.map(c => c.img),
        "assets/final-win.png"
    ];
    list.forEach(src => {
        if (!preloadedCache[src]) {
            const im = new Image();
            im.src = src;
            preloadedCache[src] = im;
        }
    });
}
preloadAllAssets();

// Prevent all accidental viewport scroll gestures
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });

// App State
let currentIndex = 0;
let currentChaseIndex = 0;
let isRunawayActive = false;

// DOM Elements
const mainCard = document.getElementById('mainCard');
const characterSection = document.getElementById('characterSection');
const characterImg = document.getElementById('characterImg');
const calloutBubble = document.getElementById('calloutBubble');
const questionText = document.getElementById('questionText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const progressBar = document.getElementById('progressBar');
const badgeText = document.getElementById('badgeText');
const questionContainer = document.getElementById('questionContainer');
const cardHeader = document.getElementById('cardHeader');
const winScreen = document.getElementById('winScreen');
const finalWinImg = document.getElementById('finalWinImg');
const heartsBg = document.getElementById('heartsBg');
const confettiContainer = document.getElementById('confettiContainer');

// Floating Hearts Background
const bgIcons = ['💖', '💕', '🌸', '✨', '🎀', '🧸', '💗', '🫶'];
function createFloatingHeart() {
    if (!heartsBg) return;
    const el = document.createElement('div');
    el.className = 'floating-heart';
    el.innerText = bgIcons[Math.floor(Math.random() * bgIcons.length)];

    const size = Math.random() * 16 + 14;
    el.style.fontSize = size + 'px';
    el.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 4 + 4;
    el.style.animationDuration = duration + 's';

    heartsBg.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
}
setInterval(createFloatingHeart, 450);
for (let i = 0; i < 10; i++) createFloatingHeart();

// Render Question
function renderQuestion(index) {
    currentIndex = index;
    const data = questionsData[index];

    const stepNumber = index + 1;
    progressBar.style.width = `${(stepNumber / questionsData.length) * 100}%`;
    badgeText.innerText = `Question ${stepNumber} of 10`;

    // Instant Synchronized Update
    updateCharacter(data.img);
    setQuestionText(data.q);
    yesBtn.innerHTML = data.yes;
    noBtn.innerHTML = data.no;

    const isFinalQ = (index === questionsData.length - 1);
    if (isFinalQ) {
        setupRunawayMode();
    } else {
        removeRunawayMode();
    }
}

function setQuestionText(text) {
    calloutBubble.classList.remove('pop-anim');
    questionText.innerHTML = text;
    void calloutBubble.offsetWidth;
    calloutBubble.classList.add('pop-anim');
}

function updateCharacter(imgSrc) {
    characterImg.classList.remove('pop-anim');
    characterImg.src = imgSrc;
    void characterImg.offsetWidth;
    characterImg.classList.add('pop-anim');
}

// Button Click Handlers
function onNoClick() {
    if (currentIndex < questionsData.length - 1) {
        renderQuestion(currentIndex + 1);
    }
}

function onYesClick() {
    showWinScreen();
}

function setupRunawayMode() {
    isRunawayActive = true;
    currentChaseIndex = 0;
    noBtn.classList.add('runaway-mode');

    noBtn.addEventListener('mouseenter', handleDodge);
    noBtn.addEventListener('pointerdown', handleDodge);
    noBtn.addEventListener('touchstart', handleDodge, { passive: false });
    noBtn.addEventListener('touchmove', handleDodge, { passive: false });
    noBtn.addEventListener('click', handleDodge);
}

function removeRunawayMode() {
    isRunawayActive = false;
    noBtn.classList.remove('runaway-mode');
    noBtn.style.position = '';
    noBtn.style.left = '';
    noBtn.style.top = '';
    noBtn.style.transform = '';
    noBtn.style.display = '';

    noBtn.removeEventListener('mouseenter', handleDodge);
    noBtn.removeEventListener('pointerdown', handleDodge);
    noBtn.removeEventListener('touchstart', handleDodge);
    noBtn.removeEventListener('touchmove', handleDodge);
    noBtn.removeEventListener('click', handleDodge);
}

function handleDodge(e) {
    if (!isRunawayActive) return;
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    dodgeButtonInsideCard();
    advanceChaseStage();
}

// Synchronous change of question & image
function advanceChaseStage() {
    const stage = chaseStages[currentChaseIndex];
    setQuestionText(stage.q);
    updateCharacter(stage.img);
    currentChaseIndex = (currentChaseIndex + 1) % chaseStages.length;
}

// Runaway button stays 100% VISIBLE inside screen bounds, never cut, never clipped
function dodgeButtonInsideCard() {
    const cardRect = mainCard.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const btnWidth = btnRect.width > 0 ? btnRect.width : (noBtn.offsetWidth || 135);
    const btnHeight = btnRect.height > 0 ? btnRect.height : (noBtn.offsetHeight || 44);

    // Padding from the edges of the phone card
    const pad = 18;

    // Boundary relative to the screen (viewport)
    const minX = cardRect.left + pad;
    const maxX = Math.max(minX, cardRect.right - btnWidth - pad);
    const minY = cardRect.top + pad + 20; // below status bar
    const maxY = Math.max(minY, cardRect.bottom - btnHeight - pad - 20); // above footer

    let targetX = minX;
    let targetY = minY;
    let foundValid = false;

    // Current position
    const curX = btnRect.left;
    const curY = btnRect.top;

    for (let attempts = 0; attempts < 30; attempts++) {
        const candX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const candY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

        // Ensure NO overlap with the YES button (with safety cushion)
        const overlapYes = !(
            candX + btnWidth + 20 < yesRect.left ||
            candX > yesRect.right + 20 ||
            candY + btnHeight + 20 < yesRect.top ||
            candY > yesRect.bottom + 20
        );

        // Distance jump check so it visibly dodges away from finger/cursor
        const dist = Math.hypot(candX - curX, candY - curY);

        if (!overlapYes && dist > 70) {
            targetX = candX;
            targetY = candY;
            foundValid = true;
            break;
        }
    }

    // Reliable fallback positions inside the card if attempts collided
    if (!foundValid) {
        if (yesRect.top > (cardRect.top + cardRect.bottom) / 2) {
            targetX = cardRect.left + pad + 10;
            targetY = cardRect.top + pad + 35;
        } else {
            targetX = cardRect.right - btnWidth - pad - 10;
            targetY = cardRect.bottom - btnHeight - pad - 35;
        }
    }

    // Absolute strict clamping: NEVER allow coordinates outside the phone card
    targetX = Math.max(minX, Math.min(maxX, targetX));
    targetY = Math.max(minY, Math.min(maxY, targetY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${targetX}px`;
    noBtn.style.top = `${targetY}px`;

    const randomAngle = (Math.random() * 14 - 7).toFixed(1);
    noBtn.style.transform = `rotate(${randomAngle}deg) scale(1.03)`;
}

// Window resize safe sync
window.addEventListener('resize', () => {
    if (isRunawayActive && noBtn.classList.contains('runaway-mode')) {
        dodgeButtonInsideCard();
    }
});

// Final Yes Celebration with "yee i know it.png"
function showWinScreen() {
    isRunawayActive = false;
    noBtn.style.display = 'none';

    // Hide question & regular character section
    questionContainer.style.display = 'none';
    cardHeader.style.display = 'none';
    characterSection.style.display = 'none';

    // Show celebration screen with ONLY final-win.png
    finalWinImg.src = 'assets/final-win.png';
    winScreen.style.display = 'flex';
    triggerConfettiParty();
}

function restartQuiz() {
    winScreen.style.display = 'none';
    characterSection.style.display = 'flex';
    questionContainer.style.display = 'flex';
    cardHeader.style.display = 'block';

    noBtn.style.display = '';
    removeRunawayMode();
    renderQuestion(0);
}

// Confetti shower
function triggerConfettiParty() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = '';

    const colors = ['#ff1493', '#ff69b4', '#ff4081', '#ffb6c1', '#ffd700', '#7c4dff', '#00e676'];
    const emojis = ['💖', '🧸', '🎀', '✨', '🌸', '🎉'];

    for (let i = 0; i < 90; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';

        if (Math.random() > 0.4) {
            piece.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            piece.style.fontSize = (Math.random() * 16 + 14) + 'px';
        } else {
            piece.style.width = (Math.random() * 10 + 8) + 'px';
            piece.style.height = (Math.random() * 14 + 10) + 'px';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
        }

        const duration = Math.random() * 2.8 + 2.2;
        piece.style.animationDuration = duration + 's';
        piece.style.animationDelay = (Math.random() * 0.9) + 's';

        confettiContainer.appendChild(piece);
        setTimeout(() => piece.remove(), (duration + 1.2) * 1000);
    }
}

// ==========================================
// 🎵 NON-STOP BACKGROUND MUSIC (LOOP FOREVER)
// ==========================================
const bgAudio = document.getElementById('bgAudio');

function startBgMusic() {
    if (bgAudio) {
        bgAudio.volume = 0.85;
        bgAudio.play().catch(() => {
            // Browser autoplay policy workaround: plays on very first tap/click anywhere
        });
    }
}

// Try playing on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    renderQuestion(0);
    startBgMusic();
});

// Force play on first user interaction anywhere on screen
const audioTriggers = ['touchstart', 'pointerdown', 'click', 'keydown'];
audioTriggers.forEach(event => {
    document.addEventListener(event, () => {
        if (bgAudio && bgAudio.paused) {
            bgAudio.play().catch(() => {});
        }
    }, { passive: true });
});

// If browser or anything tries to pause, immediately resume
if (bgAudio) {
    bgAudio.addEventListener('pause', () => {
        bgAudio.play().catch(() => {});
    });
    bgAudio.addEventListener('ended', () => {
        bgAudio.currentTime = 0;
        bgAudio.play().catch(() => {});
    });
}

