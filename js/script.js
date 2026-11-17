const S = [
  {
    icon: "fa-solid fa-layer-group",
    title: "Ground Improvement",
    description: "Proposal, design and detailing for soil improvement schemes",
    image: "Ground Improvement.jpeg",
  },
  {
    icon: "fa-solid fa-mountain-sun",
    title: "Slope Stabilization",
    description:
      "Stability analysis, protection and landslide mitigation measures",
    image: "Slope Stability.jpeg",
  },
  {
    icon: "fa-solid fa-grip-lines-vertical",
    title: "Reinforced Soil Walls & Slopes",
    description: "RS/RE walls, MSE walls and reinforced soil slope design",
    image: "Reinforced earth-soil Wall.jpeg",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Geotechnical Investigation",
    description: "Subsurface exploration, soil/rock testing and lab reports",
    image: "Geotechnical Investigation.jpeg",
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Foundation Engineering",
    description:
      "Shallow & deep foundation design, pile, raft and footing analysis",
    image: "Foundation engineering.jpeg",
  },
  {
    icon: "fa-solid fa-border-all",
    title: "Geosynthetics Applications",
    description:
      "Geogrid, geotextile, geomembrane applications for roads & slopes",
    image: "Geosythetics Material.jpeg",
  },
  {
    icon: "fa-solid fa-cubes",
    title: "Retaining Solutions",
    description:
      "Gravity, cantilever, anchored and gabion retaining wall designs",
    image: "Gabion wall.jpeg",
  },
  {
    icon: "fa-solid fa-road",
    title: "Bridge / Embankment / Approach",
    description:
      "Approach roads, embankments, bridge abutment and pavement solutions",
    image: "Approch .jpeg",
  },
];
const sv = document.getElementById("sv");
if (sv) {
  sv.innerHTML = S.map(
    (s, i) =>
      `<article class="reveal card service-card group bg-white border border-sand rounded-2xl p-7 relative overflow-hidden" style="transition-delay:${(i % 4) * 80}ms"><img class="service-card-image" src="assets/services/${s.image}" alt="" aria-hidden="true" loading="lazy"><div class="service-card-content"><div class="service-icon" aria-hidden="true"><i class="${s.icon}"></i></div><h2 class="font-disp font-bold text-dk text-lg mt-5">${s.title}</h2><p class="text-sm font-medium text-dk mt-2">${s.description}</p></div></article>`,
  ).join("");
}
const stateProjectCounts = [
  { name: "Maharashtra", projects: 76, x: 178.5, y: 368.7 },
  { name: "Karnataka", projects: 4, x: 179.6, y: 462.5 },
  { name: "Madhya Pradesh", projects: 2, x: 218.39, y: 287.89 },
  { name: "West Bengal", projects: 2, x: 395.37, y: 281.45 },
  { name: "Uttar Pradesh", projects: 3, x: 260.06, y: 220.91 },
  { name: "Odisha", projects: 2, x: 330.71, y: 347.76 },
  { name: "Assam", projects: 1, x: 484.16, y: 232.16 },
  { name: "Goa", projects: 1, x: 140.92, y: 449.59 },
  { name: "Andhra Pradesh", projects: 1, x: 249.1, y: 441.88 },
  { name: "Himachal Pradesh", projects: 1, x: 199.3, y: 121.9 },
  { name: "Jammu & Kashmir (UT)", projects: 1, x: 155.66, y: 87.38 },
];
const caseStudies = [
  {
    id: "case-highway-re-wall",
    title: "Highway Reinforced Earth Wall",
    category: "Reinforced soil wall",
    location: "Pune, Maharashtra · sample location",
    image:
      "assets/new/Nanded Reinforced Earth- Soil Wall Project/DJI_0926.webp",
    alt: "Illustrative reinforced soil wall along a highway",
    challenge:
      "Illustrative brief: create a stable highway embankment beside a constrained right-of-way and variable ground.",
    scope:
      "Example scope: review available ground information, assess wall geometry and develop a reinforced-soil design concept.",
    deliverables:
      "Example outputs: design calculations, typical sections, reinforcement schedule and construction notes.",
    mapPosition: { left: "22.90%", top: "60.50%" },
  },
  {
    id: "case-borehole-investigation",
    title: "Borehole Investigation",
    category: "Geotechnical investigation",
    location: "Nagpur, Maharashtra · sample location",
    image:
      "assets/new/Geotechnical Investigation Project- Seimens Mumbai/WhatsApp Image 2026-01-08 at 11.43.57 AM.jpeg",
    alt: "Illustrative geotechnical borehole investigation",
    challenge:
      "Illustrative brief: establish subsurface conditions and identify design parameters for a proposed infrastructure corridor.",
    scope:
      "Example scope: plan exploration locations, coordinate borehole logging and evaluate representative soil and rock data.",
    deliverables:
      "Example outputs: factual investigation report, interpreted ground profile and preliminary engineering recommendations.",
    mapPosition: { left: "38.84%", top: "52.38%" },
  },
  {
    id: "case-slope-stabilization",
    title: "Slope Stabilization",
    category: "Slope stabilization",
    location: "Satara, Maharashtra · sample location",
    image: "assets/new/Slope.Staility-slider-1.jpeg",
    alt: "Illustrative slope stabilization works",
    challenge:
      "Illustrative brief: assess a cut slope exposed to rainfall, erosion and changing ground conditions.",
    scope:
      "Example scope: review site conditions, assess slope stability and compare suitable protection or stabilization options.",
    deliverables:
      "Example outputs: stability assessment, recommended stabilization concept, drainage details and monitoring notes.",
    mapPosition: { left: "24.07%", top: "63.09%" },
  },
  {
    id: "case-retaining-structure",
    title: "Retaining Structure Assessment",
    category: "Retaining solutions",
    location: "Hyderabad, Telangana · sample location",
    image:
      "assets/new/Gabion wall KumbhaRushi project/WhatsApp Image 2026-01-18 at 12.13.50 PM.webp",
    alt: "Illustrative retaining structure",
    challenge:
      "Illustrative brief: retain an elevation difference while accounting for earth pressure, groundwater and site constraints.",
    scope:
      "Example scope: assess design assumptions and review feasible retaining-system options against ground conditions.",
    deliverables:
      "Example outputs: stability checks, preliminary design parameters, concept details and construction considerations.",
    mapPosition: { left: "37.00%", top: "64.01%" },
  },
];

