// 3D Tilt Effect removed
// document.addEventListener('mousemove', (e) => { ... });

const TOTAL_BARRELS = 90;
const selectedSet = new Set();

const tracks = [
    { 
        number: 1, 
        title: "Чики", 
        artist: "Biffguyz", 
        src: "audio/01.mp3"
    },
    { 
        number: 2, 
        title: "Чувства", 
        artist: "Artik & Asti", 
        src: "audio/02.mp3"
    },
    { 
        number: 3, 
        title: "Чужие губы", 
        artist: "Руки Вверх!", 
        src: "audio/03.mp3"
    },
    { 
        number: 4, 
        title: "Это все она", 
        artist: "Сергей Лазарев", 
        src: "audio/04.mp3"
    },
    { 
        number: 5, 
        title: "Золотое сердце", 
        artist: "Стас Михайлов", 
        src: "audio/05.mp3"
    },
    { 
        number: 6, 
        title: "Перо", 
        artist: "Ramil", 
        src: "audio/06.mp3"
    },
    { 
        number: 7, 
        title: "Чистый лист", 
        artist: "Нэнси", 
        src: "audio/07.mp3"
    },
    { 
        number: 8, 
        title: "В клубе", 
        artist: "Тимати", 
        src: "audio/08.mp3"
    },
    { 
        number: 9, 
        title: "Малиновая лада", 
        artist: "GAYAZOV$ BROTHER$", 
        src: "audio/09.mp3"
    },
    { 
        number: 10, 
        title: "Увезите меня на Дип-хаус", 
        artist: "GAYAZOV$ BROTHER$", 
        src: "audio/10.mp3"
    },
    { number: 11, title: "Пошлю его на...", artist: "Лолита", src: "audio/11.mp3" },
    { number: 12, title: "Вахтерам", artist: "Бумбокс", src: "audio/12.mp3" },
    { number: 13, title: "Другая причина", artist: "Непара", src: "audio/13.mp3" },
    { number: 14, title: "Девушки как звезды", artist: "Андрей Губин", src: "audio/14.mp3" },
    { number: 15, title: "Голая", artist: "Градусы", src: "audio/15.mp3" },
    { number: 16, title: "Вместе мы", artist: "5sta Family", src: "audio/16.mp3" },
    { number: 17, title: "Одиночество", artist: "Слава", src: "audio/17.mp3" },
    { number: 18, title: "Веревки", artist: "Nikita", src: "audio/18.mp3" },
    { number: 19, title: "Царица", artist: "Anna Asti", src: "audio/19.mp3" },
    { number: 20, title: "Горячая, гремучая", artist: "Султан Лагучев", src: "audio/20.mp3" },
    { number: 21, title: "Все будет хорошо", artist: "Митя Фомин", src: "audio/21.mp3" },
    { number: 22, title: "Фантазер", artist: "Дискотека Авария, Николай Басков", src: "audio/22.mp3" },
    { number: 23, title: "Зажигают Огоньки", artist: "Фабрика", src: "audio/23.mp3" },
    { number: 24, title: "Не родись красивой", artist: "Фабрика", src: "audio/24.mp3" },
    { number: 25, title: "Банк", artist: "Icegegert, Zivert", src: "audio/25.mp3" },
    { number: 26, title: "Портофино", artist: "Жанна Фриске", src: "audio/26.mp3" },
    { number: 27, title: "Черный Бумер", artist: "Серега", src: "audio/27.mp3" },
    { number: 28, title: "Женщина, я не танцую", artist: "Стас Костющкин", src: "audio/28.mp3" },
    { number: 29, title: "Плохая девочка", artist: "Vintage", src: "audio/29.mp3" },
    { number: 30, title: "Горький вкус", artist: "Султан Лагучев", src: "audio/30.mp3" },
    { number: 31, title: "Выпьем за любовь", artist: "Игорь Николаев", src: "audio/31.mp3" },
    { number: 32, title: "Он тебя целует", artist: "Руки Вверх!", src: "audio/32.mp3" },
    { number: 33, title: "Восточные сказки", artist: "Блестящие", src: "audio/33.mp3" },
    { number: 34, title: "За тебя калым отдам", artist: "Мурат Тхагалегов", src: "audio/34.mp3" },
    { number: 35, title: "Билетик в кино", artist: "Иванушки Internationale", src: "audio/35.mp3" },
    { number: 36, title: "Титаник", artist: "Лолита", src: "audio/36.mp3" },
    { number: 37, title: "Чат", artist: "Клава Кока", src: "audio/37.mp3" },
    { number: 38, title: "Ты не такой", artist: "Юлиана Караулова", src: "audio/38.mp3" },
    { number: 39, title: "Корни", artist: "Вика", src: "audio/39.mp3" },
    { 
        number: 40, 
        title: "Ты узнаешь ее", 
        artist: "Корни", 
        src: "audio/40.mp3"
    },
    { number: 41, title: "Были танцы", artist: "Бьянка", src: "audio/41.mp3" },
    { number: 42, title: "Ночь", artist: "Андрей Губин", src: "audio/42.mp3" },
    { number: 43, title: "Седьмой Лепесток", artist: "Хай Фай", src: "audio/43.mp3" },
    { number: 44, title: "Девчонка, девчоночка", artist: "Иванушки International", src: "audio/44.mp3" },
    { number: 45, title: "Арамзамзам", artist: "Дискотека Авария", src: "audio/45.mp3" },
    { number: 46, title: "Федерико Фелини", artist: "Galibri & Mavik", src: "audio/46.mp3" },
    { number: 47, title: "Лондон Париж", artist: "Иракли", src: "audio/47.mp3" },
    { number: 48, title: "Фары", artist: "Пицца", src: "audio/48.mp3" },
    { number: 49, title: "Младший лейтенант", artist: "Ирина Алегрова", src: "audio/49.mp3" },
    { number: 50, title: "Наступит ночь", artist: "Бьянка", src: "audio/50.mp3" },
    { number: 51, title: "Я поднимаю руки", artist: "Григорий Лепс", src: "audio/51.mp3" },
    { number: 52, title: "Украдет и позовет", artist: "Мурат Тхагалегов", src: "audio/52.mp3" },
    { number: 53, title: "Моя мелодия", artist: "5sta & DJ Pankratov", src: "audio/53.mp3" },
    { number: 54, title: "Розовое вино", artist: "Feduk, Элджей", src: "audio/54.mp3" },
    { number: 55, title: "Mr.Saxsobeat", artist: "Alex Saxsobeat", src: "audio/55.mp3" },
    { number: 56, title: "Батареи", artist: "Нервы", src: "audio/56.mp3" },
    { number: 57, title: "Солнце, Монако", artist: "Люся Чеботина", src: "audio/57.mp3" },
    { number: 58, title: "Алкоголичка", artist: "Артур Пирожков", src: "audio/58.mp3" },
    { number: 59, title: "Кайф ты поймала", artist: "Konfuz", src: "audio/59.mp3" },
    { number: 60, title: "Золото", artist: "Супер Жорик", src: "audio/60.mp3" },
    { number: 61, title: "Кислотный DJ", artist: "Оксана Почепа", src: "audio/61.mp3" },
    { number: 62, title: "Плачу на техно", artist: "Anna Asti", src: "audio/62.mp3" },
    { number: 63, title: "Халигали, паратрупер", artist: "Леприконсы", src: "audio/63.mp3" },
    { number: 64, title: "Танцы", artist: "Рефлекс", src: "audio/64.mp3" },
    { number: 65, title: "Американ Бой", artist: "Комбинация", src: "audio/65.mp3" },
    { number: 66, title: "Бухгалтер", artist: "Комбинация", src: "audio/66.mp3" },
    { number: 67, title: "Мало тебя", artist: "Serebro", src: "audio/67.mp3" },
    { number: 68, title: "Russian girl", artist: "Комбинация", src: "audio/68.mp3" },
    { number: 69, title: "Базовый минимум", artist: "Mia Boyko, Sabi", src: "audio/69.mp3" },
    { number: 70, title: "Мама Люба", artist: "Serebro", src: "audio/70.mp3" },
    { number: 71, title: "На дискотеку!", artist: "Султан-Ураган, Мурат Тхагалегов", src: "audio/71.mp3" },
    { number: 72, title: "Я тебя нарисовал", artist: "Нэнси", src: "audio/72.mp3" },
    { number: 73, title: "Я полюбила бандита", artist: "Краски", src: "audio/73.mp3" },
    { number: 74, title: "Экспонат", artist: "Ленинград", src: "audio/74.mp3" },
    { number: 75, title: "Белое платье", artist: "Чай вдвоем", src: "audio/75.mp3" },
    { number: 76, title: "Пьяная вишня", artist: "Кристина Орбакайте", src: "audio/76.mp3" },
    { number: 77, title: "I got love", artist: "Miyagi & Эндшпиль, Рэм Дига", src: "audio/77.mp3" },
    { number: 78, title: "Блеск Шик", artist: "Alex Bold, BoValigura", src: "audio/78.mp3" },
    { number: 79, title: "Танцпол везде", artist: "Анна Немченко", src: "audio/79.mp3" },
    { number: 80, title: "За деньги да", artist: "Instasamka", src: "audio/80.mp3" },
    { number: 81, title: "Остров", artist: "Леонид Агутин", src: "audio/81.mp3" },
    { number: 82, title: "Где прошла ты", artist: "Кравц, Гио Пика", src: "audio/82.mp3" },
    { number: 83, title: "Погудим", artist: "Rasa", src: "audio/83.mp3" },
    { number: 84, title: "Коламбия Пикчерз", artist: "БАНДЭРОС", src: "audio/84.mp3" },
    { number: 85, title: "Alors on Dance", artist: "Stromae", src: "audio/85.mp3" },
    { number: 86, title: "Девочка рыжая", artist: "Воровайки", src: "audio/86.mp3" },
    { number: 87, title: "Я не поняла", artist: "ВИА ГРА", src: "audio/87.mp3" },
    { number: 88, title: "Классный", artist: "Туси", src: "audio/88.mp3" },
    { number: 89, title: "На теплоходе", artist: "Ольга Зарубина", src: "audio/89.mp3" },
    { number: 90, title: "Это нормально", artist: "T-Killah", src: "audio/90.mp3" }
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
    
    // 1. Находим кнопку
    const button = barrelGrid.querySelector(`[data-number="${track.number}"]`);
    if (!button) {
        openSongPage(track);
        return;
    }

    // 2. Создаем клон для полета
    const rect = button.getBoundingClientRect();
    const clone = button.cloneNode(true);
    
    // Стилизуем клон
    clone.className = 'barrel flying-barrel';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.margin = '0';
    
    document.body.appendChild(clone);

    // 3. Запускаем анимацию полета и затемнения
    // Используем двойной requestAnimationFrame или setTimeout, чтобы браузер успел отрисовать начальное состояние
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            clone.classList.add('fly');
        });
    });

    // 4. Переключаем страницу раньше (через 0.5 сек), когда бутон закрыл большую часть экрана
    setTimeout(() => {
        openSongPage(track);
    }, 500); 

    // 5. Когда экран полностью черный (через 1 сек), начинаем растворять бутон
    setTimeout(() => {
        clone.classList.add('fade-out'); 
    }, 1000);

    // 6. Удаляем клон после завершения всех анимаций
    setTimeout(() => {
        clone.remove();
    }, 1600);
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
    
    // Скрываем фон с букетами на странице песни
    const bgBouquets = document.getElementById('bg-bouquets');
    const bgNotes = document.getElementById('bg-notes');
    
    if (bgBouquets) bgBouquets.style.opacity = '0';
    if (bgNotes) bgNotes.style.opacity = '1'; // Показываем ноты

    page3.classList.remove('hidden');
    document.body.classList.add('song-open');

    if (songCover) {
        songCover.src = `images/${String(track.number).padStart(2, '0')}.jpg`;
        songCover.alt = `Обложка ${track.title}`;
    }

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
    // songParticlesInterval = setInterval(() => {
    //     createSongParticle(particlesContainer);
    //     if (Math.random() > 0.5) {
    //         createSongParticle(particlesContainer);
    //     }
    // }, 1500);
    
    // for (let i = 0; i < 8; i++) {
    //     setTimeout(() => {
    //         createSongParticle(particlesContainer);
    //     }, i * 300);
    // }
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
    
    // Возвращаем фон с букетами
    const bgBouquets = document.getElementById('bg-bouquets');
    const bgNotes = document.getElementById('bg-notes');
    
    if (bgBouquets) bgBouquets.style.opacity = '1';
    if (bgNotes) bgNotes.style.opacity = '0'; // Скрываем ноты

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
    // Эффекты падающих частиц отключены по просьбе
    /*
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
    */
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

