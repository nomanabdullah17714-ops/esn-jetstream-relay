"use strict";
const $ = (id) => document.getElementById(id);
const courses = [
  {
    name: ["Delta Dawn", "বদ্বীপের ভোর"],
    place: ["Bangladesh · Estuary", "বাংলাদেশ · মোহনা"],
    code: "BD / 01",
    length: 12,
    pace: 220,
    sky: ["#28595b", "#ffc294"],
    mt: "#578578",
    land: "#315e53",
  },
  {
    name: ["Fjord Light", "ফিয়র্ডের আলো"],
    place: ["Norway · Fjords", "নরওয়ে · ফিয়র্ড"],
    code: "NO / 02",
    length: 16,
    pace: 265,
    sky: ["#254867", "#b4dccc"],
    mt: "#688ea0",
    land: "#305664",
  },
  {
    name: ["Andean Night", "আন্দিজের রাত"],
    place: ["Peru · Highlands", "পেরু · পার্বত্য অঞ্চল"],
    code: "PE / 03",
    length: 20,
    pace: 310,
    sky: ["#302747", "#df8c7b"],
    mt: "#705871",
    land: "#453d55",
  },
];
const words = {
  offline: ["Solo arcade", "একক খেলা"],
  folio: ["FIELD SERIES　/　FLIGHT 001", "ফিল্ড সিরিজ　/　ফ্লাইট ০০১"],
  tag: [
    "Fly the signal routes. Bring your findings home.",
    "সংকেত সংগ্রহ করুন। নিরাপদে ঘাঁটিতে ফিরুন।",
  ],
  score: ["FLIGHT SCORE", "ফ্লাইট স্কোর"],
  combo: ["SIGNAL COMBO", "কম্বো"],
  hull: ["AIRFRAME", "বিমান"],
  gates: ["GATES", "গেট"],
  dispatch: ["01　/　DISPATCH", "০১　/　রুট"],
  routes: ["Select a route", "রুট বাছুন"],
  daily: ["Daily course", "দৈনিক কোর্স"],
  dailySub: [
    "A repeatable course for today (UTC)",
    "আজকের নির্দিষ্ট কোর্স (UTC)",
  ],
  record: ["PERSONAL BEST", "নিজের সেরা"],
  manual: ["02　/　FLIGHT MANUAL", "০২　/　নির্দেশিকা"],
  mission: ["Your mission", "আপনার মিশন"],
  guide1: ["01　Follow the rings", "০১　সংকেত ধরুন"],
  detail1: [
    "Use ↑ and ↓ or the arrow buttons to change altitude. Fly through bright rings to build a combo.",
    "↑ ও ↓ চেপে উচ্চতা বদলান। উজ্জ্বল রিং ধরলে কম্বো বাড়ে।",
  ],
  guide2: ["02　Read the weather", "০২　ঝড় এড়ান"],
  detail2: [
    "Diamond-shaped storm cells cost one hull point. An empty lane is safe, but breaks your combo.",
    "হীরার মতো চিহ্ন দেওয়া ঝড়ে বিমানের এক ধাপ ক্ষতি হয়। ফাঁকা পথে ক্ষতি হয় না, তবে কম্বো ভাঙে।",
  ],
  guide3: ["03　Land your score", "০৩　স্কোর জমা করুন"],
  detail3: [
    "Land after the first gate or finish the route. Lose all three hull points and the flight scores zero.",
    "প্রথম গেটের পর অবতরণ করুন অথবা পুরো রুট শেষ করুন। বিমানের তিন ধাপ ক্ষতি হলে ফ্লাইটের স্কোর শূন্য।",
  ],
  launch: ["Launch flight", "ফ্লাইট শুরু"],
  again: ["Fly again", "আবার উড়ুন"],
  land: ["Land now", "অবতরণ"],
  pause: ["Pause", "বিরতি"],
  resume: ["Resume", "চালু করুন"],
  ready: ["ON STANDBY", "প্রস্তুত"],
  flying: ["IN FLIGHT", "উড়ছে"],
  paused: ["FLIGHT PAUSED", "বিরতি"],
  end: ["FLIGHT CLOSED", "ফ্লাইট শেষ"],
  brief: ["SURVEY EXPEDITION", "জরিপ অভিযান"],
  field: ["Route briefing", "রুট পরিচিতি"],
  home: ["Safe landing", "সফল অবতরণ"],
  crash: ["Flight lost", "ফ্লাইট ব্যর্থ"],
  complete: ["Survey complete", "জরিপ সম্পন্ন"],
  readyMsg: [
    "Catch the rings. Choose a clear lane before each gate arrives.",
    "রিং ধরুন। প্রতিটি গেট পৌঁছানোর আগেই পথ বাছুন।",
  ],
  startMsg: [
    "Flight is live. Use ↑ / ↓ or the arrow buttons.",
    "ফ্লাইট চলছে। ↑ বা ↓ ব্যবহার করুন।",
  ],
  signal: ["Signal collected", "সংকেত সংগৃহীত"],
  hit: ["Storm strike · hull damaged", "ঝড়ে বিমানের ক্ষতি হয়েছে"],
  clear: ["Clear passage · combo reset", "নিরাপদ পথ · কম্বো আবার শুরু"],
  stored: ["Points landed", "জমা স্কোর"],
  pausedMsg: [
    "Flight paused. Resume when ready.",
    "খেলায় বিরতি। প্রস্তুত হলে চালু করুন।",
  ],
  privacy: ["Game & privacy", "খেলা ও গোপনীয়তা"],
  notice: [
    "Free skill arcade. Scores have no monetary value. Route records and your language preference stay in this browser. Clearing site data resets them. The game uses no accounts, ads or analytics. The web host may process ordinary connection data, including IP addresses, to serve the site.",
    "এটি বিনামূল্যের দক্ষতার খেলা। স্কোরের আর্থিক মূল্য নেই। রেকর্ড ও ভাষা এই ব্রাউজারে থাকে। সাইটের ডেটা মুছলে সেগুলো মুছে যায়। খেলায় অ্যাকাউন্ট, বিজ্ঞাপন বা অ্যানালিটিক্স নেই। সাইট চালাতে হোস্ট আইপি ঠিকানাসহ সংযোগের তথ্য প্রক্রিয়া করতে পারে।",
  ],
  close: ["Close", "বন্ধ করুন"],
};
function read(k) {
  try {
    return localStorage.getItem("esn-relay:" + k);
  } catch {
    return null;
  }
}
function save(k, v) {
  try {
    localStorage.setItem("esn-relay:" + k, v);
  } catch {}
}
let lang = read("language") === "bn" ? 1 : 0,
  route = 0,
  state = "ready",
  lane = 1,
  planeY = 225,
  hp = 3,
  points = 0,
  combo = 1,
  passed = 0,
  chain = 0,
  travel = 0,
  last = 0,
  gates = [],
  message = "readyMsg",
  endTitle = "",
  dayKey = "",
  daily = false;
