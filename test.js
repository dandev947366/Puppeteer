const puppeteer = require('puppeteer');
const searchTermCLI = process.argv.length >= 3 ? process.argv[2] : 'Volbeat';
const searchTermENV = process.env.SEARCHTXT ?? 'Volbeat';

(async () => {
    const link = "https://github.com/";
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(link);

    await page.waitForSelector('input#query-builder-test');
    await page.type('input#query-builder-test', searchTermCLI, { delay: 1000 });

    await page.emulateVisionDeficiency('blurredVision');
    await page.screenshot({ path: './screens/github-blurred.jpeg' });
    
    await page.emulateVisionDeficiency('none');
    await page.screenshot({ path: './screens/github-home.jpeg' });

    await browser.close();
})();
