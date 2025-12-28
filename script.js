const TOTAL_BARRELS = 99;
const selectedSet = new Set();

const tracks = [
    { number: 1, title: "Last Christmas", artist: "WHAM!", cover: "images/cover-01.jpg", src: "audio/01.mp3" },
    { number: 2, title: "Белая Стрекоза любви", artist: "Quest Pistols", cover: "images/cover-02.jpg", src: "audio/02.mp3" },
    { number: 3, title: "Love", artist: "Inna", cover: "images/cover-03.jpg", src: "audio/03.mp3" },
    { number: 4, title: "Чашка Кофию", artist: "Марина Хлебникова", cover: "images/cover-04.jpg", src: "audio/04.mp3" },
    { number: 5, title: "Улыбайся", artist: "IOWA", cover: "images/cover-05.jpg", src: "audio/05.mp3" },
    { number: 6, title: "Широка Река", artist: "Надежда Кадышева", cover: "images/cover-06.jpg", src: "audio/06.mp3" },
    { number: 7, title: "Люди меня люби", artist: "Гречка", cover: "images/cover-07.jpg", src: "audio/07.mp3" },
    { number: 8, title: "Хали-Гали, паратрупер", artist: "Леприконсы", cover: "images/cover-08.mp3", src: "audio/08.mp3" },
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
    { number: 49, title: "Moscow Nere sleep", artist: "DJ Smash", cover: "images/cover-49.jpg", src: "audio/49.mp3" },
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
    { number: 66, title: "Я плачу", artist: "A.V.G", cover: "images/cover-66.jpg", src: "audio/66.mp3" },
    { number: 67, title: "Этой ночью", artist: "Скачков", cover: "images/cover-67.jpg", src: "audio/67.mp3" },
    { number: 68, title: "Где ты", artist: "Aslan, Марина Алиева", cover: "images/cover-68.jpg", src: "audio/68.mp3" },
    { number: 69, title: "Ты так красива", artist: "Quest Pistols Show", cover: "images/cover-69.jpg", src: "audio/69.mp3" },
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

function persistSelected() {
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
let songNotesInterval = null;

function openSongPage(track) {
    page2.classList.add('hidden');
    stopPage2Effects(); 
    page3.classList.remove('hidden');
    document.body.classList.add('song-open');

    songCover.src = track.cover;
    songCover.alt = `Обложка ${track.title}`;
    songTitle.textContent = track.title;
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

let songSparklesInterval = null;
let songLinesInterval = null;

function startSongParticles() {
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');
    const notesContainer = page3.querySelector('.music-notes');

    if (!particlesContainer || !sparklesContainer || !notesContainer) return;
    
    if (songParticlesInterval) {
        clearInterval(songParticlesInterval);
    }
    if (songNotesInterval) {
        clearInterval(songNotesInterval);
    }
    if (songSparklesInterval) {
        clearInterval(songSparklesInterval);
    }
    
    songParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 1500);
    
    songSparklesInterval = setInterval(() => {
        createSparkleEffect(sparklesContainer);
    }, 800);
    
    songNotesInterval = setInterval(() => {
        createMusicNote(notesContainer);
        if (Math.random() > 0.6) {
            createMusicNote(notesContainer);
        }
    }, 1100);
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
            if (i % 2 === 0) {
                createSparkleEffect(sparklesContainer);
            }
        }, i * 300);
    }
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => createMusicNote(notesContainer), 200 + i * 180);
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
    particle.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 60%, transparent 100%)';
    particle.style.borderRadius = '50%';
    particle.style.filter = `blur(${blur}px)`;
    particle.style.opacity = '0';
    particle.style.boxShadow = `0 0 ${5 + Math.random() * 10}px rgba(255, 255, 255, 0.5)`;
    
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

