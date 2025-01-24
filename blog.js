// Blog posts data
const blogPosts = [
    { id: "post1", title: "leave it all", date: "2024-12-27", content: "Your post content here..." },
    { id: "post2", title: "placeholder", date: "2024-12-15", content: "Your post content here..." },
    { id: "post3", title: "goodbyes in july", date: "2022-11-20", content: "Your post content here..." },
    // Add more posts here
];

// Configuration for pagination
const postsPerPage = 2;
let currentPage = 1;

// Get references to HTML elements
const blogPostContainer = document.getElementById("blog-post");
const archiveList = document.getElementById("archive-list");

// Utility: Group posts by year
function groupPostsByYear(posts) {
    const grouped = {};
    posts.forEach((post) => {
        const year = new Date(post.date).getFullYear();
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(post);
    });
    return grouped;
}

// Load a single blog post
function loadBlogPost(postId) {
    const post = blogPosts.find((p) => p.id === postId);
    if (!post) return;
    blogPostContainer.innerHTML = `
        <h1>${post.title}</h1>
        <p class="date">${new Date(post.date).toLocaleDateString()}</p>
        <article>${post.content}</article>
    `;
}

// Populate the archive with grouping by year
function populateArchive() {
    const groupedPosts = groupPostsByYear(blogPosts);

    Object.keys(groupedPosts)
        .sort((a, b) => b - a) // Sort years in descending order
        .forEach((year) => {
            const yearItem = document.createElement("li");
            const yearHeader = document.createElement("div");
            const yearContent = document.createElement("ul");

            yearHeader.textContent = year;
            yearHeader.className = "year-header";
            yearContent.className = "year-content hidden";

            yearHeader.addEventListener("click", () => {
                yearContent.classList.toggle("hidden");
            });

            groupedPosts[year].forEach((post) => {
                const postItem = document.createElement("li");
                postItem.innerHTML = `<a href="?post=${post.id}">${new Date(post.date).toLocaleDateString()}: ${post.title}</a>`;
                yearContent.appendChild(postItem);
            });

            yearItem.appendChild(yearHeader);
            yearItem.appendChild(yearContent);
            archiveList.appendChild(yearItem);
        });
}

// Paginate posts and display them
function paginatePosts(posts, page) {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    blogPostContainer.innerHTML = paginatedPosts
        .map(
            (post) => `
            <article>
                <h2>${post.title}</h2>
                <p class="date">${new Date(post.date).toLocaleDateString()}</p>
                <p>${post.content.slice(0, 100)}... <a href="?post=${post.id}">Read more</a></p>
            </article>
        `
        )
        .join("");

    // Pagination controls
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginationControls = `
        <div class="pagination">
            ${page > 1 ? `<button onclick="changePage(${page - 1})">Previous</button>` : ""}
            ${page < totalPages ? `<button onclick="changePage(${page + 1})">Next</button>` : ""}
        </div>
    `;
    blogPostContainer.innerHTML += paginationControls;
}

// Handle page change
function changePage(page) {
    currentPage = page;
    paginatePosts(blogPosts, currentPage);
}

// Initialize the blog
function initBlog() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("post");

    if (postId) {
        loadBlogPost(postId); // Load a specific post
    } else {
        paginatePosts(blogPosts, currentPage); // Load paginated posts
    }

    populateArchive(); // Populate the archive
}

initBlog();
