#!/usr/bin/env python3
"""SSH Brand Guide PDF Generator — reportlab only."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.units import mm

W, H = A4  # 595.27 x 841.89
OUT = "/home/mchdfrhn/Project/ssh-web/brand-guide-ssh-v2.pdf"

# Colors
NAVY = HexColor("#0A2463")
ACCENT = HexColor("#1E96FC")
LIGHT_BLUE = HexColor("#EEF4FF")
LIGHTER = HexColor("#F6F9FF")
DARK = HexColor("#0f172a")
TXT = HexColor("#1e293b")
TXT2 = HexColor("#475569")
TXTL = HexColor("#94a3b8")
GREEN = HexColor("#10b981")
GREEN_SOFT = HexColor("#ecfdf5")
BORDER = HexColor("#e2e8f0")
PURPLE = HexColor("#8b5cf6")
BLUE2 = HexColor("#3b82f6")
YELLOW = HexColor("#f59e0b")
RED = HexColor("#ef4444")

MARGIN = 45


def hex2str(c):
    r, g, b = int(c.red*255), int(c.green*255), int(c.blue*255)
    return f"#{r:02X}{g:02X}{b:02X}"


def rgb_str(c):
    return f"RGB({int(c.red*255)}, {int(c.green*255)}, {int(c.blue*255)})"


def footer(c, page_num):
    c.setFont("Helvetica", 7)
    c.setFillColor(TXTL)
    c.drawString(MARGIN, 25, "SSH Brand Guide v1.0 · surupan.tech")
    c.drawRightString(W - MARGIN, 25, f"Page {page_num}")
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(MARGIN, 38, W - MARGIN, 38)


def section_label(c, y, text):
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, text.upper())
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(MARGIN, y - 4, MARGIN + 30, y - 4)


def draw_color_swatch(c, x, y, w, h, color, name, hex_val, rgb_val=None):
    c.setFillColor(color)
    c.roundRect(x, y, w, h, 6, fill=1, stroke=0)
    # border if light color
    if color.red > 0.85 and color.green > 0.85 and color.blue > 0.85:
        c.setStrokeColor(BORDER)
        c.setLineWidth(1)
        c.roundRect(x, y, w, h, 6, fill=0, stroke=1)
    # name label
    ty = y - 14
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(TXT)
    c.drawString(x, ty, name)
    c.setFont("Helvetica", 7)
    c.setFillColor(TXT2)
    c.drawString(x, ty - 11, hex_val)
    if rgb_val:
        c.setFont("Helvetica", 6.5)
        c.setFillColor(TXTL)
        c.drawString(x, ty - 21, rgb_val)


# ============================================================
# PAGE 1 — COVER
# ============================================================
def page_cover(c):
    # Background gradient (simulated with rects)
    steps = 40
    for i in range(steps):
        frac = i / steps
        r = 10*(1-frac) + 15*frac
        g = 36*(1-frac) + 23*frac
        b = 99*(1-frac) + 42*frac
        c.setFillColorRGB(r/255, g/255, b/255)
        c.rect(0, H - H*(i+1)/steps, W, H/steps + 1, fill=1, stroke=0)

    # Decorative circles
    c.setFillColorRGB(1, 1, 1, 0.03)
    c.circle(W - 80, H - 200, 160, fill=1, stroke=0)
    c.circle(100, 200, 120, fill=1, stroke=0)

    # Accent line
    c.setStrokeColor(ACCENT)
    c.setLineWidth(3)
    c.line(MARGIN, H - 300, MARGIN + 60, H - 300)

    # Title
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 44)
    c.drawString(MARGIN, H - 360, "BRAND")
    c.drawString(MARGIN, H - 410, "GUIDE")

    # Company name
    c.setFont("Helvetica", 16)
    c.setFillColor(HexColor("#a0c4ff"))
    c.drawString(MARGIN, H - 455, "Surupan Software House")

    # Tagline
    c.setFont("Helvetica", 13)
    c.setFillColor(HexColor("#7eb8ff"))
    c.drawString(MARGIN, H - 480, "Digitalisasi Tanpa Drama  \u2726")

    # Divider
    c.setStrokeColorRGB(1, 1, 1, 0.2)
    c.setLineWidth(0.5)
    c.line(MARGIN, H - 510, MARGIN + 200, H - 510)

    # Version
    c.setFont("Helvetica", 10)
    c.setFillColor(TXTL)
    c.drawString(MARGIN, H - 540, "July 2026  |  Version 1.0")

    # Bottom decorative bar
    c.setFillColor(ACCENT)
    c.rect(0, 0, W, 4, fill=1, stroke=0)

    # Logo mark bottom-right
    c.setFillColorRGB(1, 1, 1, 0.1)
    c.roundRect(W - 100, 40, 55, 55, 10, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 28)
    c.drawCentredString(W - 72.5, 52, "S")

    c.showPage()


# ============================================================
# PAGE 2 — BRAND IDENTITY
# ============================================================
def page_identity(c):
    section_label(c, H - 55, "Section 01")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Brand Identity")

    # Company details table
    y = H - 130
    details = [
        ("Company Name", "Surupan Software House"),
        ("Abbreviation", "SSH"),
        ("Tagline", "Digitalisasi Tanpa Drama \u2726"),
        ("Domain", "surupan.tech"),
        ("Email", "halo@surupan.tech"),
        ("WhatsApp", "0857-7182-6637"),
        ("Industry", "Software Development & Digital Solutions"),
        ("Founded", "Indonesia"),
    ]
    for label, value in details:
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(TXTL)
        c.drawString(MARGIN, y, label.upper())
        c.setFont("Helvetica", 10)
        c.setFillColor(TXT)
        c.drawString(MARGIN + 130, y, value)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.3)
        c.line(MARGIN, y - 6, W - MARGIN, y - 6)
        y -= 22

    # Logo mark spec
    y -= 15
    section_label(c, y, "Logo Mark")
    y -= 30

    # Draw logo mark: white rounded square with navy S
    lx = MARGIN
    c.setFillColor(white)
    c.setStrokeColor(BORDER)
    c.setLineWidth(1)
    c.roundRect(lx, y - 36, 36, 36, 8, fill=1, stroke=1)
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(lx + 18, y - 28, "S")

    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(TXT)
    c.drawString(lx + 50, y - 10, "Primary Logomark")
    c.setFont("Helvetica", 8)
    c.setFillColor(TXT2)
    c.drawString(lx + 50, y - 24, "36x36 pt rounded square (r=8), Helvetica-Bold 'S' centered")

    # 3 logo variations
    y -= 70
    variations = [
        ("Light Background", "Navy S on white square", LIGHT_BLUE, NAVY),
        ("Dark Background", "White S on navy square", NAVY, white),
        ("Glass", "Navy S on translucent", HexColor("#ffffffcc"), NAVY),
    ]
    vx = MARGIN
    for name, desc, bg, fg in variations:
        c.setFillColor(bg)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.roundRect(vx, y - 30, 50, 50, 8, fill=1, stroke=1)
        c.setFillColor(fg)
        c.setFont("Helvetica-Bold", 22)
        c.drawCentredString(vx + 25, y - 18, "S")
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(TXT)
        c.drawString(vx, y - 42, name)
        c.setFont("Helvetica", 7)
        c.setFillColor(TXT2)
        c.drawString(vx, y - 52, desc)
        vx += 160

    # Minimum size & clear space
    y -= 80
    section_label(c, y, "Usage Rules")
    y -= 25
    rules = [
        ("Minimum Size", "24x24 pt for print, 48x48px for digital"),
        ("Clear Space", "1x logo width on all sides (minimum clearance zone)"),
        ("File Formats", "SVG (primary), PNG @2x, PDF for print"),
    ]
    for label, desc in rules:
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(TXT)
        c.drawString(MARGIN, y, label)
        c.setFont("Helvetica", 9)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 110, y, desc)
        y -= 18

    # Do's and Don'ts
    y -= 20
    section_label(c, y, "Do's and Don'ts")
    y -= 25
    col_w = (W - 2*MARGIN - 30) / 2

    # Do's column
    c.setFillColor(GREEN_SOFT)
    c.roundRect(MARGIN, y - 100, col_w, 110, 6, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GREEN)
    c.drawString(MARGIN + 12, y, "\u2713  DO")
    dos = [
        "Use approved color combinations",
        "Maintain clear space around logo",
        "Use on clean, uncluttered backgrounds",
    ]
    dy = y - 20
    for d in dos:
        c.setFont("Helvetica", 8.5)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 12, dy, "\u2022  " + d)
        dy -= 16

    # Don'ts column
    dx = MARGIN + col_w + 30
    c.setFillColor(HexColor("#fef2f2"))
    c.roundRect(dx, y - 100, col_w, 110, 6, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(RED)
    c.drawString(dx + 12, y, "\u2717  DON'T")
    donts = [
        "Stretch or distort the logo",
        "Use on busy photo backgrounds",
        "Change logo colors without approval",
    ]
    dy = y - 20
    for d in donts:
        c.setFont("Helvetica", 8.5)
        c.setFillColor(TXT2)
        c.drawString(dx + 12, dy, "\u2022  " + d)
        dy -= 16

    footer(c, 2)
    c.showPage()


# ============================================================
# PAGE 3 — COLOR PALETTE
# ============================================================
def page_colors(c):
    section_label(c, H - 55, "Section 02")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Color Palette")

    # Primary colors — large swatches
    y = H - 130
    sw = (W - 2*MARGIN - 20) / 3
    primaries = [
        ("Primary Navy", NAVY, "#0A2463", "RGB(10, 36, 99)"),
        ("Accent Blue", ACCENT, "#1E96FC", "RGB(30, 150, 252)"),
        ("Light Blue", LIGHT_BLUE, "#EEF4FF", "RGB(238, 244, 255)"),
    ]
    sx = MARGIN
    for name, color, hx, rg in primaries:
        draw_color_swatch(c, sx, y - 70, sw, 70, color, name, hx, rg)
        sx += sw + 10

    # Neutrals row
    y -= 120
    section_label(c, y, "Neutrals")
    y -= 20
    neutrals = [
        DARK, HexColor("#1e293b"), HexColor("#334155"), TXT2,
        TXTL, HexColor("#cbd5e1"), BORDER, HexColor("#f1f5f9"),
        LIGHTER, HexColor("#f8fafc"),
    ]
    nw = 40
    nx = MARGIN
    for nc in neutrals:
        c.setFillColor(nc)
        c.roundRect(nx, y - 40, nw, 40, 4, fill=1, stroke=0)
        if nc.red > 0.8:
            c.setStrokeColor(BORDER); c.setLineWidth(0.5)
            c.roundRect(nx, y - 40, nw, 40, 4, fill=0, stroke=1)
        c.setFont("Helvetica", 5.5)
        c.setFillColor(TXTL)
        c.drawCentredString(nx + nw/2, y - 52, hex2str(nc))
        nx += nw + 8

    # Semantic colors
    y -= 85
    section_label(c, y, "Semantic Colors")
    y -= 15
    sw2 = (W - 2*MARGIN - 20) / 3
    semantics = [
        ("Success", GREEN, "#10B981"),
        ("Warning", YELLOW, "#F59E0B"),
        ("Error", RED, "#EF4444"),
    ]
    sx = MARGIN
    for name, color, hx in semantics:
        draw_color_swatch(c, sx, y - 55, sw2, 55, color, name, hx)
        sx += sw2 + 10

    # Gradients
    y -= 110
    section_label(c, y, "Gradients")
    y -= 15
    gradients = [
        ("Blue → Purple", BLUE2, PURPLE),
        ("Navy → Accent", NAVY, ACCENT),
        ("Dark → Navy", DARK, NAVY),
    ]
    gx = MARGIN
    gw = (W - 2*MARGIN - 20) / 3
    for name, c1, c2 in gradients:
        # Simulate gradient with bands
        bands = 20
        bw = gw / bands
        for i in range(bands):
            frac = i / bands
            r = c1.red*(1-frac) + c2.red*frac
            g = c1.green*(1-frac) + c2.green*frac
            b = c1.blue*(1-frac) + c2.blue*frac
            c.setFillColorRGB(r, g, b)
            c.rect(gx + i*bw, y - 45, bw + 0.5, 45, fill=1, stroke=0)
        c.roundRect(gx, y - 45, gw, 45, 6, fill=0, stroke=0)
        c.setFont("Helvetica-Bold", 7.5)
        c.setFillColor(TXT)
        c.drawString(gx, y - 58, name)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(TXT2)
        c.drawString(gx, y - 68, f"{hex2str(c1)} \u2192 {hex2str(c2)}")
        gx += gw + 10

    # Dark mode swatches
    y -= 100
    section_label(c, y, "Dark Mode Variant")
    c.setFillColor(DARK)
    c.roundRect(MARGIN, y - 100, W - 2*MARGIN, 90, 8, fill=1, stroke=0)

    dm_colors = [
        ("Background", DARK), ("Surface", HexColor("#1e293b")),
        ("Border", HexColor("#334155")), ("Text", white),
        ("Accent", ACCENT), ("Muted", TXTL),
    ]
    dx = MARGIN + 15
    dy = y - 55
    for name, color in dm_colors:
        c.setFillColor(color)
        c.setStrokeColor(HexColor("#475569"))
        c.setLineWidth(0.5)
        c.roundRect(dx, dy - 20, 24, 24, 4, fill=1, stroke=1)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(HexColor("#94a3b8"))
        c.drawCentredString(dx + 12, dy - 32, name)
        dx += 80

    footer(c, 3)
    c.showPage()


# ============================================================
# PAGE 4 — TYPOGRAPHY
# ============================================================
def page_typography(c):
    section_label(c, H - 55, "Section 03")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Typography")

    c.setFont("Helvetica", 10)
    c.setFillColor(TXT2)
    c.drawString(MARGIN, H - 108, "Primary: Inter  |  Fallback: Helvetica, Arial, sans-serif")

    # Type scale with live samples
    y = H - 150
    samples = [
        ("H1 — 36pt / Black 900", 36, "Helvetica-Bold", "Bisnis Anda Butuh Sistem?", -1.2),
        ("H2 — 24pt / ExtraBold 800", 24, "Helvetica-Bold", "Layanan Kami", -0.8),
        ("H3 — 18pt / ExtraBold 800", 18, "Helvetica-Bold", "Website Development", -0.5),
        ("Body — 14pt / Regular 400", 14, "Helvetica",
         "Kami membangun sistem yang bekerja untuk bisnis Anda,\nbukan sebaliknya. Setiap line of code punya tujuan.", 0),
        ("LABEL — 9pt / Bold 700", 9, "Helvetica-Bold", "PORTFOLIO KAMI", 1.8),
        ("Caption — 7pt / Medium 500", 7, "Helvetica", "Terakhir diperbarui: Juli 2026", 0),
    ]
    for label, size, font, text, ls in samples:
        c.setFont("Helvetica-Bold", 7.5)
        c.setFillColor(ACCENT)
        c.drawString(MARGIN, y, label)
        y -= 4
        c.setFont(font, size)
        c.setFillColor(TXT)
        for line in text.split("\n"):
            c.drawString(MARGIN, y - size, line)
            y -= size + 4
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.3)
        c.line(MARGIN, y - 4, W - MARGIN, y - 4)
        y -= 14

    # Weight showcase
    y -= 10
    section_label(c, y, "Weight Scale")
    y -= 25
    weights = [
        ("Light 300", "Helvetica", 28),
        ("Regular 400", "Helvetica", 28),
        ("Medium 500", "Helvetica", 28),
        ("SemiBold 600", "Helvetica-Bold", 28),
        ("Bold 700", "Helvetica-Bold", 32),
        ("ExtraBold 800", "Helvetica-Bold", 36),
        ("Black 900", "Helvetica-Bold", 40),
    ]
    wx = MARGIN
    for name, font, sz in weights:
        c.setFont(font, sz)
        c.setFillColor(TXT)
        c.drawString(wx, y - sz + 10, "Ag")
        c.setFont("Helvetica", 6)
        c.setFillColor(TXTL)
        c.drawString(wx, y - sz - 4, name)
        wx += 72

    # Letter-spacing examples
    y -= 80
    section_label(c, y, "Letter Spacing")
    y -= 20
    spacings = [
        ("-1.2px (H1)", "Helvetica-Bold", 20),
        ("0px (Body)", "Helvetica", 14),
        ("1.8px (Label)", "Helvetica-Bold", 10),
    ]
    for name, font, sz in spacings:
        c.setFont(font, sz)
        c.setFillColor(TXT)
        c.drawString(MARGIN, y, "Surupan Software House")
        c.setFont("Helvetica", 7)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 250, y + 2, name)
        y -= sz + 10

    footer(c, 4)
    c.showPage()


# ============================================================
# PAGE 5 — VOICE & TONE
# ============================================================
def page_voice(c):
    section_label(c, H - 55, "Section 04")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Voice & Tone")

    # Personality traits
    y = H - 130
    traits = [
        ("Professional", "Kami bicara seperti partner bisnis, bukan vendor. Percaya diri tanpa arogan."),
        ("Approachable", "Teknis tapi tidak kaku. Jargon teknis dijelaskan dengan analogi sederhana."),
        ("Direct", "Langsung ke inti. Tidak bertele-tele. Setiap kalimat punya tujuan."),
        ("Reliable", "Konsisten di semua channel. Janji yang realistis, delivery yang tepat."),
        ("Playful Touch", "Sedikit humor di tempat yang tepat. Emoji dan ikon \u2726 secukupnya."),
    ]
    tw = (W - 2*MARGIN - 20) / 3
    tx = MARGIN
    for i, (name, desc) in enumerate(traits):
        row = i // 3
        col = i % 3
        bx = MARGIN + col * (tw + 10)
        by = y - row * 95
        c.setFillColor(LIGHT_BLUE)
        c.roundRect(bx, by - 70, tw, 80, 6, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(NAVY)
        c.drawString(bx + 12, by, name)
        # Word wrap desc
        c.setFont("Helvetica", 7.5)
        c.setFillColor(TXT2)
        words = desc.split()
        line = ""
        ly = by - 16
        for w in words:
            test = line + " " + w if line else w
            if c.stringWidth(test, "Helvetica", 7.5) < tw - 24:
                line = test
            else:
                c.drawString(bx + 12, ly, line)
                ly -= 12
                line = w
        if line:
            c.drawString(bx + 12, ly, line)

    # Language rules table
    y -= 210
    section_label(c, y, "Language Rules")
    y -= 20
    rules = [
        ("Pronouns", 'Gunakan "kami" untuk brand, "Anda" untuk klien'),
        ("Tense", "Present tense untuk layanan, past tense untuk case study"),
        ("Sentence Length", "Maksimal 20 kata per kalimat untuk readability"),
        ("Technical Terms", "Selalu sertakan penjelasan singkat dalam kurung"),
        ("CTA Style", "Aksi yang jelas: 'Mulai Proyek', 'Hubungi Kami'"),
    ]
    for label, desc in rules:
        c.setFont("Helvetica-Bold", 8.5)
        c.setFillColor(TXT)
        c.drawString(MARGIN, y, label)
        c.setFont("Helvetica", 8.5)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 130, y, desc)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.3)
        c.line(MARGIN, y - 6, W - MARGIN, y - 6)
        y -= 20

    # Words to Use vs Avoid
    y -= 15
    section_label(c, y, "Word Choice")
    y -= 20
    col_w = (W - 2*MARGIN - 20) / 2
    use_words = ["partner", "sistem", "solusi", "efisien", "andal",
                 "terukur", "modern", "terintegrasi", "skalabel"]
    avoid_words = ["murah", "gampang", "simple banget", "codingan",
                   "jasa IT", "bisa lah", "yang penting jadi", "seadanya"]

    c.setFillColor(GREEN_SOFT)
    c.roundRect(MARGIN, y - 140, col_w, 150, 6, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GREEN)
    c.drawString(MARGIN + 12, y + 2, "Words to Use")
    wy = y - 14
    for w in use_words:
        c.setFont("Helvetica", 8.5)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 12, wy, f"\u2713  {w}")
        wy -= 15

    dx = MARGIN + col_w + 20
    c.setFillColor(HexColor("#fef2f2"))
    c.roundRect(dx, y - 140, col_w, 150, 6, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(RED)
    c.drawString(dx + 12, y + 2, "Words to Avoid")
    wy = y - 14
    for w in avoid_words:
        c.setFont("Helvetica", 8.5)
        c.setFillColor(TXT2)
        c.drawString(dx + 12, wy, f"\u2717  {w}")
        wy -= 15

    # Copy patterns
    y -= 170
    section_label(c, y, "Copy Patterns")
    y -= 18
    patterns = [
        ("Homepage CTA:", '"Siap Digitalisasi? Mulai dari Sini."'),
        ("Service Card:", '"Kami bangun [produk] yang [manfaat] untuk [audiens]."'),
        ("About Section:", '"Sejak [tahun], kami bantu [N]+ bisnis go digital."'),
    ]
    for label, example in patterns:
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(TXT)
        c.drawString(MARGIN, y, label)
        c.setFont("Helvetica-Oblique", 8.5)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 100, y, example)
        y -= 16

    footer(c, 5)
    c.showPage()


# ============================================================
# PAGE 6 — COMPONENT PATTERNS
# ============================================================
def page_components(c):
    section_label(c, H - 55, "Section 05")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Component Patterns")

    # Buttons
    y = H - 130
    section_label(c, y, "Buttons")
    y -= 25
    bw, bh = 140, 36
    buttons = [
        ("Primary", NAVY, white, bw),
        ("Accent", ACCENT, white, bw),
        ("Ghost", white, NAVY, bw),
        ("WhatsApp", GREEN, white, bw),
    ]
    bx = MARGIN
    for name, bg, fg, w in buttons:
        c.setFillColor(bg)
        c.setStrokeColor(NAVY if name == "Ghost" else bg)
        c.setLineWidth(1.5 if name == "Ghost" else 0)
        c.roundRect(bx, y - bh, w, bh, 6, fill=1, stroke=1 if name == "Ghost" else 0)
        c.setFillColor(fg if name != "Ghost" else NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(bx + w/2, y - bh + 12, name)
        c.setFont("Helvetica", 7)
        c.setFillColor(TXTL)
        c.drawCentredString(bx + w/2, y - bh - 12, f"{hex2str(bg)}")
        bx += w + 15

    # Cards
    y -= 80
    section_label(c, y, "Card Variants")
    y -= 20
    cw = (W - 2*MARGIN - 30) / 3
    card_types = [
        ("Standard", white, BORDER, "Shadow: 0 2px 8px rgba(0,0,0,0.06)"),
        ("Elevated", white, ACCENT, "Border-left: 3px accent blue"),
        ("Glass", HexColor("#ffffff80"), BORDER, "backdrop-filter: blur(12px)"),
    ]
    cx = MARGIN
    for name, bg, border, spec in card_types:
        c.setFillColor(bg)
        c.setStrokeColor(border)
        c.setLineWidth(1 if name != "Elevated" else 0)
        c.roundRect(cx, y - 80, cw, 90, 8, fill=1, stroke=1 if name != "Elevated" else 0)
        if name == "Elevated":
            c.setFillColor(ACCENT)
            c.rect(cx, y - 80, 3, 90, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(TXT)
        c.drawString(cx + 12, y, name)
        c.setFont("Helvetica", 7.5)
        c.setFillColor(TXT2)
        c.drawString(cx + 12, y - 18, spec)
        # Fake content lines
        c.setStrokeColor(BORDER)
        c.setLineWidth(2)
        c.line(cx + 12, y - 38, cx + cw - 12, y - 38)
        c.line(cx + 12, y - 50, cx + cw - 40, y - 50)
        cx += cw + 15

    # Badges
    y -= 110
    section_label(c, y, "Badges & Tags")
    y -= 20
    badges = [
        ("Web App", LIGHT_BLUE, ACCENT),
        ("Mobile", GREEN_SOFT, GREEN),
        ("AI/ML", HexColor("#fef3c7"), YELLOW),
        ("API", HexColor("#f1f5f9"), TXT2),
    ]
    bx = MARGIN
    for name, bg, fg in badges:
        tw = c.stringWidth(name, "Helvetica-Bold", 8) + 20
        c.setFillColor(bg)
        c.roundRect(bx, y - 18, tw, 22, 11, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(fg)
        c.drawCentredString(bx + tw/2, y - 11, name)
        bx += tw + 12

    # Section label pattern
    y -= 55
    section_label(c, y, "Section Label Pattern")
    y -= 20
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN, y, "FEATURED PROJECTS")
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(MARGIN, y - 4, MARGIN + 30, y - 4)
    c.setFont("Helvetica", 7)
    c.setFillColor(TXTL)
    c.drawString(MARGIN, y - 18, "Accent line: 2px, 30pt wide, positioned 4pt below label baseline")

    # Spacing system
    y -= 55
    section_label(c, y, "Spacing System")
    y -= 15
    spacings = [("4px", 4), ("8px", 8), ("12px", 12), ("16px", 16),
                ("24px", 24), ("32px", 32), ("48px", 48), ("64px", 64)]
    sx = MARGIN
    for name, val in spacings:
        c.setFillColor(LIGHT_BLUE)
        c.rect(sx, y - 20, val, 20, fill=1, stroke=0)
        c.setFont("Helvetica", 6)
        c.setFillColor(TXTL)
        c.drawCentredString(sx + val/2, y - 32, name)
        sx += max(val + 12, 40)

    footer(c, 6)
    c.showPage()


# ============================================================
# PAGE 7 — APPLICATION & CHECKLIST
# ============================================================
def page_application(c):
    section_label(c, H - 55, "Section 06")
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(TXT)
    c.drawString(MARGIN, H - 85, "Application & Checklist")

    # Application contexts
    y = H - 130
    section_label(c, y, "Application Contexts")
    y -= 20
    cw = (W - 2*MARGIN - 20) / 2
    contexts = [
        ("Website", "Primary brand touchpoint. Full palette, all components. Dark/light mode support.", NAVY),
        ("Brochure / Print", "CMYK-safe colors. Minimum logo 24pt. Use Inter for headings, body safe font for print.", ACCENT),
        ("Social Media", "Use brand templates. Avatar: S logomark on navy. Cover: gradient with tagline.", GREEN),
        ("Proposal / Invoice", "Professional header with logo. Accent blue for highlights. Clean typography.", PURPLE),
    ]
    for i, (name, desc, accent) in enumerate(contexts):
        col = i % 2
        row = i // 2
        bx = MARGIN + col * (cw + 20)
        by = y - row * 95
        c.setFillColor(LIGHTER)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.roundRect(bx, by - 75, cw, 85, 6, fill=1, stroke=1)
        c.setFillColor(accent)
        c.rect(bx, by - 75, 4, 85, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(TXT)
        c.drawString(bx + 16, by, name)
        c.setFont("Helvetica", 7.5)
        c.setFillColor(TXT2)
        words = desc.split()
        line = ""
        ly = by - 16
        for w in words:
            test = line + " " + w if line else w
            if c.stringWidth(test, "Helvetica", 7.5) < cw - 28:
                line = test
            else:
                c.drawString(bx + 16, ly, line)
                ly -= 12
                line = w
        if line:
            c.drawString(bx + 16, ly, line)

    # Asset checklist
    y -= 210
    section_label(c, y, "Asset Checklist")
    y -= 18
    checklist = [
        ("Logo SVG (light & dark)", True),
        ("Logo PNG @2x transparent", True),
        ("Favicon 32x32 & 192x192", True),
        ("Brand color palette (CSS vars)", True),
        ("Typography specimens", True),
        ("Social media templates", False),
        ("Email signature template", False),
        ("Presentation template", False),
        ("Print-ready CMYK guide", False),
    ]
    for item, done in checklist:
        mark = "\u2713" if done else "\u2717"
        color = GREEN if done else RED
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(color)
        c.drawString(MARGIN + 5, y, mark)
        c.setFont("Helvetica", 9)
        c.setFillColor(TXT)
        c.drawString(MARGIN + 25, y, item)
        c.setFont("Helvetica", 7.5)
        c.setFillColor(GREEN if done else YELLOW)
        c.drawString(MARGIN + 280, y, "Available" if done else "Needed")
        y -= 16

    # CSS custom properties
    y -= 15
    section_label(c, y, "CSS Custom Properties Reference")
    y -= 15
    c.setFillColor(HexColor("#f8fafc"))
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.roundRect(MARGIN, y - 140, W - 2*MARGIN, 145, 6, fill=1, stroke=1)
    css_lines = [
        ":root {",
        "  --color-primary:    #0A2463;",
        "  --color-accent:     #1E96FC;",
        "  --color-light:      #EEF4FF;",
        "  --color-bg:         #F6F9FF;",
        "  --color-dark:       #0f172a;",
        "  --color-text:       #1e293b;",
        "  --color-text-muted: #475569;",
        "  --color-border:     #e2e8f0;",
        "  --color-success:    #10b981;",
        '  --font-primary:     "Inter", sans-serif;',
        "  --radius:           12px;",
        "}",
    ]
    cy = y - 4
    for line in css_lines:
        c.setFont("Courier", 7.5)
        c.setFillColor(TXT2)
        c.drawString(MARGIN + 12, cy, line)
        cy -= 10.5

    footer(c, 7)
    c.showPage()


# ============================================================
# MAIN
# ============================================================
def main():
    c = Canvas(OUT, pagesize=A4)
    c.setTitle("SSH Brand Guide v1.0")
    c.setAuthor("Surupan Software House")
    page_cover(c)
    page_identity(c)
    page_colors(c)
    page_typography(c)
    page_voice(c)
    page_components(c)
    page_application(c)
    c.save()
    print(f"PDF saved: {OUT}")

if __name__ == "__main__":
    main()
