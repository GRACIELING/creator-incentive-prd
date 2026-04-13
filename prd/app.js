// ===== Mermaid Init =====
mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#4f46e5',
    primaryTextColor: '#1a1a2e',
    primaryBorderColor: '#c7d2fe',
    lineColor: '#6b7280',
    secondaryColor: '#f0f9ff',
    tertiaryColor: '#f8fafc',
    background: '#ffffff',
    fontSize: '14px'
  },
  flowchart: { curve: 'basis', padding: 20 },
  sequence: { actorMargin: 60, messageMargin: 40 }
});

// ===== Tab Switch =====
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// ===== Nav Active =====
function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== Punish Modal =====
function showPunishModal() {
  document.getElementById('punishModal').classList.add('show');
}
function closePunishModal() {
  document.getElementById('punishModal').classList.remove('show');
}

// ===== Scroll Spy =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 80) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
