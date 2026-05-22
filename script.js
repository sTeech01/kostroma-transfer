// ========================
// CONFIG
// ========================
var CONFIG = {
    telegramUsername: "iamsteech",
    maxLink: "https://max.ru/u/f9LHodD0cOL1sYwyKczaKTeWb_PXVwF4iRjNoihImN3VSEAFk6qjGrge4Cw",
    cityFrom: "Кострома",
    carName: "Changan Uni-V",
    counterId: null
};

// ========================
// GALLERY
// ========================
var GALLERY = [
    { src: "assets/car-front.webp",        alt: "Changan Uni-V вид спереди",       caption: "Вид спереди" },
    { src: "assets/car-side.webp",         alt: "Changan Uni-V вид сбоку",         caption: "Вид сбоку" },
    { src: "assets/car-salon-front.webp",  alt: "Салон Changan Uni-V спереди",     caption: "Салон спереди" },
    { src: "assets/car-salon-rear.webp",   alt: "Задний ряд Changan Uni-V",        caption: "Задний ряд" },
    { src: "assets/car-salon.webp",        alt: "Салон Changan Uni-V",             caption: "Чистый салон" }
];

// ========================
// FAN POSITIONS (desktop)
// ========================
var DECK_POSITIONS = [
    { x: -180, rot: -15, scale: 0.87, z: 1 },
    { x:  -90, rot:  -7, scale: 0.93, z: 2 },
    { x:    0, rot:   0, scale: 1.00, z: 3 },
    { x:   90, rot:   7, scale: 0.93, z: 2 },
    { x:  180, rot:  15, scale: 0.87, z: 1 }
];

// ========================
// ROUTES
// ========================
var ROUTES = [
    {
        id: "buy", title: "Кострома → Буй", dest: "Буй",
        price: "от 3 500 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Буй.",
        goal_tg: "click_telegram_route_bui", goal_max: "click_max_route_bui"
    },
    {
        id: "yaroslavl", title: "Кострома → Ярославль", dest: "Ярославль",
        price: "от 5 000 ₽", badge: "популярно",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Ярославль.",
        goal_tg: "click_telegram_route_yaroslavl", goal_max: "click_max_route_yaroslavl"
    },
    {
        id: "ivanovo", title: "Кострома → Иваново", dest: "Иваново",
        price: "от 5 500 ₽", badge: "популярно",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Иваново.",
        goal_tg: "click_telegram_route_ivanovo", goal_max: "click_max_route_ivanovo"
    },
    {
        id: "galich", title: "Кострома → Галич", dest: "Галич",
        price: "от 5 000 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Галич.",
        goal_tg: "click_telegram_route_galich", goal_max: "click_max_route_galich"
    },
    {
        id: "kineshma", title: "Кострома → Кинешма", dest: "Кинешма",
        price: "от 6 000 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Кинешма.",
        goal_tg: "click_telegram_route_kineshma", goal_max: "click_max_route_kineshma"
    },
    {
        id: "vladimir", title: "Кострома → Владимир", dest: "Владимир",
        price: "от 10 500 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Владимир.",
        goal_tg: "click_telegram_route_vladimir", goal_max: "click_max_route_vladimir"
    },
    {
        id: "sharya", title: "Кострома → Шарья", dest: "Шарья",
        price: "от 11 000 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Шарья.",
        goal_tg: "click_telegram_route_sharya", goal_max: "click_max_route_sharya"
    },
    {
        id: "vologda", title: "Кострома → Вологда", dest: "Вологда",
        price: "от 11 500 ₽", badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Вологда.",
        goal_tg: "click_telegram_route_vologda", goal_max: "click_max_route_vologda"
    },
    {
        id: "moscow", title: "Кострома → Москва", dest: "Москва",
        price: "от 14 000 ₽", badge: "дальняя",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Москва.",
        goal_tg: "click_telegram_route_moscow", goal_max: "click_max_route_moscow"
    },
    {
        id: "domodedovo", title: "Кострома → Домодедово", dest: "Домодедово",
        price: "от 14 000 ₽", badge: "аэропорт",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — аэропорт Домодедово.",
        goal_tg: "click_telegram_route_domodedovo", goal_max: "click_max_route_domodedovo"
    },
    {
        id: "vnukovo", title: "Кострома → Внуково", dest: "Внуково",
        price: "от 14 500 ₽", badge: "аэропорт",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — аэропорт Внуково.",
        goal_tg: "click_telegram_route_vnukovo", goal_max: "click_max_route_vnukovo"
    },
    {
        id: "sheremetyevo", title: "Кострома → Шереметьево", dest: "Шереметьево",
        price: "от 15 000 ₽", badge: "аэропорт",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — аэропорт Шереметьево.",
        goal_tg: "click_telegram_route_sheremetyevo", goal_max: "click_max_route_sheremetyevo"
    },
    {
        id: "nizhny", title: "Кострома → Нижний Новгород", dest: "Нижний Новгород",
        price: "от 14 000 ₽", badge: "дальняя",
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки Кострома — Нижний Новгород.",
        goal_tg: "click_telegram_route_nizhny_novgorod", goal_max: "click_max_route_nizhny_novgorod"
    },
    {
        id: "other", title: "Другой маршрут", dest: null,
        price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки в другой город.",
        goal_tg: "click_telegram_route_other", goal_max: "click_max_route_other"
    }
];

