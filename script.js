window.onload = function() {
    const canvas = document.getElementById('chartCanvas');
    if (!canvas) {
        console.error("Canvas not found!");
        return;
    }
    const ctx = canvas.getContext('2d');

    // Force a big bright green box to prove it's working
    ctx.fillStyle = "#0f0";
    ctx.fillRect(50, 50, 200, 200);

    // Draw one test candle
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 300); // Wick
    ctx.stroke();
    ctx.fillRect(135, 150, 30, 100); // Body
    
    console.log("Chart rendered.");
};
2
