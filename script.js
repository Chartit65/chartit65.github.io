// This will immediately change the header if the script loads
const header = document.getElementById('status-header');
if (header) {
    header.innerText = "PHANTOM PRINCE PROTOCOL: ONLINE";
    header.style.color = "#f0f"; // Turns Pink to show JS is alive
}

const terminal = document.getElementById('terminal');

const lines = [
    "INITIALIZING SECURE SHELL...",
    "ACCESSING WATCHLIST DATA...",
    "CHECKING FOR CONVERTIBLE DEBT FILINGS...",
    "DILUTION ALERT SYSTEM: STANDBY",
    "--------------------------------------",
    "WELCOME TO ENGAGEME.LIVE",
    "TYPE 'HELP' FOR COMMANDS_"
];

let lineIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        const div = document.createElement('div');
        div.textContent = "> " + lines[lineIndex];
        div.style.marginBottom = "8px";
        terminal.appendChild(div);
        lineIndex++;
        setTimeout(typeLine, 600);
    }
}

// Ensure the page is ready before typing
window.onload = typeLine;
