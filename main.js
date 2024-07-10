const puppeteer = require('puppeteer');

(async () => {
    const link = "https://example.com/"
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    
    const page = await browser.newPage();
    await page.goto(link);
  await page.setViewport({ width: 1600, height: 1000, isMobile: false, isLandscape: true, hasTouch: false, deviceScaleFactor: 1 });
    await page.setGeolocation({latitude: 49.5, longitude: 100.0})
    const ur = await page.url()
    const content = await page.content()
    
    await page.screenshot({path: './screens/exampleFull.jpg', fullPage:true})
    await page.screenshot({path: './screens/example1.jpg', clip: {x: 200, y:200, width: 500, height: 500}, encoding: 'binary', type: 'jpeg'})
    // await page.type('selector', 'text')
    // await page.waitForSelector('.someselector')
    await browser.close();
})();