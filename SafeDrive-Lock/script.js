const API_BASE = "https://api.safedrive-lock.com";
const CAR_ID = "123";
const TOKEN = "JWT_ABCDEF123456";

const statusEl = document.getElementById("status");

async function sendCommand(action) {
  const res = await fetch(`${API_BASE}/car/${CAR_ID}/command`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ action })
  });

  statusEl.textContent = `Commande envoyée : ${action}`;
}

document.getElementById("lockBtn").onclick = () => sendCommand("lock");
document.getElementById("unlockBtn").onclick = () => sendCommand("unlock");