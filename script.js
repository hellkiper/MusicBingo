// 3D Tilt Effect removed
// document.addEventListener('mousemove', (e) => { ... });

const TOTAL_BARRELS = 90;
const selectedSet = new Set();
let currentLyrics = null;
let currentWords = null;
let lastKaraokeLineIndex = -1;
let lastKaraokeUpdate = 0;
const KARAOKE_UPDATE_INTERVAL_MS = 50;

const tracks = [
    { 
        number: 1, 
        title: "Чики", 
        artist: "Biffguyz", 
        cover: "assets/vinil.webp", 
        src: "audio/01.mp3",
        syncedLyrics: [
            { time: 15.0, text: "И каждой чике хочется выпить!" },
            { time: 18.5, text: "И после этого ищет с кем чики-чики" },
            { time: 22.0, text: "И каждой чике хочется выпить!" },
            { time: 25.5, text: "И после этого ищет с кем чики-чики" },
            { time: 29.0, text: "Бум, я тебя бум-бум! (Ла-ла-ла-ла-ла)" },
            { time: 32.5, text: "Ты меня бум-бум! (Ла-ла-ла-ла-ла)" },
            { time: 36.0, text: "Мы вместе бум-бум! Ла-ла-ла-ла-ла" },
            { time: 39.5, text: "Бум, тебя бум-бум! (Ла-ла-ла-ла-ла)" },
            { time: 43.0, text: "Ты меня бум-бум! (Ла-ла-ла-ла-ла)" },
            { time: 46.5, text: "Мы вместе бум-бум! Ла-ла-ла-ла-ла" },
            { time: 50.0, text: "Девушка, оставшись одна дома, не можешь грустить" },
            { time: 54.0, text: "Если соберёт подруг, то — это Боже, упаси!" },
            { time: 58.0, text: "Я понял, что в ходе их мероприятий" }
        ]
    },
    { 
        number: 2, 
        title: "Чувства", 
        artist: "Artik & Asti", 
        cover: "assets/vinil.webp", 
        src: "audio/02.mp3",
        lyrics: "Когда стерва во мне победит\nЭту девочку, что так любил\nТы поставишь мой трек на репит\nИ поймёшь, что это было\n\nПрипев:\nЭто мои чувства, это моя нежность\nЭто моя глубина, это моя верность\nЭто всё, что ты не вернёшь уже\nЭто моя боль на восьмом этаже\n\nЭто мои чувства, это моя вера\nЭто моя пустота, это мои нервы\nЯ же так любила тебя, дурак\nЭто ведь моя душа, зачем ты с ней так?"
    },
    { 
        number: 3, 
        title: "Чужие губы", 
        artist: "Руки Вверх!", 
        cover: "assets/vinil.webp", 
        src: "audio/03.mp3",
        lyrics: "Припев:\nЧужие губы тебя ласкают\nЧужие губы шепчут тебе\nЧто ты одна, ты одна такая\nЧужая стала сама себе\n\nЧужие губы тебя ласкают\nЧужие губы шепчут тебе\nЧто ты одна, ты одна такая\nЧужая стала сама себе\n\nСловно в хмельном тумане\nКружится голова\nСогрета чужими руками"
    },
    { 
        number: 4, 
        title: "Это все она", 
        artist: "Сергей Лазарев", 
        cover: "assets/vinil.webp", 
        src: "audio/04.mp3",
        lyrics: "Припев:\n\nЭто всё она, на-на-на-на\nНа-на-на-на, на-на-на-на\nЭто всё она, на-на-на-на\nСводит меня с ума\n\nЭто всё она, на-на-на-на\nНа-на-на-на, на-на-на-на\nЭто всё она, на-на-на-на\nСводит меня с ума"
    },
    { 
        number: 5, 
        title: "Золотое сердце", 
        artist: "Стас Михайлов", 
        cover: "assets/vinil.webp", 
        src: "audio/05.mp3",
        lyrics: "Припев:\n\nЗолотое сердце, золотая\nЭту песню я тебе, родная\nПодарить хочу за то, что ты есть\nУ меня такая, у меня такая\n\nЗолотое сердце, золотая\nНагадай нам счастье, запятая\nСбереги любовь мою, тебя молю\nЗолотая, ты моя золотая"
    },
    { number: 6, title: "Перо", artist: "Ramil", cover: "assets/vinil.webp", src: "audio/06.mp3" },
    { number: 7, title: "Чистый лист", artist: "Нэнси", cover: "assets/vinil.webp", src: "audio/07.mp3" },
    { number: 8, title: "В клубе", artist: "Тимати", cover: "assets/vinil.webp", src: "audio/08.mp3" },
    { number: 9, title: "Малиновая лада", artist: "GAYAZOV$ BROTHER$", cover: "assets/vinil.webp", src: "audio/09.mp3" },
    { number: 10, title: "Увезите меня на Дип-хаус", artist: "GAYAZOV$ BROTHER$", cover: "assets/vinil.webp", src: "audio/10.mp3" },
    { number: 11, title: "Пошлю его на...", artist: "Лолита", cover: "assets/vinil.webp", src: "audio/11.mp3" },
    { number: 12, title: "Вахтерам", artist: "Бумбокс", cover: "assets/vinil.webp", src: "audio/12.mp3" },
    { number: 13, title: "Другая причина", artist: "Непара", cover: "assets/vinil.webp", src: "audio/13.mp3" },
    { number: 14, title: "Девушки как звезды", artist: "Андрей Губин", cover: "assets/vinil.webp", src: "audio/14.mp3" },
    { number: 15, title: "Голая", artist: "Градусы", cover: "assets/vinil.webp", src: "audio/15.mp3" },
    { number: 16, title: "Вместе мы", artist: "5sta Family", cover: "assets/vinil.webp", src: "audio/16.mp3" },
    { number: 17, title: "Одиночество", artist: "Слава", cover: "assets/vinil.webp", src: "audio/17.mp3" },
    { number: 18, title: "Веревки", artist: "Nikita", cover: "assets/vinil.webp", src: "audio/18.mp3" },
    { number: 19, title: "Царица", artist: "Anna Asti", cover: "assets/vinil.webp", src: "audio/19.mp3" },
    { number: 20, title: "Горячая, гремучая", artist: "Султан Лагучев", cover: "assets/vinil.webp", src: "audio/20.mp3" },
    { number: 21, title: "Все будет хорошо", artist: "Митя Фомин", cover: "assets/vinil.webp", src: "audio/21.mp3" },
    { number: 22, title: "Фантазер", artist: "Дискотека Авария, Николай Басков", cover: "assets/vinil.webp", src: "audio/22.mp3" },
    { number: 23, title: "Зажигают Огоньки", artist: "Фабрика", cover: "assets/vinil.webp", src: "audio/23.mp3" },
    { number: 24, title: "Не родись красивой", artist: "Фабрика", cover: "assets/vinil.webp", src: "audio/24.mp3" },
    { number: 25, title: "Банк", artist: "Icegegert, Zivert", cover: "assets/vinil.webp", src: "audio/25.mp3" },
    { number: 26, title: "Портофино", artist: "Жанна Фриске", cover: "assets/vinil.webp", src: "audio/26.mp3" },
    { number: 27, title: "Черный Бумер", artist: "Серега", cover: "assets/vinil.webp", src: "audio/27.mp3" },
    { number: 28, title: "Женщина, я не танцую", artist: "Стас Костющкин", cover: "assets/vinil.webp", src: "audio/28.mp3" },
    { number: 29, title: "Плохая девочка", artist: "Vintage", cover: "assets/vinil.webp", src: "audio/29.mp3" },
    { number: 30, title: "Горький вкус", artist: "Султан Лагучев", cover: "assets/vinil.webp", src: "audio/30.mp3" },
    { number: 31, title: "Выпьем за любовь", artist: "Игорь Николаев", cover: "assets/vinil.webp", src: "audio/31.mp3" },
    { number: 32, title: "Он тебя целует", artist: "Руки Вверх!", cover: "assets/vinil.webp", src: "audio/32.mp3" },
    { number: 33, title: "Восточные сказки", artist: "Блестящие", cover: "assets/vinil.webp", src: "audio/33.mp3" },
    { number: 34, title: "За тебя калым отдам", artist: "Мурат Тхагалегов", cover: "assets/vinil.webp", src: "audio/34.mp3" },
    { number: 35, title: "Билетик в кино", artist: "Иванушки Internationale", cover: "assets/vinil.webp", src: "audio/35.mp3" },
    { number: 36, title: "Титаник", artist: "Лолита", cover: "assets/vinil.webp", src: "audio/36.mp3" },
    { number: 37, title: "Чат", artist: "Клава Кока", cover: "assets/vinil.webp", src: "audio/37.mp3" },
    { number: 38, title: "Ты не такой", artist: "Юлиана Караулова", cover: "assets/vinil.webp", src: "audio/38.mp3" },
    { number: 39, title: "Корни", artist: "Вика", cover: "assets/vinil.webp", src: "audio/39.mp3" },
    { 
        number: 40, 
        title: "Ты узнаешь ее", 
        artist: "Корни", 
        cover: "assets/vinil.webp", 
        src: "audio/40.mp3",
        syncedLyrics: [
            { time: 0, text: "Ты узнаешь ее из тысячи.", words: [
                { start: 0, end: 0.28, text: "Ты" },
                { start: 0.28, end: 1.64, text: "узнаешь" },
                { start: 1.64, end: 2.16, text: "ее" },
                { start: 2.16, end: 3.08, text: "из" },
                { start: 3.08, end: 5.52, text: "тысячи." }
            ]},
            { time: 11.1, text: "Ее образ на сердце вытечет.", words: [
                { start: 11.1, end: 12.5, text: "Ее" },
                { start: 12.5, end: 13.42, text: "образ" },
                { start: 13.42, end: 13.8, text: "на" },
                { start: 13.8, end: 15.14, text: "сердце" },
                { start: 15.14, end: 17.64, text: "вытечет." }
            ]},
            { time: 22.88, text: "Ты узнаешь ее из тысячи.", words: [
                { start: 22.88, end: 24.28, text: "Ты" },
                { start: 24.28, end: 25.58, text: "узнаешь" },
                { start: 25.58, end: 26.16, text: "ее" },
                { start: 26.16, end: 27.1, text: "из" },
                { start: 27.1, end: 29.44, text: "тысячи." }
            ]},
            { time: 29.44, text: "По словам, по глазам, по голосу.", words: [
                { start: 29.44, end: 29.9, text: "По" },
                { start: 29.9, end: 31.12, text: "словам," },
                { start: 31.12, end: 31.4, text: "по" },
                { start: 31.4, end: 32.64, text: "глазам," },
                { start: 32.64, end: 32.94, text: "по" },
                { start: 32.94, end: 35.36, text: "голосу." }
            ]},
            { time: 35.44, text: "Ее образ на сердце вытечет.", words: [
                { start: 35.44, end: 36.42, text: "Ее" },
                { start: 36.42, end: 37.42, text: "образ" },
                { start: 37.42, end: 37.88, text: "на" },
                { start: 37.88, end: 39.4, text: "сердце" },
                { start: 39.4, end: 41.14, text: "вытечет." }
            ]},
            { time: 44.32, text: "Ароматами гладиолуса.", words: [
                { start: 44.32, end: 45.72, text: "Ароматами" },
                { start: 45.72, end: 47.12, text: "гладиолуса." }
            ]},
            { time: 57, text: "Ароматами гладиолуса.", words: [
                { start: 57, end: 58.4, text: "Ароматами" },
                { start: 58.4, end: 59.8, text: "гладиолуса." }
            ]}
        ]
    },
    { number: 41, title: "Были танцы", artist: "Бьянка", cover: "assets/vinil.webp", src: "audio/41.mp3" },
    { number: 42, title: "Ночь", artist: "Андрей Губин", cover: "assets/vinil.webp", src: "audio/42.mp3" },
    { number: 43, title: "Седьмой Лепесток", artist: "Хай Фай", cover: "assets/vinil.webp", src: "audio/43.mp3" },
    { number: 44, title: "Девчонка, девчоночка", artist: "Иванушки International", cover: "assets/vinil.webp", src: "audio/44.mp3" },
    { number: 45, title: "Арамзамзам", artist: "Дискотека Авария", cover: "assets/vinil.webp", src: "audio/45.mp3" },
    { number: 46, title: "Федерико Фелини", artist: "Galibri & Mavik", cover: "assets/vinil.webp", src: "audio/46.mp3" },
    { number: 47, title: "Лондон Париж", artist: "Иракли", cover: "assets/vinil.webp", src: "audio/47.mp3" },
    { number: 48, title: "Фары", artist: "Пицца", cover: "assets/vinil.webp", src: "audio/48.mp3" },
    { number: 49, title: "Младший лейтенант", artist: "Ирина Алегрова", cover: "assets/vinil.webp", src: "audio/49.mp3" },
    { number: 50, title: "Наступит ночь", artist: "Бьянка", cover: "assets/vinil.webp", src: "audio/50.mp3" },
    { number: 51, title: "Я поднимаю руки", artist: "Григорий Лепс", cover: "assets/vinil.webp", src: "audio/51.mp3" },
    { number: 52, title: "Украдет и позовет", artist: "Мурат Тхагалегов", cover: "assets/vinil.webp", src: "audio/52.mp3" },
    { number: 53, title: "Моя мелодия", artist: "5sta & DJ Pankratov", cover: "assets/vinil.webp", src: "audio/53.mp3" },
    { number: 54, title: "Розовое вино", artist: "Feduk, Элджей", cover: "assets/vinil.webp", src: "audio/54.mp3" },
    { number: 55, title: "Mr.Saxsobeat", artist: "Alex Saxsobeat", cover: "assets/vinil.webp", src: "audio/55.mp3" },
    { number: 56, title: "Батареи", artist: "Нервы", cover: "assets/vinil.webp", src: "audio/56.mp3" },
    { number: 57, title: "Солнце, Монако", artist: "Люся Чеботина", cover: "assets/vinil.webp", src: "audio/57.mp3" },
    { number: 58, title: "Алкоголичка", artist: "Артур Пирожков", cover: "assets/vinil.webp", src: "audio/58.mp3" },
    { number: 59, title: "Кайф ты поймала", artist: "Konfuz", cover: "assets/vinil.webp", src: "audio/59.mp3" },
    { number: 60, title: "Золото", artist: "Супер Жорик", cover: "assets/vinil.webp", src: "audio/60.mp3" },
    { number: 61, title: "Кислотный DJ", artist: "Оксана Почепа", cover: "assets/vinil.webp", src: "audio/61.mp3" },
    { number: 62, title: "Плачу на техно", artist: "Anna Asti", cover: "assets/vinil.webp", src: "audio/62.mp3" },
    { number: 63, title: "Халигали, паратрупер", artist: "Леприконсы", cover: "assets/vinil.webp", src: "audio/63.mp3" },
    { number: 64, title: "Танцы", artist: "Рефлекс", cover: "assets/vinil.webp", src: "audio/64.mp3" },
    { number: 65, title: "Американ Бой", artist: "Комбинация", cover: "assets/vinil.webp", src: "audio/65.mp3" },
    { number: 66, title: "Бухгалтер", artist: "Комбинация", cover: "assets/vinil.webp", src: "audio/66.mp3" },
    { number: 67, title: "Мало тебя", artist: "Serebro", cover: "assets/vinil.webp", src: "audio/67.mp3" },
    { number: 68, title: "Russian girl", artist: "Комбинация", cover: "assets/vinil.webp", src: "audio/68.mp3" },
    { number: 69, title: "Базовый минимум", artist: "Mia Boyko, Sabi", cover: "assets/vinil.webp", src: "audio/69.mp3" },
    { number: 70, title: "Мама Люба", artist: "Serebro", cover: "assets/vinil.webp", src: "audio/70.mp3" },
    { number: 71, title: "На дискотеку!", artist: "Султан-Ураган, Мурат Тхагалегов", cover: "assets/vinil.webp", src: "audio/71.mp3" },
    { number: 72, title: "Я тебя нарисовал", artist: "Нэнси", cover: "assets/vinil.webp", src: "audio/72.mp3" },
    { number: 73, title: "Я полюбила бандита", artist: "Краски", cover: "assets/vinil.webp", src: "audio/73.mp3" },
    { number: 74, title: "Экспонат", artist: "Ленинград", cover: "assets/vinil.webp", src: "audio/74.mp3" },
    { number: 75, title: "Белое платье", artist: "Чай вдвоем", cover: "assets/vinil.webp", src: "audio/75.mp3" },
    { number: 76, title: "Пьяная вишня", artist: "Кристина Орбакайте", cover: "assets/vinil.webp", src: "audio/76.mp3" },
    { number: 77, title: "I got love", artist: "Miyagi & Эндшпиль, Рэм Дига", cover: "assets/vinil.webp", src: "audio/77.mp3" },
    { number: 78, title: "Блеск Шик", artist: "Alex Bold, BoValigura", cover: "assets/vinil.webp", src: "audio/78.mp3" },
    { number: 79, title: "Танцпол везде", artist: "Анна Немченко", cover: "assets/vinil.webp", src: "audio/79.mp3" },
    { number: 80, title: "За деньги да", artist: "Instasamka", cover: "assets/vinil.webp", src: "audio/80.mp3" },
    { number: 81, title: "Остров", artist: "Леонид Агутин", cover: "assets/vinil.webp", src: "audio/81.mp3" },
    { number: 82, title: "Где прошла ты", artist: "Кравц, Гио Пика", cover: "assets/vinil.webp", src: "audio/82.mp3" },
    { number: 83, title: "Погудим", artist: "Rasa", cover: "assets/vinil.webp", src: "audio/83.mp3" },
    { number: 84, title: "Коламбия Пикчерз", artist: "БАНДЭРОС", cover: "assets/vinil.webp", src: "audio/84.mp3" },
    { number: 85, title: "Alors on Dance", artist: "Stromae", cover: "assets/vinil.webp", src: "audio/85.mp3" },
    { number: 86, title: "Девочка рыжая", artist: "Воровайки", cover: "assets/vinil.webp", src: "audio/86.mp3" },
    { number: 87, title: "Я не поняла", artist: "ВИА ГРА", cover: "assets/vinil.webp", src: "audio/87.mp3" },
    { number: 88, title: "Классный", artist: "Туси", cover: "assets/vinil.webp", src: "audio/88.mp3" },
    { number: 89, title: "На теплоходе", artist: "Ольга Зарубина", cover: "assets/vinil.webp", src: "audio/89.mp3" },
    { number: 90, title: "Это нормально", artist: "T-Killah", cover: "assets/vinil.webp", src: "audio/90.mp3" }
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

function escapeHtml(s) {
    if (typeof s !== 'string') return '';
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}
function attrEscape(s) {
    if (typeof s !== 'string') return '';
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

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

    // Обложка скрыта, но проверяем на всякий случай
    if (typeof songCover !== 'undefined' && songCover) {
        songCover.src = track.cover;
        songCover.alt = `Обложка ${track.title}`;
    }

    // Загружаем текст песни
    currentLyrics = track.syncedLyrics || null;
    currentWords = null;
    lastKaraokeLineIndex = -1;
    lastKaraokeUpdate = 0;
    const lyricsContainer = document.getElementById('songLyrics');
    
    if (lyricsContainer) {
        if (currentLyrics && currentLyrics[0] && currentLyrics[0].words) {
            // Режим караоке по словам (word-level)
            const flat = [];
            const linesHtml = currentLyrics.map((line, lineIndex) => {
                const wordsHtml = line.words.map((w, wi) => {
                    const g = flat.length;
                    flat.push({ start: w.start, end: w.end, text: w.text, lineIndex });
                    return `<span class="karaoke-word" id="karaoke-word-${g}" data-text="${attrEscape(w.text)}" data-start="${w.start}" data-end="${w.end}">${escapeHtml(w.text)}</span>`;
                }).join(' ');
                return `<div class="karaoke-line karaoke-line-words" id="karaoke-line-${lineIndex}" data-line-index="${lineIndex}">${wordsHtml}</div>`;
            }).join('');
            currentWords = flat;
            lyricsContainer.innerHTML = linesHtml;
            lyricsContainer.classList.add('karaoke-word-level');
        } else if (currentLyrics) {
            // Режим караоке по строкам (line-level)
            lyricsContainer.classList.remove('karaoke-word-level');
            const linesHtml = currentLyrics.map((line, index) => `
                <div class="karaoke-line" id="karaoke-line-${index}" data-text="${escapeHtml(line.text)}">${escapeHtml(line.text)}</div>
            `).join('');
            lyricsContainer.innerHTML = linesHtml;
        } else if (track.lyrics) {
            lyricsContainer.classList.remove('karaoke-word-level');
            // Обычный текст
            const formattedLyrics = track.lyrics.split('\n').map(line => {
                if (line.trim() === '') return '<br>';
                return `<p>${line}</p>`;
            }).join('');
            lyricsContainer.innerHTML = formattedLyrics;
        } else {
            lyricsContainer.classList.remove('karaoke-word-level');
            lyricsContainer.innerHTML = `
                <p>Текст песни загружается...</p>
                <p>(Для этой песни текст еще не добавлен)</p>
                <p>🎤 🎶 🎹</p>
            `;
        }
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
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                letterWrappers.forEach(wrapper => {
                    wrapper.style.animation = '';
                });
                crowns.forEach(crown => {
                    crown.style.animation = '';
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
            const letterWrappers = bingoAnimation.querySelectorAll('.letter-wrapper');
            letterWrappers.forEach(wrapper => {
                wrapper.style.animation = 'none';
            });
            const crowns = bingoAnimation.querySelectorAll('.letter-crown');
            crowns.forEach(crown => {
                crown.style.animation = 'none';
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
    
    if (currentLyrics || currentWords) {
        const now = performance.now();
        if (now - lastKaraokeUpdate >= KARAOKE_UPDATE_INTERVAL_MS) {
            lastKaraokeUpdate = now;
            updateKaraoke(songAudio.currentTime);
        }
    }
    
    if (songAudio.duration) {
        const totalTimeEl = document.getElementById('totalTime');
        if (totalTimeEl) totalTimeEl.textContent = formatTime(songAudio.duration);
        
        const progress = (songAudio.currentTime / songAudio.duration) * 100;
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressSlider) progressSlider.value = progress;
    }
}

function updateKaraoke(time) {
    const lyricsContainer = document.getElementById('songLyrics');
    if (!lyricsContainer || !currentLyrics) return;

    if (currentWords && currentWords.length) {
        // Word-level караоке: подсветка по словам
        let activeIndex = -1;
        for (let i = 0; i < currentWords.length; i++) {
            if (time >= currentWords[i].start && time < currentWords[i].end) {
                activeIndex = i;
                break;
            }
            if (time >= currentWords[i].end) activeIndex = i;
        }
        if (activeIndex === -1) return;

        const lineIndex = currentWords[activeIndex].lineIndex;

        document.querySelectorAll('.karaoke-line-words').forEach((lineEl, idx) => {
            lineEl.classList.toggle('active-line', idx === lineIndex);
        });

        const words = lyricsContainer.querySelectorAll('.karaoke-word');
        words.forEach((el, i) => {
            let progress = 0;
            if (i < activeIndex) progress = 100;
            else if (i === activeIndex) {
                const w = currentWords[i];
                const dur = w.end - w.start;
                progress = dur > 0 ? Math.min(100, Math.max(0, ((time - w.start) / dur) * 100)) : 100;
            }
            el.style.setProperty('--progress', `${progress}%`);
        });

        if (lineIndex !== lastKaraokeLineIndex) {
            lastKaraokeLineIndex = lineIndex;
            const lineEl = document.getElementById(`karaoke-line-${lineIndex}`);
            if (lineEl) lineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Line-level караоке (по строкам)
    let activeIndex = -1;
    for (let i = 0; i < currentLyrics.length; i++) {
        if (time >= currentLyrics[i].time) {
            activeIndex = i;
        } else {
            break;
        }
    }

    if (activeIndex === -1) return;

    const currentActive = lyricsContainer.querySelector('.karaoke-line.active');
    const newActive = document.getElementById(`karaoke-line-${activeIndex}`);

    if (newActive && currentActive !== newActive) {
        if (currentActive) {
            currentActive.classList.remove('active');
            currentActive.style.setProperty('--progress', '100%');
        }
        newActive.classList.add('active');
        if (activeIndex !== lastKaraokeLineIndex) {
            lastKaraokeLineIndex = activeIndex;
            newActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    const currentLineData = currentLyrics[activeIndex];
    const nextLineData = currentLyrics[activeIndex + 1];
    const endTime = nextLineData ? nextLineData.time : (currentLineData.time + 3.0);
    const duration = endTime - currentLineData.time;
    const elapsed = time - currentLineData.time;
    const percent = Math.min(100, Math.max(0, (elapsed / duration) * 100));

    if (newActive) {
        newActive.style.setProperty('--progress', `${percent}%`);
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
