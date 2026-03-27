
const TOTAL_BARRELS = 90;
const selectedSet = new Set();

const audioCache = {};

function preloadAllAudio() {
    let i = 0;
    function loadNext() {
        if (i >= tracks.length) return;
        const track = tracks[i];
        i++;
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = track.src;
        audioCache[track.number] = audio;
        audio.addEventListener('canplaythrough', () => {
            setTimeout(loadNext, 200);
        }, { once: true });
        audio.addEventListener('error', () => {
            setTimeout(loadNext, 200);
        }, { once: true });
        setTimeout(() => loadNext(), 8000);
    }
    loadNext();
}

const tracks = [
    { number: 1, title: "Черная Смородина", artist: "Sevenrose", src: "audio/01.mp3" },
    { number: 2, title: "На дискотеку!", artist: "Мурат Тхагалегов", src: "audio/02.mp3" },
    { number: 3, title: "Преданный бывший", artist: "Anna Asti", src: "audio/03.mp3" },
    { number: 4, title: "Одинокая ветка сирени", artist: "Валерий Залкин", src: "audio/04.mp3" },
    { number: 5, title: "Тает лед", artist: "Грибы", src: "audio/05.mp3" },
    { number: 6, title: "Белая стрекоза любви", artist: "Qwest Pistols Show", src: "audio/06.mp3" },
    { number: 7, title: "Отпусти меня", artist: "Serebro", src: "audio/07.mp3" },
    { number: 8, title: "Малиновый свет", artist: "ЛешаСвик", src: "audio/08.mp3" },
    { number: 9, title: "Люди", artist: "Дайте танк", src: "audio/09.mp3" },
    { number: 10, title: "NOBODY", artist: "Aarne, Toxis, BBT", src: "audio/10.mp3" },
    { number: 11, title: "Базовый минимум", artist: "Мия Бойко", src: "audio/11.mp3" },
    { number: 12, title: "Я твой номер один", artist: "Билан", src: "audio/12.mp3" },
    { number: 13, title: "Тучи", artist: "Иванушки", src: "audio/13.mp3" },
    { number: 14, title: "Увезите меня на Дип хаус", artist: "Gayazov Brothers", src: "audio/14.mp3" },
    { number: 15, title: "Ты не такой", artist: "Карнаулова", src: "audio/15.mp3" },
    { number: 16, title: "Часики", artist: "Валерия", src: "audio/16.mp3" },
    { number: 17, title: "Это все она", artist: "Лазарев", src: "audio/17.mp3" },
    { number: 18, title: "Beverly Hils", artist: "Zivert", src: "audio/18.mp3" },
    { number: 19, title: "Если в сердце живет любовь", artist: "Савичева", src: "audio/19.mp3" },
    { number: 20, title: "Прованс", artist: "Елка", src: "audio/20.mp3" },
    { number: 21, title: "Были танцы", artist: "Бьянка", src: "audio/21.mp3" },
    { number: 22, title: "Кайф ты поймала", artist: "Konfuz", src: "audio/22.mp3" },
    { number: 23, title: "Другая причина", artist: "НЕПАРА", src: "audio/23.mp3" },
    { number: 24, title: "Мой мир", artist: "Кристина Орбакайте", src: "audio/24.mp3" },
    { number: 25, title: "Знаешь ли ты", artist: "Максим", src: "audio/25.mp3" },
    { number: 26, title: "Лондон Париж", artist: "Иракли", src: "audio/26.mp3" },
    { number: 27, title: "Весна", artist: "Бутырка", src: "audio/27.mp3" },
    { number: 28, title: "Малополовин", artist: "Бузова", src: "audio/28.mp3" },
    { number: 29, title: "Выпьем за любовь", artist: "Игорь Николаев", src: "audio/29.mp3" },
    { number: 30, title: "Самба белого мотылька", artist: "Валерий Меладзе", src: "audio/30.mp3" },
    { number: 31, title: "Серцеедка", artist: "Егор Крид", src: "audio/31.mp3" },
    { number: 32, title: "Чумачечая весна", artist: "Потап и Настя", src: "audio/32.mp3" },
    { number: 33, title: "Хоп Хэй", artist: "Леонид Агутин", src: "audio/33.mp3" },
    { number: 34, title: "Малинки", artist: "Жанна Фриске, Дискотека авария", src: "audio/34.mp3" },
    { number: 35, title: "В клубе", artist: "Тимати", src: "audio/35.mp3" },
    { number: 36, title: "Quanto Costa", artist: "Пропаганда", src: "audio/36.mp3" },
    { number: 37, title: "Девочка рыжая", artist: "Воровайки", src: "audio/37.mp3" },
    { number: 38, title: "Это нормально", artist: "T-Killah", src: "audio/38.mp3" },
    { number: 39, title: "Водка пиво", artist: "Вахбет Абедов", src: "audio/39.mp3" },
    { number: 40, title: "Каблучки", artist: "Артур Текеев", src: "audio/40.mp3" },
    { number: 41, title: "Вокруг шум", artist: "Каста", src: "audio/41.mp3" },
    { number: 42, title: "Течет Ручей", artist: "Надежда Кадышева", src: "audio/42.mp3" },
    { number: 43, title: "American boy", artist: "Комбинация", src: "audio/43.mp3" },
    { number: 44, title: "Клен", artist: "ВИА Синяя птица", src: "audio/44.mp3" },
    { number: 45, title: "От Волги до Енисея", artist: "Любэ", src: "audio/45.mp3" },
    { number: 46, title: "Ладошки", artist: "Светлана Рерих", src: "audio/46.mp3" },
    { number: 47, title: "Думала", artist: "Руки Вверх!", src: "audio/47.mp3" },
    { number: 48, title: "Ой мам не женюсь", artist: "Влад Порфиров", src: "audio/48.mp3" },
    { number: 49, title: "Bara Bere", artist: "Alex Ferrari", src: "audio/49.mp3" },
    { number: 50, title: "Кукла колдуна", artist: "Король и Шут", src: "audio/50.mp3" },
    { number: 51, title: "Царица", artist: "Anna Asti", src: "audio/51.mp3" },
    { number: 52, title: "One desire", artist: "Jakarta", src: "audio/52.mp3" },
    { number: 53, title: "Она вернется", artist: "MBAND", src: "audio/53.mp3" },
    { number: 54, title: "Danza Kuduro", artist: "Lucenzo", src: "audio/54.mp3" },
    { number: 55, title: "Знак водолея", artist: "Винтаж", src: "audio/55.mp3" },
    { number: 56, title: "Самая красивая", artist: "Алексей Воробьев", src: "audio/56.mp3" },
    { number: 57, title: "Блеск шик", artist: "BoValigura", src: "audio/57.mp3" },
    { number: 58, title: "Black", artist: "Gazirovka", src: "audio/58.mp3" },
    { number: 59, title: "Черный бумер", artist: "Серега", src: "audio/59.mp3" },
    { number: 60, title: "Катя Катерина", artist: "Андрей Державин", src: "audio/60.mp3" },
    { number: 61, title: "Девушки", artist: "Отпетые Мошенники", src: "audio/61.mp3" },
    { number: 62, title: "Для тебя", artist: "Ани Лорак", src: "audio/62.mp3" },
    { number: 63, title: "Красавица", artist: "Фактор 2", src: "audio/63.mp3" },
    { number: 64, title: "Любовь моя", artist: "Хамелеон", src: "audio/64.mp3" },
    { number: 65, title: "Самая Любимая", artist: "Челси", src: "audio/65.mp3" },
    { number: 66, title: "Купер", artist: "SQWQZ BAB", src: "audio/66.mp3" },
    { number: 67, title: "Горький вкус", artist: "Султан Лагучев", src: "audio/67.mp3" },
    { number: 68, title: "Горячая гремучая", artist: "Султан Лагучев", src: "audio/68.mp3" },
    { number: 69, title: "Non stop", artist: "Reflex", src: "audio/69.mp3" },
    { number: 70, title: "Черные глаза", artist: "Айдамир Мугу", src: "audio/70.mp3" },
    { number: 71, title: "До рассвета", artist: "Сати Казанова", src: "audio/71.mp3" },
    { number: 72, title: "Про красивую жизнь", artist: "Бандерос", src: "audio/72.mp3" },
    { number: 73, title: "Седьмой лепесток", artist: "HI FI", src: "audio/73.mp3" },
    { number: 74, title: "7 Этаж", artist: "Лера Массква", src: "audio/74.mp3" },
    { number: 75, title: "Задыхаюсь", artist: "Дима Билан", src: "audio/75.mp3" },
    { number: 76, title: "Обстановка по кайфу", artist: "Олег Кинзов", src: "audio/76.mp3" },
    { number: 77, title: "Бобр", artist: "Slava Skripka", src: "audio/77.mp3" },
    { number: 78, title: "Морячка", artist: "Олег Газманов", src: "audio/78.mp3" },
    { number: 79, title: "Научится бы не париться", artist: "Градусы", src: "audio/79.mp3" },
    { number: 80, title: "Районы кварталы", artist: "Звери", src: "audio/80.mp3" },
    { number: 81, title: "Угонщица", artist: "Ирина Аллегрова", src: "audio/81.mp3" },
    { number: 82, title: "Вахтерам", artist: "Бумбокс", src: "audio/82.mp3" },
    { number: 83, title: "Императрица", artist: "Ирина Аллегрова", src: "audio/83.mp3" },
    { number: 84, title: "Попрошу тебя", artist: "Вирус", src: "audio/84.mp3" },
    { number: 85, title: "Хали гали", artist: "Леприконсы", src: "audio/85.mp3" },
    { number: 86, title: "Фары", artist: "Пицца", src: "audio/86.mp3" },
    { number: 87, title: "Macarena", artist: "Carlito", src: "audio/87.mp3" },
    { number: 88, title: "Дикий танец", artist: "El Rico", src: "audio/88.mp3" },
    { number: 89, title: "Танцы", artist: "NLO", src: "audio/89.mp3" },
    { number: 90, title: "Худи", artist: "Джиган", src: "audio/90.mp3" }
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
    
    const button = barrelGrid.querySelector(`[data-number="${track.number}"]`);
    if (!button) {
        openSongPage(track);
        return;
    }

    const rect = button.getBoundingClientRect();
    const clone = button.cloneNode(true);
    
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const flyX = cx - rect.left - rect.width / 2;
    const flyY = cy - rect.top - rect.height / 2;
    
    clone.className = 'barrel flying-barrel';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.margin = '0';
    clone.style.setProperty('--fly-x', flyX + 'px');
    clone.style.setProperty('--fly-y', flyY + 'px');
    
    document.body.appendChild(clone);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            clone.classList.add('fly');
        });
    });

    setTimeout(() => {
        openSongPage(track);
    }, 500); 

    setTimeout(() => {
        clone.classList.add('fade-out'); 
    }, 1000);

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

