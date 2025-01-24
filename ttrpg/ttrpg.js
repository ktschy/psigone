// Character Data
const characters = [
    {
        id: "hieu",
        name: "Hieu, the War Priest",
        image: "images/hieu2.png",
        description: "A foreign-born emissary of peace, corrupted by the horrors in Chult.",
        details: "Level: 4 | Class: Cleric | Alignment: Neutral Good",
        abilities: "Turn Undead, Bless, Inflict Wounds",
        backstory: "Hieu is a cleric of Eldath, the water bearer...",
        gallery: [
            "images/hieu2.png",
            "images/hieu-art2.png",
            "images/hieu-art3.png"
        ]
    },
    {
        id: "giles",
        name: "Giles, the Divination Wizard",
        image: "images/giles1.png",
        description: "Hewwo? He's just a little guy!",
        details: "Level: 14 | Class: Wizard | Alignment: Chaotic Good",
        abilities: "Fireball, Telekinesis, Tasha's Bubbling Cauldron",
        backstory: "A former familiar, now an accomplished seer...",
        gallery: [
            "images/giles1.png",
            "images/giles-art2.png",
            "images/giles-art3.png"
        ]
    },
    {
        id: "leif",
        name: "Leif, the Vagrant Samurai",
        image: "images/leif1.png",
        description: "He seeks to avenge his family and to end the eternal night.",
        details: "Level: 6 | Class: Fighter | Alignment: Lawful Good",
        abilities: "None",
        backstory: "Leif's bond to the natural world is unshakable, guided by the spirits of the wild...",
        gallery: [
            "images/leif-art1.png",
            "images/leif-art2.png",
            "images/leif-art3.png"
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