let transitionConfettiInterval = null;

function createSingleConfetti(container) {
    const colors = ['#ffffff', '#ff69b4', '#ff1493', '#ffe4e1']; // Только белые и розовые
    const confetti = document.createElement('div');
    confetti.className = 'victory-confetti';
    
    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const startY = -20;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2 + 3; // Чуть медленнее для плавности
    
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.backgroundColor = color;
    confetti.style.left = startX + 'px';
    confetti.style.top = startY + 'px';
    confetti.style.boxShadow = `0 0 ${size}px ${color}`; // Свечение
    
    container.appendChild(confetti);
    
    const animation = confetti.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    animation.onfinish = () => confetti.remove();
}

function startTransitionConfetti(container) {
    if (transitionConfettiInterval) clearInterval(transitionConfettiInterval);
    
    // Спавним часто для плотности
    transitionConfettiInterval = setInterval(() => {
        createSingleConfetti(container);
        createSingleConfetti(container); 
    }, 50);
}

function stopTransitionConfetti() {
    if (transitionConfettiInterval) {
        clearInterval(transitionConfettiInterval);
        transitionConfettiInterval = null;
    }
}

let bingoConfettiInterval = null;

const STAR_SYMBOLS = ['★', '✦', '☆', '✧'];

function createBingoConfettiPiece(container) {
    const colors = ['#ff8fab', '#ff69b4', '#ff1493', '#ffb6c1', '#ffffff', '#fff5f7'];
    const star = document.createElement('span');
    star.className = 'victory-star';
    
    const size = Math.random() * 24 + 18;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const startY = -20;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 250;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2.5 + 2.5;
    
    star.textContent = STAR_SYMBOLS[Math.floor(Math.random() * STAR_SYMBOLS.length)];
    star.style.fontSize = size + 'px';
    star.style.color = color;
    star.style.left = startX + 'px';
    star.style.top = startY + 'px';
    star.style.textShadow = `0 0 ${size}px ${color}`;
    
    container.appendChild(star);
    star.animate([
        { transform: `translate(-50%, -50%) translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0.2 }
    ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.3, 0, 0.5, 1)'
    }).onfinish = () => star.remove();
}

function startBingoConfetti() {
    const container = document.getElementById('bingoConfettiContainer');
    if (!container) return;
    if (bingoConfettiInterval) clearInterval(bingoConfettiInterval);
    container.innerHTML = '';
    bingoConfettiInterval = setInterval(() => {
        createBingoConfettiPiece(container);
        createBingoConfettiPiece(container);
    }, 60);
}

function stopBingoConfetti() {
    if (bingoConfettiInterval) {
        clearInterval(bingoConfettiInterval);
        bingoConfettiInterval = null;
    }
    const container = document.getElementById('bingoConfettiContainer');
    if (container) container.innerHTML = '';
}

function showBingoAnimationPage2() {
    const bingoAnimation = document.getElementById('bingoAnimationPage2');
    const bingoVictoryAudio = document.getElementById('bingoVictoryAudio');
    if (!bingoAnimation) return;
    
    const isHidden = bingoAnimation.classList.contains('hidden');
    const isActive = bingoAnimation.classList.contains('active');
    
    if (isHidden || !isActive) {
        bingoAnimation.classList.remove('hidden');
        bingoAnimation.style.opacity = '0';
        const letterWrappers = bingoAnimation.querySelectorAll('.letter-wrapper');
        letterWrappers.forEach(wrapper => {
            wrapper.style.animation = 'none';
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'translateY(200px) scale(0.3)';
        });
        const crowns = bingoAnimation.querySelectorAll('.letter-crown');
        crowns.forEach(crown => {
            crown.style.animation = 'none';
            crown.style.opacity = '0';
            crown.style.transform = 'translateX(-50%) scale(0)';
        });
        if (bingoVictoryAudio) {
            bingoVictoryAudio.currentTime = 0;
            bingoVictoryAudio.play().catch(() => {});
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                letterWrappers.forEach(wrapper => { wrapper.style.animation = ''; });
                crowns.forEach(crown => { crown.style.animation = ''; });
                bingoAnimation.classList.add('active');
                bingoAnimation.style.opacity = '1';
                startBingoConfetti();
            });
        });
    } else {
        if (bingoVictoryAudio) {
            bingoVictoryAudio.pause();
            bingoVictoryAudio.currentTime = 0;
        }
        bingoAnimation.style.opacity = '0';
        stopBingoConfetti();
        setTimeout(() => {
            bingoAnimation.classList.remove('active');
            bingoAnimation.classList.add('hidden');
            bingoAnimation.querySelectorAll('.letter-wrapper').forEach(w => { w.style.animation = 'none'; });
            bingoAnimation.querySelectorAll('.letter-crown').forEach(c => { c.style.animation = 'none'; });
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
    
    // heroParticlesInterval = setInterval(() => {
    //     createSongParticle(particlesContainer);
    //         if (Math.random() > 0.5) {
    //         createSongParticle(particlesContainer);
    //     }
    // }, 100);
    
    // for (let i = 0; i < 100; i++) {
    //     setTimeout(() => {
    //         createSongParticle(particlesContainer);
    //     }, i * 30);
    // }

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

    if (startBtnElement) {
        startBtnElement.addEventListener('click', () => {
            const transitionOverlay = document.getElementById('bingoTransition');
            
            // 1. Показываем оверлей перехода
            if (transitionOverlay) {
                transitionOverlay.classList.remove('hidden');
                // Запускаем бесконечное конфетти (бело-розовое)
                startTransitionConfetti(transitionOverlay);
                
                // Небольшая задержка перед добавлением active для срабатывания transition opacity
                requestAnimationFrame(() => {
                    transitionOverlay.classList.add('active');
                });
            }

            // 2. Ждем завершения анимации букв (около 2-2.5 секунд)
            setTimeout(() => {
                stopHeroEffects();
                stopTransitionConfetti(); // Останавливаем дождь
                const page1 = document.getElementById('page1');
                const page2 = document.getElementById('page2');
                
                if (page1) page1.classList.add('hidden');
                
                // Переключаем фоны: скрываем бантики, показываем букеты
                const bgBows = document.getElementById('bg-bows');
                const bgBouquets = document.getElementById('bg-bouquets');
                if (bgBows) bgBows.style.opacity = '0';
                if (bgBouquets) bgBouquets.style.opacity = '1';

                document.body.classList.add('blurred-bg');
                
                if (page2) {
                    page2.classList.remove('hidden');
                    // Сразу показываем страницу 2, так как она перекрыта оверлеем
                    page2.style.opacity = '1';
                    startPage2Effects();
                }

                // 3. Скрываем оверлей
                if (transitionOverlay) {
                    transitionOverlay.classList.remove('active');
                    setTimeout(() => {
                        transitionOverlay.classList.add('hidden');
                    }, 500); // Ждем завершения transition opacity (0.5s)
                }

            }, 2500); 
        });
    }
});
