"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

/* ========================================================================== */
/* Natural Earth TopoJSON Country ISO numeric codes                           */
/* ========================================================================== */
const CD = {
  "004": ["AFG", "Afghanistan"],
  "008": ["ALB", "Albania"],
  "012": ["DZA", "Algeria"],
  "024": ["AGO", "Angola"],
  "032": ["ARG", "Argentina"],
  "036": ["AUS", "Australia"],
  "040": ["AUT", "Austria"],
  "031": ["AZE", "Azerbaijan"],
  "050": ["BGD", "Bangladesh"],
  "056": ["BEL", "Belgium"],
  "064": ["BTN", "Bhutan"],
  "068": ["BOL", "Bolivia"],
  "076": ["BRA", "Brazil"],
  "124": ["CAN", "Canada"],
  "156": ["CHN", "China"],
  "250": ["FRA", "France"],
  "276": ["DEU", "Germany"],
  "356": ["IND", "India"],
  "360": ["IDN", "Indonesia"],
  "364": ["IRN", "Iran"],
  "380": ["ITA", "Italy"],
  "392": ["JPN", "Japan"],
  "458": ["MYS", "Malaysia"],
  "524": ["NPL", "Nepal"],
  "566": ["NGA", "Nigeria"],
  "586": ["PAK", "Pakistan"],
  "643": ["RUS", "Russia"],
  "682": ["SAU", "Saudi Arabia"],
  "702": ["SGP", "Singapore"],
  "710": ["ZAF", "South Africa"],
  "724": ["ESP", "Spain"],
  "144": ["LKA", "Sri Lanka"],
  "764": ["THA", "Thailand"],
  "834": ["TZA", "Tanzania"],
  "784": ["ARE", "UAE"],
  "792": ["TUR", "Turkey"],
  "826": ["GBR", "United Kingdom"],
  "840": ["USA", "United States"],
  "704": ["VNM", "Vietnam"],
};

