# Yurakcha

Ikki sevishgan uchun iPhone'ga o'rnatiladigan yopiq ilova. Server yozish shart emas.

## Bo'limlar

| Bo'lim | Nima qiladi |
|---|---|
| **Yurak** | Bosish: "sog'indim" yetib boradi, uning ekranida "bugun sizni N marta sog'indi" ko'rinadi. Bosib turish: yurak urishi uning telefonida ovoz bilan uradi. Ikkovingiz bir vaqtda bosib tursangiz: "Yuraklaringiz ulandi". Hissiyot yuborish: Mehr, Yurakdan va Ehtiros bo'limlari, o'z so'zlaringiz, kayfiyat. |
| **Teginish** | Barmog'ingizning izi uning ekranida jonli ko'rinadi. Barmoqlar uchrashsa, uchqun chiqadi va yurak uradi. Ikki marta tegish: o'pich izi 💋. U ilovada bo'lmasa, "Uni chaqirish" tugmasi chiqadi. |
| **Lahzalar** | Dumaloq video (old kameradan 30 soniyagacha, Telegramdagidek), galereyadan rasm yoki video (15 MB gacha), muhrlangan xat (hozir, bugun 21:00, ertaga 08:00 yoki tanlangan sana), shivir (30 soniyagacha ovoz). Yuboruvchi "Yetkazildi" va "Ko'rildi ❤️" ni ko'radi. |
| **Biz** | Reelslar: Instagram havolasini qo'yish yoki nusxadan bitta tugma bilan yuborish. Reels ilova ichida ochiladi, unga 😂❤️🔥 reaksiya bosiladi, yuboruvchi "Ko'rildi" va reaksiyani ko'radi. Sevgi kuponlari ("10 ta o'pich", "Massaj", "Janjalda men yutqazaman"…): u ishlatsa, sizga "va'dangizni bajaring 😏" chiqadi. "Birga qilamiz" orzular ro'yxati: ikkovingiz qo'shasiz va belgilaysiz. |
| **O'yin** | Ehtiros, Yaqinlik va Orzular kartalari: tortilgan karta ikki ekranda bir vaqtda ochiladi va reaksiya yuborish mumkin. Kunlik savol: sevgilingizning javobi o'zingiz javob bergandan keyin ochiladi. |

Tepada sevgilingizning ismi, kayfiyati va holati ko'rinadi: "Hozir ilovada" yoki "Oxirgi marta 18:05".

Qo'shimcha hissiyotlar:

- **Jonli harakatlar:** sevgilingiz nima qilayotganini his qilasiz. Tepada va xabarlarda "✍️ yozmoqda…",
  "💌 sizga hissiyot tanlayapti", "🎥 sizga video yozmoqda", "👀 videongizni ko'ryapti", "📖 xatingizni o'qiyapti",
  "🎧 shiviringizni tinglayapti", "🫳 Teginishda sizni kutyapti" va "🟢 ilovaga kirdi" chiqadi.
  Bu xabarlar faqat ikkovingiz ham ilovada bo'lganda yuboriladi.
- **Profil va status:** o'z rasmingiz va doim ko'rinib turadigan status (emoji va matn) qo'yiladi. U sevgilingiz
  ekranining tepasida va Yurak bo'limida turadi.
- **Hikoyalar:** rasm yoki video 24 soatga joylanadi. Yangi hikoya bo'lsa, rasm atrofida rangli halqa chiqadi.
  Hikoya progress chiziqli to'liq ekranda ochiladi, unga reaksiya yoki javob yozish mumkin. "👁 Aziz ko'rdi" ko'rinadi.
  Fayl ntfy'da 3 soat turadi, shuning uchun sevgilingiz hali yuklab olmagan bo'lsa, ilovangiz uni o'zi qayta yuklaydi.
- **Oramizda (GPS):** ikkovingiz ham joylashuvni yoqsangiz, oradagi masofa va u qaysi tomonda ekani ko'rinadi:
  "5,0 km · Aziz sharqda". Yaqinlashsangiz, ekrandagi ikki nuqta ham bir-biriga yaqinlashadi. 300 metrdan yaqin kelsangiz,
  ikkalangizga ham to'liq ekranli ogohlantirish chiqadi, ilovasi yopiq bo'lsa unga bildirishnoma boradi.
  Joylashuv shifrlab yuboriladi va faqat masofa ko'rsatiladi. iPhone joylashuvni faqat ilova ochiq turganda beradi.