function renderCaseStudy(project, projectPage) {
  return `<article class="case-card reveal" id="${projectPage ? project.id : ""}">
    <span class="case-image-wrap">
      <img class="case-image" src="${project.image}" alt="${project.alt}" loading="lazy">
    </span>
    <div class="case-card-body">
      <span class="case-category">${project.category}</span>
      <span class="case-title">${project.title}</span>
      <span class="case-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${project.location}</span>
    </div>
  </article>`;
}

const featuredCases = document.getElementById("featured-cases");
if (featuredCases) {
  featuredCases.innerHTML = caseStudies
    .slice(0, 3)
    .map((project) => renderCaseStudy(project, false))
    .join("");
}
const projectCases = document.getElementById("project-cases");
if (projectCases) {
  projectCases.innerHTML = caseStudies
    .map((project) => renderCaseStudy(project, true))
    .join("");
}

const mapMarkers = document.getElementById("map-markers");
const mapPreview = document.getElementById("map-preview");
if (mapMarkers && mapPreview) {
  const stateProjectList = document.getElementById("state-project-counts");
  const showMapProject = (project) => {
    const state = project.location.split(", ")[1].split(" ·")[0];
    mapMarkers.querySelectorAll("button").forEach((marker) => {
      const selected = marker.dataset.project === project.id;
      marker.classList.toggle("is-active", selected);
      marker.setAttribute("aria-pressed", String(selected));
    });
    mapPreview.innerHTML = `<div class="map-preview-image"><img src="${project.image}" alt="${project.alt}"></div>
      <div class="map-preview-content">
        <span class="case-sample-label">Illustrative sample</span>
        <p class="case-category mt-4">${project.category}</p>
        <h3 class="font-disp text-2xl text-brn mt-2">${project.title}</h3>
        <p class="mt-2 text-xs font-medium uppercase tracking-wider text-[#527f7a]">Sample state: ${state}</p>
        <p class="map-preview-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${project.location}</p>
        <p class="mt-4 text-sm text-brn/75">${project.challenge}</p>
        <a class="btn btn-p mt-6" href="projects.html#${project.id}">View case study <span aria-hidden="true">→</span></a>
      </div>`;
  };
  mapMarkers.innerHTML = stateProjectCounts
    .map(
      (state, index) =>
        `<span class="state-count-marker" style="left:${(state.x / 600) * 100}%;top:${(state.y / 640) * 100}%;--marker-delay:${index * 45}ms" data-state-label="${state.name}: ${state.projects} ${state.projects === 1 ? "project" : "projects"}" title="${state.name}: ${state.projects} ${state.projects === 1 ? "project" : "projects"}" aria-hidden="true">${state.projects}</span>`,
    )
    .join("") + caseStudies
    .map(
      (project, index) =>
        `<button class="map-marker${index === 0 ? " is-active" : ""}" type="button" style="left:${project.mapPosition.left};top:${project.mapPosition.top};--marker-delay:${index * 120}ms" data-project="${project.id}" aria-label="Show illustrative ${project.title} sample near ${project.location}" aria-pressed="${index === 0}">
          <span class="map-marker-pulse"></span><span class="map-marker-label">${project.location.split(" · ")[0]}</span>
        </button>`,
    )
    .join("");
  if (stateProjectList) {
    stateProjectList.innerHTML = stateProjectCounts
      .map(
        (state) =>
          `<li class="state-project-item"><span>${state.name}</span><strong>${state.projects}</strong><span class="state-project-unit">${state.projects === 1 ? "project" : "projects"}</span></li>`,
      )
      .join("");
  }
  mapMarkers.addEventListener("click", (event) => {
    const marker = event.target.closest(".map-marker");
    if (!marker) return;
    const project = caseStudies.find(
      (item) => item.id === marker.dataset.project,
    );
    if (project) showMapProject(project);
  });
  showMapProject(caseStudies[0]);
}

