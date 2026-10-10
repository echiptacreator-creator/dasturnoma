# Yurakcha

Ikki sevishgan uchun iPhone'ga o'rnatiladigan yopiq ilova. Server yozish shart emas.

## Bo'limlar

| Bo'lim | Nima qiladi |
|---|---|
| **Yurak** | Bosish: "sog'indim" yetib boradi, uning ekranida "bugun sizni N marta sog'indi" ko'rinadi. Bosib turish: yurak urishi uning telefonida ovoz bilan uradi. Ikkovingiz bir vaqtda bosib tursangiz: "Yuraklaringiz ulandi". Hissiyot yuborish: Mehr, Yurakdan va Ehtiros bo'limlari, o'z so'zlaringiz, kayfiyat. |
| **Teginish** | Barmog'ingizning izi uning ekranida jonli ko'rinadi. Barmoqlar uchrashsa, uchqun chiqadi va yurak uradi. Ikki marta tegish: o'pich izi 💋. U ilovada bo'lmasa, "Uni chaqirish" tugmasi chiqadi. |
| **Xatlar** | Muhrlangan xat: hozir, bugun 21:00, ertaga 08:00 yoki tanlangan sanada ochiladi. Qabul qiluvchi muhrni sindirib o'qiydi, yuboruvchi "O'qildi ❤️" ni ko'radi. Shivir: tugmani bosib turib 30 soniyagacha ovoz yuboriladi. |
| **O'yin** | Ehtiros, Yaqinlik va Orzular kartalari: tortilgan karta ikki ekranda bir vaqtda ochiladi va reaksiya yuborish mumkin. Kunlik savol: sevgilingizning javobi o'zingiz javob bergandan keyin ochiladi. |

Tepada sevgilingizning ismi, kayfiyati va holati ko'rinadi: "Hozir ilovada" yoki "Oxirgi marta 18:05".

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
- `mqtt.min.js` ilova ichida turadi (MQTT.js 5.10.1, MIT litsenziyasi).

## O'rnatish

1. `andijonfk.uz/yurakcha/` ni Safari'da oching, ikkala ismni yozing.
2. **Havolani yuborish** tugmasini bosing va havolani Telegram yoki Instagram orqali yuboring.
3. Sevgilingiz havolani bosadi. Ilova o'zi ulanadi va qanday qilib bosh ekranga qo'shishni ko'rsatadi.
4. Ilova yopiq paytda ham bildirishnoma kelishi uchun: App Store'dan **ntfy** ilovasini o'rnatib, Sozlamalardagi kodga
   obuna bo'ling.

Havola `#k=<kod>&n=<ism>&p=<sevgili>&s=<sana>` ko'rinishida bo'ladi va sozlamalar uning ichida turadi.

## Cheklovlar

- iPhone ilova yopiq bo'lsa, jonli aloqani uzib qo'yadi. Teginish va yurak urishi faqat ikkovingiz ham ilovani ochib
  turganingizda ishlaydi.
- iPhone veb-ilovalarda tebranishga ruxsat bermaydi, shuning uchun yurak urishi ovoz orqali beriladi.
- Ochiq brokerlar bepul va kafolatsiz ishlaydi.