const t = (k) => words[k][lang],
  ys = [142, 225, 309],
  px = 165;
function recordKey() {
  return "best:" + route + ":" + (daily ? dayKey : "open");
}
function day() {
  return new Date().toISOString().slice(0, 10);
}
function seedRand(seed) {
  let n = 2166136261;
  for (const c of seed) n = Math.imul(n ^ c.charCodeAt(0), 16777619);
  return () => {
    n += 0x6d2b79f5;
    let z = Math.imul(n ^ (n >>> 15), 1 | n);
    z ^= z + Math.imul(z ^ (z >>> 7), 61 | z);
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}
function reset() {
  state = "ready";
  lane = 1;
  planeY = ys[1];
  hp = 3;
  points = 0;
  combo = 1;
  chain = 0;
  passed = 0;
  travel = 0;
  gates = [];
  message = "readyMsg";
  dayKey = day();
  render();
}
function launch() {
  dayKey = day();
  let rng = daily ? seedRand(dayKey + ":" + route) : Math.random;
  gates = Array.from({ length: courses[route].length }, (_, i) => {
    const ring = Math.floor(rng() * 3);
    return {
      x: 760 + i * 245,
      ring,
      storm: (ring + 1 + Math.floor(rng() * 2)) % 3,
    };
  });
  state = "flying";
  message = "startMsg";
  last = performance.now();
  render();
}
function finish(reason) {
  state = "end";
  endTitle = reason;
  message = "stored";
  if (reason === "crash") points = 0;
  save(recordKey(), String(Math.max(Number(read(recordKey())) || 0, points)));
  render();
}
function advance() {
  if (state === "ready" || state === "end") {
    reset();
    launch();
  } else if (state === "flying" && passed > 0) finish("home");
}
function move(d) {
  if (state === "flying") lane = Math.max(0, Math.min(2, lane + d));
}
function pause() {
  if (state === "flying") {
    state = "paused";
  } else if (state === "paused") {
    state = "flying";
    last = performance.now();
  }
  render();
}
function step(dt) {
  let c = courses[route];
  travel += dt * (c.pace + passed * 3);
  planeY += (ys[lane] - planeY) * Math.min(1, dt * 13);
  while (passed < gates.length && gates[passed].x - travel <= px) {
    let g = gates[passed++];
    if (lane === g.ring) {
      chain++;
      combo = Math.min(5, chain);
      points += 100 * combo;
      message = "signal";
    } else {
      combo = 1;
      chain = 0;
      if (lane === g.storm) {
        hp--;
        message = "hit";
      } else message = "clear";
    }
    if (!hp) return finish("crash");
    if (passed === c.length) return finish("complete");
    render();
  }
}
function render() {
  let active = state === "flying" || state === "paused";
  document.documentElement.lang = lang ? "bn" : "en";
  document
    .querySelectorAll("[data-t]")
    .forEach((e) => (e.textContent = t(e.dataset.t)));
  $("lang").textContent = lang ? "English" : "বাংলা";
  $("sector").textContent =
    courses[route].code + "　/　" + courses[route].name[lang];
  $("flightState").textContent = t(state);
  $("score").textContent = points;
  $("combo").textContent = combo + "×";
  $("hull").textContent = "◆".repeat(hp) + "◇".repeat(3 - hp);
  $("gates").textContent = passed + " / " + courses[route].length;
  $("launch").textContent = t(
    state === "end" ? "again" : active ? "land" : "launch",
  );
  $("launch").disabled = active && (state === "paused" || !passed);
  $("up").disabled = $("down").disabled = state !== "flying";
  $("pause").disabled = !active;
  $("pause").textContent = t(state === "paused" ? "resume" : "pause");
  $("daily").disabled = active;
  $("best").textContent = read(recordKey()) || "0";
  $("message").textContent =
    state === "paused"
      ? t("pausedMsg")
      : state === "end"
        ? t("stored") + " · " + points
        : t(message);
  $("overlay").hidden = state === "flying";
  $("eyebrow").textContent = t("brief");
  $("callout").textContent =
    state === "end"
      ? t(endTitle)
      : state === "paused"
        ? t("paused")
        : t("field");
  Array.from($("routes").children).forEach((b, i) => {
    b.disabled = active;
    b.setAttribute("aria-pressed", String(i === route));
    b.querySelector("b").textContent = courses[i].name[lang];
    b.querySelector("small").textContent = courses[i].place[lang];
  });
  $("privacy").textContent = $("noticeTitle").textContent = t("privacy");
  $("noticeBody").textContent = t("notice");
  $("close").textContent = t("close");
  $("up").setAttribute("aria-label", lang ? "উপরে" : "Climb");
  $("down").setAttribute("aria-label", lang ? "নিচে" : "Descend");
  $("sky").setAttribute(
    "aria-label",
    lang ? "তিন উচ্চতার উড়ানপথ" : "Flight course with three altitude lanes",
  );
  draw();
}
courses.forEach((c, i) => {
  let b = document.createElement("button");
  b.className = "route";
  b.innerHTML = "<i>0" + (i + 1) + "</i><span><b></b><small></small></span>";
  b.onclick = () => {
    route = i;
    reset();
  };
  $("routes").append(b);
});
$("launch").onclick = advance;
$("up").onclick = () => move(-1);
$("down").onclick = () => move(1);
$("pause").onclick = pause;
$("lang").onclick = () => {
  lang = 1 - lang;
  save("language", lang ? "bn" : "en");
  render();
};
$("daily").onchange = (e) => {
  daily = e.target.checked;
  reset();
};
$("privacy").onclick = () => {
  if (state === "flying") pause();
  $("notice").showModal();
};
document.addEventListener("keydown", (e) => {
  if ($("notice").open || (state !== "flying" && state !== "paused")) return;
  if (["ArrowUp", "ArrowDown", "KeyP"].includes(e.code)) {
    e.preventDefault();
    if (e.code === "KeyP") {
      if (!e.repeat) pause();
    } else move(e.code === "ArrowUp" ? -1 : 1);
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && state === "flying") pause();
});
const ctx = $("sky").getContext("2d");
function poly(pts, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
}
function circle(x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}
function ridge(base, amp, col, k, layer) {
  const scroll = travel * layer;
  let pts = [[-20, 420]];
  for (let x = -20; x <= 980; x += 10) {
    let u = (x + scroll) / k;
    pts.push([
      x,
      base +
        amp *
          (0.55 * Math.sin(u) +
            0.27 * Math.sin(2.7 * u + 1) +
            0.18 * Math.cos(6 * u)),
    ]);
  }
  pts.push([980, 420]);
  poly(pts, col);
}
function draw() {
  let c = courses[route],
    g = ctx.createLinearGradient(0, 0, 0, 420);
  g.addColorStop(0, c.sky[0]);
  g.addColorStop(1, c.sky[1]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 960, 420);
  circle(730, 99, 66, "#ffdeaa24");
  circle(730, 99, 47, "#ffe4b6");
  ctx.fillStyle = "#f8f5dd70";
  for (let i = 0; i < 38; i++) {
    let x = (i * 157 + 51) % 960,
      y = (i * 61 + 19) % 143;
    ctx.fillRect(x, y, 2, 2);
  }
  ridge(315, route === 0 ? 24 : 82, c.mt, 83, 0.08);
  ridge(350, route === 0 ? 19 : 47, c.land, 50, 0.16);
  ridge(392, 16, "#153e41", 56, 0.23);
  if (route === 0) {
    for (let i = 0; i < 8; i++) {
      let x = ((((i * 143 + 105 - travel * 0.17) % 1100) + 1100) % 1100) - 50;
      ctx.fillStyle = "#284f46";
      ctx.fillRect(x, 342, 2, 25);
      for (let j = -2; j <= 2; j++)
        poly(
          [
            [x, 344],
            [x + j * 5, 337 + Math.abs(j) * 2],
            [x + j * 10, 345],
          ],
          "#284f46",
        );
    }
  }
  ys.forEach((y, i) => {
    ctx.setLineDash([5, 13]);
    ctx.strokeStyle = "#f0ffe64a";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(960, y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#e5f3dc";
    ctx.font = "12px monospace";
    ctx.fillText("0" + (3 - i), 14, y - 8);
  });
  function gate(x, r, s) {
    let y = ys[r];
    ctx.strokeStyle = "#f3ff95";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(x, y, 12, 25, 0, 0, Math.PI * 2);
    ctx.stroke();
    circle(x, y, 3, "#f7ffb6");
    ctx.lineWidth = 1;
    y = ys[s];
    poly(
      [
        [x - 19, y],
        [x, y - 20],
        [x + 19, y],
        [x, y + 20],
      ],
      "#2b3841",
    );
    ctx.strokeStyle = "#ffc797";
    ctx.strokeRect(x - 7, y - 7, 14, 14);
    ctx.fillStyle = "#ffc797";
    ctx.font = "bold 19px monospace";
    ctx.fillText("!", x - 6, y + 7);
  }
  if (state === "ready") {
    gate(505, 0, 1);
    gate(770, 2, 0);
  } else
    gates.slice(passed).forEach((g) => {
      let x = g.x - travel;
      if (x < 995) gate(x, g.ring, g.storm);
    });
  let y = planeY;
  ctx.save();
  ctx.translate(px, y);
  poly(
    [
      [-86, 7],
      [-22, 0],
      [-22, 7],
    ],
    "#d9f2bd69",
  );
  poly(
    [
      [-37, -4],
      [-47, -27],
      [-38, -25],
      [-16, -9],
      [25, -5],
      [43, 2],
      [22, 8],
      [-32, 8],
    ],
    "#f4e6c3",
  );
  poly(
    [
      [-22, 7],
      [-36, 26],
      [-23, 24],
      [6, 7],
    ],
    "#ffc27f",
  );
  poly(
    [
      [-3, -5],
      [5, -15],
      [14, -14],
      [22, -4],
    ],
    "#183e49",
  );
  poly(
    [
      [-38, 3],
      [35, 3],
      [23, 8],
      [-32, 8],
    ],
    "#e68f69",
  );
  ctx.restore();
  ctx.fillStyle = "#eaf4d0";
  ctx.font = "12px monospace";
  ctx.fillText(
    c.code +
      "   •   " +
      (route === 0 ? "23° N" : route === 1 ? "68° N" : "13° S"),
    18,
    401,
  );
}
function tick(now) {
  if (state === "flying") {
    let dt = Math.min(0.08, Math.max(0, (now - last) / 1000));
    step(dt);
    draw();
  }
  last = now;
  requestAnimationFrame(tick);
}
reset();
requestAnimationFrame(tick);