// ========================
// SERVICES
// ========================
var SERVICES = [
    {
        id: "station_from", title: "Встреча с вокзала", price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость встречи с вокзала.",
        goal_tg: "click_telegram_station", goal_max: "click_max_station"
    },
    {
        id: "station_to", title: "Трансфер до вокзала", price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость трансфера до вокзала.",
        goal_tg: "click_telegram_station", goal_max: "click_max_station"
    },
    {
        id: "airport_from", title: "Встреча из аэропорта", price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость встречи из аэропорта.",
        goal_tg: "click_telegram_airport", goal_max: "click_max_airport"
    },
    {
        id: "airport_to", title: "Трансфер до аэропорта", price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость трансфера до аэропорта.",
        goal_tg: "click_telegram_airport", goal_max: "click_max_airport"
    },
    {
        id: "roundtrip", title: "Поездка туда-обратно", price: null, badge: null,
        message: "Здравствуйте! Увидел QR-код в машине. Хочу узнать стоимость поездки туда-обратно.",
        goal_tg: "click_telegram_route_other", goal_max: "click_max_route_other"
    }
];

var ALL_ITEMS = ROUTES.concat(SERVICES);

// ========================
// HELPERS
// ========================
function telegramLink() { return "https://t.me/" + CONFIG.telegramUsername; }
function maxLink()      { return CONFIG.maxLink; }

function reachGoal(goal) {
    if (CONFIG.counterId && window.ym) {
        ym(CONFIG.counterId, "reachGoal", goal);
    }
}

function copyForMessenger(text) {
    reachGoal("copy_message");
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(function()  { showToast("Текст скопирован. Теперь нажмите Telegram или MAX."); })
            .catch(function() { showToast("Не удалось скопировать. Выделите текст вручную."); });
    } else {
        showToast("Не удалось скопировать. Выделите текст вручную.");
    }
}

function showToast(message) {
    var toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toast._t);
    toast._t = setTimeout(function() { toast.classList.remove("is-visible"); }, 2500);
}

function tgIconSm() {
    return '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>';
}
function maxIconSm() {
    return '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
}

function findItemById(id) {
    for (var i = 0; i < ALL_ITEMS.length; i++) {
        if (ALL_ITEMS[i].id === id) return ALL_ITEMS[i];
    }
    return null;
}

// ========================
// BUILD GALLERY DECK
// ========================
function buildGalleryDeck() {
    var wrap = document.getElementById("galleryDeck");
    if (!wrap) return;

    GALLERY.forEach(function(item, idx) {
        var card = document.createElement("div");
        card.className = "deck-card";
        card.setAttribute("data-idx", String(idx));

        var img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.className = "deck-card__img";
        if (idx > 0) img.loading = "lazy";

        var fallback = document.createElement("div");
        fallback.className = "deck-card__fallback";
        fallback.innerHTML =
            '<span class="deck-card__fallback-label">Changan Uni-V</span>' +
            '<span class="deck-card__fallback-caption">' + item.caption + '</span>';

        img.onerror = function() {
            this.style.display = "none";
            fallback.style.display = "flex";
        };

        var caption = document.createElement("div");
        caption.className = "deck-card__caption";
        caption.textContent = item.caption;

        card.appendChild(img);
        card.appendChild(fallback);
        card.appendChild(caption);

        (function(i) {
            card.addEventListener("click", function() { openLightbox(i); });
            card.addEventListener("mouseenter", function() { deckHover(wrap, i); });
            card.addEventListener("mouseleave", function() { deckLeave(wrap); });
        })(idx);

        wrap.appendChild(card);
    });

    applyDeckLayout();
}

