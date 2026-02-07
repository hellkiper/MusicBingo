const TOTAL_BARRELS = 90;
const selectedSet = new Set();

const tracks = [
    { number: 1, title: "Небеса", artist: "Валерий Меладзе", src: "audio/01.mp3" },
    { number: 2, title: "Случайная", artist: "Лобода", src: "audio/02.mp3" },
    { number: 3, title: "Не любовь", artist: "Гости из будущего", src: "audio/03.mp3" },
    { number: 4, title: "Как ты там", artist: "Kamazz", src: "audio/04.mp3" },
    { number: 5, title: "Повело", artist: "Anna Asti", src: "audio/05.mp3" },
    { number: 6, title: "Секрет", artist: "The Limba", src: "audio/06.mp3" },
    { number: 7, title: "По барам", artist: "Anna Asti", src: "audio/07.mp3" },
    { number: 8, title: "Босая", artist: "2 Маши", src: "audio/08.mp3" },
    { number: 9, title: "Диалоги тет-а-тет", artist: "Alex Ataman", src: "audio/09.mp3" },
    { number: 10, title: "Втюрилась", artist: "Дора", src: "audio/10.mp3" },
    { number: 11, title: "Седьмой Лепесток", artist: "Антон Токарев", src: "audio/11.mp3" },
    { number: 12, title: "Перемирие", artist: "ВИА ГРА", src: "audio/12.mp3" },
    { number: 13, title: "Вокруг шум", artist: "Каста", src: "audio/13.mp3" },
    { number: 14, title: "Нежность", artist: "Валерия", src: "audio/14.mp3" },
    { number: 15, title: "Лада Седан", artist: "Тимати", src: "audio/15.mp3" },
    { number: 16, title: "Это любовь", artist: "Amirchik", src: "audio/16.mp3" },
    { number: 17, title: "Королева красоты", artist: "Степан Мешьщиков", src: "audio/17.mp3" },
    { number: 18, title: "Я твой номер один", artist: "Дима Билан", src: "audio/18.mp3" },
    { number: 19, title: "Отпускай", artist: "Три Дня дождя", src: "audio/19.mp3" },
    { number: 20, title: "Веревки", artist: "Nikita", src: "audio/20.mp3" },
    { number: 21, title: "Комета", artist: "Jony", src: "audio/21.mp3" },
    { number: 22, title: "Венера-Юпитер", artist: "Ваня Дмитриенко", src: "audio/22.mp3" },
    { number: 23, title: "Золото", artist: "Мари Краймбери", src: "audio/23.mp3" },
    { number: 24, title: "Знакомая", artist: "Comedoze", src: "audio/24.mp3" },
    { number: 25, title: "А на море белый песок", artist: "Жанна Фриске", src: "audio/25.mp3" },
    { number: 26, title: "Мало тебя", artist: "Serebro", src: "audio/26.mp3" },
    { number: 27, title: "Девочка-Ночь", artist: "Лада Дэнс", src: "audio/27.mp3" },
    { number: 28, title: "Ты не верь слезам", artist: "Шура", src: "audio/28.mp3" },
    { number: 29, title: "Ноты", artist: "HammaAli&Navai", src: "audio/29.mp3" },
    { number: 30, title: "Уходи дверь закрой", artist: "Женя Отрадная", src: "audio/30.mp3" },
    { number: 31, title: "One desire", artist: "Jakarta", src: "audio/31.mp3" },
    { number: 32, title: "Грустный дэнс", artist: "Artik&Asti", src: "audio/32.mp3" },
    { number: 33, title: "Alors on Dance", artist: "Stromae", src: "audio/33.mp3" },
    { number: 34, title: "Black Bakardi", artist: "GAZIROVKA", src: "audio/34.mp3" },
    { number: 35, title: "Я хочу", artist: "Grivina", src: "audio/35.mp3" },
    { number: 36, title: "Фаина", artist: "На-На", src: "audio/36.mp3" },
    { number: 37, title: "Шахерезада", artist: "Натали", src: "audio/37.mp3" },
    { number: 38, title: "Угонщица", artist: "Ирина Алегрова", src: "audio/38.mp3" },
    { number: 39, title: "Пропадаешь зря", artist: "Сергей Жуков", src: "audio/39.mp3" },
    { number: 40, title: "Думала", artist: "Руки Вверх!", src: "audio/40.mp3" },
    { number: 41, title: "Это все она", artist: "Сергей Лазарев", src: "audio/41.mp3" },
    { number: 42, title: "Все для тебя", artist: "Стас Михайлов", src: "audio/42.mp3" },
    { number: 43, title: "Выпьем за любовь", artist: "Игорь Николаев", src: "audio/43.mp3" },
    { number: 44, title: "Невозможное Возможно", artist: "Дима Билан", src: "audio/44.mp3" },
    { number: 45, title: "Просто друг", artist: "Чай вдвоем", src: "audio/45.mp3" },
    { number: 46, title: "Бабы стервы", artist: "Ирина Алегрова", src: "audio/46.mp3" },
    { number: 47, title: "Черные Глаза", artist: "Айдамир Мугу", src: "audio/47.mp3" },
    { number: 48, title: "Параллельные", artist: "Валерий Меладзе", src: "audio/48.mp3" },
    { number: 49, title: "Шпилька-Каблучок", artist: "Лолита", src: "audio/49.mp3" },
    { number: 50, title: "Bara-Bere", artist: "Alex Ferrari", src: "audio/50.mp3" },
    { number: 51, title: "Часики", artist: "Валерия Сингер", src: "audio/51.mp3" },
    { number: 52, title: "Ч.П.Х", artist: "Ленинград", src: "audio/52.mp3" },
    { number: 53, title: "Детство", artist: "Юрий Шатунов", src: "audio/53.mp3" },
    { number: 54, title: "Просто любить тебя", artist: "Кристина Орбакайте", src: "audio/54.mp3" },
    { number: 55, title: "7 этаж", artist: "Лера Москва", src: "audio/55.mp3" },
    { number: 56, title: "Любовь спасет мир", artist: "Вера Брежнева", src: "audio/56.mp3" },
    { number: 57, title: "Классный", artist: "Туси", src: "audio/57.mp3" },
    { number: 58, title: "Я поднимаю руки", artist: "Лепс", src: "audio/58.mp3" },
    { number: 59, title: "Голая", artist: "Градусы", src: "audio/59.mp3" },
    { number: 60, title: "Это нормально", artist: "T-Killah", src: "audio/60.mp3" },
    { number: 61, title: "Клён", artist: "ВИА «Синяя птица»", src: "audio/61.mp3" },
    { number: 62, title: "Батарейка", artist: "Жуки", src: "audio/62.mp3" },
    { number: 63, title: "Прованс", artist: "Елка", src: "audio/63.mp3" },
    { number: 64, title: "Районы кварталы", artist: "Звери", src: "audio/64.mp3" },
    { number: 65, title: "Смородина", artist: "Алена Роуз", src: "audio/65.mp3" },
    { number: 66, title: "Базовый минимум", artist: "Sabi, Mia Boyka", src: "audio/66.mp3" },
    { number: 67, title: "К черту любовь", artist: "LOBODA", src: "audio/67.mp3" },
    { number: 68, title: "Ты так красива", artist: "Qwest Pistols Show", src: "audio/68.mp3" },
    { number: 69, title: "Плывет веночек", artist: "Надежда Кадышева", src: "audio/69.mp3" },
    { number: 70, title: "Простая песня", artist: "IOWA", src: "audio/70.mp3" },
    { number: 71, title: "На теплоходе", artist: "Ольга Зарубина", src: "audio/71.mp3" },
    { number: 72, title: "9х12", artist: "Ирина Алегрова", src: "audio/72.mp3" },
    { number: 73, title: "Зеленоглазое такси", artist: "Михаил Боярский", src: "audio/73.mp3" },
    { number: 74, title: "Сумасшедшая", artist: "Алексей Воробьев", src: "audio/74.mp3" },
    { number: 75, title: "Девчонка Девчоночка", artist: "Женя Белоусов", src: "audio/75.mp3" },
    { number: 76, title: "Ах, какая женщина", artist: "Фристайл", src: "audio/76.mp3" },
    { number: 77, title: "Музыка", artist: "Бьянка", src: "audio/77.mp3" },
    { number: 78, title: "Дыши", artist: "Виктория Дайнеко", src: "audio/78.mp3" },
    { number: 79, title: "Как будто мы с тобой", artist: "Ирина Круг, Алексей Брянцев", src: "audio/79.mp3" },
    { number: 80, title: "За тебя", artist: "Михаил Шелег", src: "audio/80.mp3" },
    { number: 81, title: "На районе", artist: "Потап и Настя", src: "audio/81.mp3" },
    { number: 82, title: "Не верю", artist: "Евгений Осин", src: "audio/82.mp3" },
    { number: 83, title: "Танцуй пока молодая", artist: "Подиум", src: "audio/83.mp3" },
    { number: 84, title: "Одиночество", artist: "Слава", src: "audio/84.mp3" },
    { number: 85, title: "Один день", artist: "Татьяна Буланова", src: "audio/85.mp3" },
    { number: 86, title: "Девочка с севера", artist: "Премьер Министр", src: "audio/86.mp3" },
    { number: 87, title: "Дарите женщинам цветы", artist: "Jazzdauren", src: "audio/87.mp3" },
    { number: 88, title: "Мальчик хочет в Тамбов", artist: "Мурат Насыров", src: "audio/88.mp3" },
    { number: 89, title: "Кукла колдуна", artist: "Король и Шут", src: "audio/89.mp3" },
    { number: 90, title: "Роман", artist: "Винтаж", src: "audio/90.mp3" }
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
    
    const bgBouquets = document.getElementById('bg-bouquets');
    const bgNotes = document.getElementById('bg-notes');
    
    if (bgBouquets) bgBouquets.style.opacity = '0';
    if (bgNotes) bgNotes.style.opacity = '1';

    page3.classList.remove('hidden');
    document.body.classList.add('song-open');

    if (songCover) {
        songCover.src = `images/${String(track.number).padStart(2, '0')}.jpg`;
        songCover.alt = `Обложка ${track.title}`;
    }

    songTitle.textContent = track.title;
    if (track.title.length > 25 || track.number === 82) {
        songTitle.classList.add('long-title');
    } else {
        songTitle.classList.remove('long-title');
    }
    songArtist.textContent = track.artist;
    songNumber.textContent = `Сердечко ${track.number}`;

    songAudio.src = track.src;
    songAudio.currentTime = 0;
    
    updateTimeDisplay();
    updatePlayPauseIcon();

    const tryPlay = () => songAudio.play().catch(() => {});
    setTimeout(tryPlay, 80);
}
function closeSongPage() {
    songAudio.pause();
    songAudio.currentTime = 0;
    page3.classList.add('hidden');
    page2.classList.remove('hidden');
    
    const bgBouquets = document.getElementById('bg-bouquets');
    const bgNotes = document.getElementById('bg-notes');
    
    if (bgBouquets) bgBouquets.style.opacity = '1';
    if (bgNotes) bgNotes.style.opacity = '0';

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
    const imgs = ['assets/heart.webp', 'assets/kupidon.webp'];
    const img = document.createElement('img');
    img.className = 'victory-confetti victory-heart-cupid';
    img.src = imgs[Math.floor(Math.random() * imgs.length)];
    img.alt = '';
    
    const size = Math.random() * 32 + 24;
    const startX = Math.random() * window.innerWidth;
    const startY = -30;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2 + 3;
    
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.left = startX + 'px';
    img.style.top = startY + 'px';
    img.style.objectFit = 'contain';
    
    container.appendChild(img);
    
    const animation = img.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    animation.onfinish = () => img.remove();
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
    const imgs = ['assets/heart.webp', 'assets/kupidon.webp'];
    const img = document.createElement('img');
    img.className = 'victory-star victory-heart-cupid';
    img.src = imgs[Math.floor(Math.random() * imgs.length)];
    img.alt = '';
    
    const size = Math.random() * 36 + 28;
    const startX = Math.random() * window.innerWidth;
    const startY = -30;
    const endY = window.innerHeight + 50;
    const horizontalDrift = (Math.random() - 0.5) * 250;
    const rotation = Math.random() * 720;
    const duration = Math.random() * 2.5 + 2.5;
    
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.left = startX + 'px';
    img.style.top = startY + 'px';
    img.style.objectFit = 'contain';
    
    container.appendChild(img);
    img.animate([
        { transform: `translate(-50%, -50%) translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${horizontalDrift}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0.2 }
    ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.3, 0, 0.5, 1)'
    }).onfinish = () => img.remove();
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
                
                const bgBouquets = document.getElementById('bg-bouquets');
                if (bgBouquets) bgBouquets.style.opacity = '1';

                document.body.classList.add('blurred-bg');
                
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
