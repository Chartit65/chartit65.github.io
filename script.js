const ctx = document.getElementById('oilChart').getContext('2d');

const oilChart = new Chart(ctx, {
    type: 'line',
    data: {
        // Dates across the bottom
        labels: ['Thu Close', 'Fri', 'Sat', 'Sun (Today)'],
        datasets: [{
            label: 'Market Close (Thursday)',
            data: [82.50, null, null, null], // Only Thursday has a print
            borderColor: '#00FF00',
            borderWidth: 2,
            pointRadius: 5
        },
        {
            label: 'Phantom Oil Prints',
            data: [82.50, 82.10, 81.80, 82.35], // These are your "Phantom" prints
            borderColor: '#f0f', // Pink for Phantom
            borderDash: [5, 5],
            borderWidth: 2,
            pointBackgroundColor: '#f0f'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                grid: { color: '#333' },
                ticks: { color: '#00FF00' }, // Price on the vertical
                title: { display: true, text: 'Price (USD)', color: '#00FF00' }
            },
            x: {
                grid: { color: '#333' },
                ticks: { color: '#00FF00' }, // Dates on the bottom
                title: { display: true, text: 'Timeline', color: '#00FF00' }
            }
        },
        plugins: {
            legend: { labels: { color: '#00FF00' } }
        }
    }
});