function applyDeckLayout() {
    var wrap = document.getElementById("galleryDeck");
    if (!wrap) return;

    var isFan = window.innerWidth >= 560;
    if (isFan) {
        wrap.classList.add("is-fan");
    } else {
        wrap.classList.remove("is-fan");
    }

    var cards = wrap.querySelectorAll(".deck-card");
    if (isFan) {
        for (var i = 0; i < cards.length && i < DECK_POSITIONS.length; i++) {
            var pos = DECK_POSITIONS[i];
            cards[i].style.transform = 'translateX(calc(-50% + ' + pos.x + 'px)) translateY(-50%) rotate(' + pos.rot + 'deg) scale(' + pos.scale + ')';
            cards[i].style.zIndex = pos.z;
            cards[i].style.filter = '';
        }
    } else {
        for (var j = 0; j < cards.length; j++) {
            cards[j].style.transform = '';
            cards[j].style.zIndex = '';
            cards[j].style.filter = '';
        }
    }
}

function deckHover(wrap, hoveredIdx) {
    if (window.innerWidth < 560) return;
    var cards = wrap.querySelectorAll(".deck-card");
    for (var i = 0; i < cards.length && i < DECK_POSITIONS.length; i++) {
        var pos = DECK_POSITIONS[i];
        if (i === hoveredIdx) {
            cards[i].style.transform = 'translateX(calc(-50% + ' + pos.x + 'px)) translateY(-55%) rotate(0deg) scale(1.1)';
            cards[i].style.zIndex = 10;
            cards[i].style.filter = 'brightness(1.1)';
        } else {
            var spread = (i < hoveredIdx) ? -24 : 24;
            cards[i].style.transform = 'translateX(calc(-50% + ' + (pos.x + spread) + 'px)) translateY(-50%) rotate(' + pos.rot + 'deg) scale(' + (pos.scale * 0.96) + ')';
            cards[i].style.zIndex = pos.z;
            cards[i].style.filter = 'brightness(0.6)';
        }
    }
}

function deckLeave(wrap) {
    applyDeckLayout();
}

// ========================
// BADGE HELPERS
// ========================
function routeBadgeHtml(badge) {
    if (badge === "популярно") return '<div class="route-badge route-badge--pop">популярно</div>';
    if (badge === "дальняя")   return '<div class="route-badge route-badge--far">дальняя поездка</div>';
    if (badge === "аэропорт")  return '<div class="route-badge route-badge--air">аэропорт</div>';
    return "";
}
function priceBadgeHtml(badge) {
    if (badge === "популярно") return '<span class="price-row__badge price-row__badge--pop">популярно</span>';
    if (badge === "дальняя")   return '<span class="price-row__badge price-row__badge--far">дальняя</span>';
    if (badge === "аэропорт")  return '<span class="price-row__badge price-row__badge--air">аэропорт</span>';
    return "";
}

// ========================
// BUILD ROUTE TILES
// ========================
function buildRoutesGrid() {
    var grid = document.getElementById("routesGrid");
    if (!grid) return;

    ROUTES.forEach(function(route) {
        var tile = document.createElement("button");
        tile.className = "route-tile";
        tile.id = "route-" + route.id;
        tile.setAttribute("onclick", "openRouteModal('" + route.id + "')");

        var badgeHtml = "";
        if (route.badge === "популярно") badgeHtml = '<span class="route-tile__badge route-tile__badge--pop">популярно</span>';
        else if (route.badge === "дальняя")   badgeHtml = '<span class="route-tile__badge route-tile__badge--far">дальняя</span>';
        else if (route.badge === "аэропорт")  badgeHtml = '<span class="route-tile__badge route-tile__badge--air">аэропорт</span>';

        var name = route.dest || route.title;
        var priceHtml = route.price
            ? '<span class="route-tile__price">' + route.price + '</span>'
            : '<span class="route-tile__price route-tile__price--na">индивидуально</span>';

        tile.innerHTML = badgeHtml + '<span class="route-tile__name">' + name + '</span>' + priceHtml;
        grid.appendChild(tile);
    });
}

