const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
        args: chromium.args,
    headless: chromium.headless,
  });
  //const tab = await browser.newPage();
  //const text = await (await tab.goto("http://example.com/")).text();
  //console.log(text);
  //console.log("done");
  const page = await browser.newPage();
  await page.goto('https://aplikasi1.kelantan.gov.my/ekeberadaan/');
  

  await page.type('#no_ic','841227035133')
  await page.type('#katalaluan','e-Aduan@2018')
 
  await page.click('button.Submit2'),
  await page.waitForNavigation({ waitUntil: 'networkidle2' })
  
    await Promise.all([
    page.click('button.Submit2'),
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
]);
  
  await browser.close();
}


