# 🚀 WebSocket Nedir?

Hoş geldin! Eğer buradaysan, internetin nasıl "canlı" çalıştığını merak ediyorsun demektir. Hadi, WebSocket'i teknik terimlerden uzak bir şekilde anlayalım.

## 1. Klasik Yöntem: HTTP (Sürekli Kapı Çalmak)

Normalde internet siteleri **HTTP** denilen bir protokolle çalışır. Bunu şöyle hayal et:

*   Sen bir arkadaşına (Sunucu) bir şey sormak istiyorsun.
*   Gidip kapısını çalıyorsun: *"Bana yeni mesaj var mı?"*
*   Arkadaşın kapıyı açıyor: *"Hayır yok."* ve **KAPIYI YÜZÜNE KAPATIYOR.**
*   Sen 2 saniye sonra tekrar gidip kapıyı çalıyorsun: *"Peki şimdi var mı?"*
*   Arkadaşın: *"Hala yok!"* diyor ve yine **KAPIYI KAPATIYOR.**

Bu hem senin için yorucu (sürekli git-gel), hem de arkadaşın için sinir bozucu. Ayrıca, arkadaşın kapıyı senin yüzüne kapattığı için, tam o kapattığı anda sana bir mesaj gelse bile sana söyleyemez; senin tekrar gelip kapıyı çalmanı beklemek zorundadır.

## 2. WebSocket Yöntemi: (Telefonu Açık Bırakmak)

WebSocket ise bu işi kökten çözer. Mantık şudur:

*   Sen arkadaşını (Sunucu) ararsın.
*   Arkadaşın telefonu açar ve ikiniz de **TELEFONU KAPATMAZSINIZ.**
*   Senin bir diyeceğin olduğunda direkt mikrofona söylersin.
*   Arkadaşına bir haber geldiğinde (mesela biri sana WhatsApp'tan yazmış gibi düşün), arkadaşın anında sana *"Hey, bak yeni mesajın var!"* der.

**Kilit Nokta:** Bağlantı bir kez kurulur ve iki taraf da istediği zaman konuşabilir. Kimse kimsenin kapısını çalmak zorunda kalmaz.

---

## 3. Neden WebSocket Kullanıyoruz?

Eğer şu işlerden birini yapıyorsan WebSocket ŞARTTIR:

1.  **Canlı Sohbet (Chat):** Mesajın anında gitmesi ve gelmesi lazım.
2.  **Canlı Skorlar / Borsa:** Altın fiyatı düştüğünde sayfayı yenilemeden o an ekranda değişmesi lazım.
3.  **Online Oyunlar:** Karakterin sağa gittiğinde diğer oyuncuların bunu 0.1 saniye sonra görmesi lazım.
4.  **Ortak Çalışma Araçları:** (Mesela Google Docs veya Figma) Biri bir şey yazdığında herkesin ekranında aynı anda belirmesi lazım.

## 4. Özetle Mantık Şeması

| Özellik | HTTP (Eski) | WebSocket (Yeni) |
| :--- | :--- | :--- |
| **İletişim** | Sadece sen istersen sunucu cevap verir. | İki taraf da istediği an konuşabilir. |
| **Bağlantı** | Her soru için yeni bir bağlantı aç/kapat. | Bir kez bağlan, işin bitene kadar kopma. |
| **Hız** | Yavaş ve ağır. | Çok hızlı ve hafif. |
| **Benzetme** | Mektup göndermek. | Telefonla konuşmak. |

---
Bu dosya içerisinde canlı mesaj uygulaması bulunmakta
Önce **npm install** ardından **npm install ws** ile bu projenin bağımlılıklarını kurunuz.
Ardından **node server.js**  ile sunucuyu başlatıp **index.html** dosyasını 2 farklı pencereden açınız.

Yapılan mesajların canlı olarak 2 farklı pencerede gerçek zamanlı olarak gözüktüğünü göreceksiniz.

Ayrıca terminale bakarak verilerin neler olduğunu görebilirsiniz.