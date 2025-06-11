document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("post-form");
  const postText = document.getElementById("post-text");
  const postList = document.getElementById("posts");

  // Загружаем посты из localStorage
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