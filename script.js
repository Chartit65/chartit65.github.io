function startChart() {
    if (typeof Chart === 'undefined') {
        console.log("Waiting for Chart.js...");
        setTimeout(startChart, 500);
        return;
    }

    const ctx = document.getElementById('oilChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Thursday Close', 'Friday (PHANTOM)', 'Saturday (PHANTOM)', 'Sunday (TODAY)'],
            datasets: [{
                label: 'PHANTOM OIL PRICE',
                data: [82.50, 81.90, 82.15, 82.40], // Thursday, Fri, Sat, Sun
                borderColor: '#00FF00',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                borderWidth: 3,
                pointRadius: 6,
                pointBackgroundColor: '#f0f', // Phantom points are pink
                tension: 0.3 // Makes the line slightly curved
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: { color: '#222' },
                    ticks: { color: '#00FF00', font: { size: 14 } },
                    title: { display: true, text: 'PRICE (USD)', color: '#00FF00' }
                },
                x: {
                    grid: { color: '#222' },
                    ticks: { color: '#00FF00', font: { size: 12 } }
                }
            },
            plugins: {
                legend: { labels: { color: '#00FF00', font: { size: 14 } } }
            }
        }
    });
}

// Kick off the safety check
startChart();
