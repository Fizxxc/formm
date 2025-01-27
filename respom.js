function updateStatus() {
    const status = document.getElementById('status');
    if (navigator.onLine) {
        status.textContent = 'Online';
        status.className = 'status online';
    } else {
        status.textContent = 'Offline';
        status.className = 'status offline';
    }
}

function updateTime() {
    const chatTime = document.getElementById('chatTime');
    const now = new Date().toLocaleTimeString();
    chatTime.textContent = now;
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat pagi!';
    if (hour < 18) return 'Selamat siang!';
    if (hour < 21) return 'Selamat sore!';
    return 'Selamat malam!';
}

function displayGreeting() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += `<div class="message ai-message"><b>CS | Kokocii:</b> ${getGreeting()} Ada yang bisa saya bantu?</div>`;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const message = userInput.value.trim();

    if (message === '') return;

    chatBox.innerHTML += `<div class="message user-message">${message}</div>`;
    userInput.value = '';

    setTimeout(() => {
        let response;
        if (!navigator.onLine) {
            response = 'Maaf, saat ini kamu sedang menggunakan mode offline, beralih ke mode online untuk informasi lebih lanjut!';
        } else if (message.toLowerCase().includes('halo')) {
            response = 'Halo! Bagaimana saya bisa membantu Anda hari ini?';
        } else if (message.toLowerCase().includes('info')) {
            response = 'Untuk informasi lengkap, silakan hubungi <a href="https://wa.me/6285776568948" target="_blank">KOKOCII</a> Di Whatsapp.';
        } else if (message.toLowerCase().includes('form')) {
            response = 'Anda bisa menghubungi kami melalui WhatsApp di <a href="report.html" target="_blank">Form Report Kokocii</a>.';
        } else {
            response = 'Maaf, saya tidak mengerti. Ketik info untuk menghubungi admin KOKOCII, Dan Ketik form untuk mendapatkan form report.';
        }
        chatBox.innerHTML += `<div class="message ai-message"><b>CS | Kokocii:</b> ${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
