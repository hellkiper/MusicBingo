const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const startBtn = document.getElementById('startGame');
const barrelGrid = document.getElementById('barrelGrid');
const selectedCount = document.getElementById('selectedCount');
const songCover = document.getElementById('songCover');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songNumber = document.getElementById('songNumber');
const songAudio = document.getElementById('songAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const currentTimeEl = document.getElementById('currentTime');
const progressFill = document.getElementById('progressFill');
const progressSlider = document.getElementById('progressSlider');

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
    { number: 96, title: "Холостяк", artist: "ЛСП, Feduk, Егор Крид", cover: "images/cover-96.jpg", src: "audio/96.mp3" },
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

/* Функция больше не нужна, управление через CSS Grid
function applyCheckerboardLayout() {
    ...
}
*/

function updateSelectedCounter() {
    selectedCount.textContent = selectedSet.size;
}

function persistSelected() {
}

function handleBarrelClick(track) {
    const button = barrelGrid.querySelector(`[data-number="${track.number}"]`);
    if (!button) return;
    
    selectedSet.add(track.number);
    markBarrelUsed(track.number);
    

    const rect = button.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    
   
    const clone = button.cloneNode(true);
    clone.classList.add('animating');
    clone.style.position = 'fixed';
    clone.style.left = startX + 'px';
    clone.style.top = startY + 'px';
    clone.style.transform = 'translate(-50%, -50%)';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    document.body.appendChild(clone);
    
    // Скрываем оригинальный бочонок
    button.style.opacity = '0';
    
    // Вычисляем размер для 120% экрана (увеличили размер вылета)
    const screenSize = Math.min(window.innerWidth, window.innerHeight);
    const targetSize = screenSize * 1.2;
    const initialSize = rect.width;
    const scaleToTarget = targetSize / initialSize;
    
    // Анимация увеличения и центрирования с сильным затемнением
    const moveAnimation = clone.animate([
        {
            left: startX + 'px',
            top: startY + 'px',
            transform: 'translate(-50%, -50%) scale(1)',
            filter: 'brightness(1)',
            offset: 0
        },
        {
            left: centerX + 'px',
            top: centerY + 'px',
            transform: `translate(-50%, -50%) scale(${scaleToTarget * 0.6})`,
            filter: 'brightness(0.3)',
            offset: 0.3
        },
        {
            left: centerX + 'px',
            top: centerY + 'px',
            transform: `translate(-50%, -50%) scale(${scaleToTarget})`,
            filter: 'brightness(0.05)',
            opacity: 0,
            offset: 1
        }
    ], {
        duration: 900,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    moveAnimation.onfinish = () => {
        clone.remove();
        button.style.opacity = '';
    openSongPage(track);
    };
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
    
    // Запускаем анимацию частиц
    startSongParticles();
}

let songSparklesInterval = null;
let songLinesInterval = null;

function startSongParticles() {
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');
    const linesContainer = page3.querySelector('.floating-lines');
    const notesContainer = page3.querySelector('.music-notes');
    
    if (!particlesContainer || !sparklesContainer || !linesContainer || !notesContainer) return;
    
    // Очищаем предыдущие эффекты
    if (songParticlesInterval) {
        clearInterval(songParticlesInterval);
    }
    if (songNotesInterval) {
        clearInterval(songNotesInterval);
    }
    if (songSparklesInterval) {
        clearInterval(songSparklesInterval);
    }
    if (songLinesInterval) {
        clearInterval(songLinesInterval);
    }
    
    // Создаем частицы каждые 1.5 секунды (чаще)
    songParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 1500);
    
    // Создаем искры каждые 800мс
    songSparklesInterval = setInterval(() => {
        createSparkleEffect(sparklesContainer);
    }, 800);
    
    // Летающие музыкальные ноты
    songNotesInterval = setInterval(() => {
        createMusicNote(notesContainer);
        if (Math.random() > 0.6) {
            createMusicNote(notesContainer);
        }
    }, 1100);
    
    // Создаем плавающие линии каждые 3 секунды
    songLinesInterval = setInterval(() => {
        createFloatingLine(linesContainer);
    }, 3000);
    
    // Создаем начальные эффекты
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
    
    // Создаем начальные линии
    setTimeout(() => createFloatingLine(linesContainer), 500);
    setTimeout(() => createFloatingLine(linesContainer), 2000);
}

function createSongParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'song-particle';
    const colors = [
        'rgba(234, 191, 99, 0.9)', 
        'rgba(255, 215, 0, 0.8)', 
        'rgba(255, 200, 87, 0.85)',
        'rgba(255, 180, 50, 0.75)',
        'rgba(255, 220, 100, 0.8)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'absolute';
    const size = 8 + Math.random() * 12;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 25px ${color}, 0 0 50px ${color}, 0 0 75px ${color}`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = '0';
    
    container.appendChild(particle);
    
    // Анимация появления и движения
    const duration = 8 + Math.random() * 4;
    const moveX = (Math.random() - 0.5) * 300;
    const moveY = (Math.random() - 0.5) * 300;
    
    particle.animate([
        { 
            opacity: 0, 
            transform: 'translate(0, 0) scale(0)' 
        },
        { 
            opacity: 1, 
            transform: 'translate(0, 0) scale(1)',
            offset: 0.1
        },
        { 
            opacity: 0.9, 
            transform: `translate(${moveX}px, ${moveY}px) scale(1.3)`,
            offset: 0.5
        },
        { 
            opacity: 0, 
            transform: `translate(${moveX * 1.5}px, ${moveY * 1.5}px) scale(0)`
        }
    ], {
        duration: duration * 1000,
        easing: 'ease-in-out'
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
    const colors = ['rgba(234, 191, 99, 1)', 'rgba(255, 215, 0, 1)', 'rgba(255, 200, 87, 1)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Создаем несколько искр
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
    note.style.color = `hsl(42, 90%, ${65 + Math.random() * 10}%)`;
    
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
    // requestAnimationFrame(applyCheckerboardLayout);
    
    // Останавливаем все эффекты
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
    if (songLinesInterval) {
        clearInterval(songLinesInterval);
        songLinesInterval = null;
    }
    
    // Очищаем контейнеры
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');
    const linesContainer = page3.querySelector('.floating-lines');
    const notesContainer = page3.querySelector('.music-notes');
    
    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
    if (linesContainer) {
        const dynamicLines = linesContainer.querySelectorAll('.dynamic-line');
        dynamicLines.forEach(line => line.remove());
    }
    if (notesContainer) notesContainer.innerHTML = '';
}

let heroParticlesInterval = null;
let heroSparklesInterval = null;

// Запускаем эффекты на первой странице при загрузке
function startHeroEffects() {
    const particlesContainer = document.querySelector('#page1 .floating-particles');
    const sparklesContainer = document.querySelector('#page1 .sparkles-container');
    
    if (!particlesContainer) return;
    
    // Очищаем предыдущие эффекты
    if (heroParticlesInterval) {
        clearInterval(heroParticlesInterval);
    }
    if (heroSparklesInterval) {
        clearInterval(heroSparklesInterval);
    }
    
    // Создаем частицы каждые 1.5 секунды
    heroParticlesInterval = setInterval(() => {
        createSongParticle(particlesContainer);
        if (Math.random() > 0.5) {
            createSongParticle(particlesContainer);
        }
    }, 1500);
    
    // Создаем искры каждые 800мс
    heroSparklesInterval = setInterval(() => {
        createSparkleEffect(sparklesContainer);
    }, 800);
    
    
    // Создаем начальные эффекты
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createSongParticle(particlesContainer);
            if (i % 2 === 0) {
                createSparkleEffect(sparklesContainer);
            }
        }, i * 300);
    }
    
    // Создаем начальные линии
    setTimeout(() => createFloatingLine(linesContainer), 500);
    setTimeout(() => createFloatingLine(linesContainer), 2000);
}

let page2RainInterval = null;
const MAX_RAIN_DROPS = 150; // Увеличили максимальное количество капель (было 80)

function startPage2GoldenRain() {
    const page2Container = document.querySelector('#page2');
    if (!page2Container) return;
    
    // Очищаем предыдущий интервал
    if (page2RainInterval) {
        clearInterval(page2RainInterval);
    }
    
    // Создаем контейнер для дождя, если его нет
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
    
    // Создаем капли постоянно во время анимации (чаще)
    page2RainInterval = setInterval(() => {
        if (!isBingoActive) {
            clearInterval(page2RainInterval);
            page2RainInterval = null;
            return;
        }
        
        // Проверяем количество капель на экране
        const currentDrops = rainContainer.querySelectorAll('.golden-rain').length;
        
        // Создаем новые капли только если их меньше максимума
        if (currentDrops < MAX_RAIN_DROPS) {
            const dropsToCreate = Math.min(5, MAX_RAIN_DROPS - currentDrops);
            for (let i = 0; i < dropsToCreate; i++) {
                createGoldenRain(rainContainer);
            }
        }
    }, 100); // Вернули интервал 100мс (было 200мс)
    
    // Создаем начальные капли сразу (больше)
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createGoldenRain(rainContainer);
        }, i * 50);
    }
}

startBtn.addEventListener('click', () => {
    // Показываем анимацию БИНГО (только надпись, без фоновых)
    const bingoAnimation = document.getElementById('bingoAnimation');
    
    bingoAnimation.classList.remove('hidden');
    
    // Переход на вторую страницу после анимации (3 секунды)
    setTimeout(() => {
        bingoAnimation.classList.add('hidden');
        
        // Анимация перехода
        page1.style.opacity = '0';
        page1.style.transform = 'scale(0.9)';
        page1.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
    page1.classList.add('hidden');
            page1.style.opacity = '';
            page1.style.transform = '';
            page1.style.transition = '';
            
    page2.classList.remove('hidden');
            page2.style.opacity = '0';
            page2.style.transform = 'scale(1.1)';
            page2.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                page2.style.opacity = '1';
                page2.style.transform = 'scale(1)';
    page2.scrollIntoView({ behavior: 'smooth' });
                requestAnimationFrame(applyCheckerboardLayout);
            }, 50);
        }, 500);
    }, 3000);
});

// Пересчитываем "шахматку" при ресайзе
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
        
        // На второй странице - анимация БИНГО
        if (!page2.classList.contains('hidden')) {
            toggleBingoAnimation();
        }
        // На третьей странице - play/pause
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

// Аудио контекст для звуков победы
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bingoSoundInterval = null;

// Создаем буфер белого шума для эффектов
const bufferSize = audioContext.sampleRate * 2; // 2 секунды
const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
const output = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
}

function playFireworkSound() {
    const t = audioContext.currentTime;
    
    // Звук запуска (свист)
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

    // Звук взрыва (шум)
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(100, t + 0.1);
    noiseFilter.frequency.exponentialRampToValueAtTime(1000, t + 0.15);
    noiseFilter.frequency.exponentialRampToValueAtTime(20, t + 1.5); // Затухание частоты
    
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
    // Мажорное трезвучие (C-E-G)
    const notes = [523.25, 659.25, 783.99, 1046.50]; 
    
    notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.type = 'triangle'; // Более мягкий звук для фона
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
    
    // Сразу играем приветственный звук
    playFanfareSound();
    playFireworkSound();
    
    bingoSoundInterval = setInterval(() => {
        if (!isBingoActive) return;
        
        const rand = Math.random();
        
        if (rand < 0.4) {
            playFireworkSound(); // Взрыв фейерверка (40% шанс)
        } else if (rand < 0.7) {
            playPopperSound();   // Хлопушка (30% шанс)
        } else {
             // Иногда добавляем музыкальный акцент (30% шанс)
             if (Math.random() > 0.5) playFanfareSound();
        }
        
    }, 400); // Звуки каждые 400мс
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
        // Выключаем анимацию
        isBingoActive = false;
        bingoAnimation.classList.add('hidden');
        
        stopBingoSounds(); // Останавливаем звуки
        
        // Останавливаем дождь
        if (page2RainInterval) {
            clearInterval(page2RainInterval);
            page2RainInterval = null;
        }
        const rainContainer = document.querySelector('#page2 .golden-rain-container');
        if (rainContainer) {
            rainContainer.innerHTML = '';
        }
    } else {
        // Включаем анимацию
        isBingoActive = true;
        bingoAnimation.classList.remove('hidden');
        
        // Запускаем звуки
        startBingoSounds();
        
        // Запускаем золотой дождь только если мы на второй странице
        if (!page2.classList.contains('hidden')) {
            startPage2GoldenRain();
        }
    }
}

function startContinuousEffects(container) {
    const colors = ['#ff0000', '#ff6b6b', '#ffd700', '#ffa500', '#ff8c00', '#f9ca24', '#f0932b', '#eb4d4b', '#ff6347', '#ff4500', '#ff1493', '#ff00ff'];
    
    // Создаем эффекты каждые 100мс (чаще)
    animationInterval = setInterval(() => {
        if (!isBingoActive) return;
        
        // Фейрверки - больше и чаще
        if (Math.random() > 0.1) {
            createFirework(container, colors);
            if (Math.random() > 0.5) {
                createFirework(container, colors);
            }
        }
        
        // Хлопушки
        if (Math.random() > 0.4) {
            createPopper(container, colors);
        }
        
        // Огни
        if (Math.random() > 0.5) {
            createSparkle(container, colors);
        }
        
        // Золотой дождь - реже
        if (Math.random() > 0.6) {
            createGoldenRain(container);
        }
    }, 100);
    
    // Первый взрыв сразу - больше фейрверков
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFirework(container, colors);
            if (i % 2 === 0) {
                createPopper(container, colors);
            }
            if (i % 3 === 0) {
                createGoldenRain(container);
            }
        }, i * 30);
    }
}

function createFirework(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Создаем центральную точку взрыва - больше размер
    const center = document.createElement('div');
    center.className = 'firework';
    center.style.left = x + 'px';
    center.style.top = y + 'px';
    center.style.background = color;
    center.style.boxShadow = `0 0 60px ${color}, 0 0 120px ${color}, 0 0 180px ${color}`;
    container.appendChild(center);
    
    // Создаем частицы - больше количество и размер
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 80 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = color;
        particle.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animationDelay = Math.random() * 0.2 + 's';
        container.appendChild(particle);
    }
    
    // Удаляем элементы после анимации
    setTimeout(() => {
        center.remove();
        container.querySelectorAll('.firework-particle').forEach(p => {
            if (p.parentElement === container) p.remove();
        });
    }, 1500);
}

function createPopper(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Создаем хлопушку - несколько взрывов подряд
    for (let pop = 0; pop < 3; pop++) {
        setTimeout(() => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const center = document.createElement('div');
            center.className = 'popper';
            center.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
            center.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
            center.style.background = color;
            center.style.boxShadow = `0 0 40px ${color}, 0 0 80px ${color}, 0 0 120px ${color}`;
            container.appendChild(center);
            
            // Частицы хлопушки
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * Math.PI * 2;
                const distance = 30 + Math.random() * 80;
                const particle = document.createElement('div');
                particle.className = 'popper-particle';
                particle.style.left = center.style.left;
                particle.style.top = center.style.top;
                particle.style.background = color;
                particle.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;
                particle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
                container.appendChild(particle);
            }
            
            setTimeout(() => {
                center.remove();
                container.querySelectorAll('.popper-particle').forEach(p => {
                    if (p.parentElement === container && Math.random() > 0.5) p.remove();
                });
            }, 1000);
        }, pop * 100);
    }
}

function createSparkle(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.background = color;
        sparkle.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}, 0 0 90px ${color}`;
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 20 + Math.random() * 40;
        sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentElement === container) sparkle.remove();
        }, 800);
    }
}

