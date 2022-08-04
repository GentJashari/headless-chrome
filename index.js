const puppeteer = require('puppeteer');

(async () => {
    const browserWSEndpoint = 'ws://localhost:9222/devtools/browser/8ca6f70a-3035-4af6-8683-44e997e7a377';
    try {
        let browser = await puppeteer.connect({ browserWSEndpoint, ignoreHTTPSErrors: true });
        // console.log(browser);
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });
        let page = await browser.newPage();
        await page.goto('https://www.facebook.com/');

        await page.screenshot({ path: 'example4.png' });
    } catch (error) {
        console.error(error);
    }
})();