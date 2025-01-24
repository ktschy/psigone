// Micro-blog posts data
const microPosts = [
    { date: "January 23, 2025", content: "Updating this old-ass website. FUCK mobile users" },
    { date: "January 20, 2025", content: "Played some Digimon World 3—nostalgia overload! 🕹️🐾" },
    { date: "January 18, 2025", content: "Working on some TTRPG character designs. Loving the retro Game Boy palette! 🎲🎨" },
    { date: "January 15, 2025", content: "Thinking about adding a music player to this site... ideas? 🎶" },
    { date: "January 10, 2025", content: "Experimenting with JavaScript animations for my homepage! ⚡" },
    { date: "January 5, 2025", content: "Finally beat Mega Man X2 without any continues. Feels good! 🕹️🔥" },
    { date: "January 1, 2025", content: "New year, new projects! Starting with an art collab inspired by Chrono Trigger! 🎨⏳" },
    { date: "December 30, 2024", content: "Reflecting on 2024... so much growth and so many adventures! 🎉✨" },
    { date: "December 25, 2024", content: "Merry Christmas! Just unwrapped a retro console from the '90s—best gift ever! 🎄🎁" },
    { date: "December 20, 2024", content: "Revisiting old sketchbooks from my childhood. What a trip down memory lane! 📖" },
  ];
  
  // Pagination config
  const postsPerPage = 8;
  let currentPage = 1;
  
  // DOM elements
  const postsContainer = document.getElementById("micro-posts");
  const paginationControls = document.getElementById("pagination-controls");
  
  // Render posts for the current page
  function renderPosts() {
    postsContainer.innerHTML = ""; // Clear previous posts
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
  
    const currentPosts = microPosts.slice(startIndex, endIndex);
    currentPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `<p><strong>${post.date}:</strong> ${post.content}</p>`;
      postsContainer.appendChild(postElement);
    });
  
    renderPaginationControls();
  }
  
  // Render pagination controls
  function renderPaginationControls() {
    paginationControls.innerHTML = ""; // Clear previous controls
    const totalPages = Math.ceil(microPosts.length / postsPerPage);
  
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.textContent = "Previous";
      prevButton.onclick = () => changePage(currentPage - 1);
      paginationControls.appendChild(prevButton);
    }
  
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.onclick = () => changePage(currentPage + 1);
      paginationControls.appendChild(nextButton);
    }
  }
  
  // Change page
  function changePage(page) {
    currentPage = page;
    renderPosts();
  }
  
  // Initialize micro-blog
  renderPosts();
  