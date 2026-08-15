/*
    Chess: Unchained - logica paginii.

    Trei lucruri: schimbat limba, umplut catalogul din variants.json, si adus numarul de
    descarcari de la GitHub. Nimic altceva - fara framework si fara pas de build.
*/

// Repo-ul PUBLIC, cel cu site-ul si release-urile. Nu cel privat cu codul.
var REPO = "papura-octavian/chessunchained.space";

/*
    Textele paginii. Doar cele de prezentare: numele, conditiile si efectele celor 22 de
    variante vin din variants.json, deja bilingv, ca sa nu existe doua liste care sa se poata
    contrazice. O abilitate modificata in joc schimba si pagina, la urmatoarea publicare.
*/
var TEXTS = {
    en: {
        tagline: "Chess, but your pieces earn powers while you play.",
        trailerSoon: "Trailer coming soon.",
        download: "Download it free",
        downloadNote: "Windows · 114 MB · vs the bot, 1v1 on one computer, or online",
        downloads: "{n} downloads so far",

        warnTitle: "Windows will warn you. Here is why.",
        warnBody: "The game is not digitally signed, so Windows will say “unknown publisher”. " +
                  "A signing certificate costs more per year than I have to spend on this right now. " +
                  "Click “More info”, then “Run anyway”. That is all it is.",

        aboutTitle: "What this is",
        aboutBody: "Normal chess underneath: same board, same rules, same pieces. But before a match you pick " +
                   "6 upgrade cards, and during the match your pieces unlock them by actually doing things — " +
                   "a knight that survives three moves catches fire, a rook that holds still puts up a wall. " +
                   "Everything is in there, online play included. It is not finished, and I am building it on my own.",

        newTitle: "New in v0.2",
        newIntro: "The big one is online play. It is a direct connection between the two players — there is no " +
                  "server, so you and your opponent trade an address and that is the whole setup.",

        clipsTitle: "See it move",
        clipsIntro: "Five of the upgrades, straight from the game. No editing, no mockups.",

        piecesTitle: "The pieces",
        piecesIntro: "Six slots, one card each. Here is everything you can pick and what it takes to unlock.",
        catalogError: "Could not load the piece list.",
        condition: "How to unlock",
        effect: "What it does",

        supportTitle: "Help it get finished",
        supportBody: "No studio, no funding, no team. Just me and a lot of evenings. If you want this game to " +
                     "exist, this is the most direct way to help.",

        footerMade: "Made by one person"
    },

    ro: {
        tagline: "Sah, dar piesele isi castiga puteri in timpul partidei.",
        trailerSoon: "Trailerul vine in curand.",
        download: "Descarca gratuit",
        downloadNote: "Windows · 114 MB · contra botului, 1v1 pe acelasi calculator sau online",
        downloads: "{n} descarcari pana acum",

        warnTitle: "Windows o sa te avertizeze. Uite de ce.",
        warnBody: "Jocul nu e semnat digital, deci Windows va spune „unknown publisher”. " +
                  "Un certificat de semnare costa pe an mai mult decat imi permit acum. " +
                  "Apesi „More info”, apoi „Run anyway”. Asta e tot.",

        aboutTitle: "Ce e asta",
        aboutBody: "Pe dedesubt e sah normal: aceeasi tabla, aceleasi reguli, aceleasi piese. Dar inainte de " +
                   "meci iti alegi 6 carti de upgrade, iar in timpul partidei piesele si le deblocheaza facand " +
                   "lucruri pe tabla — un cal care rezista trei mutari ia foc, un turn care sta pe loc ridica " +
                   "un zid. Sunt toate acolo, inclusiv partea online. Nu e gata, si il fac singur.",

        newTitle: "Nou in v0.2",
        newIntro: "Cel mai mare e partea online. E o legatura directa intre cei doi jucatori — nu exista niciun " +
                  "server, deci tu si adversarul va dati o adresa si asta e toata pregatirea.",

        clipsTitle: "Cum arata in miscare",
        clipsIntro: "Cinci dintre upgrade-uri, direct din joc. Fara montaj si fara machete.",

        piecesTitle: "Piesele",
        piecesIntro: "Sase sloturi, cate o carte in fiecare. Astea sunt toate, si ce trebuie facut ca sa se deblocheze.",
        catalogError: "Nu am putut incarca lista de piese.",
        condition: "Cum se deblocheaza",
        effect: "Ce face",

        supportTitle: "Ajuta-l sa fie terminat",
        supportBody: "Fara studio, fara finantare, fara echipa. Doar eu si multe seri. Daca vrei ca jocul asta " +
                     "sa existe, asta e cel mai direct mod de a ajuta.",

        footerMade: "Facut de un singur om"
    }
};

