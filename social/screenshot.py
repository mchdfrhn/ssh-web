import asyncio
from playwright.async_api import async_playwright

NAMES = [
    "day-01-hero",
    "day-02-landing-page",
    "day-03-go-digital",
    "day-04-custom-webapp",
    "day-05-portfolio-pusdatin",
    "day-06-portfolio-sipekad",
    "day-07-portfolio-sttpu",
    "day-08-testimonial",
    "day-09-why-us",
    "day-10-cta",
]

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1200, "height": 1200})
        await page.goto("file:///home/mchdfrhn/Project/ssh-web/social/posts.html")
        await page.wait_for_load_state("networkidle")
        # wait for fonts
        await asyncio.sleep(2)

        for i, name in enumerate(NAMES, 1):
            el = page.locator(f"#post-{i}")
            await el.scroll_into_view_if_needed()
            path = f"/home/mchdfrhn/Project/ssh-web/social/{name}.png"
            await el.screenshot(path=path, type="png")
            print(f"Saved: {path}")

        await browser.close()

asyncio.run(main())
