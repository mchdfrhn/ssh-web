# Hiring & Team Scaling Playbook — Surupan Software House

## Kapan Harus Hire?

### Trigger Points:
| Sinyal | Action |
|---|---|
| Pipeline > 5 project/bulan | Mulai cari junior dev |
| Bos handle sales + dev sendiri | Fokus ke sales, hire dev |
| Klien nunggu > 2 minggu | Capacity issue — hire |
| Revenue > Rp 25jt/bulan konsisten | Bisa hire full-time |
| Maintenance > 10 klien | Butuh dedicated support |

---

## Hiring Funnel

### Stage 1: Junior Frontend Dev (Rp 3-5jt/bulan)
**Kriteria:**
- React/Next.js basics (bisa bikin landing page sendiri)
- Tailwind CSS (bisa custom, bukan cuma copy-paste)
- Git basics (branch, commit, PR)
- Responsive design (mobile-first)
- Bisa baca English documentation

**Red flags:**
- Tidak bisa explain project portfolio sendiri
- Tidak tahu cara debug di browser
- Copy-paste dari StackOverflow tanpa paham

**Test:**
1. Screening: "Buat landing page sederhana dengan hero + 3 card + CTA. 2 jam."
2. Interview: "Jelaskan project terakhirmu. Tantangannya apa?"
3. Trial: 1 minggu project kecil (bayar)

### Stage 2: Full-Stack Dev (Rp 6-10jt/bulan)
**Kriteria:**
- Semua di atas, plus:
- Node.js/Laravel backend
- Database design (PostgreSQL/MongoDB)
- API design (REST)
- Deployment (Vercel/Docker)

**Trigger:** Butuh build web app, bukan cuma landing page.

### Stage 3: Sales/CS (Rp 4-6jt/bulan + komisi)
**Kriteria:**
- Bisa explain produk dengan simple
- Follow-up konsisten
- Bisa handle WA chat 50+ per hari
- Basic tech understanding (tahu perbedaan landing page vs web app)

**Trigger:** Bos spend > 50% waktu di sales, bukan strategy.

---

## Onboarding Checklist (Minggu 1)

### Hari 1-2: Orientasi
- [ ] Kenalkan ke tools (GitHub, Figma, Slack/WA)
- [ ] Kenalkan ke tech stack (React, Tailwind, Vite)
- [ ] Kenalkan ke coding standards project
- [ ] Setup development environment

### Hari 3-5: Project Pertama
- [ ] Assign landing page sederhana
- [ ] Pair programming session (2 jam)
- [ ] Code review pertama
- [ ] Feedback & improvement notes

### Minggu 2+: Mandiri
- [ ] Assign project sendiri dengan deadline
- [ ] Daily check-in (15 menit)
- [ ] Weekly code review
- [ ] Monthly performance review

---

## SOP Code Review

### Yang Dicek:
1. **Responsive** — Tested di mobile (320px) sampai desktop (1920px)
2. **Accessibility** — Alt text, semantic HTML, keyboard nav
3. **Performance** — Lighthouse > 90, no layout shift
4. **Security** — Input validation, no hardcoded secrets
5. **Clean code** — No console.log, no unused imports

### Template Review Comment:
```
### Review: [Nama Project]

**Overall:** [Approve / Request Changes / Block]

**Yang Bagus:**
- [point 1]
- [point 2]

**Yang Perlu Diperbaiki:**
- [ ] [issue 1]
- [ ] [issue 2]

**Nice to Have:**
- [suggestion]
```

---

## Team Structure (Target 6 Bulan)

```
Bos (Farhan)
├── Sales & Strategy (Bos sendiri)
├── Dev Team
│   ├── Junior Dev 1 (landing pages, maintenance)
│   └── Junior Dev 2 (web apps, integrations)
└── Ops
    └── Sales/CS (handle WA, follow-up, onboarding)
```

---

## Budget Allocation

| Item | Budget | Notes |
|---|---|---|
| Dev 1 (junior) | Rp 3-4jt | Landing pages, templates |
| Dev 2 (junior) | Rp 3-4jt | Web apps, API work |
| Sales/CS | Rp 3jt + 5% komisi | WA handling, follow-up |
| Tools (Figma, hosting, dll) | Rp 500rb | Per bulan |
| **Total** | **Rp 9.5-11.5jt/bulan** | Break-even di ~5 project/bulan |

---

## Kapan Tidak Harus Hire

- **Pipeline belum stabil** (< 3 project/bulan) — outsource dulu
- **Bisa handle sendiri** dengan reasonable workload
- **Revenue belum cukup** untuk cover gaji + buffer 3 bulan
- **Belum punga SOP** — hire tanpa SOP = chaos

**Rule of thumb:** Hire ketika Anda menolak project karena tidak ada capacity, bukan karena tidak ada sales.
