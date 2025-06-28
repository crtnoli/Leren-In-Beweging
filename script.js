const leerling = {
  naam: "Sarah",
  segment: 3,
  behaaldeDoelen: 6,
  doelenDezeMaand: 2,
  klasseGemiddelde: 5,
  uploads: 6,
  badges: ["Brons"],
  leesnups: 4,
  tiktok: {
    titel: "Stripkabel uitleg",
    views: 340,
    positie: 2
  },
  volgendDoel: {
    titel: "Kan 5 soorten tangen benoemen",
    segment: 4,
    tijd: "2 dagen"
  }
};

function laadRacebaan() {
  const racebaan = document.getElementById("racebaan");
  for (let i = 1; i <= 10; i++) {
    const segment = document.createElement("div");
    segment.classList.add("segment");
    if (i < leerling.segment) segment.classList.add("completed");
    else if (i === leerling.segment) segment.classList.add("inprogress");
    else segment.classList.add("pending");

    if (i === leerling.segment) {
      const paard = document.createElement("span");
      paard.classList.add("horse");
      paard.textContent = "🐎 " + leerling.naam;
      segment.appendChild(paard);
    }
    racebaan.appendChild(segment);
  }
}

function toonVolgendDoel() {
  const doel = leerling.volgendDoel;
  const div = document.getElementById("volgend-doel");
  div.innerHTML = `<strong>${doel.titel}</strong> – nog ${doel.tijd}`;
}

function toonStatistieken() {
  const lijst = document.getElementById("statistieken");
  lijst.innerHTML = `
    <li>Behaalde doelen: ${leerling.behaaldeDoelen}</li>
    <li>Doelen deze maand: ${leerling.doelenDezeMaand}</li>
    <li>Klassegemiddelde: ${leerling.klasseGemiddelde}</li>
    <li>Uploads: ${leerling.uploads}</li>
  `;
}

function toonBadges() {
  const div = document.getElementById("badges");
  div.innerHTML = `🎖 ${leerling.badges.join(", ")} behaald. Leesnups: ${leerling.leesnups}`;
}

function toonTikTok() {
  const div = document.getElementById("tiktok");
  const tik = leerling.tiktok;
  div.innerHTML = `Video "${tik.titel}" staat <strong>${tik.positie}e</strong> met ${tik.views} views!`;
}

function openLeerdoel() {
  alert("Naar leerdoelpagina (simulatie)");
}

laadRacebaan();
toonVolgendDoel();
toonStatistieken();
toonBadges();
toonTikTok();
