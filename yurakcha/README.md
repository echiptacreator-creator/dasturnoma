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
2. Siz sahifani ochib, o'z ismingiz va sevgilingizning ismini yozasiz. Maxfiy kod avtomatik yaratiladi.
3. **Havola yuborish** tugmasini bosing va havolani Telegram yoki Instagram orqali yuboring.
4. Sevgilingiz havolani bosadi va bo'ldi. Hech narsa yozmaydi, ilova o'zi ulanadi va sizga
   "Ulandim! 🥰" xabari keladi.

Havola `#k=<kod>&n=<ism>&p=<sevgili>&s=<sana>` ko'rinishida bo'ladi, sozlamalar uning ichida turadi.
Shuning uchun havola Instagram yoki Telegram ichidagi brauzerda ochilsa ham ishlaydi.

Qo'shimcha (ixtiyoriy):

- **Bosh ekranga qo'shish:** Safari'da Ulashish → Bosh ekranga qo'shish. Ilova ochiq turgan manzil saqlanadi,
  shuning uchun bosh ekrandagi belgi ham ulangan holda ochiladi.
- **Ilova yopiq bo'lsa ham bildirishnoma:** App Store'dan **ntfy** ilovasini o'rnatib, `+` orqali o'sha kodga
  obuna bo'ling.

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
