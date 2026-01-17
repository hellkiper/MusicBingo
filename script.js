// 3D Tilt Effect removed
// document.addEventListener('mousemove', (e) => { ... });

const TOTAL_BARRELS = 99;
const selectedSet = new Set();

const tracks = [
    { number: 1, title: "Last Christmas", artist: "WHAM!", cover: "images/cover-01.jpg", src: "audio/01.mp3" },
    { number: 2, title: "Белая Стрекоза любви", artist: "Quest Pistols", cover: "images/cover-02.jpg", src: "audio/02.mp3" },
    { number: 3, title: "Love", artist: "Inna", cover: "images/cover-03.jpg", src: "audio/03.mp3" },
    { number: 4, title: "Чашка Кофию", artist: "Марина Хлебникова", cover: "images/cover-04.jpg", src: "audio/04.mp3" },
    { number: 5, title: "Улыбайся", artist: "IOWA", cover: "images/cover-05.jpg", src: "audio/05.mp3" },
    { number: 6, title: "Широка Река", artist: "Надежда Кадышева", cover: "images/cover-06.jpg", src: "audio/06.mp3" },
    { number: 7, title: "Люби меня люби", artist: "Гречка", cover: "images/cover-07.jpg", src: "audio/07.mp3" },
    { number: 8, title: "Хали-Гали, паратрупер", artist: "Леприконсы", cover: "images/cover-08.jpg", src: "audio/08.mp3" },
    { number: 9, title: "Горячая, гремучая", artist: "Салтан Лагучев", cover: "images/cover-09.jpg", src: "audio/09.mp3" },
    { number: 10, title: "Девочка-война", artist: "Hamali, Navai", cover: "images/cover-10.jpg", src: "audio/10.mp3" },
    { number: 11, title: "Я русский", artist: "Шаман", cover: "images/cover-11.jpg", src: "audio/11.mp3" },
    { number: 12, title: "Районы—кварталы", artist: "Звери", cover: "images/cover-12.jpg", src: "audio/12.mp3" },
    { number: 13, title: "Царица", artist: "Anna Asti", cover: "images/cover-13.jpg", src: "audio/13.mp3" },
    { number: 14, title: "Владимирский Централ", artist: "Михаил Круг", cover: "images/cover-14.jpg", src: "audio/14.mp3" },
    { number: 15, title: "Выпьем за любовь", artist: "Игорь Николаев", cover: "images/cover-15.jpg", src: "audio/15.mp3" },
    { number: 16, title: "Знаешь ли ты", artist: "Максим", cover: "images/cover-16.jpg", src: "audio/16.mp3" },
    { number: 17, title: "Новогодняя", artist: "Дискотека Авария", cover: "images/cover-17.jpg", src: "audio/17.mp3" },
    { number: 18, title: "Женщина, я не танцую", artist: "Стас Костюшкин", cover: "images/cover-18.jpg", src: "audio/18.mp3" },
    { number: 19, title: "Пошлю его на", artist: "Лолита", cover: "images/cover-19.jpg", src: "audio/19.mp3" },
    { number: 20, title: "Ночь", artist: "Андрей Губин", cover: "images/cover-20.jpg", src: "audio/20.mp3" },
    { number: 21, title: "Все для тебя", artist: "Стас Михайлов", cover: "images/cover-21.jpg", src: "audio/21.mp3" },
    { number: 22, title: "Холодок", artist: "Мэвл", cover: "images/cover-22.jpg", src: "audio/22.mp3" },
    { number: 23, title: "Зима-Холода", artist: "Андрей Губин", cover: "images/cover-23.jpg", src: "audio/23.mp3" },
    { number: 24, title: "Хлопья летят на верх", artist: "Feduk", cover: "images/cover-24.jpg", src: "audio/24.mp3" },
    { number: 25, title: "Все будет хорошо", artist: "Верка Сердючка", cover: "images/cover-25.jpg", src: "audio/25.mp3" },
    { number: 26, title: "Чита-дрита", artist: "Верка Сердючка", cover: "images/cover-26.jpg", src: "audio/26.mp3" },
    { number: 27, title: "Снег идет", artist: "Глюкоза", cover: "images/cover-27.jpg", src: "audio/27.mp3" },
    { number: 28, title: "Французский поцелуй", artist: "NikitA", cover: "images/cover-28.jpg", src: "audio/28.mp3" },
    { number: 29, title: "По тратуару", artist: "Точка назначения", cover: "images/cover-29.jpg", src: "audio/29.mp3" },
    { number: 30, title: "Quanto Costa", artist: "Пропаганда", cover: "images/cover-30.jpg", src: "audio/30.mp3" },
    { number: 31, title: "Зима в сердце", artist: "Моя Мишель", cover: "images/cover-31.jpg", src: "audio/31.mp3" },
    { number: 32, title: "Мало тебя", artist: "Serebro", cover: "images/cover-32.jpg", src: "audio/32.mp3" },
    { number: 33, title: "Звенит январская вьюга", artist: "Нина Бродская", cover: "images/cover-33.jpg", src: "audio/33.mp3" },
    { number: 34, title: "Банк", artist: "ICEGERGERT, Zivert", cover: "images/cover-34.jpg", src: "audio/34.mp3" },
    { number: 35, title: "Силуэт", artist: "Ваня Дмитриенко", cover: "images/cover-35.jpg", src: "audio/35.mp3" },
    { number: 36, title: "Шелк", artist: "Ваня Дмитриенко", cover: "images/cover-36.jpg", src: "audio/36.mp3" },
    { number: 37, title: "Кухни", artist: "Бонд с кнопкой", cover: "images/cover-37.jpg", src: "audio/37.mp3" },
    { number: 38, title: "Матушка", artist: "Татьяна Куртукова", cover: "images/cover-38.jpg", src: "audio/38.mp3" },
    { number: 39, title: "Асфальт", artist: "Jacone, Kiliana", cover: "images/cover-39.jpg", src: "audio/39.mp3" },
    { number: 40, title: "Поезда", artist: "Женя Трофимов", cover: "images/cover-40.jpg", src: "audio/40.mp3" },
    { number: 41, title: "Кукла Колдуна", artist: "Король и Шут", cover: "images/cover-41.jpg", src: "audio/41.mp3" },
    { number: 42, title: "Одного", artist: "Татьяна Куртукова", cover: "images/cover-42.jpg", src: "audio/42.mp3" },
    { number: 43, title: "Лесник", artist: "Король и Шут", cover: "images/cover-43.jpg", src: "audio/43.mp3" },
    { number: 44, title: "Я твой номер один", artist: "Дима Билан", cover: "images/cover-44.jpg", src: "audio/44.mp3" },
    { number: 45, title: "Привет с большого бодуна", artist: "Антоха МС, Дюна", cover: "images/cover-45.jpg", src: "audio/45.mp3" },
    { number: 46, title: "А че че", artist: "Бьянка", cover: "images/cover-46.jpg", src: "audio/46.mp3" },
    { number: 47, title: "Зеленоглазое такси", artist: "Михаил Боярский", cover: "images/cover-47.jpg", src: "audio/47.mp3" },
    { number: 48, title: "Chuchuka", artist: "Big Baby Type", cover: "images/cover-48.jpg", src: "audio/48.mp3" },
    { number: 49, title: "Moscow Never Sleep", artist: "DJ Smash", cover: "images/cover-49.jpg", src: "audio/49.mp3" },
    { number: 50, title: "Прованс", artist: "Ёлка", cover: "images/cover-50.jpg", src: "audio/50.mp3" },
    { number: 51, title: "Коламбия Пикчерз не представляет", artist: "БАНДЭРОС", cover: "images/cover-51.jpg", src: "audio/51.mp3" },
    { number: 52, title: "Где прошла ты", artist: "Кравц, Гио Пика", cover: "images/cover-52.jpg", src: "audio/52.mp3" },
    { number: 53, title: "Бобр", artist: "Slava Skripka", cover: "images/cover-53.jpg", src: "audio/53.mp3" },
    { number: 54, title: "You are woman", artist: "Bad Boys Blue", cover: "images/cover-54.jpg", src: "audio/54.mp3" },
    { number: 55, title: "Конь", artist: "Любэ", cover: "images/cover-55.jpg", src: "audio/55.mp3" },
    { number: 56, title: "Батарейка", artist: "Жуки", cover: "images/cover-56.jpg", src: "audio/56.mp3" },
    { number: 57, title: "Черный бумер", artist: "Серега", cover: "images/cover-57.jpg", src: "audio/57.mp3" },
    { number: 58, title: "Белые розы", artist: "Юрий Шатунов", cover: "images/cover-58.jpg", src: "audio/58.mp3" },
    { number: 59, title: "Юность", artist: "Dabro", cover: "images/cover-59.jpg", src: "audio/59.mp3" },
    { number: 60, title: "Трава у дома", artist: "Земляне", cover: "images/cover-60.jpg", src: "audio/60.mp3" },
    { number: 61, title: "Gangnam Style", artist: "PSY", cover: "images/cover-61.jpg", src: "audio/61.mp3" },
    { number: 62, title: "Отпускай", artist: "Три дня дождя", cover: "images/cover-62.jpg", src: "audio/62.mp3" },
    { number: 63, title: "Твоя любовь Манила", artist: "Тахмина Умалатова", cover: "images/cover-63.jpg", src: "audio/63.mp3" },
    { number: 64, title: "Кукушка", artist: "Евгений Григорьев", cover: "images/cover-64.jpg", src: "audio/64.mp3" },
    { number: 65, title: "Отель", artist: "НЭНСИ", cover: "images/cover-65.jpg", src: "audio/65.mp3" },
    { number: 66, title: "Этой ночью", artist: "Скачков", cover: "images/cover-66.jpg", src: "audio/66.mp3" },
    { number: 67, title: "Я плачу", artist: "AVG", cover: "images/cover-67.jpg", src: "audio/67.mp3" },
    { number: 68, title: "Ты так красива", artist: "Quest Pistols Show", cover: "images/cover-68.jpg", src: "audio/68.mp3" },
    { number: 69, title: "Где ты", artist: "Аслан & Marina", cover: "images/cover-69.jpg", src: "audio/69.mp3" },
    { number: 70, title: "Мой мармеладный", artist: "Катя Лель", cover: "images/cover-70.jpg", src: "audio/70.mp3" },
    { number: 71, title: "Дни и ночи", artist: "Джиган", cover: "images/cover-71.jpg", src: "audio/71.mp3" },
    { number: 72, title: "КАК MOMMY", artist: "Instasamka", cover: "images/cover-72.jpg", src: "audio/72.mp3" },
    { number: 73, title: "Кайф ты поймала", artist: "Konfuz", cover: "images/cover-73.jpg", src: "audio/73.mp3" },
    { number: 74, title: "Самба белого мотылька", artist: "Валерий Меладзе", cover: "images/cover-74.jpg", src: "audio/74.mp3" },
    { number: 75, title: "Любовь моя", artist: "Хамелеон", cover: "images/cover-75.jpg", src: "audio/75.mp3" },
    { number: 76, title: "Базовый минимум", artist: "Sabi, Mia Boyka", cover: "images/cover-76.jpg", src: "audio/76.mp3" },
    { number: 77, title: "Посмотри в глаза", artist: "Наталия Ветлицкая", cover: "images/cover-77.jpg", src: "audio/77.mp3" },
    { number: 78, title: "Coco Jambo", artist: "Cover Masters", cover: "images/cover-78.jpg", src: "audio/78.mp3" },
    { number: 79, title: "Ресницы", artist: "Братья Грим", cover: "images/cover-79.jpg", src: "audio/79.mp3" },
    { number: 80, title: "Знак водолея", artist: "Винтаж", cover: "images/cover-80.jpg", src: "audio/80.mp3" },
    { number: 81, title: "Кто ты", artist: "Градусы", cover: "images/cover-81.jpg", src: "audio/81.mp3" },
    { number: 82, title: "Песня настоящего фаната Кайли Миноуг", artist: "Мигель", cover: "images/cover-82.jpg", src: "audio/82.mp3" },
    { number: 83, title: "Baby mama", artist: "Скриптонит, Райда", cover: "images/cover-83.jpg", src: "audio/83.mp3" },
    { number: 84, title: "In da club", artist: "50 CENT", cover: "images/cover-84.jpg", src: "audio/84.mp3" },
    { number: 85, title: "Крошка моя", artist: "Руки Вверх", cover: "images/cover-85.jpg", src: "audio/85.mp3" },
    { number: 86, title: "Зной моей души", artist: "Двое", cover: "images/cover-86.jpg", src: "audio/86.mp3" },
    { number: 87, title: "Электричка", artist: "Алена Апина", cover: "images/cover-87.jpg", src: "audio/87.mp3" },
    { number: 88, title: "Все решено", artist: "Гости из будущего", cover: "images/cover-88.jpg", src: "audio/88.mp3" },
    { number: 89, title: "Гори-гори ясно", artist: "Балаган лимитед", cover: "images/cover-89.jpg", src: "audio/89.mp3" },
    { number: 90, title: "Подождем", artist: "Игорек", cover: "images/cover-90.jpg", src: "audio/90.mp3" },
    { number: 91, title: "Марджанджа", artist: "Михаил Шуфутинский", cover: "images/cover-91.jpg", src: "audio/91.mp3" },
    { number: 92, title: "Афтерпати", artist: "Unqie, Nkeeei, xxxmanera", cover: "images/cover-92.jpg", src: "audio/92.mp3" },
    { number: 93, title: "Новогодняя", artist: "Дилижанс", cover: "images/cover-93.jpg", src: "audio/93.mp3" },
    { number: 94, title: "Фиеста", artist: "Aarne, Yanix", cover: "images/cover-94.jpg", src: "audio/94.mp3" },
    { number: 95, title: "Hoodak MP3", artist: "Bid Baby Tape, Aarne", cover: "images/cover-95.jpg", src: "audio/95.mp3" },
    { number: 96, title: "Холостяк", artist: "ЛСП, Feduk,  Егор Крид", cover: "images/cover-96.jpg", src: "audio/96.mp3" },
    { number: 97, title: "Mamacita", artist: "Yanix", cover: "images/cover-97.jpg", src: "audio/97.mp3" },
    { number: 98, title: "Тает Лед", artist: "Грибы", cover: "images/cover-98.jpg", src: "audio/98.mp3" },
    { number: 99, title: "Патимэйкер", artist: "Пика", cover: "images/cover-99.jpg", src: "audio/99.mp3" }
];