// ========================
// BUILD SERVICES TILES
// ========================
function buildServicesGrid() {
    var grid = document.getElementById("servicesGrid");
    if (!grid) return;

    SERVICES.forEach(function(svc) {
        var tile = document.createElement("button");
        tile.className = "route-tile";
        tile.id = "route-" + svc.id;
        tile.setAttribute("onclick", "openRouteModal('" + svc.id + "')");
        tile.innerHTML = '<span class="route-tile__name">' + svc.title + '</span>';
        grid.appendChild(tile);
    });
}

// ========================
// BUILD PRICES LIST
// ========================
function buildPricesList() {
    var list = document.getElementById("pricesList");
    if (!list) return;

    ROUTES.forEach(function(route) {
        var row = document.createElement("div");
        row.className = "price-row";
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        row.onclick = function() { openRouteModal(route.id); };
        row.onkeydown = function(e) { if (e.key === "Enter" || e.key === " ") openRouteModal(route.id); };

        var badgeHtml = priceBadgeHtml(route.badge);

        var priceHtml = route.price
            ? '<span class="price-row__price">' + route.price + '</span>'
            : '<span class="price-row__price price-row__price--na">рассчитаю индивидуально</span>';

        row.innerHTML =
            '<div class="price-row__left">' +
                '<span class="price-row__name">' + route.title + '</span>' +
                badgeHtml +
            '</div>' +
            priceHtml +
            '<svg style="width:14px;height:14px;flex-shrink:0;color:var(--text-muted);opacity:0.4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

        list.appendChild(row);
    });
}

// ========================
// HERO CAR IMAGE
// ========================
function initCarImage() {
    var img = document.getElementById("heroCarImg");
    var fallback = document.getElementById("heroCarFallback");
    if (!img || !fallback) return;

    fallback.style.display = "none";
    img.style.display = "block";

    img.onerror = function() {
        img.style.display = "none";
        fallback.style.display = "flex";
    };

    if (img.complete && img.naturalWidth === 0) {
        img.style.display = "none";
        fallback.style.display = "flex";
    }
}

// ========================
// ROUTE MODAL
// ========================
function openRouteModal(id) {
    var item = findItemById(id);
    if (!item) return;

    document.getElementById("modalRouteTitle").textContent = item.title;
    document.getElementById("modalRouteMsg").textContent = item.message;

    var priceEl = document.getElementById("modalRoutePrice");
    if (priceEl) priceEl.textContent = item.price || "";

    var msg = item.message;
    document.getElementById("modalCopyBtn").onclick = function() {
        copyForMessenger(msg);
    };

    var tgBtn = document.getElementById("modalTgBtn");
    tgBtn.href = telegramLink();
    tgBtn.onclick = function() { reachGoal(item.goal_tg); };

    var maxBtn = document.getElementById("modalMaxBtn");
    maxBtn.href = maxLink();
    maxBtn.onclick = function() { reachGoal(item.goal_max); };

    document.getElementById("modalOverlay").classList.add("is-open");
    document.body.style.overflow = "hidden";
    reachGoal("open_modal_" + id);
}

function closeRouteModal() {
    document.getElementById("modalOverlay").classList.remove("is-open");
    document.body.style.overflow = "";
}

// ========================
// LIGHTBOX
// ========================
var _lbIndex = 0;
var _lbTouchX = 0;

function openLightbox(idx) {
    _lbIndex = idx;
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    showLightboxItem(idx);
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    var overlay = document.getElementById("modalOverlay");
    if (!overlay || !overlay.classList.contains("is-open")) {
        document.body.style.overflow = "";
    }
}

