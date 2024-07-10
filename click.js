
// clicker
const puppeteer = require('puppeteer');


(async () => {
    const link = "https://cpstest.org/";
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage();
    await page.goto(link);
    await Promise.all([
        page.waitForNavigation(), 
        page.click('#start'),
        new Promise(resolve => setTimeout(resolve, 17000))
    ])
    const firstMatch = await page.$eval('#start', (el)=>{
        return el.innerText;
    })
    
    await browser.close();
})();