function renderBarrels() {
    barrelGrid.innerHTML = '';
    tracks.forEach(track => {
        const button = document.createElement('button');
        button.className = 'barrel';
        button.dataset.number = track.number;
        button.innerHTML = `
            <div class="barrel-face">
                <span class="barrel-number">${track.number}</span>
            </div>
        `;
        if (selectedSet.has(track.number)) {
            button.classList.add('used');
        }
        button.addEventListener('click', () => handleBarrelClick(track));
        barrelGrid.appendChild(button);
    });
    
    updateSelectedCounter();
}

function updateSelectedCounter() {
    selectedCount.textContent = selectedSet.size;
}
function handleBarrelClick(track) {
    selectedSet.add(track.number);
    markBarrelUsed(track.number);
        openSongPage(track);
}

function markBarrelUsed(number) {
    const button = barrelGrid.querySelector(`[data-number="${number}"]`);
    if (button) {
        button.classList.add('used');
    }
    updateSelectedCounter();
}

let songParticlesInterval = null;

function openSongPage(track) {
    page2.classList.add('hidden');
    stopPage2Effects(); 
    page3.classList.remove('hidden');
    document.body.classList.add('song-open');

    songCover.src = track.cover;
    songCover.alt = `Обложка ${track.title}`;
    songTitle.textContent = track.title;
    // Добавляем класс для длинных названий
    if (track.title.length > 25 || track.number === 82) {
        songTitle.classList.add('long-title');
    } else {
        songTitle.classList.remove('long-title');
    }
    songArtist.textContent = track.artist;
    songNumber.textContent = `Бочонок ${track.number}`;

    songAudio.src = track.src;
    songAudio.currentTime = 0;
    
    updateTimeDisplay();
    updatePlayPauseIcon();

    const tryPlay = () => songAudio.play().catch(() => {});
    setTimeout(tryPlay, 80);
    
    startSongParticles();
}
function startSongParticles() {
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');

    if (!particlesContainer || !sparklesContainer) return;
    
    if (songParticlesInterval) {
        clearInterval(songParticlesInterval);
    }
    songParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 1500);
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
        }, i * 300);
    }
}

function createSongParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'song-particle';
    
    const size = 6 + Math.random() * 14; 
    const blur = Math.random() * 3; 
    const opacity = 0.4 + Math.random() * 0.6; 
    
    particle.style.position = 'absolute';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    // Pinkish/White gradient
    particle.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 192, 203, 0.6) 60%, transparent 100%)';
    particle.style.borderRadius = '50%';
    particle.style.filter = `blur(${blur}px)`;
    particle.style.opacity = '0';
    particle.style.boxShadow = `0 0 ${5 + Math.random() * 10}px rgba(255, 105, 180, 0.5)`;
    
    const startX = Math.random() * 100; 
    particle.style.left = startX + '%';
    particle.style.top = -20 + 'px';
    
    container.appendChild(particle);
    
    const duration = 10000 + Math.random() * 15000; 
    const endY = window.innerHeight + 50;
    
    const keyframes = [];
    const steps = 10;
    const swayAmplitude = 30 + Math.random() * 50; 
    
    for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        const y = -20 + progress * (endY + 20); 
        const sway = Math.sin(progress * Math.PI * (2 + Math.random())) * swayAmplitude;
        
        keyframes.push({
            transform: `translate(${sway}px, ${y}px) scale(${1 - progress * 0.2})`, 
            opacity: i === 0 || i === steps ? 0 : opacity, 
            offset: progress
        });
    }
    
    particle.animate(keyframes, {
        duration: duration,
        easing: 'linear', 
        fill: 'forwards'
    }).onfinish = () => {
        if (particle.parentElement) {
            particle.remove();
        }
    };
}
function closeSongPage() {
    songAudio.pause();
    songAudio.currentTime = 0;
    page3.classList.add('hidden');
    page2.classList.remove('hidden');
    document.body.classList.remove('song-open');
    page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    startPage2Effects(); 
    
    if (songParticlesInterval) {
        clearInterval(songParticlesInterval);
        songParticlesInterval = null;
    }
    
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');

    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
}