function createSparkleEffect(container) {
    if (!container) return;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const colors = ['rgba(255, 215, 0, 1)', 'rgba(255, 223, 0, 1)', 'rgba(255, 250, 205, 1)']; 
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.left = (x + (Math.random() - 0.5) * 50) + 'px';
        sparkle.style.top = (y + (Math.random() - 0.5) * 50) + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = color;
        sparkle.style.borderRadius = '50%';
        sparkle.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;
        sparkle.style.opacity = '0';
        
        container.appendChild(sparkle);
        
        const angle = (Math.PI * 2 * i) / 4;
        const distance = 30 + Math.random() * 40;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        sparkle.animate([
            { opacity: 0, transform: 'translate(0, 0) scale(0)' },
            { opacity: 1, transform: 'translate(0, 0) scale(1)', offset: 0.2 },
            { opacity: 0, transform: `translate(${moveX}px, ${moveY}px) scale(0)` }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'ease-out'
        }).onfinish = () => {
            if (sparkle.parentElement) sparkle.remove();
        };
    }
}


function createMusicNote(container) {
    if (!container) return;
    
    const note = document.createElement('div');
    note.className = 'music-note';
    const symbols = ['♪', '♫', '♬'];
    note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    const size = 14 + Math.random() * 10;
    note.style.fontSize = `${size}px`;
    note.style.color = `hsl(50, 100%, ${50 + Math.random() * 20}%)`; 
    
    const startX = Math.random() * 100;
    const startY = 70 + Math.random() * 20;
    note.style.left = `${startX}%`;
    note.style.top = `${startY}%`;
    
    container.appendChild(note);
    
    const driftX = (Math.random() - 0.5) * 40;
    const floatY = -120 - Math.random() * 80;
    const rotateStart = (Math.random() - 0.5) * 40;
    const rotateEnd = rotateStart + (Math.random() - 0.5) * 120;
    const duration = 3200 + Math.random() * 1800;
    
    note.animate([
        { opacity: 0, transform: `translate(0, 0) scale(0.7) rotate(${rotateStart}deg)` },
        { opacity: 1, transform: `translate(${driftX * 0.4}px, ${floatY * 0.35}px) scale(1) rotate(${rotateStart * 0.6}deg)`, offset: 0.35 },
        { opacity: 0, transform: `translate(${driftX}px, ${floatY}px) scale(1.1) rotate(${rotateEnd}deg)` }
    ], {
        duration,
        easing: 'ease-out'
    }).onfinish = () => {
        if (note.parentElement) note.remove();
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
    if (songNotesInterval) {
        clearInterval(songNotesInterval);
        songNotesInterval = null;
    }
    if (songSparklesInterval) {
        clearInterval(songSparklesInterval);
        songSparklesInterval = null;
    }
    
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');
    const notesContainer = page3.querySelector('.music-notes');

    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
    if (notesContainer) notesContainer.innerHTML = '';
}

let heroParticlesInterval = null;
let heroSparklesInterval = null;
let page2ParticlesInterval = null;
let page2SparklesInterval = null;
let page2RainInterval = null;
let bingoRainInterval = null;

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
    
    page2SparklesInterval = setInterval(() => {
        createSparkleEffect(sparklesContainer);
    }, 800);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
            if (i % 2 === 0) createSparkleEffect(sparklesContainer);
        }, i * 300);
    }
}

