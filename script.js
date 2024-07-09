document.addEventListener('DOMContentLoaded', function() {
    const score = 20; // Example score, this should be dynamically set based on actual test result

    const resultContent = document.getElementById('result-content');
    let resultHtml = '';

    if (score >= 75) {
        resultHtml = `
            <div class="result-header">Skor Kesehatan Mentalmu:</div>
            <div class="result-score">${score}/100</div>
            <div class="result-score"><b>Normal</b></div>
            <div class="suggestion">Keren, kesehatan mentalmu normal dan terkendali. Tetap jaga kesehatan mentalmu, ya!</div>
        `;
    } else if (score >= 40) {
        resultHtml = `
            <div class="result-header">Skor Kesehatan Mentalmu:</div>
            <div class="result-score" color>${score}/100</div>
            <div class="result-score"<b>Kurang Baik</b></div>
            <div class="suggestion">Apakah kamu ada masalah? Coba cari udara segar dan berkonsultasi ke psikolog.</div>
        `;
    } else {
        resultHtml = `
            <div class="result-header">Skor Kesehatan Mental</div>
            <div class="result-score">${score}/100</div>
            <div class="result-score"><b>Buruk</b></div>
            <div class="suggestion">Segera konsultasikan masalah ini dengan psikolog profesional untuk penanganan lebih lanjut.</div>

        `;

    }

    resultHtml += `
    <div class="psychologist">
        <div class="psychologist-card">
            <img src="psikolog1.png" alt="Anuwar Adi, S.Psi">
            <p><b>Anuwar Adi, S.Psi</b></p>
            <p>Kesehatan Mental Bipolar</p>
            <p>Rp100.000/konseling</p>
            <button onclick="redirectToPsychologist('https://www.google.com')">Hubungi Sekarang</button>
        </div>
        <div class="psychologist-card">
            <img src="psikolog2.png" alt="Anissa Azizah, M.Psi">
            <p><b>Anissa Azizah, M.Psi</b></p>
            <p>Dokter Kejiwaan Anak</p>
            <p>Rp200.000/konseling</p>
            <button onclick="redirectToPsychologist('https://www.yahoo.com')">Hubungi Sekarang</button>
        </div>
    </div>
`;

    resultContent.innerHTML = resultHtml;
});

function redirectToPsychologist(url) {
    window.location.href = url;
}

function toggleFaqContent(button) {
    const faqContent = button.nextElementSibling;
    faqContent.style.display = faqContent.style.display === 'block' ? 'none' : 'block';
}