let heroParticlesInterval = null;
let heroSparklesInterval = null;
let page2ParticlesInterval = null;
let page2SparklesInterval = null;
let page2RainInterval = null;

function stopHeroEffects() {
    if (heroParticlesInterval) {
        clearInterval(heroParticlesInterval);
        heroParticlesInterval = null;
    }
    if (heroSparklesInterval) {
        clearInterval(heroSparklesInterval);
        heroSparklesInterval = null;
    }
    const particlesContainer = document.querySelector('#page1 .floating-particles');
    const sparklesContainer = document.querySelector('#page1 .sparkles-container');
    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
}

function startPage2Effects() {
    const particlesContainer = document.querySelector('#page2 .floating-particles');
    const sparklesContainer = document.querySelector('#page2 .sparkles-container');
    
    if (!particlesContainer) return;
    
    stopPage2Effects();

    page2ParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 1500);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
        }, i * 300);
    }
}

function stopPage2Effects() {
    if (page2ParticlesInterval) {
        clearInterval(page2ParticlesInterval);
        page2ParticlesInterval = null;
    }
    if (page2RainInterval) {
        clearInterval(page2RainInterval);
        page2RainInterval = null;
    }
    
    const particlesContainer = document.querySelector('#page2 .floating-particles');
    const sparklesContainer = document.querySelector('#page2 .sparkles-container');
    const rainContainer = document.querySelector('#page2 .golden-rain-container');
    
    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
    if (rainContainer) rainContainer.remove(); 
}