function openSongPage(track) {
    page2.classList.add('hidden');
    stopPage2Effects();

    page3.classList.remove('hidden');
    startPage3Petals();
    document.body.classList.add('song-open');
    const p3tulip = document.getElementById('page3TulipRight');
    if (p3tulip) p3tulip.style.display = '';

    if (songCover) {
        songCover.style.backgroundImage = `url(images/${String(track.number).padStart(2, '0')}.jpg)`;
    }

    songTitle.textContent = track.title;
    if (track.title.length > 25 || track.number === 82) {
        songTitle.classList.add('long-title');
    } else {
        songTitle.classList.remove('long-title');
    }
    songArtist.textContent = track.artist;
    songNumber.textContent = `Бочонок ${track.number}`;

    const cached = audioCache[track.number];
    if (cached && cached.readyState >= 3) {
        songAudio.src = cached.src;
    } else {
        songAudio.src = track.src;
    }
    songAudio.currentTime = 0;

    updateTimeDisplay();
    updatePlayPauseIcon();

    const tryPlay = () => songAudio.play().catch(() => {});

    if (songAudio.readyState >= 3) {
        tryPlay();
    } else {
        songAudio.addEventListener('canplay', tryPlay, { once: true });
        songAudio.addEventListener('canplaythrough', tryPlay, { once: true });
        setTimeout(tryPlay, 150);
        setTimeout(tryPlay, 500);
    }
}
function closeSongPage() {
    stopPage3Petals();
    songAudio.pause();
    songAudio.currentTime = 0;
    page3.classList.add('hidden');
    page2.classList.remove('hidden');
    const p3tulip = document.getElementById('page3TulipRight');
    if (p3tulip) p3tulip.style.display = 'none';
    
    document.body.classList.remove('song-open');
    page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    startPage2Effects(); 
    
    const particlesContainer = page3.querySelector('.floating-particles');
    const sparklesContainer = page3.querySelector('.sparkles-container');

    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
}

