#!/usr/bin/env python3
"""Generate SSH sales proposal PDF using reportlab."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

W, H = A4  # 595.27 x 841.89

# Colors
NAVY = HexColor('#0A2463')
BLUE = HexColor('#1E96FC')
LIGHT_BLUE = HexColor('#EEF4FF')
DARK = HexColor('#0f172a')
TEXT = HexColor('#1e293b')
TEXT2 = HexColor('#475569')
GREEN = HexColor('#10b981')
WHITE = HexColor('#FFFFFF')
BORDER = HexColor('#e2e8f0')
RED = HexColor('#ef4444')
ORANGE = HexColor('#f97316')
LIGHT_GREEN = HexColor('#ecfdf5')
LIGHT_RED = HexColor('#fef2f2')
PURPLE = HexColor('#7c3aed')

MARGIN = 50
CONTENT_W = W - 2 * MARGIN


def hex2rgb(h):
    return tuple(int(h[i:i+2], 16)/255 for i in (1, 3, 5))


def draw_header_footer(c, page_num):
    """Header line + footer."""
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.5)
    c.line(MARGIN, H - 40, W - MARGIN, H - 40)
    # Footer
    c.setFont('Helvetica', 7)
    c.setFillColor(TEXT2)
    c.drawString(MARGIN, 25, 'surupan.tech')
    c.drawRightString(W - MARGIN, 25, f'Halaman {page_num}')
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(MARGIN, 38, W - MARGIN, 38)


def draw_rounded_rect_filled(c, x, y, w, h, r, fill_color):
    c.setFillColor(fill_color)
    c.setStrokeColor(fill_color)
    c.roundRect(x, y, w, h, r, fill=1, stroke=0)


def draw_text_block(c, x, y, text, font='Helvetica', size=10, color=TEXT, max_w=None, line_height=None):
    """Draw text, return y after."""
    if line_height is None:
        line_height = size * 1.4
    c.setFont(font, size)
    c.setFillColor(color)
    if max_w:
        words = text.split()
        lines = []
        line = ''
        for w in words:
            test = f'{line} {w}'.strip()
            if c.stringWidth(test, font, size) <= max_w:
                line = test
            else:
                if line:
                    lines.append(line)
                line = w
        if line:
            lines.append(line)
        for l in lines:
            c.drawString(x, y, l)
            y -= line_height
        return y
    else:
        c.drawString(x, y, text)
        return y - line_height


# ──────────────────── PAGE 1: COVER ────────────────────
def page_cover(c):
    # Full navy bg
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Accent stripe
    c.setFillColor(BLUE)
    c.rect(0, H - 8, W, 8, fill=1, stroke=0)

    # Logo area - white rounded rect
    logo_x, logo_y = W/2 - 35, H - 180
    c.setFillColor(WHITE)
    c.roundRect(logo_x, logo_y, 70, 70, 12, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 36)
    c.setFillColor(NAVY)
    c.drawCentredString(W/2, logo_y + 18, 'S')

    # Company name below logo
    y = logo_y - 30
    c.setFont('Helvetica-Bold', 14)
    c.setFillColor(WHITE)
    c.drawCentredString(W/2, y, 'SURUPAN SOFTWARE HOUSE')

    # Tagline
    y -= 22
    c.setFont('Helvetica', 10)
    c.setFillColor(BLUE)
    c.drawCentredString(W/2, y, 'Digitalisasi Tanpa Drama')

    # Accent line
    y -= 30
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W/2 - 80, y, W/2 + 80, y)

    # Big title
    y -= 60
    c.setFont('Helvetica-Bold', 32)
    c.setFillColor(WHITE)
    c.drawCentredString(W/2, y, 'PROPOSAL')
    y -= 40
    c.drawCentredString(W/2, y, 'PENAWARAN')

    # Subtitle
    y -= 50
    c.setFont('Helvetica', 14)
    c.setFillColor(HexColor('#94a3b8'))
    c.drawCentredString(W/2, y, 'Solusi Digital untuk Toko Buah Segar')

    # Info card
    y -= 80
    card_w = 320
    card_h = 160
    card_x = W/2 - card_w/2
    card_y = y - card_h + 10
    c.setFillColor(HexColor('#0f2b5b'))
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.roundRect(card_x, card_y, card_w, card_h, 10, fill=1, stroke=1)

    info_items = [
        ('Klien', 'Budi Santoso'),
        ('Usaha', 'Toko Buah Segar'),
        ('Lokasi', 'Jakarta Selatan'),
        ('No. Proposal', 'SSH-PROP-2026-001'),
        ('Tanggal', '9 Juli 2026'),
        ('Berlaku Hingga', '9 Agustus 2026'),
    ]
    iy = card_y + card_h - 25
    for label, val in info_items:
        c.setFont('Helvetica', 8)
        c.setFillColor(HexColor('#94a3b8'))
        c.drawString(card_x + 20, iy, label)
        c.setFont('Helvetica-Bold', 10)
        c.setFillColor(WHITE)
        c.drawString(card_x + 130, iy, f':  {val}')
        iy -= 22

    # Bottom accent
    c.setFillColor(BLUE)
    c.rect(0, 0, W, 4, fill=1, stroke=0)


# ──────────────────── PAGE 2: COMPANY PROFILE ────────────────────
def page_company(c):
    draw_header_footer(c, 2)

    # Section header
    y = H - 70
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Profil Perusahaan')
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(MARGIN, y - 8, MARGIN + 60, y - 8)

    # Company info table
    y -= 40
    info = [
        ('Nama Perusahaan', 'Surupan Software House (SSH)'),
        ('Bidang', 'Pengembangan Software & Solusi Digital'),
        ('Spesialisasi', 'Web App, Mobile App, AI Chatbot, E-Commerce'),
        ('Lokasi', 'Indonesia'),
        ('Kontak', '0857-7182-6637 (WhatsApp)'),
        ('Email', 'halo@surupan.tech'),
        ('Website', 'surupan.tech'),
    ]
    for i, (label, val) in enumerate(info):
        bg = LIGHT_BLUE if i % 2 == 0 else WHITE
        row_h = 24
        draw_rounded_rect_filled(c, MARGIN, y - 4, CONTENT_W, row_h, 3, bg)
        c.setFont('Helvetica-Bold', 9)
        c.setFillColor(NAVY)
        c.drawString(MARGIN + 10, y + 4, label)
        c.setFont('Helvetica', 9)
        c.setFillColor(TEXT)
        c.drawString(MARGIN + 170, y + 4, val)
        y -= row_h + 2

    # Vision & Mission
    y -= 20
    box_w = (CONTENT_W - 15) / 2
    box_h = 90

    # Vision box
    draw_rounded_rect_filled(c, MARGIN, y - box_h, box_w, box_h, 8, LIGHT_BLUE)
    c.setFont('Helvetica-Bold', 11)
    c.setFillColor(NAVY)
    c.drawString(MARGIN + 12, y - 18, 'Visi')
    c.setFont('Helvetica', 8.5)
    c.setFillColor(TEXT)
    visi_text = 'Menjadi mitra digitalisasi terpercaya bagi UMKM Indonesia dalam membangun kehadiran digital yang profesional dan menguntungkan.'
    yy = y - 35
    for line in _wrap(c, visi_text, 'Helvetica', 8.5, box_w - 24):
        c.drawString(MARGIN + 12, yy, line)
        yy -= 13

    # Mission box
    mx = MARGIN + box_w + 15
    draw_rounded_rect_filled(c, mx, y - box_h, box_w, box_h, 8, HexColor('#f0fdf4'))
    c.setFont('Helvetica-Bold', 11)
    c.setFillColor(NAVY)
    c.drawString(mx + 12, y - 18, 'Misi')
    c.setFont('Helvetica', 8.5)
    c.setFillColor(TEXT)
    missions = [
        'Solusi digital berkualitas tinggi',
        'Harga transparan & terjangkau',
        'Teknologi AI untuk efisiensi',
        'Dukungan berkelanjutan',
    ]
    yy = y - 35
    for m in missions:
        c.setFillColor(GREEN)
        c.circle(mx + 18, yy + 3, 2.5, fill=1, stroke=0)
        c.setFillColor(TEXT)
        c.drawString(mx + 26, yy, m)
        yy -= 14

    # Mengapa Memilih SSH?
    y -= box_h + 30
    c.setFont('Helvetica-Bold', 14)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Mengapa Memilih SSH?')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(MARGIN, y - 8, MARGIN + 50, y - 8)

    y -= 30
    reasons = [
        ('Spesialis UMKM', 'Fokus 100% pada kebutuhan bisnis kecil & menengah'),
        ('Teknologi Modern', 'Stack terkini: Next.js, React, AI Integration'),
        ('Harga Transparan', 'Tanpa biaya tersembunyi, paket jelas'),
        ('Support 24/7', 'Tim support siap via WhatsApp kapan saja'),
        ('SEO Built-in', 'Website langsung teroptimasi mesin pencari'),
        ('Garansi Revisi', 'Revisi gratis hingga sesuai kebutuhan'),
    ]
    col_w = CONTENT_W / 2
    for i, (title, desc) in enumerate(reasons):
        col = i % 2
        row = i // 2
        bx = MARGIN + col * col_w
        by = y - row * 65

        # Icon circle
        c.setFillColor(BLUE)
        c.circle(bx + 14, by + 6, 14, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 11)
        c.setFillColor(WHITE)
        c.drawCentredString(bx + 14, by + 2, str(i + 1))

        c.setFont('Helvetica-Bold', 10)
        c.setFillColor(NAVY)
        c.drawString(bx + 35, by + 10, title)
        c.setFont('Helvetica', 8)
        c.setFillColor(TEXT2)
        c.drawString(bx + 35, by - 4, desc)


def _wrap(c, text, font, size, max_w):
    words = text.split()
    lines, line = [], ''
    for w in words:
        test = f'{line} {w}'.strip()
        if c.stringWidth(test, font, size) <= max_w:
            line = test
        else:
            if line:
                lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


# ──────────────────── PAGE 3: DIGITAL GAP ANALYSIS ────────────────────
def page_gap(c):
    draw_header_footer(c, 3)

    y = H - 70
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Analisis Gap Digital')
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(MARGIN, y - 8, MARGIN + 60, y - 8)

    y -= 35
    c.setFont('Helvetica', 9)
    c.setFillColor(TEXT2)
    c.drawString(MARGIN, y, 'Perbandingan kondisi saat ini dengan solusi yang kami tawarkan:')

    y -= 30
    # Table header
    col_x = [MARGIN, MARGIN + 130, MARGIN + 290, MARGIN + 420]
    col_w_t = [130, 160, 130]
    headers = ['Aspek', 'Kondisi Saat Ini', 'Solusi SSH']
    draw_rounded_rect_filled(c, MARGIN, y - 4, CONTENT_W, 28, 5, NAVY)
    c.setFont('Helvetica-Bold', 9)
    c.setFillColor(WHITE)
    for i, h in enumerate(headers):
        c.drawString(col_x[i] + 10, y + 5, h)
    y -= 32

    rows = [
        ('Kehadiran Online', 'Belum punya website', 'Website profesional'),
        ('Katalog Produk', 'Manual via WhatsApp', 'Katalog digital interaktif'),
        ('Komunikasi', 'Chat manual 24/7', 'AI Chatbot 24/7'),
        ('SEO & Marketing', 'Tidak muncul di Google', 'SEO optimized + analytics'),
        ('Branding', 'Tidak konsisten', 'Identitas visual profesional'),
        ('Manajemen Pesanan', 'Terbai & tidak terstruktur', 'Sistem otomatis terintegrasi'),
    ]
    for i, (aspect, curr, sol) in enumerate(rows):
        bg = LIGHT_BLUE if i % 2 == 0 else WHITE
        row_h = 36
        draw_rounded_rect_filled(c, MARGIN, y - 6, CONTENT_W, row_h, 4, bg)

        c.setFont('Helvetica-Bold', 8.5)
        c.setFillColor(NAVY)
        c.drawString(col_x[0] + 10, y + 6, aspect)

        # Current (red-ish)
        c.setFillColor(RED)
        c.setFont('Helvetica', 8)
        c.drawString(col_x[1] + 5, y + 10, curr)
        # Arrow down icon
        c.setFont('Helvetica', 7)
        c.setFillColor(ORANGE)
        c.drawString(col_x[1] + 5, y - 4, 'Perlu perbaikan')

        # Solution (green)
        c.setFillColor(GREEN)
        c.setFont('Helvetica-Bold', 8)
        c.drawString(col_x[2] + 5, y + 10, sol)
        c.setFont('Helvetica', 7)
        c.setFillColor(GREEN)
        c.drawString(col_x[2] + 5, y - 4, 'Siap implementasi')

        y -= row_h + 2

    # Summary box
    y -= 20
    box_h = 70
    draw_rounded_rect_filled(c, MARGIN, y - box_h, CONTENT_W, box_h, 8, HexColor('#f0fdf4'))
    c.setStrokeColor(GREEN)
    c.setLineWidth(1)
    c.roundRect(MARGIN, y - box_h, CONTENT_W, box_h, 8, fill=0, stroke=1)

    c.setFont('Helvetica-Bold', 11)
    c.setFillColor(GREEN)
    c.drawString(MARGIN + 15, y - 18, 'Kesimpulan')
    c.setFont('Helvetica', 9)
    c.setFillColor(TEXT)
    lines = [
        'Dengan solusi digital dari SSH, Toko Buah Segar akan memiliki kehadiran online yang profesional,',
        'katalog produk interaktif, chatbot AI untuk melayani pelanggan 24/7, dan sistem manajemen pesanan',
        'yang terintegrasi. Transformasi digital ini akan meningkatkan jangkauan pasar dan efisiensi operasional.',
    ]
    ly = y - 35
    for l in lines:
        c.drawString(MARGIN + 15, ly, l)
        ly -= 13


# ──────────────────── PAGE 4: PRICING ────────────────────
def page_pricing(c):
    draw_header_footer(c, 4)

    y = H - 70
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Paket Harga')
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(MARGIN, y - 8, MARGIN + 60, y - 8)

    y -= 40
    card_w = (CONTENT_W - 20) / 3
    card_h = 310
    cards = [
        {
            'name': 'BASIC', 'price': 'Rp 3-5 Juta', 'color': BLUE, 'filled': False,
            'features': [
                'Landing page responsif',
                'Tombol WhatsApp',
                'Form kontak dasar',
                '1x revisi desain',
                'Mobile friendly',
                'SSL certificate',
                'Domain .com (1 thn)',
                'Hosting 1 tahun',
            ]
        },
        {
            'name': 'PRO', 'price': 'Rp 8-15 Juta', 'color': BLUE, 'filled': True, 'popular': True,
            'features': [
                'Website 5 halaman',
                'AI Chatbot WhatsApp',
                'Katalog produk digital',
                'SEO on-page',
                'Google Analytics',
                'Admin dashboard',
                '3x revisi desain',
                'Support 3 bulan',
                'Training penggunaan',
            ]
        },
        {
            'name': 'ENTERPRISE', 'price': 'Rp 20-35 Juta', 'color': NAVY, 'filled': False,
            'features': [
                'Full-stack web app',
                'E-commerce terintegrasi',
                'Sistem pembayaran online',
                'Manajemen inventori',
                'Branding lengkap',
                'Progressive Web App',
                'API integrasi',
                'Unlimited revisi',
                'Support 12 bulan',
                'SLA 99.9%',
            ]
        },
    ]

    for i, card in enumerate(cards):
        cx = MARGIN + i * (card_w + 10)
        cy = y - card_h

        if card.get('filled'):
            # PRO card - filled blue, elevated
            draw_rounded_rect_filled(c, cx - 3, cy + 3, card_w, card_h, 10, HexColor('#1a73e8'))
            # Popular badge
            badge_w = 80
            draw_rounded_rect_filled(c, cx + card_w/2 - badge_w/2, y - 5, badge_w, 20, 10, WHITE)
            c.setFont('Helvetica-Bold', 8)
            c.setFillColor(BLUE)
            c.drawCentredString(cx + card_w/2, y + 2, 'POPULER')
            tc = WHITE
            tc2 = HexColor('#bfdbfe')
        else:
            c.setStrokeColor(card['color'])
            c.setLineWidth(2)
            c.setFillColor(WHITE)
            c.roundRect(cx, cy, card_w, card_h, 10, fill=1, stroke=1)
            tc = NAVY
            tc2 = TEXT2

        # Name
        ny = y - 30
        c.setFont('Helvetica-Bold', 14)
        c.setFillColor(tc)
        c.drawCentredString(cx + card_w/2, ny, card['name'])

        # Price
        ny -= 25
        c.setFont('Helvetica-Bold', 16)
        c.setFillColor(tc)
        c.drawCentredString(cx + card_w/2, ny, card['price'])

        # Divider
        ny -= 15
        if card.get('filled'):
            c.setStrokeColor(HexColor('#60a5fa'))
        else:
            c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.line(cx + 15, ny, cx + card_w - 15, ny)

        # Features
        ny -= 18
        for feat in card['features']:
            c.setFont('Helvetica', 8)
            c.setFillColor(GREEN if not card.get('filled') else HexColor('#86efac'))
            c.drawString(cx + 15, ny, '✓')
            c.setFillColor(tc if not card.get('filled') else tc2)
            c.setFont('Helvetica', 8)
            c.drawString(cx + 28, ny, feat)
            ny -= 15

    # Add-on table
    y = y - card_h - 30
    c.setFont('Helvetica-Bold', 13)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Add-On Services')
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(MARGIN, y - 8, MARGIN + 40, y - 8)

    y -= 25
    addons = [
        ('Maintenance Bulanan', 'Rp 500.000/bulan', 'Update, backup, security patch'),
        ('SEO Content Writing', 'Rp 350.000/artikel', 'Artikel SEO 1000+ kata'),
        ('Social Media Setup', 'Rp 1.500.000', 'Setup IG, FB, TikTok bisnis'),
        ('Foto Produk Profesional', 'Rp 1.000.000', 'Hingga 30 produk'),
        ('Training Tim', 'Rp 750.000', 'Sesi training 2 jam'),
    ]
    # Header
    draw_rounded_rect_filled(c, MARGIN, y - 4, CONTENT_W, 24, 4, NAVY)
    c.setFont('Helvetica-Bold', 8.5)
    c.setFillColor(WHITE)
    c.drawString(MARGIN + 10, y + 4, 'Layanan')
    c.drawString(MARGIN + 200, y + 4, 'Harga')
    c.drawString(MARGIN + 340, y + 4, 'Detail')
    y -= 28

    for i, (name, price, detail) in enumerate(addons):
        bg = LIGHT_BLUE if i % 2 == 0 else WHITE
        draw_rounded_rect_filled(c, MARGIN, y - 4, CONTENT_W, 22, 3, bg)
        c.setFont('Helvetica', 8.5)
        c.setFillColor(TEXT)
        c.drawString(MARGIN + 10, y + 3, name)
        c.setFont('Helvetica-Bold', 8.5)
        c.setFillColor(NAVY)
        c.drawString(MARGIN + 200, y + 3, price)
        c.setFont('Helvetica', 8)
        c.setFillColor(TEXT2)
        c.drawString(MARGIN + 340, y + 3, detail)
        y -= 24


# ──────────────────── PAGE 5: TIMELINE ────────────────────
def page_timeline(c):
    draw_header_footer(c, 5)

    y = H - 70
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Timeline Pengerjaan')
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(MARGIN, y - 8, MARGIN + 60, y - 8)

    y -= 20
    c.setFont('Helvetica', 9)
    c.setFillColor(TEXT2)
    c.drawString(MARGIN, y, 'Estimasi total: 20-27 hari kerja')

    phases = [
        ('Discovery\n& Intake', '3 hari', 'Brief kebutuhan, analisis\nbisnis, riset kompetitor'),
        ('Design\n& PRD', '5 hari', 'Wireframe, UI design,\ndokumen PRD'),
        ('Development', '7-14 hari', 'Coding, integrasi fitur,\nAI chatbot setup'),
        ('Testing\n& Review', '3 hari', 'QA testing, client review,\nrevisi batch'),
        ('Deploy &\nHandover', '2 hari', 'Go-live, training,\ndokumentasi'),
    ]

    # Timeline line
    line_y = y - 50
    line_x_start = MARGIN + 30
    line_x_end = W - MARGIN - 30
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(line_x_start, line_y, line_x_end, line_y)

    # Phases on timeline
    n = len(phases)
    spacing = (line_x_end - line_x_start) / (n - 1)

    for i, (name, dur, desc) in enumerate(phases):
        px = line_x_start + i * spacing

        # Circle
        c.setFillColor(BLUE)
        c.circle(px, line_y, 16, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 12)
        c.setFillColor(WHITE)
        c.drawCentredString(px, line_y - 4, str(i + 1))

        # Phase name above
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(NAVY)
        for j, line in enumerate(name.split('\n')):
            c.drawCentredString(px, line_y + 30 + (1 - j) * 11, line)

        # Duration badge
        badge_y = line_y - 35
        bw = c.stringWidth(dur, 'Helvetica-Bold', 8) + 12
        draw_rounded_rect_filled(c, px - bw/2, badge_y - 4, bw, 16, 8, LIGHT_BLUE)
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(BLUE)
        c.drawCentredString(px, badge_y, dur)

    # Detail cards below
    card_y = line_y - 120
    card_w = (CONTENT_W - 40) / 5
    card_h = 130

    for i, (name, dur, desc) in enumerate(phases):
        cx = MARGIN + i * (card_w + 10)

        draw_rounded_rect_filled(c, cx, card_y, card_w, card_h, 6, LIGHT_BLUE)
        c.setStrokeColor(BLUE)
        c.setLineWidth(0.5)
        c.roundRect(cx, card_y, card_w, card_h, 6, fill=0, stroke=1)

        # Number
        c.setFillColor(BLUE)
        c.circle(cx + 15, card_y + card_h - 18, 10, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 9)
        c.setFillColor(WHITE)
        c.drawCentredString(cx + 15, card_y + card_h - 22, str(i + 1))

        # Name
        c.setFont('Helvetica-Bold', 7.5)
        c.setFillColor(NAVY)
        name_clean = name.replace('\n', ' ')
        c.drawString(cx + 30, card_y + card_h - 22, name_clean)

        # Description
        c.setFont('Helvetica', 7)
        c.setFillColor(TEXT2)
        dy = card_y + card_h - 40
        for line in desc.split('\n'):
            c.drawString(cx + 10, dy, line.strip())
            dy -= 11

    # Total box
    total_y = card_y - 50
    draw_rounded_rect_filled(c, MARGIN, total_y, CONTENT_W, 35, 6, NAVY)
    c.setFont('Helvetica-Bold', 11)
    c.setFillColor(WHITE)
    c.drawCentredString(W/2, total_y + 12, 'Total Estimasi: 20 - 27 Hari Kerja')


# ──────────────────── PAGE 6: TERMS & CTA ────────────────────
def page_terms(c):
    draw_header_footer(c, 6)

    y = H - 70
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(NAVY)
    c.drawString(MARGIN, y, 'Syarat & Ketentuan')
    c.setStrokeColor(BLUE)
    c.setLineWidth(3)
    c.line(MARGIN, y - 8, MARGIN + 60, y - 8)

    y -= 30
    terms = [
        'DP 50% dari total biaya proyek dibayarkan di awal sebelum pengerjaan dimulai.',
        'Pelunasan 50% sisanya setelah website selesai dan disetujui oleh klien.',
        'Revisi desain sesuai paket yang dipilih (Basic: 1x, Pro: 3x, Enterprise: unlimited).',
        'Perubahan scope di luar kesepakatan awal akan dikenakan biaya tambahan.',
        'Domain dan hosting menjadi milik klien setelah pelunasan.',
        'Garansi bug-fix selama 30 hari setelah go-live tanpa biaya tambahan.',
        'Proposal ini berlaku selama 30 hari dari tanggal penerbitan.',
    ]
    for i, t in enumerate(terms):
        # Number circle
        c.setFillColor(BLUE)
        c.circle(MARGIN + 10, y + 4, 10, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(WHITE)
        c.drawCentredString(MARGIN + 10, y, str(i + 1))

        c.setFont('Helvetica', 9)
        c.setFillColor(TEXT)
        lines = _wrap(c, t, 'Helvetica', 9, CONTENT_W - 30)
        for j, line in enumerate(lines):
            c.drawString(MARGIN + 28, y, line)
            y -= 13
        y -= 8

    # CTA Section
    y -= 15
    cta_h = 120
    draw_rounded_rect_filled(c, MARGIN, y - cta_h, CONTENT_W, cta_h, 10, NAVY)

    c.setFont('Helvetica-Bold', 18)
    c.setFillColor(WHITE)
    c.drawCentredString(W/2, y - 22, 'Siap Go Digital?')

    c.setFont('Helvetica', 10)
    c.setFillColor(HexColor('#94a3b8'))
    c.drawCentredString(W/2, y - 40, 'Mulai transformasi digital bisnis Anda dalam 4 langkah mudah:')

    steps = ['Hubungi Kami', 'Konsultasi Gratis', 'Pilih Paket', 'Go Live!']
    step_w = CONTENT_W / 4
    sy = y - 70
    for i, step in enumerate(steps):
        sx = MARGIN + i * step_w + step_w / 2
        c.setFillColor(BLUE)
        c.circle(sx, sy + 8, 14, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 11)
        c.setFillColor(WHITE)
        c.drawCentredString(sx, sy + 4, str(i + 1))
        c.setFont('Helvetica', 8)
        c.setFillColor(WHITE)
        c.drawCentredString(sx, sy - 14, step)

        # Arrow between steps
        if i < 3:
            c.setStrokeColor(HexColor('#60a5fa'))
            c.setLineWidth(1)
            ax = sx + 20
            c.line(ax, sy + 8, ax + step_w - 50, sy + 8)

    # Contact box
    y = y - cta_h - 30
    box_h = 80
    draw_rounded_rect_filled(c, MARGIN, y - box_h, CONTENT_W, box_h, 8, LIGHT_BLUE)
    c.setStrokeColor(BLUE)
    c.setLineWidth(1)
    c.roundRect(MARGIN, y - box_h, CONTENT_W, box_h, 8, fill=0, stroke=1)

    c.setFont('Helvetica-Bold', 12)
    c.setFillColor(NAVY)
    c.drawCentredString(W/2, y - 18, 'Hubungi Kami')

    contacts = [
        ('WhatsApp', '0857-7182-6637'),
        ('Email', 'halo@surupan.tech'),
        ('Website', 'surupan.tech'),
    ]
    ct_w = CONTENT_W / 3
    for i, (label, val) in enumerate(contacts):
        cx = MARGIN + i * ct_w + ct_w / 2
        c.setFont('Helvetica-Bold', 8)
        c.setFillColor(BLUE)
        c.drawCentredString(cx, y - 38, label)
        c.setFont('Helvetica', 10)
        c.setFillColor(TEXT)
        c.drawCentredString(cx, y - 54, val)

    # Footer tagline
    y = y - box_h - 40
    c.setStrokeColor(BLUE)
    c.setLineWidth(2)
    c.line(W/2 - 80, y + 10, W/2 + 80, y + 10)
    c.setFont('Helvetica-Bold', 11)
    c.setFillColor(NAVY)
    c.drawCentredString(W/2, y - 8, 'Surupan Software House')
    c.setFont('Helvetica', 9)
    c.setFillColor(BLUE)
    c.drawCentredString(W/2, y - 24, 'Digitalisasi Tanpa Drama')


def main():
    output = '/home/mchdfrhn/Project/ssh-web/sales-templates/proposal-ssh-v2.pdf'
    c = canvas.Canvas(output, pagesize=A4)
    c.setTitle('Proposal Penawaran - Surupan Software House')
    c.setAuthor('Surupan Software House')
    c.setSubject('Proposal Penawaran Digital Solutions')

    page_cover(c)
    c.showPage()

    page_company(c)
    c.showPage()

    page_gap(c)
    c.showPage()

    page_pricing(c)
    c.showPage()

    page_timeline(c)
    c.showPage()

    page_terms(c)
    c.showPage()

    c.save()
    print(f'PDF generated: {output}')


if __name__ == '__main__':
    main()
