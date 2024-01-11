const puppeteer = require('puppeteer-core');
require('dotenv').config()

(async () => {
    const profilePath = process.env.PROFILE_PATH;
    const gameSelector = '.item-container:nth-child(2)';
    const startSelector = '.launch-button';

    console.log('Starting browser');

    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: profilePath,
      executablePath: process.env.CHROME_PATH
    });
    
    const page = await browser.newPage();

    console.log('Opening Geforce NOW.');

    await page.goto('https://play.geforcenow.com/mall/#/layout/games');

    await page
    .locator(gameSelector)
    .hover();

    await page
    .locator(startSelector)
    .setTimeout(0)
    .click();

    await browser.disconnect();
    console.log('Browser disconnected.');
})();