function stopPage2Effects() {
    if (page2ParticlesInterval) {
        clearInterval(page2ParticlesInterval);
        page2ParticlesInterval = null;
    }
    if (page2SparklesInterval) {
        clearInterval(page2SparklesInterval);
        page2SparklesInterval = null;
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

function createBackgroundTree(container, leftPosition) {
    const tree = document.createElement('div');
    tree.className = 'bg-tree';
    
    tree.style.left = leftPosition + '%';
    
    const scale = 0.5 + Math.random() * 0.5;
    tree.style.width = (100 * scale) + 'px';
    tree.style.height = (140 * scale) + 'px';
    
    const bottomOffset = -5 - (Math.random() * 20);
    tree.style.bottom = bottomOffset + 'px';
    
    tree.style.animationDelay = Math.random() * -10 + 's';
    
    const blurVal = 1 + Math.random() * 2;
    const opacityVal = 0.3 + (scale / 2); 
    tree.style.filter = `blur(${blurVal}px)`;
    tree.style.opacity = opacityVal;
    
    container.appendChild(tree);
}

function startHeroEffects() {
    const particlesContainer = document.querySelector('#page1 .floating-particles');
    const sparklesContainer = document.querySelector('#page1 .sparkles-container');
    const forestContainer = document.querySelector('#page1 .background-forest');
    
    if (!particlesContainer) return;

    if (forestContainer && forestContainer.children.length === 0) {
        const count = 80;
        for (let i = 0; i < count; i++) {
            const step = 100 / (count - 1);
            const jitter = Math.random() * 1.2 - 0.6;
            const leftPos = (i * step) + jitter;
            createBackgroundTree(forestContainer, leftPos);
        }
    }

    if (heroParticlesInterval) {
        clearInterval(heroParticlesInterval);
    }
    if (heroSparklesInterval) {
        clearInterval(heroSparklesInterval);
    }
    
    heroParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.3) { 
            createSongParticle(particlesContainer);
        }
    }, 200);
    
    heroSparklesInterval = setInterval(() => {
        createSparkleEffect(sparklesContainer);
    }, 800);
    
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
            if (i % 5 === 0) {
                createSparkleEffect(sparklesContainer);
            }
        }, i * 50);
    }

}

const MAX_RAIN_DROPS = 300; 

function startPage2GoldenRain() {
    const page2Container = document.querySelector('#page2');
    if (!page2Container) return;
    
    if (page2RainInterval) {
        clearInterval(page2RainInterval);
    }
    
    let rainContainer = page2Container.querySelector('.golden-rain-container');
    if (!rainContainer) {
        rainContainer = document.createElement('div');
        rainContainer.className = 'golden-rain-container';
        rainContainer.style.position = 'absolute';
        rainContainer.style.inset = '0';
        rainContainer.style.pointerEvents = 'none';
        rainContainer.style.zIndex = '3';
        rainContainer.style.overflow = 'hidden';
        page2Container.style.position = 'relative';
        page2Container.appendChild(rainContainer);
    }
    
    page2RainInterval = setInterval(() => {
        const currentDrops = rainContainer.querySelectorAll('.golden-rain').length;
        if (currentDrops < MAX_RAIN_DROPS) {
            const dropsToCreate = Math.min(8, MAX_RAIN_DROPS - currentDrops);
            for (let i = 0; i < dropsToCreate; i++) {
                createGoldenRain(rainContainer);
            }
        }
    }, 50);
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createGoldenRain(rainContainer);
        }, i * 30);
    }
}


let checkerRaf = 0;
window.addEventListener('resize', () => {
    cancelAnimationFrame(checkerRaf);
    checkerRaf = requestAnimationFrame(applyCheckerboardLayout);
});

let isBingoActive = false;
let animationInterval = null;

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !page3.classList.contains('hidden')) {
        closeSongPage();
    }
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        
        if (!page2.classList.contains('hidden')) {
            toggleBingoAnimation();
        }
        else if (!page3.classList.contains('hidden')) {
            if (songAudio.paused) {
                songAudio.play();
            } else {
                songAudio.pause();
            }
            updatePlayPauseIcon();
        }
    }
});

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bingoSoundInterval = null;

const bufferSize = audioContext.sampleRate * 2; 
const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
const output = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
}

