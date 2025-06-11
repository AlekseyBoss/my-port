:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #6c63ff;
  --card-bg: rgba(255, 255, 255, 0.7);
}

[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #f1f1f1;
  --card-bg: rgba(40, 40, 40, 0.7);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
}

.container {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
}

.site-header {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.site-header h1 {
  font-size: 2rem;
}
.subtitle {
  font-weight: 600;
  margin-bottom: 1rem;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

#theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--text-color);
}

.section {
  padding: 3rem 0;
}

.glass {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin: 0 1rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-color);
  text-decoration: none;
  margin-top: 1rem;
  display: block;
}

.site-footer {
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
}