/* ========================================================================== */
/* 14 Specific Customer States + Manjeri HQ + International Reach            */
/* ========================================================================== */
export const REACH_LOCATIONS = [
  {
    id: "manjeri",
    label: "Manjeri",
    state: "Kerala",
    type: "hq",
    tag: "Academy HQ",
    description: "Central culinary training academy & production kitchen",
    latitude: 11.12,
    longitude: 76.12,
    color: "#FAF7F2",
    accentColor: "#B8863F",
    labelOffset: { x: -14, y: 3, textAnchor: "end" },
    isHub: true,
  },
  {
    id: "tamil-nadu",
    label: "Tamil Nadu",
    state: "Tamil Nadu",
    type: "state",
    tag: "Regional Cohort",
    description: "Café entrepreneurs & professional bakery trainees",
    latitude: 11.1271,
    longitude: 78.6569,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: 12, textAnchor: "start" },
  },
  {
    id: "telangana",
    label: "Telangana",
    state: "Telangana",
    type: "state",
    tag: "Culinary Entrepreneurs",
    description: "Beverage & modern dining concept founders",
    latitude: 18.1124,
    longitude: 79.0193,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: 8, textAnchor: "start" },
  },
  {
    id: "karnataka",
    label: "Karnataka",
    state: "Karnataka",
    type: "state",
    tag: "Active Network",
    description: "Cloud kitchen & artisanal food business owners",
    latitude: 15.3173,
    longitude: 75.7139,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: -14, y: 12, textAnchor: "end" },
  },
  {
    id: "hyderabad",
    label: "Hyderabad",
    state: "Telangana",
    type: "hub",
    tag: "Commercial Kitchen Alumni",
    description: "High-volume café & fast food innovators",
    latitude: 17.385,
    longitude: 78.4867,
    color: "#E2A855",
    accentColor: "#FFD180",
    labelOffset: { x: 14, y: -4, textAnchor: "start" },
  },
  {
    id: "maharashtra",
    label: "Maharashtra",
    state: "Maharashtra",
    type: "state",
    tag: "Food Business Trainees",
    description: "Restaurant operators, bistro founders & chefs",
    latitude: 19.7515,
    longitude: 75.7139,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: -14, y: -8, textAnchor: "end" },
  },
  {
    id: "goa",
    label: "Goa",
    state: "Goa",
    type: "state",
    tag: "Hospitality & Café",
    description: "Coastal cafe & boutique hospitality entrepreneurs",
    latitude: 15.2993,
    longitude: 74.124,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: -14, y: -4, textAnchor: "end" },
  },
  {
    id: "gujarat",
    label: "Gujarat",
    state: "Gujarat",
    type: "state",
    tag: "Food Startups",
    description: "Fast-casual QSR & bakery chain developers",
    latitude: 22.2587,
    longitude: 71.1924,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: -14, y: -4, textAnchor: "end" },
  },
  {
    id: "rajasthan",
    label: "Rajasthan",
    state: "Rajasthan",
    type: "state",
    tag: "Heritage Dining Founders",
    description: "Hospitality owners & contemporary café innovators",
    latitude: 27.0238,
    longitude: 74.2179,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: -14, y: -2, textAnchor: "end" },
  },
  {
    id: "madhya-pradesh",
    label: "Madhya Pradesh",
    state: "Madhya Pradesh",
    type: "state",
    tag: "Culinary Trainees",
    description: "Central India food business & kitchen management talent",
    latitude: 22.9734,
    longitude: 78.6569,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: -10, textAnchor: "start" },
  },
  {
    id: "punjab",
    label: "Punjab",
    state: "Punjab",
    type: "state",
    tag: "QSR & Café Founders",
    description: "Energetic founders building modern dining brands",
    latitude: 31.1471,
    longitude: 75.3412,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: -6, textAnchor: "start" },
  },
  {
    id: "sikkim",
    label: "Sikkim",
    state: "Sikkim",
    type: "state",
    tag: "Specialty Talent",
    description: "Himalayan hospitality & artisan beverage innovators",
    latitude: 27.533,
    longitude: 88.5122,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: -8, textAnchor: "start" },
  },
  {
    id: "bihar",
    label: "Bihar",
    state: "Bihar",
    type: "state",
    tag: "Culinary Learners",
    description: "Aspiring chefs & commercial pastry/baking entrepreneurs",
    latitude: 25.0961,
    longitude: 85.3131,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: -4, textAnchor: "start" },
  },
  {
    id: "meghalaya",
    label: "Meghalaya",
    state: "Meghalaya",
    type: "state",
    tag: "Northeast Culinary Hub",
    description: "Boutique café & specialty dining creators from Shillong",
    latitude: 25.467,
    longitude: 91.3662,
    color: "#B8863F",
    accentColor: "#E2A855",
    labelOffset: { x: 14, y: 8, textAnchor: "start" },
  },
  {
    id: "kolkata",
    label: "Kolkata",
    state: "West Bengal",
    type: "hub",
    tag: "Gourmet & Bakery Talent",
    description: "Artisan bakery founders & gourmet burger/pizza innovators",
    latitude: 22.5726,
    longitude: 88.3639,
    color: "#E2A855",
    accentColor: "#FFD180",
    labelOffset: { x: 14, y: 12, textAnchor: "start" },
  },
  {
    id: "south-africa",
    label: "South Africa",
    state: "International",
    type: "international",
    tag: "Global Learners",
    description: "International learners traveling to Manjeri for intensive training",
    latitude: -26.2041,
    longitude: 28.0473,
    color: "#7E9BB8",
    accentColor: "#A7C4E5",
    labelOffset: { x: 14, y: 3, textAnchor: "start" },
  },
  {
    id: "tanzania",
    label: "Tanzania",
    state: "International",
    type: "international",
    tag: "Global Learners",
    description: "International learners traveling to Manjeri for intensive training",
    latitude: -6.369,
    longitude: 34.8888,
    color: "#7E9BB8",
    accentColor: "#A7C4E5",
    labelOffset: { x: 14, y: -6, textAnchor: "start" },
  },
];

/* ========================================================================== */
/* 3D Sphere Orthographic Math & Great-Circle Arcs                            */
/* ========================================================================== */
const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