const groundPanel = document.getElementById("ground-panel");
const groundTabs = document.querySelectorAll("[data-ground-tab]");
const groundContent = {
  investigation: {
    title: "Investigate the ground",
    copy: "Boreholes, in-situ testing and laboratory evaluation help build a ground model and establish design parameters. The investigation plan depends on the structure, geology and site conditions.",
    items: [
      "Borehole logging",
      "SPT and in-situ tests",
      "Soil and rock testing",
    ],
  },
  design: {
    title: "Engineer for the conditions",
    copy: "Ground conditions inform foundation selection, slope or retaining-system design, and construction recommendations. Each solution needs project-specific analysis and verified site data.",
    items: [
      "Foundation engineering",
      "Slope stability",
      "Retaining and reinforced soil",
    ],
  },
};
function showGroundTab(tab) {
  const content = groundContent[tab];
  if (!content || !groundPanel) return;
  groundTabs.forEach((button) => {
    const selected = button.dataset.groundTab === tab;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  groundPanel.innerHTML = `<h3 class="font-disp font-bold text-2xl text-brn">${content.title}</h3>
    <p class="mt-3 text-brn/75 leading-relaxed">${content.copy}</p>
    <ul class="ground-list mt-5">${content.items.map((item) => `<li><i class="fa-solid fa-check" aria-hidden="true"></i>${item}</li>`).join("")}</ul>`;
}
groundTabs.forEach((button, index) => {
  button.addEventListener("click", () =>
    showGroundTab(button.dataset.groundTab),
  );
  button.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const nextIndex =
      (index + (event.key === "ArrowRight" ? 1 : groundTabs.length - 1)) %
      groundTabs.length;
    groundTabs[nextIndex].focus();
    showGroundTab(groundTabs[nextIndex].dataset.groundTab);
  });
});
if (groundTabs.length) showGroundTab(groundTabs[0].dataset.groundTab);

