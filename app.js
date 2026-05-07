// 1. Sunucu bağlantısını kuruyoruz
const socket = new WebSocket('ws://localhost:8080');

// Elemanları seçelim
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const statusText = document.getElementById('status');

// İsim seçme elemanları
const nameOverlay = document.getElementById('name-overlay');
const mainChat = document.getElementById('main-chat');
const usernameInput = document.getElementById('username-input');
const startBtn = document.getElementById('start-btn');

let myUsername = ""; // Seçtiğimiz ismi burada tutacağız

// --- İSİM SEÇME MANTIĞI ---
startBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name !== "") {
        myUsername = name;
        nameOverlay.style.display = "none"; // Giriş ekranını kapat
        mainChat.style.display = "flex";    // Sohbet ekranını aç
    }
});

// --- WEBSOCKET MANTIĞI ---

socket.onopen = () => {
    statusText.innerText = "● Çevrimiçi";
    statusText.className = "online";
};

// SUNUCUDAN BİR ŞEY GELDİĞİNDE
socket.onmessage = (event) => {
    // GELEN VERİYİ PARÇALIYORUZ (JSON'dan normale çeviriyoruz)
    try {
        const data = JSON.parse(event.data);
        
        // Yeni bir mesaj kutusu oluştur
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        // İsim etiketi ekleyelim (Kullanıcının adı)
        const nameLabel = document.createElement('span');
        nameLabel.classList.add('sender-name');
        nameLabel.innerText = data.user; // Verinin içindeki kullanıcı adını al
        
        // Mesaj metni
        const textSpan = document.createElement('span');
        textSpan.innerText = data.text; // Verinin içindeki mesajı al
        
        // Kutunun içine yerleştir
        messageDiv.appendChild(nameLabel);
        messageDiv.appendChild(textSpan);
        
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (e) {
        console.error("Gelen veri okunamadı:", e);
    }
};

// --- MESAJ GÖNDERME MANTIĞI ---
function sendMessage() {
    const text = messageInput.value.trim();
    
    if (text !== "" && socket.readyState === WebSocket.OPEN) {
        // MESAJI PAKETLİYORUZ (Kim gönderdi? Ne yazdı?)
        const packet = {
            user: myUsername,
            text: text
        };

        // Bu paketi JSON formatına (yazıya) çevirip sunucuya yolluyoruz
        socket.send(JSON.stringify(packet));
        
        messageInput.value = "";
    }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