function project(lng, lat, lambda, phi, gamma, R, cx, cy) {
  const lr = (lng - lambda) * D2R;
  const la = lat * D2R;
  const cl = Math.cos(la);

  const x0 = cl * Math.cos(lr);
  const y0 = cl * Math.sin(lr);
  const z0 = Math.sin(la);

  const cp = Math.cos(phi * D2R);
  const sp = Math.sin(phi * D2R);
  const x1 = x0 * cp + z0 * sp;
  const y1 = y0;
  const z1 = -x0 * sp + z0 * cp;

  const cg = Math.cos(gamma * D2R);
  const sg = Math.sin(gamma * D2R);
  const rx = x1;
  const ry = y1 * cg - z1 * sg;
  const rz = y1 * sg + z1 * cg;

  return { sx: cx + R * ry, sy: cy - R * rz, rx, ry, rz, v: rx >= 0 };
}

function limbIntersect(a, b, R, cx, cy) {
  const dr = a.rx - b.rx;
  if (Math.abs(dr) < 1e-12) return null;
  const t = a.rx / dr;
  if (t < 0 || t > 1) return null;
  let ry = a.ry + t * (b.ry - a.ry);
  let rz = a.rz + t * (b.rz - a.rz);
  const norm = Math.sqrt(ry * ry + rz * rz);
  if (norm < 1e-9) return null;
  ry /= norm;
  rz /= norm;
  return { sx: cx + R * ry, sy: cy - R * rz, rx: 0, ry, rz, v: true };
}

function ringToSegments(ring, lambda, phi, gamma, R, cx, cy) {
  const n = ring.length;
  if (n < 3) return [];
  const proj = new Array(n);
  let visCount = 0;
  for (let i = 0; i < n; i++) {
    const p = ring[i];
    proj[i] = project(p[0], p[1], lambda, phi, gamma, R, cx, cy);
    if (proj[i].v) visCount++;
  }
  if (visCount === 0) return [];
  if (visCount === n) return [proj.slice()];

  let startIdx = -1;
  for (let i = 0; i < n; i++) {
    if (!proj[i].v && proj[(i + 1) % n].v) {
      startIdx = i;
      break;
    }
  }
  if (startIdx === -1) return [proj.slice()];

  const segments = [];
  let cur = [];
  for (let k = 0; k < n; k++) {
    const i = (startIdx + k) % n;
    const j = (startIdx + k + 1) % n;
    const A = proj[i];
    const B = proj[j];
    if (A.v && B.v) {
      cur.push(B);
    } else if (A.v && !B.v) {
      const inter = limbIntersect(A, B, R, cx, cy);
      if (inter) cur.push(inter);
      if (cur.length >= 2) segments.push(cur);
      cur = [];
    } else if (!A.v && B.v) {
      const inter = limbIntersect(A, B, R, cx, cy);
      if (inter) cur.push(inter);
      cur.push(B);
    }
  }
  return segments;
}

function segmentsToPath(segs) {
  if (segs.length === 0) return "";
  let out = "";
  for (const seg of segs) {
    for (let i = 0; i < seg.length; i++) {
      const p = seg[i];
      out += (i === 0 ? "M" : "L") + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
    }
    out += "Z";
  }
  return out;
}

function buildSphericalPath(type, coords, lambda, phi, gamma, R, cx, cy) {
  if (!coords) return "";
  if (type === "Polygon") {
    let out = "";
    for (const ring of coords) {
      out += segmentsToPath(ringToSegments(ring, lambda, phi, gamma, R, cx, cy));
    }
    return out;
  }
  if (type === "MultiPolygon") {
    let out = "";
    for (const poly of coords) {
      for (const ring of poly) {
        out += segmentsToPath(
          ringToSegments(ring, lambda, phi, gamma, R, cx, cy),
        );
      }
    }
    return out;
  }
  return "";
}