function showLightboxItem(idx) {
    var item = GALLERY[idx];
    if (!item) return;

    var img      = document.getElementById("lightboxImg");
    var fallback = document.getElementById("lightboxFallback");
    var caption  = document.getElementById("lightboxCaption");
    var counter  = document.getElementById("lightboxCounter");

    img.style.display = "block";
    if (fallback) fallback.style.display = "none";

    img.src = item.src;
    img.alt = item.alt;
    img.onerror = function() {
        this.style.display = "none";
        if (fallback) {
            fallback.style.display = "flex";
            var ft = document.getElementById("lightboxFallbackText");
            if (ft) ft.textContent = item.caption;
        }
    };

    if (caption) caption.textContent = item.caption;
    if (counter) counter.textContent = (idx + 1) + " / " + GALLERY.length;
}

function prevPhoto() {
    _lbIndex = (_lbIndex - 1 + GALLERY.length) % GALLERY.length;
    showLightboxItem(_lbIndex);
}
function nextPhoto() {
    _lbIndex = (_lbIndex + 1) % GALLERY.length;
    showLightboxItem(_lbIndex);
}

function initLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;

    document.getElementById("lightboxClose").addEventListener("click", function(e) {
        e.stopPropagation();
        closeLightbox();
    });
    document.getElementById("lightboxPrev").addEventListener("click", function(e) {
        e.stopPropagation();
        prevPhoto();
    });
    document.getElementById("lightboxNext").addEventListener("click", function(e) {
        e.stopPropagation();
        nextPhoto();
    });

    lb.addEventListener("click", function(e) {
        if (e.target === lb) closeLightbox();
    });

    lb.addEventListener("touchstart", function(e) {
        _lbTouchX = e.touches[0].clientX;
    }, { passive: true });

    lb.addEventListener("touchend", function(e) {
        var dx = e.changedTouches[0].clientX - _lbTouchX;
        if (Math.abs(dx) > 50) { dx < 0 ? nextPhoto() : prevPhoto(); }
    }, { passive: true });

    document.addEventListener("keydown", function(e) {
        var lbOpen = lb.classList.contains("is-open");
        var modalOpen = document.getElementById("modalOverlay").classList.contains("is-open");
        if (e.key === "Escape") {
            if (lbOpen) closeLightbox();
            else if (modalOpen) closeRouteModal();
        } else if (lbOpen) {
            if (e.key === "ArrowLeft")  prevPhoto();
            if (e.key === "ArrowRight") nextPhoto();
        }
    });
}

// ========================
// DIRECTION SEARCH
// ========================
function initDirectionSearch() {
    var input    = document.getElementById("directionInput");
    var resultEl = document.getElementById("directionResult");
    var clearBtn = document.getElementById("searchClear");
    if (!input || !resultEl) return;

    function onInput() {
        var q = input.value.trim().toLowerCase();

        if (clearBtn) clearBtn.style.display = q ? "flex" : "none";

        document.querySelectorAll(".route-tile").forEach(function(c) {
            c.classList.remove("is-highlighted");
        });

        if (!q) {
            resultEl.innerHTML = "";
            resultEl.classList.remove("is-visible");
            return;
        }

        var matches = ALL_ITEMS.filter(function(r) {
            return r.title.toLowerCase().indexOf(q) !== -1 ||
                   (r.dest && r.dest.toLowerCase().indexOf(q) !== -1);
        });

        var html = "";

        if (matches.length === 0) {
            html =
                '<div class="direction-result__empty">Не нашли направление?</div>' +
                '<div class="direction-result__empty-sub">Напишите мне — рассчитаю индивидуально.</div>' +
                '<div class="direction-result__empty-btns">' +
                    '<a href="' + telegramLink() + '" class="btn btn--tg btn--sm" target="_blank" rel="noopener noreferrer">Telegram</a>' +
                    '<a href="' + maxLink() + '" class="btn btn--max btn--sm" target="_blank" rel="noopener noreferrer">MAX</a>' +
                '</div>';
        } else {
            html = matches.map(function(r) {
                var priceHtml = r.price
                    ? '<span class="search-result__price">' + r.price + '</span>'
                    : '';
                return '<div class="search-result-card">' +
                    '<div class="search-result__top">' +
                        '<span class="search-result__name">' + r.title + '</span>' +
                        priceHtml +
                    '</div>' +
                    '<button class="btn btn--select btn--xs" style="width:100%;margin-top:8px" onclick="openRouteModal(\'' + r.id + '\')">Выбрать</button>' +
                '</div>';
            }).join("");

            matches.forEach(function(r) {
                var card = document.getElementById("route-" + r.id);
                if (card) card.classList.add("is-highlighted");
            });
        }

        resultEl.innerHTML = '<div class="direction-result__inner">' + html + '</div>';
        resultEl.classList.add("is-visible");
    }

    input.addEventListener("input", onInput);

    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            input.value = "";
            clearBtn.style.display = "none";
            resultEl.innerHTML = "";
            resultEl.classList.remove("is-visible");
            document.querySelectorAll(".route-card").forEach(function(c) {
                c.classList.remove("is-highlighted");
            });
            input.focus();
        });
    }
}

