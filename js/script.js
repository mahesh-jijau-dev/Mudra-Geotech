const S = [
  ["Ground Improvement", "Proposal, design and detailing for soil improvement schemes"],
  ["Slope Stabilization", "Stability analysis, protection and landslide mitigation measures"],
  ["Reinforced Soil Walls & Slopes", "RS/RE walls, MSE walls and reinforced soil slope design"],
  ["Geotechnical Investigation", "Subsurface exploration, soil/rock testing and lab reports"],
  ["Foundation Engineering", "Shallow & deep foundation design, pile, raft and footing analysis"],
  ["Geosynthetics Applications", "Geogrid, geotextile, geomembrane applications for roads & slopes"],
  ["Retaining Solutions", "Gravity, cantilever, anchored and gabion retaining wall designs"],
  ["Bridge / Embankment / Approach", "Approach roads, embankments, bridge abutment and pavement solutions"],
];
const sv = document.getElementById("sv");
if (sv) {
  sv.innerHTML = S.map(
    (s, i) =>
      `<div class="reveal card group bg-white border border-sand rounded-2xl p-7 relative overflow-hidden" style="transition-delay:${(i % 4) * 80}ms"><div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-or/10 group-hover:scale-[2.2] transition-transform duration-500"></div><div class="relative arch w-14 h-16 strata text-brn flex items-end justify-center pb-2 font-disp font-bold">0${i + 1}</div><h3 class="relative font-disp font-bold text-brn text-lg mt-5">${s[0]}</h3><p class="relative text-sm text-brn/70 mt-2">${s[1]}</p></div>`,
  ).join("");
}
const G = [
  ["rig", "Geotechnical investigation", "row-span-2"],
  ["rewall", "Reinforced soil wall", ""],
  ["gabion", "Gabion retaining wall", ""],
  ["tunnel", "Reinforced slope works", "row-span-2"],
  ["geo", "Geosynthetics & drainage", "md:col-span-2"],
  ["slope", "Slope stabilization", ""],
  ["visit", "Technical site visit", ""],
  ["metro", "Elevated corridor works", ""],
  ["drain", "Drainage works", ""],
  ["rig2", "Field drilling", ""],
  ["landslide", "Slope protection measures", ""],
  ["shoring", "Diaphragm wall & shoring", ""],
  ["instr", "Instrumentation", ""],
  ["rewall2", "RE wall – highway", "md:col-span-2"],
];
const IM = {
  rig: "assets/rig.jpg",
  rig2: "assets/rig2.jpg",
  rewall: "assets/rewall.jpg",
  rewall2: "assets/rewall2.jpg",
  gabion: "assets/gabion.jpg",
  tunnel: "assets/tunnel.jpg",
  geo: "assets/geo.jpg",
  slope: "assets/slope.jpg",
  visit: "assets/visit.jpg",
  metro: "assets/metro.jpg",
  drain: "assets/drain.jpg",
  landslide: "assets/landslide.jpg",
  shoring: "assets/shoring.jpg",
  instr: "assets/instr.jpg",
};
const gal = document.getElementById("gal");
if (gal) {
  gal.innerHTML = G.map(
    (g) =>
      `<figure class="reveal gi card relative overflow-hidden rounded-2xl cursor-zoom-in ${g[2]}"><img data-lb src="${IM[g[0]]}" alt="${g[1]}" class="gimg w-full h-full object-cover" loading="lazy"><figcaption class="cap absolute inset-x-0 bottom-0 bg-gradient-to-t from-cream/95 via-cream/70 to-transparent text-brn text-sm p-4 pt-8">${g[1]}</figcaption></figure>`,
  ).join("");
}
const galPreview = document.getElementById("gal-preview");
if (galPreview) {
  const previewItems = G.slice(0, 6);
  galPreview.innerHTML = previewItems.map(
    (g) =>
      `<figure class="reveal gi card relative overflow-hidden rounded-2xl cursor-zoom-in ${g[2] === "row-span-2" ? "" : ""}"><img data-lb src="${IM[g[0]]}" alt="${g[1]}" class="gimg w-full h-full object-cover" loading="lazy"><figcaption class="cap absolute inset-x-0 bottom-0 bg-gradient-to-t from-cream/95 via-cream/70 to-transparent text-brn text-sm p-4 pt-8">${g[1]}</figcaption></figure>`,
  ).join("");
}
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