function stopHeroEffects() {
    stopHeroPetals();
    const particlesContainer = document.querySelector('#page1 .floating-particles');
    const sparklesContainer = document.querySelector('#page1 .sparkles-container');
    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
}

function startPage2Effects() {}

function stopPage2Effects() {
    const particlesContainer = document.querySelector('#page2 .floating-particles');
    const sparklesContainer = document.querySelector('#page2 .sparkles-container');
    if (particlesContainer) particlesContainer.innerHTML = '';
    if (sparklesContainer) sparklesContainer.innerHTML = '';
}

let transitionConfettiInterval = null;

function createSingleConfetti(container) {
    const colors = ['#7a9a6d', '#ffffff', '#ffd700', '#a8d5a2', '#5c8a4d'];
    const el = document.createElement('div');
    el.className = 'victory-confetti';
    
    const size = Math.random() * 12 + 6;
    const startX = Math.random() * window.innerWidth;
    const startY = -30;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2 + 3;
    
    el.style.width = size + 'px';
    el.style.height = size * (Math.random() > 0.5 ? 1 : 2.5) + 'px';
    el.style.left = startX + 'px';
    el.style.top = startY + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.position = 'absolute';
    
    container.appendChild(el);
    
    const animation = el.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    animation.onfinish = () => el.remove();
}