// ========================
// INIT LINKS
// ========================
function initLinks() {
    var links = {
        heroTg:    { href: telegramLink(), goal: "click_telegram_main" },
        heroMax:   { href: maxLink(),      goal: "click_max_main" },
        saveTg:    { href: telegramLink(), goal: "click_telegram_save_contact" },
        saveMax:   { href: maxLink(),      goal: "click_max_save_contact" },
        stationTg: { href: telegramLink(), goal: "click_telegram_station" },
        stationMax:{ href: maxLink(),      goal: "click_max_station" },
        priceTg:   { href: telegramLink(), goal: "click_telegram_calculate" },
        priceMax:  { href: maxLink(),      goal: "click_max_calculate" },
        trustTg:   { href: telegramLink(), goal: "click_telegram_main" },
        trustMax:  { href: maxLink(),      goal: "click_max_main" },
        qrTg:      { href: telegramLink(), goal: "click_telegram_main" },
        qrMax:     { href: maxLink(),      goal: "click_max_main" },
        stickyTg:  { href: telegramLink(), goal: "click_telegram_main" },
        stickyMax: { href: maxLink(),      goal: "click_max_main" },
        rentTg:    { href: telegramLink(), goal: "click_telegram_rent" },
        rentMax:   { href: maxLink(),      goal: "click_max_rent" }
    };

    Object.keys(links).forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        var cfg = links[id];
        el.href = cfg.href;
        el.addEventListener("click", function() { reachGoal(cfg.goal); });
    });
}

// ========================
// WELCOME POPUP
// ========================
var POPUP_KEY = "kostromaTransferPopupClosedAt";
var POPUP_TTL = 24 * 60 * 60 * 1000;

function popupShouldShow() {
    try {
        var ts = localStorage.getItem(POPUP_KEY);
        if (!ts) return true;
        return (Date.now() - parseInt(ts, 10)) > POPUP_TTL;
    } catch (e) { return true; }
}

function popupMarkClosed() {
    try { localStorage.setItem(POPUP_KEY, String(Date.now())); } catch (e) {}
}

function closePopup() {
    var overlay = document.getElementById("popupOverlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    popupMarkClosed();
    reachGoal("popup_close");
}

function initWelcomePopup() {
    if (!popupShouldShow()) return;

    var overlay  = document.getElementById("popupOverlay");
    var closeBtn = document.getElementById("popupClose");
    var laterBtn = document.getElementById("popupLater");
    var tgBtn    = document.getElementById("popupTg");
    var maxBtn   = document.getElementById("popupMax");
    if (!overlay) return;

    var tgText = encodeURIComponent("Здравствуйте! Хочу узнать стоимость поездки из Костромы.");
    if (tgBtn)  tgBtn.href  = telegramLink() + "?text=" + tgText;
    if (maxBtn) maxBtn.href = maxLink();

    if (closeBtn) closeBtn.addEventListener("click", closePopup);
    if (laterBtn) laterBtn.addEventListener("click", closePopup);

    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) closePopup();
    });

    if (tgBtn) tgBtn.addEventListener("click", function() {
        reachGoal("popup_click_telegram");
        popupMarkClosed();
    });
    if (maxBtn) maxBtn.addEventListener("click", function() {
        reachGoal("popup_click_max");
        popupMarkClosed();
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && overlay.classList.contains("is-open")) closePopup();
    });

    setTimeout(function() {
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
        reachGoal("popup_show");
    }, 1500);
}

// ========================
// MAIN
// ========================
document.addEventListener("DOMContentLoaded", function() {
    initCarImage();
    buildGalleryDeck();
    buildPricesList();
    initLinks();
    initLightbox();
    initWelcomePopup();
    window.addEventListener("resize", applyDeckLayout);
});