- **Uchrashuvgacha:** keyingi uchrashuv vaqti va joyi belgilanadi, ikkala telefonda ham soniyalari bilan sanoq ketadi.
- **Kim ko'proq sevadi?** Har bir harakat ball beradi: sog'inch 1, hissiyot 3, teginish 4, yurak ulanishi 6, xat 10,
  shivir 8, rasm 8, video 15. Haftalik arqon tortish ko'rinadi, yetakchiga toj 👑 beriladi. Kim o'zib ketsa, xabar chiqadi.
  O'tgan hafta g'olibi ham ko'rsatiladi. Ikkovingiz har kuni nimadir yuborsangiz, "🔥 N kun ketma-ket" seriyasi o'sadi.
- **Ehtiros xabari** kelganda ekran olovdek yonadi va yurak ovozi eshitiladi.
- **Bayram kunlari:** 7, 50, 100, 200… kun, har oy va har yil to'lganda bayram ekrani chiqadi va tabrik yuborish mumkin.
- **Tun marosimi:** 21:00 dan keyin "Yotdim" tugmasi chiqadi. Ikkovingiz ham yotsangiz, "Bir osmon ostida uxlayapsiz 🌌" ko'rinadi.

## Qanday ishlaydi

```
Telefon A ── MQTT (wss, ikki ochiq broker bir vaqtda) ── Telefon B     jonli: teginish, yurak urishi, xatlar, kartalar
Telefon A ── ntfy.sh ──────────────────────────────────▶ ntfy ilovasi  faqat B ilovada bo'lmaganda bildirishnoma
```

- Jonli aloqa `broker.emqx.io` va `broker.hivemq.com` orqali ishlaydi. Ikkalasiga bir vaqtda ulaniladi, takroriy xabarlar
  tashlab yuboriladi. Shunda bittasi ishlamay qolsa ham aloqa uzilmaydi.
- Barcha jonli xabarlar juftlik kodidan PBKDF2 orqali olingan AES-GCM kalit bilan shifrlanadi. Mavzu nomi kodning
  SHA-256 xeshidan olinadi. Broker ham, boshqalar ham matnni o'qiy olmaydi.
- Xatlar, shivirlar, kayfiyat, karta va savol javoblari brokerda saqlanadi (retained). Sevgilingiz keyinroq kirsa ham
  ularni oladi. Xat yetib borgach, u brokerdan o'chiriladi.
- ntfy bildirishnomalari faqat qisqa matnni ko'rsatadi. Xat va shivirning mazmuni bildirishnomaga chiqmaydi.
- Video va rasmlar telefonda AES-GCM bilan shifrlanadi va ntfy.sh fayl xizmatiga yuklanadi. Fayl u yerda 3 soat turadi.
  Sevgilingiz ilovani ochishi bilan u yuklab olinadi va telefonning o'ziga (IndexedDB) saqlanadi. 3 soatdan kech qolsa,
  "qayta so'rash" tugmasi bor: yuboruvchining telefoni ilovani ochganda faylni o'zi qayta yuklaydi.
- `mqtt.min.js` ilova ichida turadi (MQTT.js 5.10.1, MIT litsenziyasi).

## O'rnatish

1. `andijonfk.uz/yurakcha/` ni Safari'da oching, ikkala ismni yozing.
2. **Havolani yuborish** tugmasini bosing va havolani Telegram yoki Instagram orqali yuboring.
3. Sevgilingiz havolani bosadi. Ilova o'zi ulanadi va qanday qilib bosh ekranga qo'shishni ko'rsatadi.
4. Ilova yopiq paytda ham bildirishnoma kelishi uchun: App Store'dan **ntfy** ilovasini o'rnatib, Sozlamalardagi kodga
   obuna bo'ling.

Havola `#k=<kod>&n=<ism>&p=<sevgili>&s=<sana>` ko'rinishida bo'ladi va sozlamalar uning ichida turadi.

## Instagram'dan to'g'ridan-to'g'ri yuborish

iPhone veb-ilovalarni Ulashish menyusiga qo'shishga ruxsat bermaydi. Shuning uchun Shortcuts orqali bir marta sozlanadi
(qadamlari ilovaning "Biz" bo'limida yozilgan). Shortcut `…#k=…&reel=<havola>` manzilini ochadi, ilova esa havolani
o'zi sevgilingizga yuboradi.

## Cheklovlar

- iPhone ilova yopiq bo'lsa, jonli aloqani uzib qo'yadi. Teginish va yurak urishi faqat ikkovingiz ham ilovani ochib
  turganingizda ishlaydi.
- iPhone veb-ilovalarda tebranishga ruxsat bermaydi, shuning uchun yurak urishi ovoz orqali beriladi.
- Ochiq brokerlar bepul va kafolatsiz ishlaydi.