function createGoldenRain(container) {
    if (!container) return;
    
    // Проверяем количество капель перед созданием
    const currentDrops = container.querySelectorAll('.golden-rain').length;
    if (currentDrops >= MAX_RAIN_DROPS) return;
    
    const startX = Math.random() * window.innerWidth;
    // Увеличили количество капель за раз: 8-15 капель
    const dropCount = 8 + Math.floor(Math.random() * 8);
    const colors = ['#ffd700', '#ffa500', '#ff8c00', '#f9ca24', '#ffeb3b'];
    
    // Ограничиваем количество создаваемых капель
    const dropsToCreate = Math.min(dropCount, MAX_RAIN_DROPS - currentDrops);
    
    for (let i = 0; i < dropsToCreate; i++) {
        const drop = document.createElement('div');
        drop.className = 'golden-rain';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 1.5 + Math.random() * 2; // Размер капли: 1.5-3.5px
        const delay = Math.random() * 0.2;
        const speed = 1.5 + Math.random() * 1;
        const spread = (Math.random() - 0.5) * 250;
        
        drop.style.position = 'absolute';
        drop.style.left = (startX + spread) + 'px';
        drop.style.top = '-20px';
        drop.style.width = size + 'px';
        drop.style.height = size * 6 + 'px'; // Длинные капли: в 6 раз длиннее ширины
        drop.style.background = `linear-gradient(to bottom, ${color}, transparent)`;
        drop.style.borderRadius = '50%';
        drop.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        drop.style.opacity = '0';
        drop.style.willChange = 'transform, opacity'; // Оптимизация для браузера
        
        container.appendChild(drop);
        
        const duration = (2000 + Math.random() * 1000) * speed;
        
        const animation = drop.animate([
            { 
                opacity: 0, 
                transform: 'translateY(0) scale(0.5)' 
            },
            { 
                opacity: 0.9, 
                transform: 'translateY(0) scale(1)',
                offset: 0.1
            },
            { 
                opacity: 0.8, 
                transform: `translateY(${window.innerHeight + 100}px) scale(1)`,
                offset: 0.9
            },
            { 
                opacity: 0, 
                transform: `translateY(${window.innerHeight + 100}px) scale(0.5)`
            }
        ], {
            duration: duration,
            delay: delay * 1000,
            easing: 'linear'
        });
        
        // Удаляем элемент после анимации
        animation.onfinish = () => {
            if (drop.parentElement) {
                drop.remove();
            }
        };
        
        // Защита: удаляем элемент если анимация не завершилась через 5 секунд
        setTimeout(() => {
            if (drop.parentElement) {
                drop.remove();
            }
        }, duration + delay * 1000 + 5000);
    }
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

// ============================================
// ИНИЦИАЛИЗАЦИЯ И ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================

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

renderBarrels();

// Запускаем эффекты на первой странице
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startHeroEffects);
} else {
    startHeroEffects();
}
