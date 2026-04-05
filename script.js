const terminal = document.getElementById('terminal');

const lines = [
    "PHANTOM PRINCE SYSTEM v1.0.4...",
    "ESTABLISHING ENCRYPTED TUNNEL...",
    "BYPASSING FIREWALL... SUCCESS.",
    "SCANNING WATCHLIST FOR DILUTION...",
    "--------------------------------",
    "WELCOME TO ENGAGEME.LIVE",
    "SYSTEM STATUS: ACTIVE",
    "TYPE 'HELP' TO BEGIN_"
];

let lineIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        const p = document.createElement('div');
        p.textContent = "> " + lines[lineIndex];
        p.style.marginBottom = "10px";
        terminal.appendChild(p);
        lineIndex++;
        // This 600ms delay makes it look like it's actually "thinking"
        setTimeout(typeLine, 600); 
    }
}

// This tells the browser: "The moment the page loads, start the typing"
window.onload = typeLine;
