;
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

// Переключение темы
const themeToggle = document.getElementById('theme-toggle');

// Проверяем сохранённую тему или используем светлую по умолчанию
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Меняем иконку при загрузке
if (currentTheme === 'dark') {
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }
});