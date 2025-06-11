/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f7f9f9;
  color: #0f1419;
  line-height: 1.5;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Шапка профиля */
.twitter-header {
  background: white;
  border-bottom: 1px solid #e6ecf0;
  padding: 1rem 0;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 999px;
  border: 1px solid #ccc;
}

.profile-info .name {
  font-weight: bold;
  font-size: 1.2rem;
}

.profile-info .username {
  color: #5b7083;
  font-size: 0.9rem;
}

.bio {
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #1da1f2;
  text-decoration: none;
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("post-form");
  const postText = document.getElementById("post-text");
  const postList = document.getElementById("posts");

  let posts = JSON.parse(localStorage.getItem("userPosts")) || [];

  function renderPosts() {
    postList.innerHTML = "";
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.className = "post-item";
      div.innerHTML = `<p>${post.text}</p><small>${post.date}</small>`;
      postList.appendChild(div);
    });
  }

  renderPosts();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = postText.value.trim();
    if (!text) return;

    const newPost = {
      text,
      date: new Date().toLocaleString(),
    };

    posts.unshift(newPost);
    localStorage.setItem("userPosts", JSON.stringify(posts));
    renderPosts();
    form.reset();
  });
});