function startTransitionConfetti(container) {
    if (transitionConfettiInterval) clearInterval(transitionConfettiInterval);
    
    transitionConfettiInterval = setInterval(() => {
        createSingleConfetti(container);
        if (Math.random() > 0.5) createSingleConfetti(container);
    }, 120);
}

function stopTransitionConfetti() {
    if (transitionConfettiInterval) {
        clearInterval(transitionConfettiInterval);
        transitionConfettiInterval = null;
    }
}

let bingoConfettiInterval = null;

function createBingoConfettiPiece(container) {
    const colors = ['#7a9a6d', '#ffffff', '#ffd700', '#a8d5a2', '#5c8a4d'];
    const el = document.createElement('div');
    el.className = 'victory-star';
    
    const size = Math.random() * 14 + 8;
    const startX = Math.random() * window.innerWidth;
    const startY = -30;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 250;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2.5 + 2.5;
    
    el.style.width = size + 'px';
    el.style.height = size * (Math.random() > 0.5 ? 1 : 2.5) + 'px';
    el.style.left = startX + 'px';
    el.style.top = startY + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.position = 'absolute';
    
    container.appendChild(el);
    el.animate([
        { transform: `translate(-50%, -50%) translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0.2 }
    ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.3, 0, 0.5, 1)'
    }).onfinish = () => el.remove();
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

let bingoPetalsInterval = null;
let transitionPetalsInterval = null;
let page3PetalsInterval = null;

function createPetalEl(container, baseClass) {
    const petal = document.createElement('img');
    petal.src = 'assets/lepestok.webp';
    petal.alt = '';
    petal.className = baseClass;
    const left = Math.random() * 100;
    const size = 18 + Math.random() * 22;
    const duration = 4 + Math.random() * 5;
    const drift = -80 + Math.random() * 160;
    const delay = Math.random() * 0.5;
    petal.style.left = left + '%';
    petal.style.width = size + 'px';
    petal.style.setProperty('--drift', drift + 'px');
    petal.style.animationDuration = duration + 's';
    petal.style.animationDelay = delay + 's';
    container.appendChild(petal);
    setTimeout(() => petal.remove(), (duration + delay) * 1000 + 200);
}

let heroPetalsInterval = null;

function startHeroPetals() {
    const container = document.getElementById('heroPetalsContainer');
    if (!container) return;
    container.innerHTML = '';
    const spawn = () => createPetalEl(container, 'hero-falling-petal');
    for (let i = 0; i < 12; i++) {
        setTimeout(spawn, i * 250);
    }
    heroPetalsInterval = setInterval(spawn, 400);
}

function stopHeroPetals() {
    if (heroPetalsInterval) {
        clearInterval(heroPetalsInterval);
        heroPetalsInterval = null;
    }
    const container = document.getElementById('heroPetalsContainer');
    if (container) container.innerHTML = '';
}

function startTransitionPetals() {
    const container = document.getElementById('transitionPetalsContainer');
    if (!container) return;
    container.innerHTML = '';
    const spawn = () => createPetalEl(container, 'transition-falling-petal');
    for (let i = 0; i < 12; i++) {
        setTimeout(spawn, i * 200);
    }
    transitionPetalsInterval = setInterval(spawn, 350);
}

function stopTransitionPetals() {
    if (transitionPetalsInterval) {
        clearInterval(transitionPetalsInterval);
        transitionPetalsInterval = null;
    }
    const container = document.getElementById('transitionPetalsContainer');
    if (container) container.innerHTML = '';
}

function startPage3Petals() {
    const container = document.getElementById('page3PetalsContainer');
    if (!container) return;
    container.innerHTML = '';
    const spawn = () => createPetalEl(container, 'page3-falling-petal');
    for (let i = 0; i < 12; i++) {
        setTimeout(spawn, i * 220);
    }
    page3PetalsInterval = setInterval(spawn, 380);
}

function stopPage3Petals() {
    if (page3PetalsInterval) {
        clearInterval(page3PetalsInterval);
        page3PetalsInterval = null;
    }
    const container = document.getElementById('page3PetalsContainer');
    if (container) container.innerHTML = '';
}

function startBingoPetals() {
    const container = document.getElementById('bingoPetalsContainer');
    if (!container) return;
    container.innerHTML = '';
    const spawn = () => createPetalEl(container, 'bingo-falling-petal');
    for (let i = 0; i < 15; i++) {
        setTimeout(spawn, i * 200);
    }
    bingoPetalsInterval = setInterval(spawn, 300);
}

function stopBingoPetals() {
    if (bingoPetalsInterval) {
        clearInterval(bingoPetalsInterval);
        bingoPetalsInterval = null;
    }
    const container = document.getElementById('bingoPetalsContainer');
    if (container) container.innerHTML = '';
}

function showBingoAnimationPage2() {
    const bingoAnimation = document.getElementById('bingoAnimationPage2');
    const bingoBgAudio = document.getElementById('bingoBgAudio');
    if (!bingoAnimation) return;
    
    const isHidden = bingoAnimation.classList.contains('hidden');
    const isActive = bingoAnimation.classList.contains('active');
    
    if (isHidden || !isActive) {
        startBingoPetals();
        bingoAnimation.classList.remove('hidden');
        bingoAnimation.style.opacity = '0';
        const letterWrappers = bingoAnimation.querySelectorAll('.letter-wrapper');
        letterWrappers.forEach(wrapper => {
            wrapper.style.animation = 'none';
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'translateX(calc((2 - var(--i)) * 90px)) scale(0.3)';
        });
        if (bingoBgAudio) {
            bingoBgAudio.currentTime = 0;
            bingoBgAudio.play().catch(() => {});
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                letterWrappers.forEach(wrapper => { wrapper.style.animation = ''; });
                bingoAnimation.classList.add('active');
                bingoAnimation.style.opacity = '1';
            });
        });
    } else {
        if (bingoBgAudio) {
            const fadeOut = (el, duration = 700) => {
                const startVol = el.volume;
                const startTime = performance.now();
                const tick = () => {
                    const elapsed = performance.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    el.volume = Math.max(0, startVol * (1 - progress));
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        el.pause();
                        el.currentTime = 0;
                        el.volume = 1;
                    }
                };
                requestAnimationFrame(tick);
            };
            fadeOut(bingoBgAudio);
        }
        stopBingoPetals();
        bingoAnimation.style.opacity = '0';
        setTimeout(() => {
            bingoAnimation.classList.remove('active');
            bingoAnimation.classList.add('hidden');
            bingoAnimation.querySelectorAll('.letter-wrapper').forEach(w => { w.style.animation = 'none'; });
        }, 500);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const page4 = document.getElementById('page4');
        if (page4 && !page4.classList.contains('hidden')) {
            page4.classList.add('hidden');
            return;
        }
        if (!page3.classList.contains('hidden')) {
            closeSongPage();
        }
    }
    if (event.key === 'Enter' && !event.repeat) {
        const page4 = document.getElementById('page4');
        const page2 = document.getElementById('page2');
        const page3 = document.getElementById('page3');
        if (page4 && page2 && page3) {
            const isHidden = page4.classList.contains('hidden');
            if (isHidden && (!page2.classList.contains('hidden') || !page3.classList.contains('hidden'))) {
                event.preventDefault();
                page4.classList.remove('hidden');
            } else if (!isHidden) {
                event.preventDefault();
                page4.classList.add('hidden');
            }
        }
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
    preloadAllAudio();
    startHeroPetals();

    if (startBtnElement) {
        startBtnElement.addEventListener('click', () => {
            const transitionOverlay = document.getElementById('bingoTransition');
            
            if (transitionOverlay) {
                transitionOverlay.classList.remove('hidden');
                startTransitionPetals();
                requestAnimationFrame(() => {
                    transitionOverlay.classList.add('active');
                });
            }

            setTimeout(() => {
                stopTransitionPetals();
                stopHeroEffects();
                const page1 = document.getElementById('page1');
                const page2 = document.getElementById('page2');
                
                if (page1) page1.classList.add('hidden');
                
                document.body.classList.add('blurred-bg');
                document.querySelectorAll('.hero-tulip, .hero-center-bouquet').forEach(el => el.style.display = 'none');
                
                if (page2) {
                    page2.classList.remove('hidden');
                    page2.style.opacity = '1';
                    startPage2Effects();
                }

                if (transitionOverlay) {
                    transitionOverlay.classList.remove('active');
                    setTimeout(() => {
                        transitionOverlay.classList.add('hidden');
                    }, 500);
                }

            }, 2500); 
        });
    }
});