const founderHighlightContent = {
  expertise:
    "The current MRUDA profile highlights work across slope stabilization, ground improvement, reinforced soil walls, diaphragm walls, retaining structures, pile load tests and subsurface investigation.",
  recognition:
    "The MRUDA profile notes Er. Jagtap’s recognition among the “75 Influential Women Geotechnical Engineers” featured in Daughters of Indian Soil.",
  research:
    "Her profile notes technical conference participation and recognition for technical paper presentations.",
};
const founderHighlightCopy = document.getElementById("founder-highlight-copy");
document.querySelectorAll("[data-founder-highlight]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = founderHighlightContent[button.dataset.founderHighlight];
    if (!content || !founderHighlightCopy) return;
    document.querySelectorAll("[data-founder-highlight]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    founderHighlightCopy.textContent = content;
  });
});
const initialFounderHighlight = document.querySelector(
  '[data-founder-highlight="expertise"]',
);
if (initialFounderHighlight) initialFounderHighlight.click();

const F = [
  "Founder & Consulting Geotechnical Engineer at MRUDA with 20+ years of experience",
  "Civil Engineering graduate from Mumbai University (Merit list holder); Master's in Geotechnical Engineering from The Maharaja Sayajirao University of Baroda",
  "Qualified GATE & former Lecturer at Datta Meghe College of Engineering, Navi Mumbai",
  "Experience from Design Engineer to Sr. Manager (Design) in reputed organizations",
  "Expertise in slope stabilization, ground improvement, reinforced soil walls, diaphragm walls, retaining structures, pile load tests and subsurface investigation",
  "Worked as a Free-Lance Geotechnical Engineer with various companies",
  "Active in technical conferences; recognized for technical paper presentations",
  "Life Member of the Indian Geotechnical Society (IGS) and Executive Member of IGS Mumbai Chapter",
  'Honored by IGS as one of the "75 Influential Women Geotechnical Engineers" in the book Daughters of Indian Soil',
];
const fl = document.getElementById("fl");
if (fl) {
  fl.innerHTML = F.map(
    (t) =>
      `<li class="card flex gap-3 bg-white border border-sand rounded-xl p-4 text-sm text-brn/85"><span class="mt-1.5 w-2 h-2 rounded-full bg-or shrink-0"></span><span>${t}</span></li>`,
  ).join("");
}
const C = [
  "Picture5.jpg",
  "Picture6.jpg",
  "Picture7.png",
  "Picture8.png",
  "Picture9.png",
  "Picture10.png",
  "Picture11.svg",
  "Picture12.jpg",
  "Picture13.jpg",
  "Picture14.jpg",
  "Picture15.png",
  "Picture16.png",
  "Picture17.jpg",
  "Picture18.jpg",
  "Picture19.jpg",
  "Picture20.jpg",
  "Picture21.jpg",
  "Picture22.svg",
  "Picture23.jpg",
  "Picture24.jpg",
  "Picture25.png",
  "Picture26.jpg",
  "Picture27.png",
  "Picture28.png",
  "Picture29.png",
  "Picture30.png",
  "Picture31.png",
  "Picture32.png",
  "Picture33.png",
  "Picture34.png",
  "Picture35.png",
  "Picture36.png",
  "Picture37.png",
  "Picture38.png",
  "Picture39.jpg",
  "Picture40.png",
  "Picture41.png",
  "Picture42.png",
];
const cl = document.getElementById("cl");
if (cl) {
  cl.innerHTML = C.map(
    (c, index) =>
      `<figure class="reveal client-logo-card" aria-label="Client logo ${index + 1}"><img src="assets/new/clients/${c}" alt="Client logo ${index + 1}" loading="lazy" /></figure>`,
  ).join("");
}
const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();
const nav = document.getElementById("nav"),
  mob = document.getElementById("mob"),
  bar = document.getElementById("bar"),
  burger = document.getElementById("burger");
