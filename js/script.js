const S = [
  { icon: "fa-solid fa-layer-group", title: "Ground Improvement", description: "Proposal, design and detailing for soil improvement schemes" },
  { icon: "fa-solid fa-mountain-sun", title: "Slope Stabilization", description: "Stability analysis, protection and landslide mitigation measures" },
  { icon: "fa-solid fa-grip-lines-vertical", title: "Reinforced Soil Walls & Slopes", description: "RS/RE walls, MSE walls and reinforced soil slope design" },
  { icon: "fa-solid fa-magnifying-glass", title: "Geotechnical Investigation", description: "Subsurface exploration, soil/rock testing and lab reports" },
  { icon: "fa-solid fa-building-columns", title: "Foundation Engineering", description: "Shallow & deep foundation design, pile, raft and footing analysis" },
  { icon: "fa-solid fa-border-all", title: "Geosynthetics Applications", description: "Geogrid, geotextile, geomembrane applications for roads & slopes" },
  { icon: "fa-solid fa-cubes", title: "Retaining Solutions", description: "Gravity, cantilever, anchored and gabion retaining wall designs" },
  { icon: "fa-solid fa-road", title: "Bridge / Embankment / Approach", description: "Approach roads, embankments, bridge abutment and pavement solutions" },
];
const sv = document.getElementById("sv");
if (sv) {
  sv.innerHTML = S.map(
    (s, i) =>
      `<article class="reveal card service-card group bg-white border border-sand rounded-2xl p-7 relative overflow-hidden" style="transition-delay:${(i % 4) * 80}ms"><div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-or/10 group-hover:scale-[2.2] transition-transform duration-500"></div><div class="service-icon relative" aria-hidden="true"><i class="${s.icon}"></i></div><h2 class="relative font-disp font-bold text-brn text-lg mt-5">${s.title}</h2><p class="relative text-sm text-brn/70 mt-2">${s.description}</p></article>`,
  ).join("");
}
const caseStudies = [
  {
    id: "case-highway-re-wall",
    title: "Highway Reinforced Earth Wall",
    category: "Reinforced soil wall",
    location: "Pune, Maharashtra · sample location",
    image: "assets/new/Nanded project/DJI_0925.JPG",
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
    image: "assets/new/Core.Box-BH-01.jpeg",
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
    image: "assets/new/WhatsApp Image 2026-01-18 at 12.13.50 PM.jpeg",
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
  const anchor = projectPage
    ? `#${project.id}`
    : `projects.html#${project.id}`;
  return `<article class="case-card reveal" id="${projectPage ? project.id : ""}">
    <details class="case-details-toggle">
      <summary class="case-summary">
        <span class="case-image-wrap">
          <img class="case-image" src="${project.image}" alt="${project.alt}" loading="lazy">
          <span class="case-sample-label">Illustrative sample</span>
        </span>
        <span class="case-summary-copy">
          <span class="case-category">${project.category}</span>
          <span class="case-title">${project.title}</span>
          <span class="case-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${project.location}</span>
          <span class="case-expand"><span class="case-expand-open">Explore case study</span><span class="case-expand-close">Close details</span><i class="fa-solid fa-plus" aria-hidden="true"></i></span>
        </span>
      </summary>
      <div class="case-content">
        <p class="case-challenge"><strong>Technical challenge</strong>${project.challenge}</p>
        <div class="case-detail-grid">
          <div><h4>MRUDA scope</h4><p>${project.scope}</p></div>
          <div><h4>Illustrative deliverables</h4><p>${project.deliverables}</p></div>
        </div>
        ${projectPage ? "" : `<a class="case-link" href="${anchor}">Open case study <span aria-hidden="true">→</span></a>`}
      </div>
    </details>
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
  mapMarkers.innerHTML = caseStudies
    .map(
      (project, index) =>
        `<button class="map-marker${index === 0 ? " is-active" : ""}" type="button" style="left:${project.mapPosition.left};top:${project.mapPosition.top};--marker-delay:${index * 120}ms" data-project="${project.id}" aria-label="Show illustrative ${project.title} sample near ${project.location}" aria-pressed="${index === 0}">
          <span class="map-marker-pulse"></span><span class="map-marker-label">${project.location.split(" · ")[0]}</span>
        </button>`,
    )
    .join("");
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
    items: ["Borehole logging", "SPT and in-situ tests", "Soil and rock testing"],
  },
  design: {
    title: "Engineer for the conditions",
    copy: "Ground conditions inform foundation selection, slope or retaining-system design, and construction recommendations. Each solution needs project-specific analysis and verified site data.",
    items: ["Foundation engineering", "Slope stability", "Retaining and reinforced soil"],
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
const founderHighlightCopy = document.getElementById(
  "founder-highlight-copy",
);
document.querySelectorAll("[data-founder-highlight]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = founderHighlightContent[button.dataset.founderHighlight];
    if (!content || !founderHighlightCopy) return;
    document
      .querySelectorAll("[data-founder-highlight]")
      .forEach((item) => {
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
  "NHAI – National Highways Authority of India",
  "MMRDA – Mumbai Metropolitan Region Development Authority",
  "MSRDC – Maharashtra State Road Development Corp.",
  "PWD – Public Works Department",
  "CPWD – Central Public Works Department",
  "L&T Construction",
  "KPML",
  "IRB Infrastructure Developers Ltd.",
  "Ashoka Buildcon Ltd.",
  "Gammon India Ltd.",
  "HCC – Hindustan Construction Company",
  "Simplex Infrastructures Ltd.",
  "KNK Construction Pvt. Ltd.",
  "NCC Ltd.",
  "Soma Enterprise Ltd.",
  "B L Kashyap & Sons Ltd.",
  "Mapro",
  "VJTI – Veermata Jijabai Technological Institute",
  "Tata Projects Ltd.",
  "Afcons Infrastructure Ltd.",
  "Konark Infrastructures Ltd. / KDMC",
  "B & S Engineering Consultants Pvt. Ltd.",
  "Stup Consultants Pvt. Ltd.",
  "Aarvee Associates Architects & Engineers",
  "The Louis Berger Group Inc.",
  "Halcrow Consulting India Ltd.",
];
const cl = document.getElementById("cl");
if (cl) {
  cl.innerHTML = C.map(
    (c) =>
      `<span class="reveal card bg-white border border-sand rounded-full px-5 py-2.5 text-sm text-brn font-medium">${c}</span>`,
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
  if (nav && y > 40) nav.classList.add("bg-cream/95", "backdrop-blur", "shadow-md");
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
