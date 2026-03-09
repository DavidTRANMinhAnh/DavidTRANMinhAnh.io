/* ============================================================
   PORTFOLIO – David TRAN
   script.js
   ============================================================ */

/* ── DONNÉES PROJETS ── */
const projects = {
  bancaire: {
    title: "Application bancaire", emoji: "🏦",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    skills: ["Réaliser", "Gérer", "Conduire", "Collaborer"],
    techs: ["Java", "SQL", "JavaFX", "Scrum"],
    github: "https://github.com/", group: "En groupe", duration: "4 semaines"
  },
  bonbons: {
    title: "Site d'achat de bonbons", emoji: "🍬",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    skills: ["Réaliser", "Collaborer", "Conduire"],
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/", group: "En binôme", duration: "3 semaines"
  },
  flopedt: {
    title: "flopEDT", emoji: "📅",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    skills: ["Réaliser", "Gérer", "Conduire", "Collaborer"],
    techs: ["Python", "Django", "SQL", "Git", "Docker"],
    github: "https://github.com/", group: "En groupe", duration: "6 semaines"
  },
  bomberman: {
    title: "Bomber Man", emoji: "💣",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    skills: ["Réaliser", "Optimiser", "Collaborer"],
    techs: ["Java", "JavaFX", "Algorithmes"],
    github: "https://github.com/", group: "En groupe", duration: "5 semaines"
  },
  locura: {
    title: "Locura4IOT VR", emoji: "🥽",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    skills: ["Réaliser", "Optimiser", "Collaborer"],
    techs: ["Unity", "C#", "VR SDK", "IoT", "MQTT"],
    github: "https://github.com/", group: "En groupe", duration: "8 semaines"
  },
  biblio: {
    title: "Application de gestion de bibliothèque", emoji: "📚",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores.",
    skills: ["Réaliser", "Gérer"],
    techs: ["Java", "Oracle", "UML", "Merise"],
    github: "https://github.com/", group: "Solo", duration: "3 semaines"
  },
  fitness: {
    title: "Application fitness", emoji: "🏋️",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    skills: ["Réaliser", "Gérer", "Conduire"],
    techs: ["Android", "Java", "SQLite", "XML"],
    github: "https://github.com/", group: "En binôme", duration: "4 semaines"
  },
  serveur: {
    title: "Déploiement serveur & hébergement web sécurisé", emoji: "🐧",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et expedita distinctio.",
    skills: ["Administrer"],
    techs: ["Linux", "Bash", "Apache", "SSL/TLS", "iptables", "DNS"],
    github: "https://github.com/", group: "Solo", duration: "2 semaines"
  },
  bd: {
    title: "Conception d'une base de données", emoji: "🗃️",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt.",
    skills: ["Gérer", "Optimiser"],
    techs: ["Oracle", "SQL", "PL/SQL", "Merise", "UML"],
    github: "https://github.com/", group: "Solo", duration: "3 semaines"
  }
};

/* ── MODALE PROJET ── */
function openModal(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('modalTitle').textContent = p.title;

  const photos = [1, 2, 3].map(() => `
    <div class="modal-photo">
      <span>${p.emoji}</span>
      <div class="lorem-badge">📷 À remplacer</div>
    </div>`).join('');

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