function createVictoryConfetti(container) {
    // Pink, Gold, White, Deep Pink
    const colors = ['#ffd700', '#ff69b4', '#ff1493', '#ffffff', '#db7093'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'victory-confetti';
        
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        const startY = -20;
        const endY = window.innerHeight + 50;
        const horizontalDrift = (Math.random() - 0.5) * 200;
        const rotation = Math.random() * 720;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';
        confetti.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
        container.appendChild(confetti);
        const animation = confetti.animate([
            {
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`,
                opacity: 0.3
            }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}
function handleVideoEnd() {
    const video = document.getElementById('bingoVideo');
    if (!video) return;
    video.style.opacity = '0';
    video.style.visibility = 'hidden';
}

function handleVideoTimeUpdate() {
    const video = document.getElementById('bingoVideo');
    if (!video || !video.duration) return;
    
    const currentTime = video.currentTime;
    const duration = video.duration;
    const fadeStartTime = duration - 2;
    if (currentTime >= fadeStartTime) {
        const fadeProgress = (currentTime - fadeStartTime) / 2; 
        const opacity = 0.7 * (1 - fadeProgress);
        video.style.opacity = opacity;
    } else {
        video.style.opacity = '0.7';
    }
}

function showBingoAnimationPage2() {
    const bingoAnimation = document.getElementById('bingoAnimationPage2');
    const video = document.getElementById('bingoVideo');
    if (!bingoAnimation) return;
    
    const isHidden = bingoAnimation.classList.contains('hidden');
    const isActive = bingoAnimation.classList.contains('active');
    
    if (isHidden || !isActive) {
        
        bingoAnimation.classList.remove('hidden');
        bingoAnimation.style.opacity = '0';
        const spans = bingoAnimation.querySelectorAll('.bingo-text-page2 span');
        spans.forEach(span => {
            span.style.animation = 'none';
        });
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                spans.forEach(span => {
                    span.style.animation = '';
                });
                bingoAnimation.classList.add('active');
                bingoAnimation.style.opacity = '1';
                if (video) {
                    video.style.opacity = '0.7';
                    video.style.visibility = 'visible';
                    video.currentTime = 0;
                    
                    // Очищаем предыдущие обработчики
                    video.removeEventListener('ended', handleVideoEnd);
                    video.removeEventListener('timeupdate', handleVideoTimeUpdate);
                    
                    // Функция для начала воспроизведения после загрузки
                    const handleVideoCanPlay = () => {
                        video.muted = false; // Включаем звук
                        video.play().catch(err => console.log('Video play error:', err));
                    };
                    
                    // Удаляем предыдущий обработчик если был
                    const oldCanPlayHandler = video._canPlayHandler;
                    if (oldCanPlayHandler) {
                        video.removeEventListener('canplaythrough', oldCanPlayHandler);
                    }
                    
                    // Сохраняем ссылку на обработчик для последующего удаления
                    video._canPlayHandler = handleVideoCanPlay;
                    
                    // Проверяем, готово ли видео к воспроизведению
                    if (video.readyState >= 3) { // HAVE_FUTURE_DATA или выше
                        handleVideoCanPlay();
                    } else {
                        // Ждем загрузки видео
                        video.addEventListener('canplaythrough', handleVideoCanPlay, { once: true });
                        // Начинаем загрузку если еще не начата
                        video.load();
                    }
                    
                    video.addEventListener('ended', handleVideoEnd);
                    video.addEventListener('timeupdate', handleVideoTimeUpdate);
                }
                
            });
        });
    } else {
        bingoAnimation.style.opacity = '0';
        if (video) {
            video.pause();
        }
        
        setTimeout(() => {
            bingoAnimation.classList.remove('active');
            bingoAnimation.classList.add('hidden');
            const spans = bingoAnimation.querySelectorAll('.bingo-text-page2 span');
            spans.forEach(span => {
                span.style.animation = 'none';
            });
            
        }, 500);
    }
}

// Function createBackgroundTree removed
function removedBackgroundTree() {}

function startHeroEffects() {
    const particlesContainer = document.querySelector('#page1 .floating-particles');
    const sparklesContainer = document.querySelector('#page1 .sparkles-container');
    
    if (!particlesContainer) return;

    if (heroParticlesInterval) {
        clearInterval(heroParticlesInterval);
    }
    if (heroSparklesInterval) {
        clearInterval(heroSparklesInterval);
    }
    
    heroParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
            if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 100);
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
        }, i * 30);
    }

}

const MAX_RAIN_DROPS = 300; 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !page3.classList.contains('hidden')) {
        closeSongPage();
    }
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        
        if (!page3.classList.contains('hidden')) {
            if (songAudio.paused) {
                songAudio.play();
            } else {
                songAudio.pause();
            }
            updatePlayPauseIcon();
        } else if (!page2.classList.contains('hidden')) {
            showBingoAnimationPage2();
        }
    }
});

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateTimeDisplay() {
    if (!currentTimeEl || !songAudio) return;
    
    currentTimeEl.textContent = formatTime(songAudio.currentTime);
    
    if (songAudio.duration) {
        const totalTimeEl = document.getElementById('totalTime');
        if (totalTimeEl) totalTimeEl.textContent = formatTime(songAudio.duration);
        
        const progress = (songAudio.currentTime / songAudio.duration) * 100;
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressSlider) progressSlider.value = progress;
    }
}

function updatePlayPauseIcon() {
    if (!playPauseBtn || !songAudio) return;
    
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const songCard = document.querySelector('.song-card');
    
    if (!playIcon || !pauseIcon) return;
    
    if (songAudio.paused) {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        if (songCard) songCard.classList.remove('is-playing');
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        if (songCard) songCard.classList.add('is-playing');
    }
}

if (songAudio) {
    songAudio.addEventListener('play', updatePlayPauseIcon);
    songAudio.addEventListener('pause', updatePlayPauseIcon);
    songAudio.addEventListener('timeupdate', updateTimeDisplay);
    songAudio.addEventListener('loadedmetadata', () => {
        updateTimeDisplay();
    });
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (songAudio.paused) {
            songAudio.play();
        } else {
            songAudio.pause();
        }
        updatePlayPauseIcon();
    });
}

if (progressSlider) {
    progressSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        if (songAudio.duration) {
            songAudio.currentTime = (value / 100) * songAudio.duration;
            if (progressFill) progressFill.style.width = value + '%';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const page1Element = document.getElementById('page1');
    const page2Element = document.getElementById('page2');
    const page3Element = document.getElementById('page3');
    const startBtnElement = document.getElementById('startGame');
    const barrelGridElement = document.getElementById('barrelGrid');
    const selectedCountElement = document.getElementById('selectedCount');
    const songCoverElement = document.getElementById('songCover');
    const songTitleElement = document.getElementById('songTitle');
    const songArtistElement = document.getElementById('songArtist');
    const songNumberElement = document.getElementById('songNumber');
    const songAudioElement = document.getElementById('songAudio');
    const playPauseBtnElement = document.getElementById('playPauseBtn');
    const currentTimeElElement = document.getElementById('currentTime');
    const progressFillElement = document.getElementById('progressFill');
    const progressSliderElement = document.getElementById('progressSlider');

    Object.assign(window, {
        page1: page1Element,
        page2: page2Element,
        page3: page3Element,
        startBtn: startBtnElement,
        barrelGrid: barrelGridElement,
        selectedCount: selectedCountElement,
        songCover: songCoverElement,
        songTitle: songTitleElement,
        songArtist: songArtistElement,
        songNumber: songNumberElement,
        songAudio: songAudioElement,
        playPauseBtn: playPauseBtnElement,
        currentTimeEl: currentTimeElElement,
        progressFill: progressFillElement,
        progressSlider: progressSliderElement
    });

    renderBarrels();
    // startHeroEffects();
    
    // Предзагрузка видео для анимации бинго
    const bingoVideo = document.getElementById('bingoVideo');
    if (bingoVideo) {
        bingoVideo.load(); // Начинаем загрузку видео заранее
    }

    if (startBtnElement) {
        startBtnElement.addEventListener('click', () => {
            const bingoAnimation = document.getElementById('bingoAnimation');
            if (bingoAnimation) {
                bingoAnimation.classList.remove('hidden');
                bingoAnimation.classList.remove('darken');
                bingoAnimation.style.opacity = '1';
                
                for (let i = 0; i < 100; i++) {
                    const snow = document.createElement('div');
                    snow.className = 'bingo-snow';
                    const size = Math.random() * 5 + 2 + 'px';
                    snow.style.width = size;
                    snow.style.height = size;
                    snow.style.left = Math.random() * 100 + 'vw';
                    snow.style.opacity = Math.random();
                    snow.style.animationDuration = Math.random() * 2 + 1 + 's';
                    snow.style.animationDelay = Math.random() * 2 + 's';
                    bingoAnimation.appendChild(snow);
                }

                setTimeout(() => {
                    bingoAnimation.classList.add('darken');
                }, 1800); 
            }

            setTimeout(() => {
                    stopHeroEffects();
                const page1 = document.getElementById('page1');
                const page2 = document.getElementById('page2');
                
                if (page1) page1.classList.add('hidden');
                document.body.classList.add('blurred-bg');
                // Removed side trees class
                
                if (page2) {
                    page2.classList.remove('hidden');
                    page2.style.opacity = '0';
                    setTimeout(() => {
                        page2.style.opacity = '1';
                            startPage2Effects();
                        }, 50);
                }

                if (bingoAnimation) {
                    bingoAnimation.style.opacity = '0';
                    setTimeout(() => {
                        bingoAnimation.classList.add('hidden');
                    }, 1000); 
                    
                    const snows = bingoAnimation.querySelectorAll('.bingo-snow');
                    snows.forEach(s => s.remove());
                }

                // Removed side tree creation
            }, 2600); 
        });
    }
});