function playFireworkSound() {
    const t = audioContext.currentTime;
    
    const oscillator = audioContext.createOscillator();
    const oscGain = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(150, t);
    oscillator.frequency.exponentialRampToValueAtTime(600, t + 0.1);
    
    oscGain.gain.setValueAtTime(0.1, t);
    oscGain.gain.linearRampToValueAtTime(0.05, t + 0.1);
    oscGain.gain.linearRampToValueAtTime(0, t + 0.15);
    
    oscillator.connect(oscGain);
    oscGain.connect(audioContext.destination);
    oscillator.start(t);
    oscillator.stop(t + 0.15);

    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(100, t + 0.1);
    noiseFilter.frequency.exponentialRampToValueAtTime(1000, t + 0.15);
    noiseFilter.frequency.exponentialRampToValueAtTime(20, t + 1.5); 
    
    noiseGain.gain.setValueAtTime(0, t + 0.1);
    noiseGain.gain.linearRampToValueAtTime(1, t + 0.15);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 1.5);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);
    
    noise.start(t + 0.1);
    noise.stop(t + 2);
}

function playPopperSound() {
    const t = audioContext.currentTime;
    
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;
    
    noiseGain.gain.setValueAtTime(0, t);
    noiseGain.gain.linearRampToValueAtTime(0.8, t + 0.01);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);
    
    noise.start(t);
    noise.stop(t + 0.3);
}

function playFanfareSound() {
    const now = audioContext.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; 
    
    notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.type = 'triangle'; 
        osc.frequency.setValueAtTime(freq, now);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start(now);
        osc.stop(now + 0.5);
    });
}

function startBingoSounds() {
    if (bingoSoundInterval) clearInterval(bingoSoundInterval);
    
    playFanfareSound();
    playFireworkSound();
    
    bingoSoundInterval = setInterval(() => {
        if (!isBingoActive) return;
        
        const rand = Math.random();
        
        if (rand < 0.4) {
            playFireworkSound(); 
        } else if (rand < 0.7) {
            playPopperSound();   
        } else {
             if (Math.random() > 0.5) playFanfareSound();
        }
        
    }, 400); 
}

function stopBingoSounds() {
    if (bingoSoundInterval) {
        clearInterval(bingoSoundInterval);
        bingoSoundInterval = null;
    }
}

function toggleBingoAnimation() {
    const bingoAnimation = document.getElementById('bingoAnimation');
    
    if (isBingoActive) {
        isBingoActive = false;
        bingoAnimation.classList.add('hidden');
        
        const rainContainer = bingoAnimation.querySelector('.golden-rain-container');
        if (rainContainer) {
            rainContainer.remove();
        }
        if (page2RainInterval) {
            clearInterval(page2RainInterval);
            page2RainInterval = null;
        }
    } else {
        isBingoActive = true;
        bingoAnimation.classList.remove('hidden');
        
        startBingoRain(bingoAnimation);
    }
}

function startBingoRain(container) {
    if (page2RainInterval) {
        clearInterval(page2RainInterval);
    }
    
    let rainContainer = document.createElement('div');
    rainContainer.className = 'golden-rain-container';
    rainContainer.style.position = 'absolute';
    rainContainer.style.inset = '0';
    rainContainer.style.pointerEvents = 'none';
    rainContainer.style.zIndex = '-1'; 
    rainContainer.style.overflow = 'hidden';
    container.appendChild(rainContainer);
    
    page2RainInterval = setInterval(() => {
        if (!isBingoActive) {
            clearInterval(page2RainInterval);
            page2RainInterval = null;
            return;
        }
        
        const currentDrops = rainContainer.querySelectorAll('.golden-rain').length;
        if (currentDrops < MAX_RAIN_DROPS) {
            for (let i = 0; i < 4; i++) {
                createGoldenRain(rainContainer);
            }
        }
    }, 60); 
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            createGoldenRain(rainContainer, true); 
        }, i * 10);
    }
}