/* Great circle arc coordinates */
function interpolateGreatCircle(p1, p2, numPoints = 28) {
  const [lng1, lat1] = p1;
  const [lng2, lat2] = p2;
  const phi1 = lat1 * D2R;
  const lam1 = lng1 * D2R;
  const phi2 = lat2 * D2R;
  const lam2 = lng2 * D2R;

  const v1 = [
    Math.cos(phi1) * Math.cos(lam1),
    Math.cos(phi1) * Math.sin(lam1),
    Math.sin(phi1),
  ];
  const v2 = [
    Math.cos(phi2) * Math.cos(lam2),
    Math.cos(phi2) * Math.sin(lam2),
    Math.sin(phi2),
  ];

  const dot = clamp(v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2], -1, 1);
  const omega = Math.acos(dot);

  if (Math.abs(omega) < 1e-5) return [{ lng: lng1, lat: lat1, altitudeFactor: 1 }];

  const sinOmega = Math.sin(omega);
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const f = i / numPoints;
    const a = Math.sin((1 - f) * omega) / sinOmega;
    const b = Math.sin(f * omega) / sinOmega;
    const x = a * v1[0] + b * v2[0];
    const y = a * v1[1] + b * v2[1];
    const z = a * v1[2] + b * v2[2];
    const lat = Math.asin(clamp(z, -1, 1)) * R2D;
    const lng = Math.atan2(y, x) * R2D;
    // Slight arch altitude over the sphere
    const altitudeFactor = 1 + 0.08 * Math.sin(Math.PI * f);
    points.push({ lng, lat, altitudeFactor });
  }
  return points;
}

/* TopoJSON arcs decoder */
function decArcs(t) {
  const tf = t.transform;
  if (!tf) return t.arcs;
  const sx = tf.scale[0];
  const sy = tf.scale[1];
  const dx = tf.translate[0];
  const dy = tf.translate[1];
  return t.arcs.map((a) => {
    let x = 0;
    let y = 0;
    return a.map((p) => {
      x += p[0];
      y += p[1];
      return [x * sx + dx, y * sy + dy];
    });
  });
}

function resolveRing(idx, arcs) {
  const out = [];
  for (const i of idx) {
    const a = i >= 0 ? arcs[i] : arcs[~i].slice().reverse();
    for (let j = out.length > 0 ? 1 : 0; j < a.length; j++) out.push(a[j]);
  }
  return out;
}

function extractFeatures(t) {
  const arcs = decArcs(t);
  const gs = t.objects?.countries?.geometries;
  if (!gs) return [];
  return gs.map((g) => {
    let c = null;
    if (g.type === "Polygon") c = g.arcs.map((r) => resolveRing(r, arcs));
    else if (g.type === "MultiPolygon")
      c = g.arcs.map((p) => p.map((r) => resolveRing(r, arcs)));
    return { id: String(g.id ?? ""), type: g.type, coords: c };
  });
}

function mulberry32(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 1831565813) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Graticule grid builder */
function buildGraticule(lambda, phi, gamma, R, cx, cy) {
  let out = "";
  for (let lat = -60; lat <= 60; lat += 30) {
    let started = false;
    let prev = null;
    for (let lng = -180; lng <= 180; lng += 5) {
      const p = project(lng, lat, lambda, phi, gamma, R, cx, cy);
      if (p.v) {
        if (!started || (prev && !prev.v)) {
          out += "M" + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
          started = true;
        } else {
          out += "L" + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
        }
      }
      prev = p;
    }
  }
  for (let lng = -180; lng < 180; lng += 30) {
    let started = false;
    let prev = null;
    for (let lat = -80; lat <= 80; lat += 5) {
      const p = project(lng, lat, lambda, phi, gamma, R, cx, cy);
      if (p.v) {
        if (!started || (prev && !prev.v)) {
          out += "M" + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
          started = true;
        } else {
          out += "L" + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
        }
      }
      prev = p;
    }
  }
  return out;
}

