# Yurakcha

Ikki iPhone o'rtasida bir tegish bilan hissiyot ulashish uchun kichik veb-ilova.
Server yozish shart emas: xabarlar bepul [ntfy.sh](https://ntfy.sh) xizmati orqali yuboriladi.

## Qanday ishlaydi

```
Telefon A ──POST──▶ ntfy.sh/<maxfiy-kod> ──▶ Telefon B
   (yurak tugmasi)                         ├─ ochiq sahifa: butun ekran yurak animatsiyasi (SSE)
                                           └─ ntfy ilovasi: iPhone bildirishnomasi (ilova yopiq bo'lsa ham)
```

- Ikki telefon bitta **maxfiy kod** (masalan `yurak-0q1q2q2h63137022`) bilan bog'lanadi.
- Katta yurakni bosish: "Seni sevaman ❤️". 1 soniya bosib turish: "Yuragim sen uchun urmoqda 💓".
- 9 ta tayyor hissiyot, o'z matningiz, birga o'tgan kunlar sanog'i va xabarlar tarixi bor.
- Ilova yopiq paytda kelgan xabarlar keyingi ochilganda tarixda chiqadi.

## O'rnatish

1. `yurakcha/` papkasini istalgan statik hostingga joylang (GitHub Pages, Netlify, Cloudflare Pages).
2. Ikkalangiz ham sahifani iPhone'dagi Safari'da oching: **Ulashish → Bosh ekranga qo'shish**.
3. Biringiz **Yangi kod** tugmasini bosib kod yaratasiz va uni ikkinchi odamga yuborasiz.
   Havolani `.../yurakcha/#yurak-xxxx` ko'rinishida yuborsangiz, kod o'zi to'ldiriladi.
4. Ilova yopiq paytda ham bildirishnoma kelishi uchun App Store'dan **ntfy** ilovasini o'rnating
   va `+` tugmasi orqali shu kodga obuna bo'ling.

## Ilovasiz variant: faqat iPhone Shortcuts

Hosting kerak emas. Har ikki telefonga ntfy ilovasini o'rnatib, bir xil kodga obuna bo'ling.
Keyin **Shortcuts** ilovasida yangi shortcut yarating:

1. **Get Contents of URL** amalini qo'shing.
2. URL: `https://ntfy.sh/`
3. Method: **POST**, Request Body: **JSON**, maydonlar:
   - `topic`: sizning kodingiz
   - `title`: `Aziza ❤️`
   - `message`: `Seni sevaman`
   - `tags` (Array): `heart`

Shortcut'ni ishga tushirishning qulay yo'llari:

- **Telefon orqasiga ikki marta tegish:** Settings → Accessibility → Touch → Back Tap → Double Tap → shu shortcut.
- **Bosh ekran vidjeti:** Shortcuts vidjetini qo'shing, bitta tegishda yurak yuboriladi.
- **Avtomatik:** Shortcuts → Automation. Masalan "uyga yetib kelganimda" yoki "budilnikni o'chirganimda"
  (Xayrli tong ☀️) yuborilsin.
- **Siri:** "Hey Siri, yurak yubor".

## Xavfsizlik

ntfy.sh ochiq xizmat. Kodni bilgan har qanday odam xabarlarni o'qiy oladi, shuning uchun uzun va tasodifiy
kod ishlating. Kodni faqat ikkalangiz biling. Shaxsiy maʼlumot, parol yoki rasm yubormang.

## Instagram haqida

Instagram shaxsiy akkauntlar uchun xabar yuborishni avtomatlashtirishga (API orqali) ruxsat bermaydi.
Ilovani avtomatik Direct yuboradigan qilib bo'lmaydi. Instagram'da qo'lda ishlatish mumkin bo'lgan narsalar:
Notes, Close Friends storylari, DM temalari va umumiy saqlanganlar (Collaborative Collection).