function startContinuousEffects(container) {
    const colors = ['#ffffff', '#ff0000', '#00ff00', '#ffd700', '#ff00ff', '#00ffff'];
    
    animationInterval = setInterval(() => {
        if (!isBingoActive) return;
        
        if (Math.random() > 0.3) {
            createFirework(container, colors);
        }
        
        if (Math.random() > 0.7) {
            createPopper(container, colors);
        }
        
        if (Math.random() > 0.8) {
            createSparkle(container, colors);
        }

        if (Math.random() > 0.4) {
            createSnow(container);
        }

        if (Math.random() > 0.85) {
            createBingoEmoji(container);
        }
        
    }, 200);
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework(container, colors);
            createSnow(container);
            if (i % 4 === 0) {
                createPopper(container, colors);
            }
        }, i * 200);
    }
}

function createFirework(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const scale = 0.5 + Math.random() * 1.5; 
    
    const center = document.createElement('div');
    center.className = 'firework';
    center.style.left = x + 'px';
    center.style.top = y + 'px';
    center.style.background = color;
    center.style.transform = `scale(${scale})`;
    center.style.boxShadow = `0 0 ${20 * scale}px ${color}`;
    container.appendChild(center);
    
    const particleCount = Math.floor(20 + Math.random() * 20);
    for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = (40 + Math.random() * 80) * scale;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = color;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        container.appendChild(particle);
    }
    
    setTimeout(() => {
        if(center.parentElement) center.remove();
    }, 1500);
}

function createPopper(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    for (let pop = 0; pop < 2; pop++) {
        setTimeout(() => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const center = document.createElement('div');
            center.className = 'popper';
            center.style.left = (x + (Math.random() - 0.5) * 60) + 'px';
            center.style.top = (y + (Math.random() - 0.5) * 60) + 'px';
            center.style.background = color;
            container.appendChild(center);
            
            for (let i = 0; i < 12; i++) {
                const angle = Math.random() * Math.PI * 2;
                const distance = 20 + Math.random() * 50;
                const particle = document.createElement('div');
                particle.className = 'popper-particle';
                particle.style.left = center.style.left;
                particle.style.top = center.style.top;
                particle.style.background = color;
                particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
                container.appendChild(particle);
            }
            
            setTimeout(() => {
                center.remove();
            }, 1000);
        }, pop * 200);
    }
}

function createSparkle(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.background = color;
        const angle = (Math.PI * 2 * i) / 5;
        const distance = 15 + Math.random() * 25;
        sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentElement === container) sparkle.remove();
        }, 800);
    }
}