/*
    Clipurile de pe pagina, in ordinea in care se vad.

    Sunt cinci, si de asta se incarca lenes (loading="lazy"): impreuna fac peste patru
    megaocteti, iar cine intra de pe telefon nu trebuie sa ii descarce pe toti ca sa vada
    butonul de download. Browserul le aduce doar cand ajung pe ecran.
*/
/*
    Ce e nou in versiunea de acum.

    Sta aici, langa TEXTS, nu in index.html: lista trebuie sa se schimbe odata cu limba, la fel
    ca tot restul paginii. Prima intrare e cea mai mare, si de asta e prima - cine citeste doar
    un rand trebuie sa ii nimereasca pe cel care conteaza.
*/
var NEWS = [
    {
        en: "Online play. Ranked BATTLE moves your rating; FRIENDLY does not. Direct between the two players, no server in the middle.",
        ro: "Partide online. BATTLE e clasat si iti misca ratingul, FRIENDLY nu. Direct intre cei doi jucatori, fara server la mijloc."
    },
    {
        en: "Rating and ranks. A rank badge on the home screen, and a local top 100 of everyone you have played.",
        ro: "Rating si ranguri. O insigna de rang pe ecranul de start, si un top 100 local cu toti cei cu care ai jucat."
    },
    {
        en: "Premoves, chained. Queue as many moves as you like while the opponent thinks. If the first turns out illegal, the whole chain is dropped — the rest assumed it was played.",
        ro: "Premutari in lant. Pui la coada cate mutari vrei cat timp adversarul se gandeste. Daca prima se dovedeste ilegala, cade tot lantul — restul o presupuneau jucata."
    },
    {
        en: "Drag and drop. Pick a piece up and drop it, the way every chess site works. Clicking still works exactly as before.",
        ro: "Drag and drop. Ridici piesa si o lasi unde vrei, ca pe orice site de sah. Clicul simplu merge exact ca inainte."
    },
    {
        en: "Right-click to mark a square red. Marks clear on every move, because they are notes about the position in front of you.",
        ro: "Click dreapta insemneaza un patrat cu rosu. Semnele dispar la fiecare mutare, pentru ca sunt note despre pozitia de acum."
    },
    {
        en: "Pick your colour against the bot — white, black, or drawn by lot. Online it is always drawn: hosting does not buy you white.",
        ro: "Iti alegi culoarea contra botului — alb, negru sau la sorti. Online se trage mereu la sorti: cine gazduieste nu primeste albul pe gratis."
    },
    {
        en: "Sound. Separate volume for the board and for the music, each with a speaker icon that mutes it in one click, plus a four-track playlist.",
        ro: "Sunet. Volum separat pentru tabla si pentru muzica, fiecare cu o iconita care il opreste dintr-un clic, plus un playlist de patru piese."
    },
    {
        en: "Streamer mode. Keeps network addresses off the screen so they do not end up in a stream. It does not hide your address from your opponent — on a direct connection they see it anyway.",
        ro: "Mod streamer. Nu mai scrie adresele de retea pe ecran, ca sa nu ajunga intr-un stream. NU o ascunde de adversar — intr-o legatura directa el o vede oricum."
    },
    {
        en: "Fixes: a Fanatics pawn could not promote through an en passant capture, a mercenary could get stuck on the last rank with no legal move, and move sounds went silent after a take-back.",
        ro: "Reparate: pionul Fanatic nu putea promova printr-o captura en passant, mercenarul ramanea blocat pe ultima linie fara nicio mutare legala, iar sunetele se opreau dupa o mutare luata inapoi."
    }
];

