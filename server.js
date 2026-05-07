// 1. WebSocket kütüphanesini içeri alıyoruz (Telefon santrali kurmak için malzeme alıyoruz)
const WebSocket = require('ws');

// 2. Sunucumuzu 8080 portunda başlatalım (Santral numaramız 8080 olsun)
const server = new WebSocket.Server({ port: 8080 });

console.log("🚀 WebSocket Sunucusu 8080 portunda başladı. Herkesi bekliyoruz!");

// 3. Birisi sunucuya bağlandığında (Telefon hattı açıldığında) ne olacağını tanımlıyoruz
server.on('connection', (socket) => {
    console.log("✅ Yeni bir arkadaşımız sohbete katıldı!");

    // Bir mesaj aldığımızda ne yapalım?
    socket.on('message', (incomingData) => {
        // Gelen veri bazen "Buffer" (bilgisayar dili) formatında gelir, onu yazıya çevirelim
        const message = incomingData.toString();
        console.log("📩 Gelen Mesaj: " + message);

        // ŞİMDİ EN ÖNEMLİ KISIM: 
        // Gelen bu mesajı, sunucuya bağlı olan HERKESE (clients) geri gönderiyoruz
        server.clients.forEach((client) => {
            // Eğer bağlantı hala açıksa mesajı gönder
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Biri bağlantıyı koparırsa (Telefonu kapatırsa)
    socket.on('close', () => {
        console.log("❌ Bir arkadaşımız sohbete veda etti.");
    });
});
