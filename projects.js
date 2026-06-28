/* =============================================
   projects.js
   Dynamically renders project cards
   from projectsData defined in data.js
   ============================================= */

const projectsGrid = document.getElementById('projects-grid');

projectsData.forEach((project) => {
  const tagsHTML = project.tags
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join('');

  const card = document.createElement('div');
  card.className = 'project-card reveal';

  card.innerHTML = `
    <div class="project-thumb">
      <div class="project-thumb-bg" style="background:${project.bg}; position:absolute; inset:0;"></div>
      <span style="position:relative; font-size:3.5rem;">${project.icon}</span>
    </div>
    <div class="project-body">
      <div class="project-tags">${tagsHTML}</div>
      <h3 class="project-title">${project.title}</h3>
      <p  class="project-desc">${project.desc}</p>
      <div class="project-links">
        <a href="${project.demo}"   class="project-link primary"><span>↗ Live Demo</span></a>
        <a href="${project.github}" class="project-link ghost"  ><span>⚡ GitHub</span></a>
      </div>
    </div>`;

  projectsGrid.appendChild(card);
  revealObserver.observe(card);
});
