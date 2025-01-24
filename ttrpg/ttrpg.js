// Character Data
const characters = [
    {
        id: "morgana",
        name: "Hieu, the War Priest",
        image: "images/hieu2.png",
        description: "A foreign-born emissary of peace, corrupted by the horrors in Chult.",
        details: "Level: 12 | Class: Sorcerer | Alignment: Neutral Good",
        abilities: "Chrono Surge, Dimensional Door, Arcane Blast",
        backstory: "Morgana was raised in the Chrono Keep, an ancient fortress where time stands still...",
        gallery: [
            "images/morgana-art1.png",
            "images/morgana-art2.png",
            "images/morgana-art3.png"
        ]
    },
    {
        id: "dante",
        name: "Giles, the Divination Wizard",
        image: "images/giles1.png",
        description: "Hewwo? He's just a little guy!",
        details: "Level: 8 | Class: Bard | Alignment: Chaotic Neutral",
        abilities: "Song of Rest, Cutting Words, Bardic Inspiration",
        backstory: "Dante roams the lands as a wandering minstrel, charming friends and foes alike...",
        gallery: [
            "images/giles1.png",
            "images/",
            "images/dante-art3.png"
        ]
    },
    {
        id: "kael",
        name: "Leif, the Vagrant Samurai",
        image: "images/leif1.png",
        description: "He seeks to avenge his family and to end the eternal night.",
        details: "Level: 10 | Class: Ranger | Alignment: Lawful Good",
        abilities: "Hunter's Mark, Longshot Precision, Animal Companion",
        backstory: "Kael's bond to the natural world is unshakable, guided by the spirits of the wild...",
        gallery: [
            "images/kael-art1.png",
            "images/kael-art2.png",
            "images/kael-art3.png"
        ]
    }
];

// Populate the Characters Grid
const charactersGrid = document.getElementById("characters-grid");

characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.description}</p>
    `;

    card.addEventListener("click", () => {
        displayCharacterDetails(character);
    });

    charactersGrid.appendChild(card);
});

// Display Character Details with Art Gallery
function displayCharacterDetails(character) {
    const charactersPage = document.querySelector(".characters-page");
    charactersPage.innerHTML = `
        <h1>${character.name}</h1>
        <img src="${character.image}" alt="${character.name}">
        <p><strong>Description:</strong> ${character.description}</p>
        <p><strong>Details:</strong> ${character.details}</p>
        <p><strong>Abilities:</strong> ${character.abilities}</p>
        <p><strong>Backstory:</strong> ${character.backstory}</p>
        <h2>Art Gallery</h2>
        <div class="gallery">
            ${character.gallery
                .map(
                    (image) => `
                    <img src="${image}" alt="Artwork for ${character.name}" class="gallery-img">
                `
                )
                .join("")}
        </div>
        <button onclick="location.reload()">Back to Characters</button>
    `;

    // Add Lightbox Event Listeners for the Gallery
    const galleryImages = document.querySelectorAll(".gallery-img");
    galleryImages.forEach((img) => {
        img.addEventListener("click", () => openLightbox(img.src));
    });
}

// Open Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Lightbox Image">
            <button class="lightbox-close" onclick="closeLightbox()">Close</button>
        </div>
    `;
    document.body.appendChild(lightbox);
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    if (lightbox) lightbox.remove();
}
