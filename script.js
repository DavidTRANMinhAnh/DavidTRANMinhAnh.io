/* ============================================================
   PORTFOLIO – David TRAN
   script.js
   ============================================================ */

/* ── DONNÉES PROJETS ── */
const projects = {
  bancaire: {
    title: "Application bancaire", emoji: "🏦",
    desc: "Application réaliser en première année de BUT. Mise en application des notions vu en cours (développement Orienté Objet). ",
    skills: ["Réaliser", "Gérer", "Conduire", "Collaborer"],
    techs: ["Java", "SQL", "JavaFX", "Scrum"],
    images: ["images/Banque/banque1.png", "images/Banque/banque2.png"],
    github: "https://github.com/", group: "En groupe", duration: "4 semaines"
  },
  bonbons: {
    title: "Site d'achat de bonbons", emoji: "🍬",
    desc: "Site réaliser durant la deuxième année de BUT. Consistant à réaliser un site vitrine de vente de bonbon pour un client. En plus de la réalisation du site. Le développement d'une gestion des flux de données du hangar (capteur d'humidité, température etc).",
    skills: ["Réaliser", "Collaborer", "Conduire"],
    techs: ["HTML", "CSS", "JavaScript, Python"],
    images: ["images/Bonbons/Bonbon1.png", "images/Bonbons/Bonbon2.png", "images/Bonbons/Bonbon3.png"],
    github: "https://github.com/", group: "En binôme", duration: "3 semaines"
  },
  flopedt: {
    title: "flopEDT", emoji: "📅",
    desc: "Création de la page qui servira aux professeurs pour définir leurs disponibilités durant les semaines type et atypique.",
    skills: ["Réaliser", "Gérer", "Conduire", "Collaborer"],
    techs: ["Python", "Django", "SQL", "Git", "Docker"],
    images: ["images/flopEDT/flopEDT.png"],
    github: "https://github.com/", group: "En groupe", duration: "6 semaines"
  },
  bomberman: {
    title: "Bomber Man", emoji: "💣",
    desc: "Création d'un Bomberman créé sur le moteur Godot Engine, avec un mode multijoueur et diverses cartes.",
    skills: ["Réaliser", "Optimiser", "Collaborer"],
    techs: ["Java", "JavaFX", "Algorithmes"],
    images: [],
    github: "https://github.com/", group: "En groupe", duration: "5 semaines"
  },
  locura: {
    title: "Locura4IOT VR", emoji: "🥽",
    desc: "Visualisation immersive de données capteurs en temps réel.",
    skills: ["Réaliser", "Optimiser", "Collaborer"],
    techs: ["Unity", "C#", "VR SDK", "IoT", "MQTT"],
    images: ["images/Locura4IOTVR/Locura4IOTVR1.png", "images/Locura4IOTVR/Locura4IOTVR2.png"],
    github: "https://github.com/", group: "En groupe", duration: "8 semaines"
  },
  biblio: {
    title: "Application de gestion de bibliothèque", emoji: "📚",
    desc: "Architecture n-tiers complète : Back-office et Front-office.",
    skills: ["Réaliser", "Gérer"],
    techs: ["Java", "Oracle", "UML", "Merise"],
    images: ["images/Biblio/Biblio1.png", "images/Biblio/Biblio2.png", "images/Biblio/Biblio3.png"],
    github: "https://github.com/", group: "Solo", duration: "3 semaines"
  },
  fitness: {
    title: "Application fitness", emoji: "🏋️",
    desc: "Application permettant le suivi de sa routine sportive. Possibilité de réaliser son programme.",
    skills: ["Réaliser", "Gérer", "Conduire"],
    techs: ["Android", "Java", "SQLite", "XML"],
    images: [],
    github: "https://github.com/", group: "En binôme", duration: "4 semaines"
  },
  serveur: {
    title: "Déploiement serveur & hébergement web sécurisé", emoji: "🐧",
    desc: "Déploiment serveur et hébérgement web sécurisé.",
    skills: ["Administrer"],
    techs: ["Linux", "Bash", "Apache", "SSL/TLS", "iptables", "DNS"],
    images: [],
    github: "https://github.com/", group: "Solo", duration: "2 semaines"
  },
  bd: {
    title: "Conception d'une base de données", emoji: "🗃️",
    desc: "Mise en application des base de la créations d'une base de données. ",
    skills: ["Gérer", "Optimiser"],
    techs: ["Oracle", "SQL", "PL/SQL", "Merise", "UML"],
    images: ["images/BD/BD1.PNG", "images/BD/BD2.png"],
    github: "https://github.com/", group: "Solo", duration: "3 semaines"
  }
};

function initializeProjectCardImages() {
  document.querySelectorAll('.project-img[data-project]').forEach(cardImage => {
    const key = cardImage.dataset.project;
    const image = projects[key]?.images?.[0];

    if (!image) return;

    cardImage.style.backgroundImage = `url('${image}')`;
    cardImage.classList.add('has-image');
    cardImage.textContent = '';
  });
}

/* ── MODALE PROJET ── */
function openModal(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('modalTitle').textContent = p.title;

  const photos = (p.images && p.images.length > 0)
    ? p.images.map((src, index) => `
      <div class="modal-photo has-image">
        <img src="${src}" alt="Capture ${index + 1} du projet ${p.title}">
      </div>`).join('')
    : `
      <div class="modal-photo">
        <span>${p.emoji}</span>
        <div class="lorem-badge">Aucune capture</div>
      </div>`;

  const skillsHtml = p.skills.map(s => `<span class="modal-tag-skill">${s}</span>`).join('');
  const techsHtml  = p.techs.map(t => `<span class="modal-tag-tech">${t}</span>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div>
      <div class="modal-section-title">Captures d'écran</div>
      <div class="modal-photos">${photos}</div>
    </div>
    <div>
      <div class="modal-section-title">Description</div>
      <p class="modal-desc">${p.desc}</p>
    </div>
    <div>
      <div class="modal-section-title">Compétences associées</div>
      <div class="modal-tags">${skillsHtml}</div>
    </div>
    <div>
      <div class="modal-section-title">Technologies utilisées</div>
      <div class="modal-tags">${techsHtml}</div>
    </div>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <div class="modal-meta-label">Travail</div>
        <div class="modal-meta-value">${p.group}</div>
      </div>
      <div class="modal-meta-item">
        <div class="modal-meta-label">Durée</div>
        <div class="modal-meta-value">${p.duration}</div>
      </div>
    </div>
    <div>
      <div class="modal-section-title">Dépôt GitHub</div>
      <a href="${p.github}" target="_blank" class="modal-github-link">🔗 Voir sur GitHub</a>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── FILTRE PROJETS PAR COMPÉTENCE ── */
function filterProjects(skill, el) {
  document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (skill === 'all') {
      card.classList.remove('hidden');
    } else {
      card.classList.toggle('hidden', !(card.dataset.skills || '').includes(skill));
    }
  });

  document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
}

/* ── FORMULAIRE DE CONTACT ── */
function sendForm() {
  alert('Merci ! David vous répondra très bientôt. 🎉');
}

/* ── ANIMATION TIMELINE AU SCROLL ── */
const timelineItems = document.querySelectorAll('.timeline-item');
const timeline = document.querySelector('.timeline');

const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (timeline) timeline.classList.add('animated');
    }
  });
}, { threshold: 0.15 });

timelineItems.forEach(item => tlObserver.observe(item));

initializeProjectCardImages();