function sc() {
  const y = scrollY;
  if (nav && y > 40)
    nav.classList.add("bg-cream/95", "backdrop-blur", "shadow-md");
  if (bar) {
    bar.style.width =
      (y / (document.documentElement.scrollHeight - innerHeight)) * 100 + "%";
  }
}
addEventListener("scroll", sc, { passive: true });
sc();
if (burger && mob && nav) {
  burger.onclick = () => {
    mob.classList.toggle("hidden");
    mob.classList.toggle("flex");
    nav.classList.add("bg-cream/95");
  };
  mob.querySelectorAll("a").forEach(
    (a) =>
      (a.onclick = () => {
        mob.classList.add("hidden");
        mob.classList.remove("flex");
      }),
  );
}
const io = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
document.querySelectorAll("[data-c]").forEach((el) => {
  const t = +el.dataset.c;
  let n = 0;
  const id = setInterval(() => {
    n += Math.ceil(t / 30);
    if (n >= t) {
      n = t;
      clearInterval(id);
    }
    el.textContent = n;
  }, 40);
});
const sectionLinks = document.querySelectorAll("#links .nl");
const pageSections = document.querySelectorAll("section[id]");
if (sectionLinks.length > 0 && pageSections.length > 0) {
  const sp = new IntersectionObserver(
    (e) =>
      e.forEach((x) => {
        if (x.isIntersecting)
          sectionLinks.forEach((l) =>
            l.classList.toggle(
              "act",
              l.getAttribute("href").endsWith("#" + x.target.id),
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  pageSections.forEach((s) => sp.observe(s));
}
const projectSlideshow = document.querySelector("[data-project-slideshow]");
if (projectSlideshow) {
  const slides = [
    {
      src: "assets/new/BH-4.jpeg",
      alt: "Geotechnical field photograph; project details not available",
    },
    {
      src: "assets/new/Core.Box-BH-01.jpeg",
      alt: "Geotechnical core samples; project details not available",
    },
    {
      src: "assets/new/Field tests.jpeg",
      alt: "Geotechnical field testing; project details not available",
    },
    {
      src: "assets/new/Karanje-Satara.jpeg",
      alt: "Site photograph; project details not available",
    },
    {
      src: "assets/new/Satara.jpeg",
      alt: "Site photograph; project details not available",
    },
    {
      src: "assets/new/Shore.pile.webp",
      alt: "Shoring site photograph; project details not available",
    },
    {
      src: "assets/new/Shubhada-on.site.jpeg",
      alt: "Site visit photograph; project details not available",
    },
    {
      src: "assets/new/Slope.Staility-slider-1.jpeg",
      alt: "Slope site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.08.09 PM (4).jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.08.09 PM.jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.08.10 PM (1).jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.08.10 PM.jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.17.46 PM.jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 1.18.08 PM.jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
    {
      src: "assets/new/WhatsApp Image 2026-10-17 at 12.32.33 PM.jpeg",
      alt: "Geotechnical site photograph; project details not available",
    },
  ];
  const slideCards = [...projectSlideshow.querySelectorAll("[data-stack-card]")];
  const count = projectSlideshow.querySelector("[data-slide-count]");
  const caption = projectSlideshow.querySelector("[data-slide-caption]");
  const dots = projectSlideshow.querySelector("[data-slide-dots]");
  const stage = projectSlideshow.querySelector(".project-slideshow-stage");
  let activeSlide = 0;
  let timer;
  let animationTimer;
  let isVisible = false;
  let isAnimating = false;
  let leftCard = slideCards.find((card) => card.dataset.stackCard === "left");
  let activeCard = slideCards.find((card) => card.dataset.stackCard === "active");
  let rightCard = slideCards.find((card) => card.dataset.stackCard === "right");

  const renderStatus = () => {
    count.textContent = `${activeSlide + 1} / ${slides.length}`;
    caption.textContent =
      "";
    dots.querySelectorAll("button").forEach((dot, index) => {
      const active = index === activeSlide;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
  };
  const setCardPosition = (card, position) => {
    card.classList.remove(
      "is-back-left",
      "is-active",
      "is-back-right",
      "is-recycling",
    );
    card.classList.add(position);
    card.setAttribute("aria-hidden", String(position !== "is-active"));
  };
  const updateCard = (card, slideIndex) => {
    const slide = slides[slideIndex];
    card.src = slide.src;
    card.alt = slide.alt;
  };
  const renderSlide = () => {
    const cardSlides = [
      (activeSlide + slides.length - 1) % slides.length,
      activeSlide,
      (activeSlide + 1) % slides.length,
    ];
    [leftCard, activeCard, rightCard].forEach((card, index) => {
      updateCard(card, cardSlides[index]);
      setCardPosition(
        card,
        ["is-back-left", "is-active", "is-back-right"][index],
      );
    });
    renderStatus();
  };
  const moveSlide = (direction) => {
    if (isAnimating) return;

    isAnimating = true;
    activeSlide = (activeSlide + direction + slides.length) % slides.length;
    const recycledCard = direction > 0 ? leftCard : rightCard;
    if (direction > 0) {
      leftCard = activeCard;
      activeCard = rightCard;
      rightCard = recycledCard;
    } else {
      rightCard = activeCard;
      activeCard = leftCard;
      leftCard = recycledCard;
    }
    [leftCard, activeCard, rightCard].forEach((card) => {
      card.classList.remove(
        "is-back-left",
        "is-active",
        "is-back-right",
        "is-recycling",
      );
    });
    recycledCard.classList.add("is-recycling");
    setCardPosition(leftCard, "is-back-left");
    setCardPosition(activeCard, "is-active");
    renderStatus();

    animationTimer = window.setTimeout(() => {
      const recycledIndex =
        direction > 0
          ? (activeSlide + 1) % slides.length
          : (activeSlide + slides.length - 1) % slides.length;
      updateCard(recycledCard, recycledIndex);
      setCardPosition(
        recycledCard,
        direction > 0 ? "is-back-right" : "is-back-left",
      );
      isAnimating = false;
    }, 850);
  };
  const stopTimer = () => {
    window.clearInterval(timer);
    timer = undefined;
  };
  const startTimer = (resumeWhileFocused = false) => {
    stopTimer();
    if (
      !isVisible ||
      document.hidden ||
      projectSlideshow.matches(":hover") ||
      (!resumeWhileFocused &&
        projectSlideshow.contains(document.activeElement)) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    timer = window.setInterval(() => {
      moveSlide(1);
    }, 2500);
  };
  const showSlide = (index) => {
    const target = (index + slides.length) % slides.length;
    if (target === activeSlide || isAnimating) return;
    const forward = (target - activeSlide + slides.length) % slides.length;
    if (forward === 1) {
      moveSlide(1);
    } else if (forward === slides.length - 1) {
      moveSlide(-1);
    } else {
      window.clearTimeout(animationTimer);
      isAnimating = true;
      stage.classList.add("is-refreshing");
      activeSlide = target;
      renderSlide();
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          stage.classList.remove("is-refreshing");
          isAnimating = false;
        });
      });
    }
    startTimer();
  };

  dots.innerHTML = slides
    .map(
      (_, index) =>
        `<button type="button" aria-label="Show site photo ${index + 1}" aria-current="${index === 0}" class="${index === 0 ? "is-active" : ""}" data-slide-index="${index}"></button>`,
    )
    .join("");
  dots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-slide-index]");
    if (dot) showSlide(Number(dot.dataset.slideIndex));
  });
  projectSlideshow.addEventListener("mouseenter", stopTimer);
  projectSlideshow.addEventListener("mouseleave", startTimer);
  projectSlideshow.addEventListener("focusin", stopTimer);
  projectSlideshow.addEventListener("focusout", (event) => {
    if (!projectSlideshow.contains(event.relatedTarget)) startTimer();
  });
  document.addEventListener("visibilitychange", startTimer);
  const slideshowVisibility = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    startTimer();
  });
  slideshowVisibility.observe(projectSlideshow);
  renderSlide();
  startTimer();
}
const lb = document.getElementById("lb");
const lbi = document.getElementById("lbi");
if (lb && lbi) {
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset && "lb" in t.dataset) {
      lbi.src = t.src;
      lb.classList.remove("hidden");
      lb.classList.add("flex");
    } else if (lb.contains(t) || t === lb) {
      lb.classList.add("hidden");
      lb.classList.remove("flex");
    }
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lb.classList.add("hidden");
      lb.classList.remove("flex");
    }
  });
}
const fb = document.getElementById("fb");
const fn = document.getElementById("fn");
const fp = document.getElementById("fp");
const fs = document.getElementById("fs");
const fm = document.getElementById("fm");
if (fb && fn && fp && fs && fm) {
  fb.onclick = () => {
    const m = `Hello MRUDA Geotech,%0AName: ${encodeURIComponent(fn.value)}%0AContact: ${encodeURIComponent(fp.value)}%0AService: ${encodeURIComponent(fs.value)}%0AMessage: ${encodeURIComponent(fm.value)}`;
    window.open("https://wa.me/919987515657?text=" + m, "_blank");
  };
}