var CLIPS = [
    {
        file: "gifs/fire.gif",
        en: "A knight that moves three turns in a row catches fire. Its next jump burns everything in its path - three pieces at once, here.",
        ro: "Un cal care se muta trei ture la rand ia foc. Urmatoarea saritura arde tot ce prinde in cale - aici, trei piese dintr-o data."
    },
    {
        file: "gifs/archbishop.gif",
        en: "A bishop that captures a queen becomes an Archbishop: from then on it also moves like a knight. Here it jumps in an L and gives check.",
        ro: "Un nebun care mananca dama devine Archbishop: de atunci se muta si ca un cal. Aici sare in L si da sah."
    },
    {
        file: "gifs/shadowking.gif",
        en: "The Shadow King swaps places with any friendly piece, however far away. Here it trades corners with a rook.",
        ro: "Regele Umbra schimba locul cu orice piesa de-a lui, oricat de departe. Aici face schimb de colturi cu un turn."
    },
    {
        file: "gifs/wall.gif",
        en: "A rook that stays still for three turns raises a wall. It blocks any line - even a check. While it is up, the rook cannot move.",
        ro: "Un turn care sta nemiscat trei ture ridica un zid. Blocheaza orice linie - chiar si un sah. Cat e activ, turnul nu se poate misca."
    },
    {
        file: "gifs/mighty.gif",
        en: "The pawn in front of the king, once it captures, becomes a MightyPawn and can eat sideways: it takes a piece it never steps on.",
        ro: "Pionul din fata regelui, dupa ce captureaza o data, devine MightyPawn si poate manca lateral: ia o piesa fara sa calce pe patratul ei."
    }
];

var catalog = null;      // variants.json, odata incarcat
var downloads = 0;       // cate descarcari are ultimul release, 0 = nestiut
var lang = "en";

// ---------------------------------------------------------------- limba

function pickLanguage(next) {
    lang = TEXTS[next] ? next : "en";
    document.documentElement.lang = lang;

    var words = TEXTS[lang];
    var nodes = document.querySelectorAll("[data-t]");
    for (var i = 0; i < nodes.length; i++) {
        var key = nodes[i].getAttribute("data-t");
        if (words[key]) nodes[i].textContent = words[key];
    }

    var buttons = document.querySelectorAll(".lang button");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.toggle("on", buttons[j].getAttribute("data-lang") === lang);
    }

    // Catalogul se redeseneaza, nu se reincarca: datele sunt deja bilingve in memorie.
    if (catalog) drawCatalog();
    drawNews();
    drawClips();
    drawDownloads();

    try { localStorage.setItem("lang", lang); } catch (e) { /* navigare privata */ }
}

// ---------------------------------------------------------------- ce e nou

function drawNews() {
    var host = document.getElementById("whatsnew");
    if (!host) return;
    host.innerHTML = "";

    for (var i = 0; i < NEWS.length; i++) {
        var item = document.createElement("li");
        item.textContent = NEWS[i][lang] || NEWS[i].en;
        host.appendChild(item);
    }
}

// ---------------------------------------------------------------- clipuri

/*
    Deseneaza clipurile. Imaginile se recreeaza la fiecare schimbare de limba, dar browserul
    le are deja in cache, deci nu se descarca a doua oara - se schimba doar textul de sub ele.
*/
function drawClips() {
    var host = document.getElementById("clips");
    if (!host) return;
    host.innerHTML = "";

    for (var i = 0; i < CLIPS.length; i++) {
        var clip = CLIPS[i];

        var figure = document.createElement("figure");
        figure.className = "clip";

        var image = document.createElement("img");
        image.src = clip.file;
        image.alt = "";
        image.loading = "lazy";
        figure.appendChild(image);

        var caption = document.createElement("figcaption");
        caption.textContent = clip[lang] || clip.en;
        figure.appendChild(caption);

        host.appendChild(figure);
    }
}