function createSnow(container) {
    const count = 12;
    for (let i = 0; i < count; i++) {
        const snow = document.createElement('div');
        snow.className = 'snow-particle';
        const size = 3 + Math.random() * 6;
        snow.style.width = size + 'px';
        snow.style.height = size + 'px';
        snow.style.left = Math.random() * 100 + '%';
        snow.style.top = '-10px';
        snow.style.opacity = 0.5 + Math.random() * 0.5;
        snow.style.filter = `blur(${Math.random() * 2}px)`;
        container.appendChild(snow);

        const duration = 2500 + Math.random() * 2500;
        const drift = (Math.random() - 0.5) * 200;

        snow.animate([
            { transform: 'translateY(0) translateX(0)', opacity: snow.style.opacity },
            { transform: `translateY(${window.innerHeight + 20}px) translateX(${drift}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => snow.remove();
    }
}

function createBingoEmoji(container) {
    const emojis = ['❄️', '🎁', '☃️', '🎅', '🔔', '🕯️', '🍪'];
    const emoji = document.createElement('div');
    emoji.className = 'bingo-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.top = Math.random() * 100 + '%';
    emoji.style.fontSize = 2 + Math.random() * 3 + 'rem';
    container.appendChild(emoji);

    emoji.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 0 },
        { transform: 'scale(1.5) rotate(20deg)', opacity: 0.8, offset: 0.5 },
        { transform: 'scale(1) rotate(-20deg)', opacity: 0 }
    ], {
        duration: 3000,
        easing: 'ease-out'
    }).onfinish = () => emoji.remove();
}

function createGoldenRain(container, randomHeight = false) {
    if (!container) return;
    
    const currentDrops = container.querySelectorAll('.golden-rain').length;
    if (currentDrops >= MAX_RAIN_DROPS) return;
    
    const startX = Math.random() * window.innerWidth;
    const colors = ['#ffffff', '#f0f8ff', '#e0ffff', '#b0e0e6', '#fffafa'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 1.5 + Math.random() * 2;
    const speed = 1.0 + Math.random() * 1.5; 
    const durationBase = 1500 + Math.random() * 1000;
    const duration = durationBase / speed;
    
    const drop = document.createElement('div');
    drop.className = 'golden-rain';
    
    drop.style.position = 'absolute';
    drop.style.left = startX + 'px';
    drop.style.width = size + 'px';
    drop.style.height = size * 8 + 'px';
    drop.style.background = `linear-gradient(to bottom, ${color}, transparent)`;
    drop.style.borderRadius = '50%';
    drop.style.opacity = '0';
    
    let startY = -50;
    if (randomHeight) {
        startY = Math.random() * window.innerHeight;
        drop.style.opacity = '0.8'; 
    }
    drop.style.top = startY + 'px';
    
    container.appendChild(drop);
    
    const endY = window.innerHeight + 100;
    const distance = endY - startY;
    
    const actualDuration = randomHeight ? (duration * (distance / (window.innerHeight + 150))) : duration;

    const animation = drop.animate([
        { 
            opacity: randomHeight ? 0.8 : 0, 
            transform: 'translateY(0) scale(1)' 
        },
        { 
            opacity: 0.9, 
            transform: randomHeight ? `translateY(${distance * 0.1}px) scale(1)` : 'translateY(50px) scale(1)',
            offset: 0.1
        },
        { 
            opacity: 0.8, 
            transform: `translateY(${distance}px) scale(1)`,
            offset: 0.9
        },
        { 
            opacity: 0, 
            transform: `translateY(${distance + 50}px) scale(0.5)`
        }
    ], {
        duration: actualDuration,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        drop.remove();
    };
}


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
        const progress = (songAudio.currentTime / songAudio.duration) * 100;
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressSlider) progressSlider.value = progress;
    }
}

function updatePlayPauseIcon() {
    if (!playPauseBtn || !songAudio) return;
    
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    
    if (!playIcon || !pauseIcon) return;
    
    if (songAudio.paused) {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
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

    startHeroEffects();

    if (startBtnElement) {
        startBtnElement.addEventListener('click', () => {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }

            const bingoAnimation = document.getElementById('bingoAnimation');
            if (bingoAnimation) {
                startBingoShow(bingoAnimation);
            }
        });
    }
});

function startBingoShow(bingoAnimation) {
    isBingoActive = true;
    bingoAnimation.classList.remove('hidden');

    const colors = ['#ffffff', '#ff0000', '#00ff00', '#ffd700', '#ff00ff', '#00ffff'];
    for(let i=0; i<8; i++) {
        setTimeout(() => {
            createFirework(bingoAnimation, colors);
        }, i * 200);
    }

    startContinuousEffects(bingoAnimation);

    setTimeout(() => {
        stopHeroEffects();
        const page1 = document.getElementById('page1');
        const page2 = document.getElementById('page2');
        
        if (page1) page1.classList.add('hidden');
        document.body.classList.add('blurred-bg');
        document.body.classList.add('show-side-trees');
        
        if (page2) {
            page2.classList.remove('hidden');
            page2.style.opacity = '1';
            page2.style.transform = 'none';
            startPage2Effects();
        }
    }, 500);

    setTimeout(() => {
        bingoAnimation.classList.add('hidden');
        isBingoActive = false;
        if (animationInterval) clearInterval(animationInterval);
    }, 3000);
}