/* ========================================================================== */
/* Main TacticalGlobe3D Component                                            */
/* ========================================================================== */
export default function TacticalGlobe3D({
  className = "",
  initialRotation = { lambda: 78.5, phi: 21, gamma: 0 },
  autoRotateSpeed = 2.4,
  allowZoom = true,
  onStateSelect,
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const pathRefs = useRef(new Map());
  const markerRefs = useRef(new Map());
  const arcRefs = useRef(new Map());
  const gridPathRef = useRef(null);

  const [isClient, setIsClient] = useState(false);
  const [dims, setDims] = useState({ w: 900, h: 640 });
  const [feats, setFeats] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [zoomScale, setZoomScale] = useState(1.32);

  // Rotation ref held outside state to drive 60fps rAF loop imperatively
  const rotRef = useRef({
    lambda: initialRotation.lambda,
    phi: initialRotation.phi,
    gamma: initialRotation.gamma,
  });
  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    startLambda: 0,
    startPhi: 0,
  });
  const userInteractedRef = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ResizeObserver to track container bounds
  useEffect(() => {
    if (!isClient) return;
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((e) => {
      const r = e[0]?.contentRect;
      if (r && r.width > 0 && r.height > 0) {
        setDims({ w: r.width, h: r.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isClient]);

  // Load TopoJSON data
  useEffect(() => {
    if (!isClient) return;
    let dead = false;
    // Prefer local copy, fallback to CDN
    fetch("/data/countries-110m.json")
      .then((r) => {
        if (!r.ok) throw new Error("Local fetch failed");
        return r.json();
      })
      .catch(() =>
        fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((r) => r.json())
      )
      .then((data) => {
        if (!dead) {
          setFeats(extractFeatures(data));
        }
      })
      .catch((err) => {
        console.error("Failed to load map TopoJSON", err);
      });
    return () => {
      dead = true;
    };
  }, [isClient]);

  // Dimensions & Sphere Radius
  const { w: W, h: H } = dims;
  const baseR = Math.max(30, Math.min(W, H) / 2 - 16);
  const R = baseR * zoomScale;
  // Offset globe further right on wide screens so the text panel on the left
  // doesn't obscure India, South Africa & Tanzania
  const cx = W > 860 ? W * 0.68 : W / 2;
  const cy = H / 2;

  // Country index
  const countryIndex = useMemo(() => {
    if (!feats) return [];
    const out = [];
    for (const f of feats) {
      const pad3 = String(f.id).padStart(3, "0");
      const e = CD[pad3];
      const a3 = e ? e[0] : pad3;
      const nm = e ? e[1] : a3;
      if (a3 === "ATA") continue; // skip antarctica
      out.push({
        id: a3,
        numId: pad3,
        name: nm,
        type: f.type,
        coords: f.coords,
        isFocusCountry: a3 === "IND" || a3 === "ZAF" || a3 === "TZA",
      });
    }
    return out;
  }, [feats]);

  // Precompute Great-Circle arcs from Manjeri HQ to each location
  const flightArcs = useMemo(() => {
    const manjeri = REACH_LOCATIONS.find((m) => m.id === "manjeri");
    if (!manjeri) return [];
    return REACH_LOCATIONS.filter((m) => m.id !== "manjeri").map((loc) => {
      const points = interpolateGreatCircle(
        [manjeri.longitude, manjeri.latitude],
        [loc.longitude, loc.latitude],
        32,
      );
      return {
        id: `arc-${loc.id}`,
        destId: loc.id,
        destLabel: loc.label,
        points,
        color: loc.accentColor || "#B8863F",
      };
    });
  }, []);

  // Stars
  const stars = useMemo(() => {
    const rnd = mulberry32(42069);
    const N = 85;
    const out = [];
    for (let i = 0; i < N; i++) {
      const x = rnd() * W;
      const y = rnd() * H;
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy < (R + 14) * (R + 14)) continue;
      out.push({ x, y, r: 0.5 + rnd() * 1.0, o: 0.15 + rnd() * 0.55 });
    }
    return out;
  }, [W, H, cx, cy, R]);

  // Animation Loop (60fps rAF)
  useEffect(() => {
    if (!isClient || countryIndex.length === 0 || W <= 0 || H <= 0) return;
    let raf = 0;
    let lastTime = typeof performance !== "undefined" ? performance.now() : 0;
    const idleMs = 1500;

    const step = (now) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const sinceUser = now - userInteractedRef.current;

      if (
        !dragRef.current.active &&
        sinceUser > idleMs &&
        !hoveredMarker
      ) {
        // Slow tactical spin around polar axis
        rotRef.current.lambda += autoRotateSpeed * dt;
      }

      const { lambda, phi, gamma } = rotRef.current;

      // 1. Update Country Outlines
      for (const c of countryIndex) {
        const d = buildSphericalPath(
          c.type,
          c.coords,
          lambda,
          phi,
          gamma,
          R,
          cx,
          cy,
        );
        const p = pathRefs.current.get(c.id);
        if (p) p.setAttribute("d", d);
      }

      // 2. Update Graticule Grid
      if (gridPathRef.current) {
        gridPathRef.current.setAttribute(
          "d",
          buildGraticule(lambda, phi, gamma, R, cx, cy),
        );
      }

      // 3. Update Great-Circle Flight Arcs
      for (const arc of flightArcs) {
        const el = arcRefs.current.get(arc.id);
        if (!el) continue;
        let d = "";
        let hasVisible = false;
        for (let i = 0; i < arc.points.length; i++) {
          const pt = arc.points[i];
          const curR = R * pt.altitudeFactor;
          const p = project(pt.lng, pt.lat, lambda, phi, gamma, curR, cx, cy);
          if (p.v) {
            hasVisible = true;
            d += (d === "" ? "M" : "L") + p.sx.toFixed(1) + "," + p.sy.toFixed(1);
          } else {
            if (d !== "" && !d.endsWith("M")) {
              d += " ";
            }
          }
        }
        if (hasVisible) {
          el.setAttribute("d", d);
          el.style.display = "";
        } else {
          el.style.display = "none";
        }
      }

      // 4. Update Markers
      for (let i = 0; i < REACH_LOCATIONS.length; i++) {
        const m = REACH_LOCATIONS[i];
        const el = markerRefs.current.get(m.id);
        if (!el) continue;
        const p = project(m.longitude, m.latitude, lambda, phi, gamma, R, cx, cy);
        if (p.v) {
          const fade = clamp(p.rx * 3.8, 0, 1);
          el.style.opacity = String(fade);
          el.style.display = "";
          el.setAttribute(
            "transform",
            "translate(" + p.sx.toFixed(1) + "," + p.sy.toFixed(1) + ")",
          );
        } else {
          el.style.opacity = "0";
          el.style.display = "none";
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [
    isClient,
    countryIndex,
    flightArcs,
    R,
    cx,
    cy,
    W,
    H,
    autoRotateSpeed,
    hoveredMarker,
  ]);

  // Pointer Handlers for Drag & Interaction
  const localMouse = (e) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return { x: 0, y: 0 };
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e) => {
    const m = localMouse(e);
    const dx = m.x - cx;
    const dy = m.y - cy;
    // Allow drag inside or near globe
    if (dx * dx + dy * dy > (R + 40) * (R + 40)) return;

    dragRef.current = {
      active: true,
      startX: m.x,
      startY: m.y,
      startLambda: rotRef.current.lambda,
      startPhi: rotRef.current.phi,
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e) => {
    if (dragRef.current.active) {
      const m = localMouse(e);
      const sens = 0.35;
      const dx = m.x - dragRef.current.startX;
      const dy = m.y - dragRef.current.startY;
      rotRef.current.lambda = dragRef.current.startLambda - dx * sens;
      rotRef.current.phi = clamp(dragRef.current.startPhi + dy * sens, -80, 80);
    }
  };

  const onPointerUp = (e) => {
    if (dragRef.current.active) {
      dragRef.current.active = false;
      userInteractedRef.current =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  // Wheel zoom
  const onWheel = (e) => {
    if (!allowZoom) return;
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setZoomScale((prev) => clamp(prev + delta, 0.85, 2.2));
  };

  // Smooth Focus on a specific location
  const focusOnLocation = useCallback(
    (loc) => {
      setSelectedMarker(loc);
      setHoveredMarker(loc);
      if (onStateSelect) onStateSelect(loc);

      // Desired rotation to place loc at center of sphere
      const targetLambda = loc.longitude;
      const targetPhi = loc.latitude;

      // Animate smoothly to target
      const startLambda = rotRef.current.lambda;
      const startPhi = rotRef.current.phi;
      const startTime = performance.now();
      const duration = 750;

      const animateStep = (now) => {
        const progress = clamp((now - startTime) / duration, 0, 1);
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        rotRef.current.lambda =
          startLambda + (targetLambda - startLambda) * ease;
        rotRef.current.phi = startPhi + (targetPhi - startPhi) * ease;

        if (progress < 1) {
          requestAnimationFrame(animateStep);
        } else {
          userInteractedRef.current = performance.now() + 2000;
        }
      };
      requestAnimationFrame(animateStep);
    },
    [onStateSelect],
  );

  const activeMarker = hoveredMarker || selectedMarker;

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full select-none overflow-hidden bg-transparent font-mono ${className}`}
      onWheel={onWheel}
    >
      <style>{`
        .tg-pulse {
          animation: tg-pulse-glow 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes tg-pulse-glow {
          0% { transform: scale(0.9); opacity: 0.85; }
          60% { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .tg-radar-arc {
          stroke-dasharray: 6 3;
          animation: tg-arc-flow 16s linear infinite;
        }
        @keyframes tg-arc-flow {
          to { stroke-dashoffset: -120; }
        }
      `}</style>

      {/* SVG Canvas for 3D Globe */}
      <svg
        ref={svgRef}
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="block h-full w-full cursor-grab active:cursor-grabbing"
      >
        <defs>
          {/* Atmosphere Radial Glow */}
          <radialGradient id="tg-atmosphere" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(184, 134, 63, 0)" />
            <stop
              offset={`${((R / (R + 65)) * 100).toFixed(1)}%`}
              stopColor="rgba(184, 134, 63, 0)"
            />
            <stop
              offset={`${(((R + 6) / (R + 65)) * 100).toFixed(1)}%`}
              stopColor="rgba(226, 168, 85, 0.42)"
            />
            <stop offset="100%" stopColor="rgba(184, 134, 63, 0)" />
          </radialGradient>

          {/* Sphere 3D Depth Shade */}
          <radialGradient id="tg-shade" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="55%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="85%" stopColor="rgba(11, 20, 29, 0.45)" />
            <stop offset="100%" stopColor="rgba(8, 14, 21, 0.85)" />
          </radialGradient>

          {/* Ocean Base Gradient */}
          <linearGradient id="tg-ocean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(15, 31, 48, 0.95)" />
            <stop offset="50%" stopColor="rgba(11, 22, 34, 0.98)" />
            <stop offset="100%" stopColor="rgba(7, 15, 24, 1)" />
          </linearGradient>

          {/* Globe Clipping Disc */}
          <clipPath id="tg-clip-globe">
            <circle cx={cx} cy={cy} r={R} />
          </clipPath>
        </defs>

        {/* 1. Deep Space Starry Background */}
        {stars.map((s, i) => (
          <circle
            key={`s-${i}`}
            cx={s.x.toFixed(1)}
            cy={s.y.toFixed(1)}
            r={s.r.toFixed(2)}
            fill={`rgba(250, 247, 242, ${s.o})`}
            pointerEvents="none"
          />
        ))}

        {/* 2. Atmosphere Outer Ring Glow */}
        <circle
          cx={cx}
          cy={cy}
          r={R + 65}
          fill="url(#tg-atmosphere)"
          pointerEvents="none"
        />

        {/* 3. Ocean Sphere Surface */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="url(#tg-ocean)"
          stroke="rgba(184, 134, 63, 0.35)"
          strokeWidth="1.2"
        />

        {/* 4. Clipped Globe Surface (Land + Grid) */}
        <g clipPath="url(#tg-clip-globe)">
          {/* Graticule Grid */}
          <path
            ref={gridPathRef}
            fill="none"
            stroke="#4d6174"
            strokeWidth="0.5"
            strokeOpacity="0.28"
            vectorEffect="non-scaling-stroke"
            pointerEvents="none"
          />

          {/* World Countries */}
          {countryIndex.map((c) => {
            const isFocusCountry = c.isFocusCountry;
            return (
              <path
                key={c.id}
                ref={(el) => {
                  if (el) pathRefs.current.set(c.id, el);
                  else pathRefs.current.delete(c.id);
                }}
                fill={
                  isFocusCountry
                    ? "rgba(184, 134, 63, 0.32)" // Highlight India, South Africa & Tanzania in brand gold
                    : "rgba(23, 40, 58, 0.88)"
                }
                stroke={
                  isFocusCountry
                    ? "rgba(226, 168, 85, 0.95)" // Crisp glowing border for focus countries
                    : "rgba(77, 97, 116, 0.45)"
                }
                strokeWidth={isFocusCountry ? 1.4 : 0.55}
                vectorEffect="non-scaling-stroke"
                className="transition-colors duration-200"
              />
            );
          })}

          {/* Great-Circle Flight Arcs Radiating from Manjeri Hub */}
          {flightArcs.map((arc) => {
            const isHighlighted =
              activeMarker &&
              (activeMarker.id === arc.destId || activeMarker.id === "manjeri");
            return (
              <path
                key={arc.id}
                ref={(el) => {
                  if (el) arcRefs.current.set(arc.id, el);
                  else arcRefs.current.delete(arc.id);
                }}
                fill="none"
                stroke={isHighlighted ? "#FFD180" : arc.color}
                strokeWidth={isHighlighted ? 2.2 : 1.2}
                strokeOpacity={isHighlighted ? 0.95 : 0.55}
                className="tg-radar-arc transition-all duration-300"
                pointerEvents="none"
              />
            );
          })}
        </g>

        {/* 5. 3D Sphere Spherical Shading Overlay */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="url(#tg-shade)"
          pointerEvents="none"
        />

        {/* 6. Tactical Markers for all Customer States + Manjeri HQ + International */}
        {REACH_LOCATIONS.map((loc) => {
          const isHQ = loc.isHub;
          const sz = isHQ ? 6.5 : 4.5;
          const isTargeted = activeMarker?.id === loc.id;
          const primaryCol = isTargeted
            ? "#FFD180"
            : loc.color || "#B8863F";

          return (
            <g
              key={loc.id}
              ref={(el) => {
                if (el) markerRefs.current.set(loc.id, el);
                else markerRefs.current.delete(loc.id);
              }}
              style={{ cursor: "pointer", opacity: 0 }}
              onMouseEnter={() => setHoveredMarker(loc)}
              onMouseLeave={() => setHoveredMarker(null)}
              onClick={() => focusOnLocation(loc)}
            >
              {/* Radar Pulsing Echo */}
              <circle
                className="tg-pulse"
                r={sz * 2.2}
                fill={primaryCol}
                opacity={0.35}
              />
              <circle
                className="tg-pulse"
                style={{ animationDelay: "1.1s" }}
                r={sz * 1.8}
                fill={primaryCol}
                opacity={0.2}
              />

              {/* Tactical Crosshair Ring */}
              <circle
                r={sz * 1.6}
                fill="none"
                stroke={primaryCol}
                strokeWidth={0.75}
                strokeDasharray="2 2"
                opacity={0.65}
              />

              {/* Inner Solid Pin */}
              <circle
                r={sz}
                fill={primaryCol}
                stroke="#0F1F30"
                strokeWidth={1.5}
              />

              {/* Tactical Label */}
              <text
                x={loc.labelOffset ? loc.labelOffset.x : sz + 7}
                y={loc.labelOffset ? loc.labelOffset.y : 3}
                textAnchor={loc.labelOffset ? loc.labelOffset.textAnchor : "start"}
                fill={isTargeted ? "#FFD180" : "#FAF7F2"}
                fontSize={isHQ ? 11 : 9.5}
                fontWeight={isTargeted || isHQ ? 700 : 500}
                letterSpacing="0.04em"
                stroke="#0B141D"
                strokeWidth={3}
                strokeLinejoin="round"
                paintOrder="stroke"
                className="transition-colors duration-200"
              >
                {loc.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Globe HUD Micro Controls */}
      <div className="pointer-events-auto absolute bottom-4 right-4 z-20 flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => {
            rotRef.current.lambda = initialRotation.lambda;
            rotRef.current.phi = initialRotation.phi;
            setZoomScale(1.32);
            setSelectedMarker(null);
            setHoveredMarker(null);
          }}
          className="rounded-lg border border-background/15 bg-[#0f1f30]/85 px-2.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-wider text-background/70 backdrop-blur-md hover:border-accent/50 hover:text-background"
          title="Reset globe view"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}