// ---------------------------------------------------------------- catalogul

function drawCatalog() {
    var words = TEXTS[lang];
    var host = document.getElementById("catalog");
    host.innerHTML = "";

    for (var s = 0; s < catalog.slots.length; s++) {
        var slot = catalog.slots[s];

        var section = document.createElement("div");
        section.className = "slot";

        var title = document.createElement("h3");
        title.textContent = slot.name[lang] || slot.name.en;
        section.appendChild(title);

        var grid = document.createElement("div");
        grid.className = "variants";

        for (var v = 0; v < slot.variants.length; v++) {
            grid.appendChild(variantCard(slot.variants[v], words));
        }

        section.appendChild(grid);
        host.appendChild(section);
    }
}

function variantCard(variant, words) {
    var card = document.createElement("div");
    card.className = "variant";

    var image = document.createElement("img");
    image.src = variant.image || "";
    image.alt = "";
    image.loading = "lazy";

    // Un desen lipsa lasa un loc gol curat, nu iconita de imagine stricata a browserului.
    if (!variant.image) image.className = "missing";
    image.onerror = function () { this.className = "missing"; };
    card.appendChild(image);

    var body = document.createElement("div");

    var name = document.createElement("h4");
    name.textContent = variant.name[lang] || variant.name.en;
    body.appendChild(name);

    var list = document.createElement("dl");
    list.appendChild(term(words.condition));
    list.appendChild(definition(variant.condition[lang] || variant.condition.en, ""));
    list.appendChild(term(words.effect));
    list.appendChild(definition(variant.effect[lang] || variant.effect.en, "effect"));
    body.appendChild(list);

    card.appendChild(body);
    return card;
}

function term(text) {
    var dt = document.createElement("dt");
    dt.textContent = text;
    return dt;
}

function definition(text, className) {
    var dd = document.createElement("dd");
    dd.textContent = text;
    if (className) dd.className = className;
    return dd;
}

function loadCatalog() {
    fetch("variants.json")
        .then(function (response) {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(function (data) {
            catalog = data;
            drawCatalog();
            if (data.version) document.getElementById("version").textContent = data.version;
        })
        .catch(function () {
            document.getElementById("catalogError").hidden = false;
        });
}

// ---------------------------------------------------------------- descarcari

/*
    Numarul de descarcari, din API-ul public GitHub. Fara autentificare, fara cookie-uri,
    fara banner de consimtamant - si asta e TOATA analitica de pe site.

    Daca cererea esueaza (limita de rata, retea), cifra pur si simplu nu se arata. Nu se pune
    o eroare pe ecran pentru un numar decorativ.
*/
function loadDownloads() {
    fetch("https://api.github.com/repos/" + REPO + "/releases/latest")
        .then(function (response) {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(function (release) {
            var total = 0;
            for (var i = 0; i < (release.assets || []).length; i++) {
                total += release.assets[i].download_count || 0;
            }
            downloads = total;
            drawDownloads();
        })
        .catch(function () { /* tacut, dinadins */ });
}

/*
    Scrisa separat de incarcare ca sa poata fi chemata si la schimbarea limbii: altfel
    numarul ramanea in limba in care a fost adus, singurul text de pe pagina care nu se
    traduce.

    Zero descarcari nu se arata: "0 downloads" e mai rau decat nimic.
*/
function drawDownloads() {
    var node = document.getElementById("counter");
    if (downloads <= 0) { node.hidden = true; return; }

    node.textContent = TEXTS[lang].downloads.replace("{n}", downloads);
    node.hidden = false;
}

// ---------------------------------------------------------------- pornire

(function start() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) { /* navigare privata */ }

    // Fara alegere salvata, se incearca limba browserului: un roman nimereste romana din prima.
    if (!saved) {
        saved = (navigator.language || "en").toLowerCase().indexOf("ro") === 0 ? "ro" : "en";
    }

    var buttons = document.querySelectorAll(".lang button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            pickLanguage(this.getAttribute("data-lang"));
        });
    }

    pickLanguage(saved);
    loadCatalog();
    loadDownloads();
})();
