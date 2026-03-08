function createPetals() {
    const container = document.getElementById('heroPetals');
    if (!container) return;
    function spawnPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 12 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 6 + 5;
        const delay = Math.random() * 2;
        const sway = (Math.random() - 0.5) * 120;
        petal.style.width = size + 'px';
        petal.style.height = size * 1.4 + 'px';
        petal.style.left = left + '%';
        petal.style.top = '-30px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        petal.style.setProperty('--sway', sway + 'px');
        container.appendChild(petal);
        setTimeout(() => petal.remove(), (duration + delay) * 1000);
    }
    for (let i = 0; i < 8; i++) spawnPetal();
    setInterval(() => { spawnPetal(); if (Math.random() > 0.5) spawnPetal(); }, 800);
}
document.addEventListener('DOMContentLoaded', createPetals);

const TOTAL_BARRELS = 90;
const selectedSet = new Set();

function preloadAllAudio() {
}

const tracks = [
    { number: 1, title: "Перелетная Птица", artist: "Кристина Орбакайте", src: "audio/01.mp3" },
    { number: 2, title: "Heartbreak", artist: "Sofie", src: "audio/02.mp3" },
    { number: 3, title: "Bara Bere", artist: "Alex Ferrari", src: "audio/03.mp3" },
    { number: 4, title: "Снов Осколки", artist: "Алексеев", src: "audio/04.mp3" },
    { number: 5, title: "До рассвета", artist: "Казанова", src: "audio/05.mp3" },
    { number: 6, title: "Чистый лист", artist: "Нэнси", src: "audio/06.mp3" },
    { number: 7, title: "Девчонка-девчоночка", artist: "Женя Белоусов", src: "audio/07.mp3" },
    { number: 8, title: "Женщина не танцую", artist: "Стас Костюшкин", src: "audio/08.mp3" },
    { number: 9, title: "Одиночество", artist: "Слава", src: "audio/09.mp3" },
    { number: 10, title: "Пошлю его на", artist: "Лолита", src: "audio/10.mp3" },
    { number: 11, title: "Вика", artist: "Корни", src: "audio/11.mp3" },
    { number: 12, title: "Угонщица", artist: "Ирина Аллегрова", src: "audio/12.mp3" },
    { number: 13, title: "Императрица", artist: "Ирина Аллегрова", src: "audio/13.mp3" },
    { number: 14, title: "Бухгалтер", artist: "Комбинация", src: "audio/14.mp3" },
    { number: 15, title: "Это все она", artist: "Сергей Лазарев", src: "audio/15.mp3" },
    { number: 16, title: "Параллельные", artist: "Валерий Меладзе", src: "audio/16.mp3" },
    { number: 17, title: "Ты так красива", artist: "Qwest Pistols Show", src: "audio/17.mp3" },
    { number: 18, title: "Вокруг шум", artist: "Каста", src: "audio/18.mp3" },
    { number: 19, title: "Кислотный DJ", artist: "Оксана Почепа", src: "audio/19.mp3" },
    { number: 20, title: "Случайная", artist: "Loboda", src: "audio/20.mp3" },
    { number: 21, title: "У меня появился другой", artist: "ВИА ГРА", src: "audio/21.mp3" },
    { number: 22, title: "В клубе", artist: "Тимати", src: "audio/22.mp3" },
    { number: 23, title: "Я назову планету", artist: "Ротару", src: "audio/23.mp3" },
    { number: 24, title: "Просто подари", artist: "Филипп Киркоров", src: "audio/24.mp3" },
    { number: 25, title: "Курю", artist: "Ваенга", src: "audio/25.mp3" },
    { number: 26, title: "Крошка моя", artist: "Руки Вверх!", src: "audio/26.mp3" },
    { number: 27, title: "Течет ручей", artist: "Надежда Кадышева", src: "audio/27.mp3" },
    { number: 28, title: "Ориентация Север", artist: "Лолита", src: "audio/28.mp3" },
    { number: 29, title: "А я все", artist: "Блестящие", src: "audio/29.mp3" },
    { number: 30, title: "Все что касается", artist: "Звери", src: "audio/30.mp3" },
    { number: 31, title: "Она вернется", artist: "Mband", src: "audio/31.mp3" },
    { number: 32, title: "Черный бумер", artist: "Серега", src: "audio/32.mp3" },
    { number: 33, title: "Low", artist: "Flo Rida", src: "audio/33.mp3" },
    { number: 34, title: "Gangnam Style", artist: "PSY", src: "audio/34.mp3" },
    { number: 35, title: "Девушки как звезды", artist: "Андрей Губин", src: "audio/35.mp3" },
    { number: 36, title: "Электричка", artist: "Алина Апина", src: "audio/36.mp3" },
    { number: 37, title: "Люби меня люби", artist: "Отпетые мошенники", src: "audio/37.mp3" },
    { number: 38, title: "Весна", artist: "Краски", src: "audio/38.mp3" },
    { number: 39, title: "Пьяная вишня", artist: "Кристина Орбакайте", src: "audio/39.mp3" },
    { number: 40, title: "Всего 15 лет", artist: "Краски", src: "audio/40.mp3" },
    { number: 41, title: "Это не женщина", artist: "Те100стерон", src: "audio/41.mp3" },
    { number: 42, title: "Мама я танцую", artist: "2Маши", src: "audio/42.mp3" },
    { number: 43, title: "О боже какой мужчина", artist: "Натали", src: "audio/43.mp3" },
    { number: 44, title: "Just A Lil Bit", artist: "50 Cent", src: "audio/44.mp3" },
    { number: 45, title: "Вера", artist: "Меладзе", src: "audio/45.mp3" },
    { number: 46, title: "Плачу на техно", artist: "Crem Soda", src: "audio/46.mp3" },
    { number: 47, title: "Ты уйдешь", artist: "Комиссар", src: "audio/47.mp3" },
    { number: 48, title: "Режиссер", artist: "Градусы", src: "audio/48.mp3" },
    { number: 49, title: "Мама Люба", artist: "Serebro", src: "audio/49.mp3" },
    { number: 50, title: "Девочка рыжая", artist: "Воровайки", src: "audio/50.mp3" },
    { number: 51, title: "Это нормально", artist: "T-Killah", src: "audio/51.mp3" },
    { number: 52, title: "Самая-Самая", artist: "Егор Крид", src: "audio/52.mp3" },
    { number: 53, title: "Попытка №5", artist: "ВИА ГРА", src: "audio/53.mp3" },
    { number: 54, title: "Любовь спасет мир", artist: "Вера Брежнева", src: "audio/54.mp3" },
    { number: 55, title: "Улыбайся", artist: "IOWA", src: "audio/55.mp3" },
    { number: 56, title: "Bobi-Boba", artist: "Bobi&Boba", src: "audio/56.mp3" },
    { number: 57, title: "Районы-Кварталы", artist: "Звери", src: "audio/57.mp3" },
    { number: 58, title: "Марджанджа", artist: "Шуфутинский", src: "audio/58.mp3" },
    { number: 59, title: "Все для тебя", artist: "Стас Михайлов", src: "audio/59.mp3" },
    { number: 60, title: "Золотое сердце", artist: "Стас Михайлов", src: "audio/60.mp3" },
    { number: 61, title: "Королева танцпола", artist: "Джаро&Ханза", src: "audio/61.mp3" },
    { number: 62, title: "Желаю", artist: "Елена Ваенга", src: "audio/62.mp3" },
    { number: 63, title: "Девочка в тренде", artist: "MIKO", src: "audio/63.mp3" },
    { number: 64, title: "Банк", artist: "Iceberg&Zivert", src: "audio/64.mp3" },
    { number: 65, title: "За деньги да", artist: "Instasamka", src: "audio/65.mp3" },
    { number: 66, title: "Патимэйкер", artist: "Пика", src: "audio/66.mp3" },
    { number: 67, title: "Black", artist: "Gazirovka", src: "audio/67.mp3" },
    { number: 68, title: "Двигаться", artist: "Raim", src: "audio/68.mp3" },
    { number: 69, title: "Ой мама не женюсь", artist: "Влад Порфиров", src: "audio/69.mp3" },
    { number: 70, title: "Рваные джинсы", artist: "Элджей", src: "audio/70.mp3" },
    { number: 71, title: "Думала", artist: "Руки Вверх!", src: "audio/71.mp3" },
    { number: 72, title: "Царица", artist: "Anna Asti", src: "audio/72.mp3" },
    { number: 73, title: "По барам", artist: "Anna Asti", src: "audio/73.mp3" },
    { number: 74, title: "One Desire", artist: "Jakarta", src: "audio/74.mp3" },
    { number: 75, title: "Невозможное Возможно", artist: "Дима Билан", src: "audio/75.mp3" },
    { number: 76, title: "Возле дома твоего", artist: "Серега", src: "audio/76.mp3" },
    { number: 77, title: "Пьяные танцы", artist: "WallClan", src: "audio/77.mp3" },
    { number: 78, title: "Я буду", artist: "5sta Family", src: "audio/78.mp3" },
    { number: 79, title: "Знак водолея", artist: "Винтаж", src: "audio/79.mp3" },
    { number: 80, title: "Горячая гремучая", artist: "Султан Лагучев", src: "audio/80.mp3" },
    { number: 81, title: "Каблучки", artist: "Артур Теекев", src: "audio/81.mp3" },
    { number: 82, title: "Ах какая женщина", artist: "Фристайл", src: "audio/82.mp3" },
    { number: 83, title: "Танцуй пока молодая", artist: "Подиум", src: "audio/83.mp3" },
    { number: 84, title: "Седая ночь", artist: "Юрий Шатунов", src: "audio/84.mp3" },
    { number: 85, title: "Зараза", artist: "Лепс", src: "audio/85.mp3" },
    { number: 86, title: "Ева", artist: "Винтаж", src: "audio/86.mp3" },
    { number: 87, title: "Touch The Sky", artist: "Ollane&Miyagi", src: "audio/87.mp3" },
    { number: 88, title: "Любовь-Морковь", artist: "Оля Полякова", src: "audio/88.mp3" },
    { number: 89, title: "Восточные сказки", artist: "Блестящие", src: "audio/89.mp3" },
    { number: 90, title: "Наступит ночь", artist: "Бьянка", src: "audio/90.mp3" }
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
    
    clone.className = 'barrel flying-barrel';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.margin = '0';
    
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

    songAudio.src = track.src;
    songAudio.currentTime = 0;
    
    updateTimeDisplay();
    updatePlayPauseIcon();

    const tryPlay = () => songAudio.play().catch(() => {});

    songAudio.addEventListener('canplay', tryPlay, { once: true });
    songAudio.addEventListener('canplaythrough', tryPlay, { once: true });
    setTimeout(tryPlay, 50);
    setTimeout(tryPlay, 150);
    setTimeout(tryPlay, 400);
}
function closeSongPage() {
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

function startBingoPetals() {
    const container = document.getElementById('bingoPetalsContainer');
    if (!container) return;
    container.innerHTML = '';
    const createPetal = () => {
        const petal = document.createElement('div');
        petal.className = 'bingo-falling-petal';
        const left = Math.random() * 100;
        const size = 14 + Math.random() * 18;
        const duration = 4 + Math.random() * 5;
        const drift = -100 + Math.random() * 200;
        const delay = Math.random() * 0.5;
        petal.style.left = left + '%';
        petal.style.width = size + 'px';
        petal.style.height = (size * 1.3) + 'px';
        petal.style.setProperty('--drift', drift + 'px');
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        container.appendChild(petal);
        setTimeout(() => petal.remove(), (duration + delay) * 1000 + 200);
    };
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createPetal(), i * 200);
    }
    bingoPetalsInterval = setInterval(() => {
        createPetal();
    }, 300);
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
        startBingoPetals();
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
        const confettiContainer = document.getElementById('bingoConfettiContainer');
        if (confettiContainer) confettiContainer.innerHTML = '';
        setTimeout(() => {
            bingoAnimation.classList.remove('active');
            bingoAnimation.classList.add('hidden');
            bingoAnimation.querySelectorAll('.letter-wrapper').forEach(w => { w.style.animation = 'none'; });
        }, 500);
    }
}

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

    if (startBtnElement) {
        startBtnElement.addEventListener('click', () => {
            const transitionOverlay = document.getElementById('bingoTransition');
            
            if (transitionOverlay) {
                transitionOverlay.classList.remove('hidden');
                startTransitionConfetti(transitionOverlay);
                requestAnimationFrame(() => {
                    transitionOverlay.classList.add('active');
                });
            }

            setTimeout(() => {
                stopHeroEffects();
                stopTransitionConfetti();
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
