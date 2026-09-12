// ===============================
// ELEMENTS
// ===============================

const playButton = document.querySelector(".play-button");
const songCards = document.querySelectorAll(".song-card");

const albumImage = document.querySelector(".album-img img");
const songTitle = document.querySelector(".p1");
const artistName = document.querySelector(".p2");

const searchInput = document.querySelector("#searchInput");

const heartButton = document.querySelector("#heartButton");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".curr-time");
const totalTime = document.querySelector(".tot-time");

const mainContent = document.querySelector(".main-content");
const homeButton = document.querySelector(".home-button");
const libraryButton = document.querySelector(".library-button");


// ===============================
// SONG DATA
// ===============================

const songs = [
    {
        title: "Top 50 Global",
           artist: "Various Artists",
        image: "assets/card1img.jpeg"
    },

    {
        title: "Trending Hits",
           artist: "Various Artists",
        image: "assets/card2img.jpeg"
    },

    {
        title: "Today's Top Songs",
           artist: "Various Artists",
        image: "assets/card3img.jpeg"
    },

    {
        title: "Featured Charts",
           artist: "Various Artists",
        image: "assets/card5img.jpeg"
    }
];

let currentSong = 0;
let isPlaying = false;


// ===============================
// UPDATE MUSIC PLAYER
// ===============================

function updateSong() {

    songTitle.textContent = songs[currentSong].title;

    artistName.textContent = songs[currentSong].artist;

    albumImage.src = songs[currentSong].image;

    progressBar.value = 0;

    currentTime.textContent = "00:00";
}


// ===============================
// PLAY / PAUSE
// ===============================

playButton.addEventListener("click", function () {

    if (isPlaying === false) {

        isPlaying = true;

        playButton.style.opacity = "1";

        console.log("Playing");

    } else {

        isPlaying = false;

        playButton.style.opacity = "0.7";

        console.log("Paused");
    }

});


// ===============================
// SONG CARD SELECTION
// ===============================

songCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.dataset.title;

        const artist = card.dataset.artist;

        const image = card.dataset.image;


        songTitle.textContent = title;

        artistName.textContent = artist;

        albumImage.src = image;


        // Find selected song
        const selectedIndex = songs.findIndex(function (song) {

            return song.title === title;

        });


        if (selectedIndex !== -1) {

            currentSong = selectedIndex;

        }


        console.log("Selected:", title);

    });

});


// ===============================
// SEARCH
// ===============================

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();


    songCards.forEach(function (card) {

        const title = card
            .querySelector(".card-title")
            .textContent
            .toLowerCase();

        const info = card
            .querySelector(".card-info")
            .textContent
            .toLowerCase();


        if (
            title.includes(searchText) ||
            info.includes(searchText)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// ===============================
// LIKE / HEART
// ===============================

heartButton.addEventListener("click", function () {

    if (heartButton.classList.contains("fa-regular")) {

        heartButton.classList.remove("fa-regular");

        heartButton.classList.add("fa-solid");

        heartButton.style.color = "#1bd760";

    } else {

        heartButton.classList.remove("fa-solid");

        heartButton.classList.add("fa-regular");

        heartButton.style.color = "white";

    }

});


// ===============================
// NEXT SONG
// ===============================

nextButton.addEventListener("click", function () {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    updateSong();

});


// ===============================
// PREVIOUS SONG
// ===============================

previousButton.addEventListener("click", function () {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    updateSong();

});


// ===============================
// PROGRESS BAR
// ===============================

const songDuration = 213;

totalTime.textContent = "3:33";

progressBar.value = 0;


progressBar.addEventListener("input", function () {

    const currentSeconds = Math.floor(
        (progressBar.value / 100) * songDuration
    );


    const minutes = Math.floor(
        currentSeconds / 60
    );


    const seconds = currentSeconds % 60;


    currentTime.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;

});


// ===============================
// HOME BUTTON
// ===============================

homeButton.addEventListener("click", function () {

    mainContent.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// LIBRARY BUTTON
// ===============================

libraryButton.addEventListener("click", function () {

    document.querySelector(".library").scrollIntoView({

        behavior: "smooth"

    });

});
