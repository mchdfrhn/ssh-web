#!/usr/bin/env python3
"""Screenshot each .post element from posts-v2.html"""
from playwright.sync_api import sync_playwright
import os

POSTS = [
    (1, "day-01-hero"),
    (2, "day-02-landing"),
    (3, "day-03-bundle"),
    (4, "day-04-custom"),
    (5, "day-05-pusdatin"),
    (6, "day-06-sipekad"),
    (7, "day-07-sttpu"),
    (8, "day-08-testimonial"),
    (9, "day-09-whyus"),
    (10, "day-10-cta"),
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "v2")
HTML_PATH = os.path.join(os.path.dirname(__file__), "posts-v2.html")
os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 900})
    page.goto(f"file://{os.path.abspath(HTML_PATH)}")
    page.wait_for_load_state("networkidle")
    # Wait for fonts
    page.wait_for_timeout(2000)

    for num, name in POSTS:
        el = page.locator(f"#post-{num}")
        path = os.path.join(OUT_DIR, f"{name}.png")
        el.screenshot(path=path)
        size = os.path.getsize(path)
        print(f"  {name}.png  {size:>8,} bytes")

    browser.close()
print("Done.")
